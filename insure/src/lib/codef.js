// const { EasyCodef, EasyCodefConstant } = require("easycodef-node");
// const codef = new EasyCodef();

// //코드에프 가입을 통해 발급 받은 클라이언트 정보 - 데모
// const DEMO_CLIENT_ID = "466c6de4-0d35-4bb9-b8c4-655c90062bf8";
// const DEMO_CLIENT_SECRET = "a6c02016-416e-4041-824f-252aac93fa86";

// // 코드에프 가입을 통해 발급 받은 클라이언트 정보- 정식
// const CLIENT_ID = "";
// const CLIENT_SECRET = "";

// //	코드에프 가입을 통해 발급 받은 RSA 공개키 정보
// const PUBLIC_KEY =
//   "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqJnw5R4lngBLNPlzGs9KiNtAfpMXkTBcljVhOJk6e3pi48OxYfT3Yn8oHmZfoeXWJZOsdLjH/a1TboZ5P9/a0BOH8hbzqpXz3cQvI6Z71nzhaUnNTA5IU1EnpkgkB6OVi3xeZd33GgzGRoUYPQ8nggTYguLdyzM8h11Mp8km6UNYgo7oaFQFVB3LIcHA+wLUStuDrrxgamfDZXTHyyPBEfPrVTfur5en2NQZCu4PjLsLAS4R5w5S2eIGLgyCAN4zC+5kny0NyKJBw4hELMQiiRRqZ2Yc8rHC2Nphw2eyax0/wum2WV3vvc12aCnY4Ac1vMsyTkUHFNizv12iK3vI7QIDAQAB";

// /*
//  *#1.쉬운 코드에프 객체 생성
//  */

// /*
//  *#2.RSA암호화를 위한 퍼블릭키 설정
//  * - 데모/정식 서비스 가입 후 코드에프 홈페이지에 확인 가능(https://codef.io/#/account/keys)
//  * - 암호화가 필요한 필드에 사용 - encryptValue(String plainText);
//  */
// codef.setPublicKey(PUBLIC_KEY);

// /*
//  *#3.데모 클라이언트 정보 설정
//  * - 데모 서비스 가입 후 코드에프 홈페이지에 확인 가능(https://codef.io/#/account/keys)
//  * - 데모 서비스로 상품 조회 요청시 필수 입력 항목
//  */
// codef.setClientInfoForDemo(DEMO_CLIENT_ID, DEMO_CLIENT_SECRET);

// /*
//  * #4.정식 클라이언트 정보 설정
//  * - 정식 서비스 가입 후 코드에프 홈페이지에 확인 가능(https://codef.io/#/account/keys)
//  * - 정식 서비스로 상품 조회 요청시 필수 입력 항목
//  */
// codef.setClientInfo(CLIENT_ID, CLIENT_SECRET);

// /*#5.요청
//  *  - 샌드박스 : EasyCodefConstant.SERVICE_TYPE_SANDBOX
//  *  - 데모 : EasyCodefConstant.SERVICE_TYPE_DEMO
//  *  - 운영 : EasyCodefConstant.SERVICE_TYPE_API
//  */
// codef
//   .requestToken(EasyCodefConstant.SERVICE_TYPE_DEMO)
//   .then(function (response) {
//     /*
//      * #6. 토큰 발급 결과
//      */
//     console.log(response);
//   });

// const productUrl = "/v1/kr/insurance/0200/cont/find";
// const data = {
//   organization: "0200",
//   userName: "유관우",
//   identity: "8901191042811",
//   phoneNo: "01091615808",
//   inquiryType: "0",
//   telecom: "1",
//   timeout: "160",
//   applicationType: "0",
//   warningSkipYN: "1",
// };

// codef
//   .requestProduct(productUrl, EasyCodefConstant.SERVICE_TYPE_DEMO, data)
//   .then(function (response) {
//     /*
//      *  #7. 응답 결과
//      */
//     console.log(response);
//   });

// function createTwoWayParam(response, param) {
//   const resObj = response.data;
//   const readLine_1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   switch (resObj.method) {
//     case "secureNo":
//       //+  보안문자 입력
//       console.log("보안문자 입력 :: ");
//       readLine_1.setPrompt();
//       break;
//     case "smsAuthNo":
//       //+ SMS 입력
//       console.log("SMS 입력 :: ");
//       readLine_1.setPrompt();
//       break;
//     case "simpleAuth":
//       //+ PASS 인증 입력
//       console.log("PASS 인증 입력 :: ");
//       readLine_1.setPrompt();
//       break;
//     case "emailAuthNo":
//       //+ PASS 인증 입력
//       console.log("이메일 인증 입력 :: ");
//       readLine_1.setPrompt();
//       break;
//     default:
//       process.exit();
//   }

//   return new Promise((resolve) => {
//     readLine_1.on("line", function (line) {
//       switch (resObj.method) {
//         case "secureNo":
//           //+  보안문자 입력
//           param.secureNo = line;
//           param.secureNoRefresh = "0";
//           break;
//         case "smsAuthNo":
//           //+ SMS 입력
//           param.smsAuthNo = line;
//           break;
//         case "simpleAuth":
//           //+ PASS 인증 입력
//           param.simpleAuth = "1";
//           break;
//         case "emailAuthNo":
//           //+ PASS 인증 입력
//           param.emailAuthNo = line;
//       }

//       let twoWayInfo = {
//         jobIndex: parseInt(resObj.jobIndex),
//         threadIndex: parseInt(resObj.threadIndex),
//         jti: resObj.jti,
//         twoWayTimestamp: parseFloat(resObj.twoWayTimestamp),
//       };

//       param.twoWayInfo = twoWayInfo;
//       param.is2Way = true;
//       readLine_1.close();

//       resolve(param);
//     });
//   });
// }
