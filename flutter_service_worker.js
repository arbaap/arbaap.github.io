'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0bdc98bee97a5333aa51f285ffd13e34",
".git/config": "477b4b50f5d0c87df2bc76ef621b3120",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4c79dc04439ba74f2cde8b7bc26d8083",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9de3c1bd3263b7a3b0de8eb95feec9b1",
".git/logs/refs/heads/main": "8671c71ae06eca068c0576ececbe93c0",
".git/logs/refs/remotes/origin/main": "57a561701b87394de7b7fe3d1ce95c87",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/c26be5d94713623c692a1de8b492e536a4e02c": "465f735c65f8539e642fbfa50b9ff9f4",
".git/objects/0c/1cd8d4518fb508d3c5729c63513381b3fd84e0": "ffb26f031baecbed0d6d4dcd2624dc6d",
".git/objects/11/01a70f51a91c02ab21b2ebddd4d1defc722f27": "ab8d8c070fcf85d674866f7e945fe3a6",
".git/objects/11/e006f0a3d80c800a01210e96abaa4ffded3fbb": "f8d885ddc194e78f3483fbe61cf01f71",
".git/objects/14/a049e9264ccefd1df0196b2471bc380d22c45f": "0c8dd4fd52ee258b3924f62d711c155e",
".git/objects/19/55a5a4c30595a49b8ae7f7a7d54adcec8ef554": "183f72c78ad4c5f0cba142c4a50fd60b",
".git/objects/1a/8de436e2308360d550193f0c6cd109a08f2c1a": "bfc97f12a8c4732180a05d4f8df51491",
".git/objects/1c/8482b1d57ff53254f9f6ffa381a7a2c4ce78ce": "acde310502820b2e191c4f90abf0bb68",
".git/objects/20/1b9d1e6d121defaeed3bd71e9f2904de6b9d90": "21cceca123227e33281bddef9afcf49b",
".git/objects/22/45b0c96bdd93036a23a0a76c699ab878db703a": "91f5a6a56f072c6c921351b81b5824b9",
".git/objects/25/b8e08fc835dd01c8652dc948bb8ad9f335d810": "9b832d7c7a576de3ed6f6236103cca9e",
".git/objects/29/da0b7737fd43f08bfc5547eb3c6168586874aa": "df4cd1c75a1bd8feafa5e719a9ec27e0",
".git/objects/2c/f876f4993757a655f87e092684d6507da0d0c7": "7ebab4a5614ac8ca2afa4661b72088db",
".git/objects/32/684bfb05ac25509d23a85da9a7abd9b744f5e1": "196ba86d261ae40717a832be5f71a495",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/3f21355b18f06ce7efe8d3be493a4682f3c60f": "28091fb04e0cce6a65beabfa97699fb3",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/67533e11b39da59dce6facad53b77347be6e05": "c4f90fe0374df1e3d98b6803afaa73d7",
".git/objects/37/effd783a38fdc85c8a71917f23fb5c7d6abe09": "96d868103795bdded133516f25fc1ed2",
".git/objects/38/19052279e87a6743b8a8777f62cf4ec2e075cf": "5f32f5f61ff98e1dd80a36a77b5ff9f8",
".git/objects/39/60558775da1ac741bdf2c1a3b3c0baf4b75e75": "5dc69a99a0b53882a0cc9cc5f3497188",
".git/objects/39/72a209f2a9db58ae9300343058e4877006b4d6": "d0e1b177039ad67c4376cc03b7a2785e",
".git/objects/3a/b3c42a209d9a3664d0e0400d268fa2dd5b107b": "c77cc5551b11c1d855d9fd765bdedd53",
".git/objects/3f/8ca9c92cfd87458e09bc0410a2bca49a5b8710": "49f93471098a296e8b09588ea63f9657",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/8613255f2017f3f2bd9b093c43cef94ae2f409": "8655c8eed253b33a88792882edd8e04b",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/54/bc2d28e83033d4dc84ab6619e77f6ad39a37fb": "e3f994148c0b764c6130ec2281e60381",
".git/objects/55/ee2ac26b5048c7c606ff86d0aeb9a4247ee0ca": "59c3e1d8734aecd07960ca6e5c1e4335",
".git/objects/56/744d63d1c4949de94d0711248a2bcc2ab0bba8": "5e2a62646c9077bc1eed0bd37377f641",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/fd3651bce39d5490fbac565d995a32029ba288": "395e67799d1444775400673106018c69",
".git/objects/58/ed087bbbac05cd1ce7e70d54875893062ed8fe": "00cb96b60d5870df70630eda25cf6bcd",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5c/74ac5553023e353a723722512cf56c0813517d": "38844ce10f5a555d98269e62a4ca4dd4",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/8d0b14e23b944a56110ee52d80659c8b65b369": "f619853a25732f9211cf4e7898b4f761",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/66/4417540d9f6544b5312876b0b06fe291df7f45": "4b5c00d07915f1a3860484fde3cf9e6b",
".git/objects/67/87538ccea5dd787080e2ffd43e2b066979b567": "2b9b1f499befedb319d0968ba62be73a",
".git/objects/69/89b79ec2b964d8414f4836609dee13cbac8404": "ae7d1b60c9359e57ce345f3deb44a25d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/9bf483f5555ef2262b6eaad1541f1b776d95e0": "ee1a35256b7f526d960ea8eced252429",
".git/objects/71/396d92c36896c75a7caecc93a231e0bb408bb2": "0fb44c98b611b517a49be96564807a81",
".git/objects/7a/c7ce5853ea08c7dbb3818cb49b2d0c7e11da1d": "ec1582af5abaeff9d765dacfbb1ff361",
".git/objects/7f/5fbd28a0046b5a199dd085b9cc18a021fca9e7": "035849990ba1de3f93ab95e1beacf794",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/721cacb6ee043f987eeb0454abb6565e8237f7": "249adb010d1632d92a55186bb190ccb6",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/98/3ecf550f4f595d91ce890aa36abd0470261400": "cc32576e87b5fe26c3ab0ef5e58671d5",
".git/objects/98/90dcd8a9d8ee60e9aac2876d46dca81ba2a48b": "1b5636194100bff7d1beeba5fd8225d6",
".git/objects/9c/4dfa83c7cd63034cb1d91f7d033495a8dd5948": "a2e0dd1e8ec2be6d8eb7e9d76c52749d",
".git/objects/9c/52aa3532969bc46081dd2c94513178077f1b56": "4c6f234d2d7d1cae28a7ec48ee1a4b3f",
".git/objects/9f/5ffc054c7f187518f3f1fc63f30bf663b44363": "f953c6714a381808fe6e3cda5ed3b92f",
".git/objects/a1/fa697fda60772cb559a299036063f3dfd7f035": "1e0fd38e3840d26e1834ef4014721c5c",
".git/objects/a2/4853f94878341797fe4e22e560467cc92df303": "466af62ccdc9d291fc9a3a65268a34db",
".git/objects/a2/743795d17cc6cf9d6e5aeb147a94fc30368de9": "3d90f0e819c974e73d8e1cefd9be9687",
".git/objects/a4/7dc615483919a58e55e64d1a7f8d89d97e9d6b": "5db926ab1705ea863a3c88b4697a4360",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/22848557f8502eab3509113e5b6057d4b74cc4": "595578ade134b947213ecffe53815e37",
".git/objects/a8/3666a5d5d1041e4d18eb72884ac80687e61c02": "f47ec45fc93d11cbe8941a8272b97e8b",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/602c580dbeb55b727c68cb3268e1d959fe88e2": "a5192b7c18ffbe23f565230a390b98ff",
".git/objects/aa/881e559998f47576bd1ffd795fe7d3e3a97181": "b76546ae8b949928ed0f4612854e6b05",
".git/objects/af/6b09117d12755c8a11af5554ecd49c1a4117cd": "d9111a4e3cff77e15c89f7a19d383068",
".git/objects/b2/f3a835dd3bf59a4c3c83f29fb00d1540545f51": "f05070db9b0a0b60bcfae5e8ea9f4128",
".git/objects/b6/348dc512678d85af0211191286bb3ff1f09708": "a3c6e562f394fe329c6cd405de1ecc29",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f8c7b5c771eca76e2028223d9a6eaa0397ebfd": "af0736121908550a2172c3061fa699fc",
".git/objects/bd/d288a41e584f0ffb0a18622eb76cb187b03ed9": "295366d430521baf7d67462217b82f96",
".git/objects/bd/e2fc3b3c23c9be100791faa647b3bdb58bb8d9": "82444b4769a22c184a61c7639a38e2db",
".git/objects/bf/5b2558e2f2181b2c177403dec3fcc989412687": "9477c8f46b7c77c4684f7ef71c5c6dba",
".git/objects/c1/c3f41d09ddd1c11a183fe63bf83212e851b063": "e205b7586a4a54437dfa003e6dd04c79",
".git/objects/c2/a966d545553cf575b6821471667a0d1d79800d": "a09e0e8b305803f9087d9a335cda15a8",
".git/objects/c5/1d2cdc671cedf1e4161d7313c3fcb2d5b31091": "88b339e52537f9899fe9ded155272ee3",
".git/objects/c7/a367ad3f911d846eaf1082329ee5a14533cf5a": "7db5ee68e6ebd4631f55da6e9151585f",
".git/objects/d2/f0abf4fed21e356e47d4c58633ab7c7f464ea9": "b0af6f073696c68b55a1de8bf321f154",
".git/objects/d3/83c883a66f1d2bb7624be9180ff22ccb94e911": "3cdb19925595fdf5eecd2b7849924a1a",
".git/objects/d3/f43a833ad6547881bdabf53a77871e13385f20": "aa1c28296f3e32b21a04693551843302",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/3673226afafc74006fcda8da1ee0366333aca6": "0453d336e5fd858ab9c201c27871967a",
".git/objects/de/994177d37e27bdd17ec4c65bc3a0d3d8f1220c": "fb3a911876511e36377058d17549623b",
".git/objects/e0/6939bfb7e7b6753b962326c763b9b31d1a3866": "f2f1c04b0325387b0c2d5fe544c32903",
".git/objects/e4/68812f88e3544299cea076687c3dda96e10eb8": "1184c945966c9a1a3d3f160fb961010a",
".git/objects/e6/3716161249b4d33606709dfa2de0a8504fcb2e": "767a2668fa825797463bd551098ff8ab",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "305208f22c4612cfe2e306d1fda11aed",
".git/refs/remotes/origin/main": "305208f22c4612cfe2e306d1fda11aed",
"assets/AssetManifest.bin": "dc2963ba70c0f88b79f67075446f77db",
"assets/AssetManifest.bin.json": "a732f91719fcac53d8b77c81f02ef3f7",
"assets/AssetManifest.json": "ac67801585620c91bbda35db98e98e1c",
"assets/assets/images/batcom/batcom1.jpg": "9e2fd1e0a38e65118b032c06e8e2867c",
"assets/assets/images/batcom/batcom10.jpg": "4ead52bc803665ed17ed5fcb7ebd45af",
"assets/assets/images/batcom/batcom11.jpg": "798ec81d3b605f9608e6aee833c5cc9c",
"assets/assets/images/batcom/batcom12.jpg": "1f1f5f0b3112ded3a4262087aa8e9e3b",
"assets/assets/images/batcom/batcom13.jpg": "694ecbcfdee39ddc19ba175249a33710",
"assets/assets/images/batcom/batcom2.jpg": "f48a8eb2ec4b2543cfef2a3234fb1c28",
"assets/assets/images/batcom/batcom3.jpg": "0c274c6535cc452493a398411ba4896c",
"assets/assets/images/batcom/batcom4.jpg": "2ced28500d9f8401930890b8da3cfa22",
"assets/assets/images/batcom/batcom5.jpg": "2454f00f441641fe9172bda323c60ea1",
"assets/assets/images/batcom/batcom6.jpg": "8d8e116cc23a625317599c17d3271c28",
"assets/assets/images/batcom/batcom7.jpg": "44c62fa7dc1ed3672c9c347adb353247",
"assets/assets/images/batcom/batcom8.jpg": "d7995ae9fcaa4a10309d8220a77adbb6",
"assets/assets/images/batcom/batcom9.jpg": "cc5f9faa5442e2cb173b140b3755eb41",
"assets/assets/images/batcom.png": "9bfda952c5d9c67ae7a72696830fc29f",
"assets/assets/images/digit.png": "62a8dd510973bc2919d0538695af1d20",
"assets/assets/images/digiteam/Picture1.png": "999d7a4464344497997bd871bc99eee6",
"assets/assets/images/digiteam/Picture10.png": "6b1173b0ccd6fb0bc380ab749b89e201",
"assets/assets/images/digiteam/Picture11.png": "6617011642538ca83ddb0fea21162c87",
"assets/assets/images/digiteam/Picture12.png": "f76bfb95f482e14066e1fd1357933d5b",
"assets/assets/images/digiteam/Picture13.png": "80db98adaa59c8395199d0e296483100",
"assets/assets/images/digiteam/Picture14.png": "8a8cab24b8ac66d75b3058395bdf2839",
"assets/assets/images/digiteam/Picture15.png": "055e2980c6d8788d06137353b3d3d5f9",
"assets/assets/images/digiteam/Picture16.png": "1b1dfa01672989ee37c9e27541de2dd8",
"assets/assets/images/digiteam/Picture17.png": "a06c54d96e1a0620f3ee333c67636c09",
"assets/assets/images/digiteam/Picture18.png": "73cd419052d6a8a4cbb294f661a0e81f",
"assets/assets/images/digiteam/Picture2.png": "ee437f291a10c2347a17cf64e0a11bff",
"assets/assets/images/digiteam/Picture3.png": "193f685baaee3971d0efc4e7888884df",
"assets/assets/images/digiteam/Picture4.png": "4fe5e0f6c5d3bc7a32ad705c1f605196",
"assets/assets/images/digiteam/Picture5.png": "202d6ac9b8d7b1462d1931819f152c01",
"assets/assets/images/digiteam/Picture6.png": "388f7c0b9d1c2faf342eccf68a9f64c2",
"assets/assets/images/digiteam/Picture7.png": "9e962ab5fede6cf76fa9e1c2d2034b8e",
"assets/assets/images/digiteam/Picture8.png": "5621f553694a91aa0ba6f950ba7cbf45",
"assets/assets/images/digiteam/Picture9.png": "a052e3f326c99ffa0983efa7a1118470",
"assets/assets/images/dokumentasi-foto.png": "f93f0b1297d6810ae12786774b39aad7",
"assets/assets/images/fotoprofile.JPG": "87689360ae78eb647fa1edef370eea7c",
"assets/assets/images/instagram.png": "5db55c471abebc28fd2a04613ad4413c",
"assets/assets/images/linkedin.png": "63baa4d9e3e6bbafd85b8c6085bf9ec5",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Dasar%2520Git%2520dengan%2520Github.png": "fec6aac9094c428a4960c6f8d21d06ec",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Dasar%2520Pemrograman%2520Web.png": "97ddbea4b29a297596facd7faae6752c",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Fundamental%2520Aplikasi%2520Android.png": "9a61501a134a311ad7f9db2223272cf6",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Membuat%2520Aplikasi%2520Android%2520dengan%2520Jetpack%2520Compose.png": "c07048c5e7e9ee47f29d2df2e3ca8daa",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Membuat%2520Aplikasi%2520Android%2520untuk%2520Pemula.png": "d32a3916903cb8953eb7ef4d4c46d72e",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Membuat%2520Aplikasi%2520Flutter%2520untuk%2520Pemula.png": "fd9821b94d14ce4f1e290aa41826718d",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Pengembangan%2520Aplikasi%2520Android%2520Intermediate.png": "7cc348c01bfb6e903d74922fb5579e27",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520Prinsip%2520Pemrograman%2520SOLID.png": "d277ad74abd9354c68b8b06d61cbab1a",
"assets/assets/images/sertifikat/Dicoding%2520Belajar%2520UX%2520Design.png": "9024e784335ad2c9fa69eaa4ad5dc33c",
"assets/assets/images/sertifikat/Dicoding%2520Memulai%2520Dasar%2520Pemrograman%2520untuk%2520Menjadi%2520Pengembang%2520Software.png": "022e6ee6ae68203591421fdb28f7aa7b",
"assets/assets/images/sertifikat/Dicoding%2520Memulai%2520Pemrograman%2520dengan%2520Dart.png": "f264a9c725a489ca0ecfac30f8e26b69",
"assets/assets/images/sertifikat/Dicoding%2520Memulai%2520Pemrograman%2520Dengan%2520Kotlin.png": "81c3c34a2c4fd237595b66bb38ccb442",
"assets/assets/images/whatsapp.png": "7611f02494be1e121a6f6a391d3eafdc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "21b5447a893d80c8365c6732b14d566f",
"assets/NOTICES": "e45a26de835ce83799fc0763c40c7fec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "121e51ba78c5c4cd59968efa542c7cc0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9b4a9d8ff115400ec6caf33e5332674b",
"/": "9b4a9d8ff115400ec6caf33e5332674b",
"main.dart.js": "2a81d7373ceefd255b8f87e818626bc1",
"manifest.json": "4d90c148641ede7e3218c8f1ae22dbe5",
"version.json": "4d96d886d8d61f8a1d29a020bdfd9fa8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
