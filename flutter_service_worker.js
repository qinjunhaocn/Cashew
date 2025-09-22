'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"sql-wasm.js": "abe5911756c78d17a8b67a113f4a62b2",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"manifest.json": "e17c18a68703d86977c92327df5c695f",
"icons/Icon-192.png": "8c89eb1ad1ab4ee07f6dac1d777510f5",
"icons/Icon.png": "75d44fd25ab91f562a7dc7d9776d969f",
"icons/Icon-512.png": "d66adad5cfc527b1f6eef6171c3fc3d0",
"main.dart.js": "028386381b80ed60e8d5b4960cde9f61",
"version.json": "79afdcc1a24451214bdca80aa2d5eb01",
"sql-wasm.wasm": "9c67691cdfea004dda62090e49940eac",
"assets/NOTICES": "a9cf3fac20a96d4e5bce5c892ea3032d",
"assets/fonts/MaterialIcons-Regular.otf": "782ff5231199b23f5aa9f818996fdd95",
"assets/AssetManifest.json": "2006603cfd8dca947d84d469a07af0af",
"assets/assets/fonts/DMSans-Bold.ttf": "1af8ec25074feb61fd81bc4d81d857aa",
"assets/assets/fonts/Inconsolata-Regular.ttf": "f491f18124d91cadefcf16269d284648",
"assets/assets/fonts/DMSans-Regular.ttf": "8c79e87613696cae32379ee06b2e16c7",
"assets/assets/fonts/AvenirLTStd-Black.otf": "b1abb878e2529cb5cb4450139844155d",
"assets/assets/fonts/Metropolis-Regular.otf": "f7b5e589f88206b4bd5cb1408c5362e6",
"assets/assets/fonts/RobotoCondensed-Bold.ttf": "0233b881b26ce6cc3884c6944940d11b",
"assets/assets/fonts/Inter-Bold.ttf": "d17c0274915408cee0308d5476df9f45",
"assets/assets/fonts/RobotoCondensed-Regular.ttf": "f1123f4b3d926ac4f72cc8091a4b5d19",
"assets/assets/fonts/Inconsolata-Bold.ttf": "074a4103de5a618baeefd901a09f0093",
"assets/assets/fonts/AvenirLTStd-Roman.otf": "b1d7c6e085a31e9f5e4745c9aef6eb4b",
"assets/assets/fonts/Inter-Regular.ttf": "a4a7379505cd554ea9523594b7c28b2a",
"assets/assets/fonts/Metropolis-Bold.otf": "dea4998b081c6c1133a3b5b08ff2218c",
"assets/assets/static/README.md": "d764b4f6a32fc10322b20736cf34127e",
"assets/assets/static/countries.json": "75e357a7afdbbf1d74da77197c8fea83",
"assets/assets/static/language-names.json": "9bd858da8a9bbaad65794008409d80cf",
"assets/assets/static/generated/currencies.json": "5e0c093bfd26448f0957f560ac2e4d0a",
"assets/assets/static/currenciesInfo.json": "319259f9db803956af346a192fe9dcee",
"assets/assets/static/currencies.json": "0bcfddd749f75564ebc4879ff0f0d4c6",
"assets/assets/static/Convert.py": "2f4d03492800f291d3251a661d7942ec",
"assets/assets/static/currenciesInfo2.json": "ecb8f62a5048fc1dccb78ac7f0f15297",
"assets/assets/landing/Graph.png": "808baf623ab2815fcceccbdd505cfee9",
"assets/assets/landing/PigBank.png": "7c1f9f88875c1dcbc9ddcb2ee869a802",
"assets/assets/landing/BankOrPig.png": "a258dc3aecb7376d0168bf1d4206f736",
"assets/assets/landing/DepressedMan.png": "52dcf95835a2b39ae5d8aeff232166fe",
"assets/assets/categories/padlock.png": "d129190ef6a7962f9eb5866c444dd855",
"assets/assets/categories/tablet.png": "cb092a5cb88e257411e8fa8b540ba93c",
"assets/assets/categories/donut.png": "dfed1c19c44f9a9b5a9c94bb674a77a1",
"assets/assets/categories/car-key.png": "0fe2fb842cab12a57837fc04dc2101ac",
"assets/assets/categories/open-email.png": "cec8f29ef3fae08119e6719c8a414448",
"assets/assets/categories/clothes-hanger.png": "22af598dbdcbf33c792cbffe0a51486d",
"assets/assets/categories/organic-food.png": "2e91477e602b35f71145b1bd60ff2cf7",
"assets/assets/categories/lightning-bolt.png": "2d8535deed1caf76644bd661f521a910",
"assets/assets/categories/feathers.png": "37985ad136d5738746d60a926d540eb8",
"assets/assets/categories/weight.png": "a5c0f69259ffac0497d8c1074d084455",
"assets/assets/categories/ice-cream-cup.png": "216a1c54667a74540c1f4755a949bd2d",
"assets/assets/categories/toiletries.png": "5a4366b732489409e5d0ea3394233d90",
"assets/assets/categories/color-palette.png": "4351a689629db806a8b0db17b48175cd",
"assets/assets/categories/microphone.png": "a84b646cdb71018f8ead811d5a141944",
"assets/assets/categories/bouquet.png": "c897df2d7a40cbe5b1405de6803ee3cf",
"assets/assets/categories/magnifying-glass.png": "3a2138a0c16b25f0a92aff0b2e7d8171",
"assets/assets/categories/snooker.png": "233fadc16e818ba8bdcb1559818b10ee",
"assets/assets/categories/food-tray.png": "cf1a1135a7b3cd6b5efb53e0a93a3e71",
"assets/assets/categories/exchange-arrows-circle.png": "b4abbfb5ea9a65272996b68d097259c1",
"assets/assets/categories/gift-card.png": "0f982076f241aba66f30ab8a50a14076",
"assets/assets/categories/pen.png": "d1a0315d4765b6912b114f14514eb292",
"assets/assets/categories/house(1).png": "74e060b6dc1fa8d76353a4b5611610d6",
"assets/assets/categories/cupcake.png": "bb1c1fc84a6cc89fbe9564deb9364a3d",
"assets/assets/categories/clock.png": "1759f613b9bb8ad33687bf470ff700fe",
"assets/assets/categories/sports.png": "9816ef8db99f0723e91ae231749ed773",
"assets/assets/categories/compass.png": "47452ea95452ca0f6ad86cd0ee6aa35b",
"assets/assets/categories/healthy-food.png": "0665994ce3718b090f47a9a8f6941870",
"assets/assets/categories/3d-printer.png": "d837b7588f4a8ad5217a8fa6e02032f4",
"assets/assets/categories/apple.png": "732cd8fa607999e70160c791deee870a",
"assets/assets/categories/confetti(2).png": "485d60c68aa9a8252c1fdc84554dccd3",
"assets/assets/categories/wallet.png": "6da22a4fce4394e683aec96441838c93",
"assets/assets/categories/bill.png": "2cdb7d246e4986d5fcf878b7750f3490",
"assets/assets/categories/fuel.png": "8d54b372bc398cab7b6e88e0ec3172e2",
"assets/assets/categories/taco.png": "1c5cff43c37d1eeac7ccb3779b2b83dc",
"assets/assets/categories/decrease.png": "41f05efd7739a785033ab2a4d4687719",
"assets/assets/categories/picnic.png": "3fb72e9b3fe20486cd7755f98a76ddab",
"assets/assets/categories/popcorn.png": "d3f5d5015f6c0abfe254023a78d26d45",
"assets/assets/categories/cricket-bat.png": "9071fdd70692b21bc51f7868f5344d94",
"assets/assets/categories/speaker.png": "eb7abb7f9c048fa6e643bea2ede09c35",
"assets/assets/categories/car(2).png": "cf7ea97290615fb2013505659ace5ac7",
"assets/assets/categories/balloons.png": "9b77bfab46ac2709239b2ad1fe40fc0d",
"assets/assets/categories/eggs.png": "6babc942a38eedec24f1ca841805dde8",
"assets/assets/categories/shopping-cart.png": "9ad90617200c7a10d7fa425ed8ca8639",
"assets/assets/categories/internet-globe.png": "e962bf074da9329f9a4ccd6766327328",
"assets/assets/categories/recycling.png": "c4920642ecd59b4560bc1563308b47f9",
"assets/assets/categories/baseball-player.png": "f07f61f9a4684162e47cd3d8460f340b",
"assets/assets/categories/piano.png": "9251a48699da01fc4ddc8eee6a3059f9",
"assets/assets/categories/school-bus.png": "c7e9c40dc6c30bcedb7400d10bc88a08",
"assets/assets/categories/lighthouse.png": "90e62c4ff35b5ca87b9ce177d9e6b3a3",
"assets/assets/categories/cards.png": "69a72a5ccac19e966e856c80a99e5796",
"assets/assets/categories/rent.png": "b04bf21986a97be77a1469e09db1e800",
"assets/assets/categories/motor-bike(2).png": "f2d11232ee82875dab88edd03a93f6d7",
"assets/assets/categories/glass-of-water.png": "e928108de40e06e1abc953cf455bbc91",
"assets/assets/categories/fizzy-drink.png": "904c336988f5be1464079d70e2cd5fd4",
"assets/assets/categories/parents.png": "164bd9c24a22134ee2e86408160b6785",
"assets/assets/categories/guitar.png": "1c1d1943fd916e5a0fd9ffe8c18b0487",
"assets/assets/categories/laptop.png": "c9a0f3a80994e5a8ba1d8b88f452ad37",
"assets/assets/categories/atm-machine(1).png": "174465b8628fa474b5f55ad74e02991d",
"assets/assets/categories/hand-fan.png": "89c3f604eb77d8efbd5a440c8d688a6f",
"assets/assets/categories/safety-helmet.png": "d296f1fc7d89082100d3b63559624c48",
"assets/assets/categories/cabin.png": "f7c3f7b4d8fad188197542b06ec52629",
"assets/assets/categories/coffee-cup.png": "45923623ed0f296ac5ce0bab81f42d41",
"assets/assets/categories/envelope.png": "ac8c4de6c4ecab6a8156230c7a54d589",
"assets/assets/categories/tree.png": "87f9799407dccbb280e6d059be7aea9e",
"assets/assets/categories/groceries.png": "42cb491a8f47a2e0663394ea4e65c2a8",
"assets/assets/categories/shrimp.png": "bffe0f478e7ad2d550b3cd70a3568b54",
"assets/assets/categories/calculator.png": "0747541cf91bcde6a951d74aa721cf10",
"assets/assets/categories/science.png": "ca17a3fb82f6d6fcfd71818f0348dd80",
"assets/assets/categories/car(1).png": "05e0797f5c23333b73d692e2482ee94a",
"assets/assets/categories/milk.png": "3d70b22b8e0dc014c4592a002b1b8777",
"assets/assets/categories/graduation.png": "324747a67b6c4eef9ecdb08c0c15a820",
"assets/assets/categories/bubble-tea.png": "9c7436fc988675ce016903fd4c1ea375",
"assets/assets/categories/pumpkin.png": "617f22473393f8a4e5f48328c0484f10",
"assets/assets/categories/christmas-tree.png": "76cf4f556569e4aae07c0e4025b57482",
"assets/assets/categories/loan.png": "69faf4c6db36302ff359772cbf917625",
"assets/assets/categories/desktop-computer.png": "79a1cbbdf20787ecf36a15e8632f8f27",
"assets/assets/categories/box.png": "6180b0763c1162cedca73fe03b5800a2",
"assets/assets/categories/money.png": "2a0ce366cf4267b5059454653de1b45b",
"assets/assets/categories/tshirt.png": "d28d49990fb1f4f6dadd2ad76be94dcd",
"assets/assets/categories/open-book.png": "0c6b5daa3d1dc842239a3f14bfebb72b",
"assets/assets/categories/sushi.png": "9814e19809ac5edfe797fdea808e1611",
"assets/assets/categories/fried-egg.png": "3687bd9e4eda627c7e060f9b92f2eba2",
"assets/assets/categories/cowboy-hat.png": "be036dad783a10d8dcfddf5d2272c24f",
"assets/assets/categories/umbrella.png": "0f3010407085acda2506af6c760748f4",
"assets/assets/categories/essay.png": "232513121b4a82e3147d78f6cdb86836",
"assets/assets/categories/yarn-ball.png": "5d8f07d029b2b5f3511e719aad29d2d3",
"assets/assets/categories/cat.png": "77fe6aa5f74ea30a9cc19faca6be3af8",
"assets/assets/categories/money-bag2.png": "e58411eca02bf4974771b3bfbced4369",
"assets/assets/categories/security-box.png": "77fc0296d87287ba2034083a853dd465",
"assets/assets/categories/sneakers.png": "c6720a6ee22889c99140cd02df7d20a7",
"assets/assets/categories/plant.png": "1f0b70bfe6df6033d385c4d1e8b6569e",
"assets/assets/categories/butterfly.png": "08556a9f7f9ab2d06a47f35965094c4f",
"assets/assets/categories/top-hat.png": "eefa280ac72ab10671f143c7b7b00c93",
"assets/assets/categories/increase.png": "10b08aa8e5267cd5b7ab863e7e3dad07",
"assets/assets/categories/bottles.png": "13d48a71142858dee5a0eb44b66397b1",
"assets/assets/categories/wifi.png": "c42782634463e6e55db40fd251d13389",
"assets/assets/categories/kite.png": "1d367f74302316c72d71e4ad1d97bded",
"assets/assets/categories/dvd.png": "5a842eab4ae80f800f0a8335807acc71",
"assets/assets/categories/curry.png": "d20efa0dd8cdeba4945bbab6950d056a",
"assets/assets/categories/taxi(2).png": "2fac257f0bbb849a3d9d29016d260c1a",
"assets/assets/categories/bank.png": "9cfefdb0f35f409d6aa8d32d81cdf825",
"assets/assets/categories/spaghetti.png": "f4d298b05c5572ba09c61b2c3f8b39b1",
"assets/assets/categories/package.png": "613670b56d64d523ce02aad2f73fb78f",
"assets/assets/categories/celebration.png": "d5da6dd2dc20e2868ed91edcf6d8ff1c",
"assets/assets/categories/crypto.png": "36d6db7fe379107a4605fe209f5d6ed6",
"assets/assets/categories/earth.png": "4980d1dc73e03500da89a39f69450272",
"assets/assets/categories/tram.png": "641109fde4254da5f00ce76bace3cf5f",
"assets/assets/categories/trophy.png": "d3c32552c19f00ba46c2e663b55e32b0",
"assets/assets/categories/bookshelf.png": "6e6272bdebb79439c78751cfedb99686",
"assets/assets/categories/target.png": "43231f1f97b95c8b8cb6d50f089b9a42",
"assets/assets/categories/tie.png": "196599b6a3b94b2160e9473effc66d1f",
"assets/assets/categories/campfire.png": "70175fbfde8c88f65c499d06fe288ef0",
"assets/assets/categories/orange-juice.png": "5c10f3eaaba9a98c8c325fd4fdf315ca",
"assets/assets/categories/sim-card.png": "3641871673f229c6079ce7d0b03a6e7e",
"assets/assets/categories/fried-potatoes.png": "dac2ea180ec66579f741fc5cc43aaaa6",
"assets/assets/categories/rainbow.png": "84f0587a6a2f6d3a3058aa31edd78be4",
"assets/assets/categories/hiking-backpack.png": "5fe59d4bd223206ed5d09fd638489ae3",
"assets/assets/categories/make-up.png": "68cbf92eaf4a45abf12bef106590a228",
"assets/assets/categories/theatre.png": "bec2589db5abcd058badac6ad75b8b22",
"assets/assets/categories/robot.png": "712665bce215d8dcfe68d7ee110b5faa",
"assets/assets/categories/cloudy.png": "8c9cd4620150ea39377455da77ef7cef",
"assets/assets/categories/fireplace.png": "24968539581f44b46b92f4ee5664c3e1",
"assets/assets/categories/fast-food.png": "9cd840244443dfa1599aa48061736d9f",
"assets/assets/categories/furniture.png": "35b3e020023737ecf479146790615377",
"assets/assets/categories/washing-machine.png": "347bc281f786c91df2b7262ec89fe5e1",
"assets/assets/categories/confetti.png": "da0904fb13089af7d97eb1058ccd0151",
"assets/assets/categories/camera.png": "f4b94b65863f1b5ac1d44428186d4a8d",
"assets/assets/categories/credit-card.png": "b2e027fca515927f510b49b4b21a75e5",
"assets/assets/categories/dress.png": "bf82d3fbbecdefca4e83cf960322a1c0",
"assets/assets/categories/vision.png": "5fbb1e74eb0955ef66a558393c8bf7d2",
"assets/assets/categories/motor-bike(1).png": "fe2c81602e339a8442efae904d90e462",
"assets/assets/categories/music.png": "a37504617c7138594a183be8b2838162",
"assets/assets/categories/trash.png": "1583cb1ae783b5bcb4fa0ad807eab6a9",
"assets/assets/categories/garden-hose.png": "50f804f36e269438fb64036a189dfd0a",
"assets/assets/categories/glass.png": "e53e697eb877f7a9663007516ec2ed32",
"assets/assets/categories/parking.png": "c35b3ba34a3c1f278a5636f8103ed629",
"assets/assets/categories/fish.png": "ac636aab985da6e9608bac06978e9c98",
"assets/assets/categories/school-backpack.png": "352a59ce6573a0464f1ef3e310d93f08",
"assets/assets/categories/smartphone.png": "7617128d8377bce3858d6e22fc7bce50",
"assets/assets/categories/reload.png": "61801030a51308ac9c122ce758523c39",
"assets/assets/categories/skincare.png": "0d4930fcf26345ee9f71470a4c8d0cb4",
"assets/assets/categories/makeup(1).png": "41cb6b073a8dfc5ab2f08c06d18060ae",
"assets/assets/categories/birdhouse.png": "0e145dcd69b4ccaddc8d7744fe5d9ed6",
"assets/assets/categories/double-bed.png": "fa4b8254be791cdc864e66b8a2a11215",
"assets/assets/categories/beach-umbrella.png": "5a86e90ac43031e8b19a9c77a16c958c",
"assets/assets/categories/candy.png": "1bee21ae0a06e4416aff08c7205b4ac2",
"assets/assets/categories/golf-ball.png": "84f75d41c65ce3fbbf9842f49d7f61b1",
"assets/assets/categories/hockey-stick.png": "39f8299079a3f5d5de671a78de6e3bab",
"assets/assets/categories/bowling.png": "c1e67da705275df6af02f32a599d1898",
"assets/assets/categories/locomotive.png": "bb202b2fba5c262c3d3b042378d1d4aa",
"assets/assets/categories/cutlery.png": "bd34daa4f6d0b31b7bec840ea4d78781",
"assets/assets/categories/dice.png": "abc5d9f07f19c0f12e93183eb51c901d",
"assets/assets/categories/makeup.png": "c7ccdb925c42652787f903a73cd6f32c",
"assets/assets/categories/battery-charge.png": "2f11fe98ca05a8aafaf693016dc0f5fb",
"assets/assets/categories/location-pin.png": "0aa0e7d41fb99de71d70505d0d913e0c",
"assets/assets/categories/gift.png": "3a793c04d5a9cec188e647580325fe71",
"assets/assets/categories/checker-chess-board.png": "1310daf4ff94d234012b2cb83bfca776",
"assets/assets/categories/tea.png": "9e824b1686d85687d3b2cfd1de967d8e",
"assets/assets/categories/flower.png": "5948bbaa8ba67488796f5cf7a4f9e926",
"assets/assets/categories/favourite.png": "63e89a21abf507ee3a698990deb9f11e",
"assets/assets/categories/heart.png": "7d9124eeb6332e194cedb403821678c5",
"assets/assets/categories/mixer.png": "c19c3872a946c76fcaf1a9ec1b2eed36",
"assets/assets/categories/antivirus.png": "cd253b4263dd523d9da37043174473c8",
"assets/assets/categories/settings.png": "de1e09de961c8389a3e15d1ee162040c",
"assets/assets/categories/gas-valve.png": "dd155abe080909f01a95b66bd75d1952",
"assets/assets/categories/pet-bowl.png": "479a082d6f9282e2d0037f2d1cf3eaa8",
"assets/assets/categories/atm-machine(2).png": "7921b7d186f915c39b5b55c7bec43610",
"assets/assets/categories/cottage.png": "0083ae5448c20f61e46287ccfec60d07",
"assets/assets/categories/coconut-tree.png": "f90fbd74c2ae0ae22e820a1ee4fe209e",
"assets/assets/categories/map.png": "d95da43316d71b280b19f66a1cd38607",
"assets/assets/categories/sticky-notes.png": "e524bceba6e6a4e5b309945b36425134",
"assets/assets/categories/television.png": "099e1056aaf1a13668cb40d3cb38a379",
"assets/assets/categories/sandals.png": "b59a015b4a08345dbb7f7a76b26e7f9c",
"assets/assets/categories/salad.png": "f2622daab85992a684c5c0c5add52624",
"assets/assets/categories/cash-bill-dollar.png": "365a74eb8e7533044f7c68ea5f65d052",
"assets/assets/categories/pencil.png": "84ef57edf21bea196f1cc9a32163f331",
"assets/assets/categories/dollar-coin.png": "edc0f1d15539cac53f94fb537a409884",
"assets/assets/categories/shopping.png": "2c97126f800aeb2838d8e6a112597f09",
"assets/assets/categories/hamster.png": "35172615668d558ecea7b496c0176e38",
"assets/assets/categories/chef-hat.png": "7b31990b069347e96d2c5f800af2cebc",
"assets/assets/categories/cactus.png": "c0a3cb68c3c7671cf822969c6c8ffe86",
"assets/assets/categories/sandwich.png": "8981957f7efbad5a7582bfe3ca07acb7",
"assets/assets/categories/dental-care.png": "f8d7343a7d51c9414af2050bfe7a91ff",
"assets/assets/categories/headphones.png": "750058b1c69a6ccbe1054f8d7b1a272a",
"assets/assets/categories/gears.png": "87b52aaef81be66b43a16345dd9dd1ee",
"assets/assets/categories/paper-ticket.png": "7a39a30e0329105807d63c42ad78c817",
"assets/assets/categories/rain.png": "0c1227c878a7a43f3373c7fddd4d6fd3",
"assets/assets/categories/tickets.png": "fbc343022a00a1b4ef50bcf1c789912b",
"assets/assets/categories/note.png": "73dc58bff46614b88aedd2d772b9dfa3",
"assets/assets/categories/cake.png": "f352fb335cd1353bc1cc6e42d1096818",
"assets/assets/categories/sauces.png": "a74c0a7509919f80b90b49e7513e09c0",
"assets/assets/categories/bicycle.png": "7f67bd34058bafbed416e8c4d954916a",
"assets/assets/categories/helicopter.png": "d3866682cd6a2687d770f01bb361825f",
"assets/assets/categories/safe-box.png": "e7a6fffbe4885767033e625a5422566b",
"assets/assets/categories/oldschool-telephone.png": "7567ba48325f23b3810396055311ff0b",
"assets/assets/categories/cap.png": "78cacf6ad75f79f67fdfffe375ed346f",
"assets/assets/categories/back-undo-arrow.png": "9ba92c3b71b4a2e98792ba5c6c85692c",
"assets/assets/categories/binoculars.png": "e16e176c5cbdde8a307fbef474d5a52d",
"assets/assets/categories/car-charging-station.png": "7e76e6ac5c8e6e4d477754f911ca839d",
"assets/assets/categories/keyboard.png": "202c86966f3fc95d9c50c7f67f97696b",
"assets/assets/categories/image.png": "e474a59b2af7ed9f02bee9a6d96f948f",
"assets/assets/categories/winter-hat.png": "6d8c4cb3a19671d8b0baf7310d08ee0a",
"assets/assets/categories/necklace.png": "ed08558e319086431777207535ea0301",
"assets/assets/categories/paper-bill.png": "c7e21da78537a6bc0b1aad41ff22b4bd",
"assets/assets/categories/anchor.png": "32386989b82633c66a7564428dc3fbdd",
"assets/assets/categories/dog.png": "70e57a5e83a526d433dbbe16bc4a9ac6",
"assets/assets/categories/flashlight.png": "85c4b834e1872fe45459ed0cda2f655d",
"assets/assets/categories/delivery-truck.png": "52a62e2367db834aa83fde57eebdcc7d",
"assets/assets/categories/hoodie.png": "341ca1ff6996ee2d4055472c3072c366",
"assets/assets/categories/folder.png": "d97cc101caf3441778b48999a80129cd",
"assets/assets/categories/cleaning.png": "a81a07e7d04b4a2fa59ee58d33dfa400",
"assets/assets/categories/subscription.png": "3425513ad5745856ed0332f5f473984c",
"assets/assets/categories/investment.png": "8c4f2b4965992a5d91a305031e0dd9bc",
"assets/assets/categories/haircut.png": "89d7a654a2d7e24bfa82a35bb283d573",
"assets/assets/categories/telescope.png": "9a23013cd023e5552f913df11e5bd64f",
"assets/assets/categories/grill.png": "59c0b540cdc68ba361d39b091f4177e7",
"assets/assets/categories/gas-station.png": "dbe5e58e00875e61354fd17e6b55265f",
"assets/assets/categories/water-tap.png": "b1139cb4d574fb4bc25c72313de9684a",
"assets/assets/categories/bread.png": "66d473215a00512280590f0dfd3f5ed2",
"assets/assets/categories/user.png": "f6e7bea325bb8869b2f7d3dcda89b641",
"assets/assets/categories/high-heels.png": "4678628564dfb554829a0454a86ecd11",
"assets/assets/categories/multivitamin.png": "8e18268f0aafb59b11039506d4d79b24",
"assets/assets/categories/house.png": "ff99397724b3ecb63a082d23117a1584",
"assets/assets/categories/hearing-aid.png": "c01fb150a95e2b5a5f3b3f9ff2ed56b7",
"assets/assets/categories/idea.png": "501ca00b34519cbf97bc9ca5bb0f2267",
"assets/assets/categories/socket.png": "4bd21d8b797afa72c8af630056b82b55",
"assets/assets/categories/snowman.png": "127236932522919f65f96a2e20f83543",
"assets/assets/categories/emergency-exit.png": "44d5036e6e30b43fde25cc77ce3e335d",
"assets/assets/categories/church.png": "f0906e175f0b6a35365ab526f227f3d9",
"assets/assets/categories/fruit.png": "6edab69e19e2b04ddd26014b61413e00",
"assets/assets/categories/car.png": "d807b70d19e9b968b00134cb89e20914",
"assets/assets/categories/limousine.png": "786c023ed6245c04bbb59cb6326f3dfa",
"assets/assets/categories/healthcare-and-medical.png": "0a2fd72b1a5b9ac250180fd5890834bf",
"assets/assets/categories/magic-box.png": "d7020c7ecd2fe55225501bbeb41434cb",
"assets/assets/categories/calendar.png": "64b559479284822bd9723da710cfd3e8",
"assets/assets/categories/price-tag.png": "9118a1e3ce47f1b12f356a69c5ccd871",
"assets/assets/categories/taxi(1).png": "f396fd6bb977d6b5fa604e2051c5b391",
"assets/assets/categories/key.png": "052d25eacccf1408a89c65388536a000",
"assets/assets/categories/gasoline.png": "7f7bb3023ce80d1f5a6ee968d8aa3a06",
"assets/assets/categories/code.png": "e84dc07db33794a65db96156586a3db4",
"assets/assets/categories/coffee.png": "d1d14c71a844727754ab25dd712d7ccd",
"assets/assets/categories/raw-meat.png": "0d70b24bfdfa30c6801f7f3f53364eed",
"assets/assets/categories/watch.png": "c3b276d5bd8f1fb1fb251c3162cdea69",
"assets/assets/categories/charts.png": "9650183327f91c4546dcb763a27ae134",
"assets/assets/categories/water-bottle.png": "54d6a1aeee35f335da20328d9d4b15b1",
"assets/assets/categories/home2.png": "86934d91db36d9c9d177868bbef8c0fa",
"assets/assets/categories/snorkling.png": "60fa326d6b32bbcb4e4b13edffaacec7",
"assets/assets/categories/cookies.png": "7bf1479a558c45a68329c8f5a4b7c270",
"assets/assets/categories/barber.png": "0863c0c9b0bcb0240b8b3f53aa14a64d",
"assets/assets/categories/pizza.png": "2fe60755e450bbd3c9909eb7e06b85d6",
"assets/assets/categories/ball.png": "5e2bbf5517ac7b17cb91044dea1bfdfe",
"assets/assets/categories/plane.png": "9e5cb8f839ecc2c665383dd1224fd0d2",
"assets/assets/categories/gamepad.png": "64662fa05c842be13b1b278cfd29b9b6",
"assets/assets/categories/money-bag.png": "71652e5f3d517572c6aa8e2991ef6273",
"assets/assets/categories/teddy-bear.png": "5ef73ec27590e3fac16f6688116b2a6f",
"assets/assets/categories/coin.png": "976ba6e5ae4ee23226c7f37efd2ae82b",
"assets/assets/categories/air-hockey.png": "b1491566b3f63e0118f4fdac24d0f619",
"assets/assets/categories/watering-can.png": "621beeda83318fb854bf83208835e39f",
"assets/assets/categories/exchange-arrows.png": "1d228e87166f3fb08af373833fc444bf",
"assets/assets/categories/extinguisher.png": "3ef9a444b73dc0e3eab02bbef34efcb5",
"assets/assets/categories/clipboard.png": "279d674964bc9ca986b0a8abde6885a5",
"assets/assets/categories/popsicle.png": "9d4ad1292441364e54ba9591efda2472",
"assets/assets/categories/construction-helmet.png": "0be2c0b36fca292ea0b6e4c2b0f9d0d7",
"assets/assets/categories/radio.png": "4f2bb975b1aa67acb4c30a36bccf1837",
"assets/assets/categories/golf.png": "53f650f1b5adde05a16ca0685da6a6cb",
"assets/assets/categories/fishing-rod.png": "0f53b6f1f114aa7d779558d4b1bbdaa1",
"assets/assets/categories/noodles.png": "175564751b04b1ad2438b4c67fc95a98",
"assets/assets/categories/face-mask.png": "b5c8bbc3f9b7026bc8904f998398c529",
"assets/assets/categories/portable-game-console.png": "443e09f7bb69dd55e15cb24ce694e26b",
"assets/assets/categories/bills.png": "e67fd5aa84a087e5f2d8758eab949f6e",
"assets/assets/categories/diamond.png": "0bd1ed739b90e0cb6e87886552a9c47e",
"assets/assets/categories/media-content.png": "ecbadf4c8ecdb07cd5bf92a55a1f8103",
"assets/assets/categories/chess.png": "09f19544ac7e07d19d69972e1fde4668",
"assets/assets/categories/flat-tire.png": "0ce1393dcb05fe48d0a9a05614ddc01e",
"assets/assets/categories/piggy-bank.png": "372066270abb8678cc26554bf18824f9",
"assets/assets/categories/briefcase.png": "b26d3388715dd0fdb9c03d13f69b88a5",
"assets/assets/categories/feeding-bottle.png": "307015f64300e0d19e8d581d7f5ea00b",
"assets/assets/icons/fun/santa-hat.png": "a1417cd8793c662c5186865a75b6c845",
"assets/assets/icons/fun/party-hat.png": "ff5724923aa19b73b4e074ddef389b05",
"assets/assets/icons/Icons.ttf": "a106a117b3612c69f51b0f620f9b36c1",
"assets/assets/translations/generated/zh-Hant.json": "547794a40dc55a675b6442d36f5f3ad5",
"assets/assets/translations/generated/fr.json": "6e588fd76fa87309e524fecf5db0286f",
"assets/assets/translations/generated/id.json": "e6058f267ae985df431209c454c91075",
"assets/assets/translations/generated/th.json": "ce63721c032c978019c40ff81f925659",
"assets/assets/translations/generated/el.json": "557afd40a37d84c2813d967436061b50",
"assets/assets/translations/generated/mr.json": "4074d0a057e074c9e4979e7b9fbe81da",
"assets/assets/translations/generated/ro.json": "2c98a2a034d49eb13f396ae2374545fc",
"assets/assets/translations/generated/zh.json": "82c85459101d9ad92527476b09f73005",
"assets/assets/translations/generated/kxd.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/generated/pt.json": "0beba72f0de108719d797cb96a006665",
"assets/assets/translations/generated/tr.json": "02249481c69467eeaf12a5b827c535b0",
"assets/assets/translations/generated/he.json": "44518590988d79407cbacdce941d36d5",
"assets/assets/translations/generated/sr.json": "8a44e3f318222c7e353c87eacafa941b",
"assets/assets/translations/generated/bn.json": "eff0b57e4762146d4caced44d87c7ae5",
"assets/assets/translations/generated/vi.json": "ae1047db8f1cbf60ccd56a43831cbf16",
"assets/assets/translations/generated/sw.json": "a0defd8d52a9b4ce8f9bf9e421cc85aa",
"assets/assets/translations/generated/uk.json": "e46cc0a5561aa83231f3b95b0b135d2b",
"assets/assets/translations/generated/si.json": "710404736c979e83f849034081021fda",
"assets/assets/translations/generated/ar.json": "2ac0243df3f0ebdf128dae089a623155",
"assets/assets/translations/generated/gu.json": "8b4eac40612c918f9748f3b84d9113aa",
"assets/assets/translations/generated/te.json": "30492d0e5c7b21f9b63ed48f2281808f",
"assets/assets/translations/generated/ja.json": "78a8468e78fc19f427b6e033c28fdc3c",
"assets/assets/translations/generated/en.json": "a390ace81943d2384142dff346666484",
"assets/assets/translations/generated/ml.json": "251c560ba10ffaf7e7eb6001853cc7e0",
"assets/assets/translations/generated/pl.json": "1efc4922864a8c427175318c2ff73c20",
"assets/assets/translations/generated/de.json": "885e508d3aefd4608a9e7cab9a90f7bf",
"assets/assets/translations/generated/sv.json": "bf155c6658590c04dd9a118749504369",
"assets/assets/translations/generated/pt-PT.json": "a828ba18840d25be10e9e30889152d6d",
"assets/assets/translations/generated/cs.json": "9158d7be493990ae7fe8bf4a7aeb1c4c",
"assets/assets/translations/generated/ta.json": "1a4a8410d890ca3aa0278de17727b5b7",
"assets/assets/translations/generated/hi.json": "971352688e3fdbed25c9fd9cfff83d68",
"assets/assets/translations/generated/sk.json": "c2c7b4a3f8147b73a0f24f0ef6826525",
"assets/assets/translations/generated/nl.json": "6cc8826a1203a45ae46021a1b6bf99b3",
"assets/assets/translations/generated/ru.json": "0ab35436f7df60b58b9243d6846f8674",
"assets/assets/translations/generated/bg.json": "83bdfddb1255823476eaa4cc3f5e7f47",
"assets/assets/translations/generated/ko.json": "c275be68b408896ac38525fff84c58a6",
"assets/assets/translations/generated/es.json": "1fab905d295d99d4e092e1f860e9cf02",
"assets/assets/translations/generated/fil.json": "ce895fa0ea68dfa17f3a3c03cd5f1c8c",
"assets/assets/translations/generated/ur.json": "f255f88ec0ba3715f87bde6a0e492d80",
"assets/assets/translations/generated/af.json": "910d512f7a43981d80d2a53526c8e0f6",
"assets/assets/translations/generated/no.json": "5c148bd0a1f3eddcb5320a5e0c2d3d6c",
"assets/assets/translations/generated/none.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/generated/mk.json": "876aa8361173132272a1bacc6dc58e9f",
"assets/assets/translations/generated/fa.json": "5a8ac661fb1bb006241d1ceef2cb015c",
"assets/assets/translations/generated/ms.json": "78c89aad0948b37ed2e271eb40c2b6ea",
"assets/assets/translations/generated/hu.json": "e0fbd70f918b83e5aa2862a5af59a374",
"assets/assets/translations/generated/it.json": "5fffb76abee8916b367e60734941f8ca",
"assets/assets/translations/generated/da.json": "f4b0d30f918abb9ea9439d113d89cbfb",
"assets/assets/translations/generated/fi.json": "9ed8d524436231a055bde2601617b47e",
"assets/assets/icon/icon.png": "75d44fd25ab91f562a7dc7d9776d969f",
"assets/assets/icon/icon-small.png": "269ddde712fb1e44b3ab64f6a5f4a178",
"assets/assets/icon/notification_icon_android.png": "81abb55e3520cccfab7618e6e9a22421",
"assets/assets/icon/notification_icon_android2.png": "7a27bfcaffeb4242491bca3048c5661e",
"assets/assets/images/empty-old-filter.png": "4be58a54764734718cc4f064130f8407",
"assets/assets/images/empty.png": "6ae6cfdb585fa82580cb85cf6fb07bb6",
"assets/assets/images/empty-old.png": "b01ca56d82420a8999b611a6c28011eb",
"assets/assets/images/no-search.png": "231bc87d95904ab575071093ee3f9ad3",
"assets/assets/images/empty-filter.png": "397b190afb75cde06c6f8e2c0cb3600c",
"assets/assets/images/no-search-filter.png": "b765f47deec415920fcf2e268931d54a",
"assets/FontManifest.json": "c343ff5ee5e81876d3dff2f710148d8b",
"assets/AssetManifest.bin.json": "de5ea363c8569304a82eac2b0304821c",
"assets/AssetManifest.bin": "191eed73fed980df8ad6bfd7bd47c701",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "0f5059ef13f0db3d71a994245a2b932d",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "1cb031b8b4e48e7a0ec678d60d4252fb",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "07a78548a7293e37d61e98ec96d6a94b",
"favicon.ico": "7bef7546dc27ebab960506ad5ebb5f61",
"worker.sql-wasm.js": "4005701fc5e429b58ee5fea627c48449",
"favicon.png": "a72f58c5862cb8766d03ef15a36c8bf6",
"index.html": "e60c0dbfe5595302c3032be1dad121a3",
"/": "e60c0dbfe5595302c3032be1dad121a3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
