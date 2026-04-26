import 'dart:io';
import 'dart:typed_data';
import 'package:budget/database/tables.dart';
import 'package:budget/struct/settings.dart';
import 'package:minio_new/minio.dart';
import 'package:path/path.dart' as p;
import 'package:budget/functions.dart';
import 'package:easy_localization/easy_localization.dart';

class CloudFlareR2Client {
  static Minio? _minio;

  static Minio get client {
    if (_minio == null) {
      final endpoint = appStateSettings["cloudFlareR2Endpoint"];
      final accessKey = appStateSettings["cloudFlareR2AccessKey"];
      final secretKey = appStateSettings["cloudFlareR2SecretKey"];
      final region = appStateSettings["cloudFlareR2Region"] ?? "auto";

      // Parse endpoint to get useSSL and port
      Uri uri = Uri.parse(endpoint.startsWith('http') ? endpoint : 'https://$endpoint');
      
      _minio = Minio(
        endPoint: uri.host,
        accessKey: accessKey,
        secretKey: secretKey,
        region: region,
        useSSL: uri.scheme == 'https',
        port: uri.port != 0 ? uri.port : (uri.scheme == 'https' ? 443 : 80),
      );
    }
    return _minio!;
  }

  static void resetClient() {
    _minio = null;
  }

  static Future<bool> testConnection() async {
    try {
      final bucket = appStateSettings["cloudFlareR2Bucket"];
      final exists = await client.bucketExists(bucket);
      return exists;
    } catch (e) {
      print("R2 Connection Test Error: $e");
      return false;
    }
  }

  static Future<void> uploadBackup(context, {bool silent = false}) async {
    try {
      if (!silent) {
        loadingIndeterminateKey.currentState?.setVisibility(true);
      }

      await backupSettings();
      DBFileInfo currentDBFileInfo = await getCurrentDBFileInfo();
      final bucket = appStateSettings["cloudFlareR2Bucket"];
      final timestamp = DateFormat("yyyy-MM-dd-HHmmss").format(DateTime.now().toUtc());
      final fileName = "db-v$schemaVersionGlobal-${getCurrentDeviceName()}-$timestamp.sqlite";

      await client.putObject(
        bucket,
        fileName,
        Stream.value(currentDBFileInfo.dbFileBytes),
        size: currentDBFileInfo.dbFileBytes.length,
      );

      await updateSettings("lastBackup", DateTime.now().toString(),
          pagesNeedingRefresh: [], updateGlobalState: false);

      if (!silent) {
        loadingIndeterminateKey.currentState?.setVisibility(false);
        openSnackbar(
          SnackbarMessage(
            title: "backup-created".tr(),
            description: fileName,
            icon: appStateSettings["outlinedIcons"]
                ? Icons.backup_outlined
                : Icons.backup_rounded,
          ),
        );
      }
    } catch (e) {
      if (!silent) {
        loadingIndeterminateKey.currentState?.setVisibility(false);
        openSnackbar(
          SnackbarMessage(
            title: "R2 Upload Error",
            description: e.toString(),
            icon: Icons.error_rounded,
          ),
        );
      }
      rethrow;
    }
  }

  static Future<void> deleteOldBackups(int amountToKeep) async {
    try {
      final bucket = appStateSettings["cloudFlareR2Bucket"];
      final backups = await getBackups();
      if (backups.length > amountToKeep) {
        // Sort by last modified date, oldest first
        backups.sort((a, b) => (a.lastModified ?? DateTime.now())
            .compareTo(b.lastModified ?? DateTime.now()));

        int toDelete = backups.length - amountToKeep;
        for (int i = 0; i < toDelete; i++) {
          if (backups[i].key != null) {
            await client.removeObject(bucket, backups[i].key!);
          }
        }
      }
    } catch (e) {
      print("Error deleting old R2 backups: $e");
    }
  }

  static Future<List<ResultObject>> getBackups() async {
    try {
      final bucket = appStateSettings["cloudFlareR2Bucket"];
      List<ResultObject> objects = [];
      final stream = client.listObjects(bucket);
      await for (var obj in stream) {
        objects.addAll(obj.objects);
      }
      // Sort by last modified descending
      objects.sort((a, b) => (b.lastModified ?? DateTime(0)).compareTo(a.lastModified ?? DateTime(0)));
      return objects;
    } catch (e) {
      print("R2 Get Backups Error: $e");
      return [];
    }
  }

  static Future<void> downloadBackup(BuildContext context, String fileName) async {
    try {
      openLoadingPopup(context);
      final bucket = appStateSettings["cloudFlareR2Bucket"];
      
      List<int> dataStore = [];
      final stream = await client.getObject(bucket, fileName);
      await for (var data in stream) {
        dataStore.addAll(data);
      }

      await overwriteDefaultDB(Uint8List.fromList(dataStore));
      
      popRoute(context); // Close loading popup
      await resetLanguageToSystem(context);
      await updateSettings("databaseJustImported", true,
          pagesNeedingRefresh: [], updateGlobalState: false);
      
      openSnackbar(
        SnackbarMessage(
          title: "backup-restored".tr(),
          icon: appStateSettings["outlinedIcons"]
              ? Icons.settings_backup_restore_outlined
              : Icons.settings_backup_restore_rounded,
        ),
      );
      
      popRoute(context); // Close backup management bottom sheet
      
      restartAppPopup(
        context,
        description: kIsWeb
            ? "refresh-required-to-load-backup".tr()
            : "restart-required-to-load-backup".tr(),
      );
    } catch (e) {
      popRoute(context);
      openSnackbar(
        SnackbarMessage(
          title: "R2 Download Error",
          description: e.toString(),
          icon: Icons.error_rounded,
        ),
      );
    }
  }

  static Future<void> deleteBackup(String fileName) async {
    try {
      final bucket = appStateSettings["cloudFlareR2Bucket"];
      await client.removeObject(bucket, fileName);
    } catch (e) {
      print("R2 Delete Error: $e");
      rethrow;
    }
  }
}
