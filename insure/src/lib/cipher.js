const { createCipheriv, createHash, createHmac } = require("crypto");
const makeAES = (plainText) => {
  //암호화 로직
  //AES-CBC-256 방식으로 암호화 로직 작성
  // EncKey : H3uVnnOnNIXXsH63CsgswUsmICSCdVsn
  // EncIV : dwUgwmwOndnJOmOX
  // base64 형태로 encoding 하기
};

const sha256Enc = (plainText) => {
  const secret = "abcdefg";
  const hash = createHmac("sha256", secret)
    .update("I love cupcakes")
    .digest("base64");
  console.log(hash);
};

sha256Enc("12341234");
