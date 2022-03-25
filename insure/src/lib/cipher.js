const { createCipheriv, createHash, createHmac } = require("crypto");
const makeAES = (plainText) => {
  const key = "H3uVnnOnNIXXsH63CsgswUsmICSCdVsn";
  const iv = "dwUgwmwOndnJOmOX";
  const cipher = createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(plainText, "utf8", "base64");
  encrypted += cipher.final("base64");

  console.log("aes-256-cbc 방식으로 암호화한 값 : ", encrypted);
  return encrypted;
  // 1. 평문(plainText)을
  // 2. EncKey, EnvIv 값을 이용하여 AES-CBC-256 방식으로 암호화
  // 3. 암호화 된 결과를 'Base64' 인코딩하기
  // 4. return 암호화 된 값
};

makeAES("!Kwic123테스트");

const sha256Enc = (plainText) => {
  const secret = "abcdefg";
  const hash = createHmac("sha256", secret)
    .update("I love cupcakes")
    .digest("base64");
  console.log(hash);
};

sha256Enc("12341234");
