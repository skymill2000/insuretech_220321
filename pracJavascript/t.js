const { createCipheriv, createHash } = require("crypto");
const makeHashValue = (value) => {
  const hash = createHash("sha256");
  const input = value;
  const encrpytedInput = hash.update(input).digest("base64");
  console.log(encrpytedInput);
  return encrpytedInput;
};

const makeAES = (plainText) => {
  //https://nodejs.org/api/crypto.html
  //AES_CBC_PKCS5PADDING/256 방식의 알고리즘을 통해
  //방식으로 암호화 결과를 출력 / 리턴할것
  //hint createCipheriv <-- 알고리즘을 지정
  const key = "H3uVnnOnNIXXsH63CsgswUsmICSCdVsn";
  const iv = "dwUgwmwOndnJOmOX";
  const AESChipher = createCipheriv("aes-256-cbc", key, iv);
  let encryptedData = AESChipher.update(plainText, "utf-8", "base64");
  encryptedData += AESChipher.final("base64");
  return encryptedData;
};

//** DB 보험 API 암호화 핵심 코드 */
const hsKey = () => {
  //const key = appSecretKey + timeSt;
  //var hmac = crypto.createHmac("sha512", new Buffer.from(key, 'utf-8'));
  //var signed = hmac.update(new Buffer.from(str, 'utf-8')).digest("base64");
  //console.log(signed);
  //return signed
};

const dbInsureEncrypt = () => {
  // const timeSt = "" ;
  // const appSecretKey = "";
  // const serial = timeSt + appSecretKey;
  // let secureKey = rpad(serial, 32, '0')
  // var bytes = crypto.randomBytes(20);
  // let iv = crypto.randomBytes(16)
  // console.log(bytes);
  // const key = crypto.pbkdf2Sync(secureKey, bytes, 70000, 32, 'sha1');
  // const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  // cipher.setAutoPadding(false);
  // console.log('b:' , bytes.toString('base64'))
  // console.log('iv:', iv.toString('base64'))
  // let encrypted = cipher.update(pkcs7Pad(ssnnum), 'utf8','base64');
  // encrypted += cipher.final('base64');
  // console.log("here :", encrypted)
  // var encBuf = Buffer.from(encrypted,'base64');
  // let arr = [bytes, iv, encBuf];
  // let conBuf = Buffer.concat(arr);
  // console.log(conBuf.toString('base64'));
  // // encrypted += conBuf.toString('base64');
  // console.log(encrypted);
  // return conBuf.toString('base64');
};

console.log(makeAES("rydbrrP1!89"));
// eslint-disable-next-line import/no-anonymous-default-export
// export default {
//   makeAES,
//   makeHashValue,
// };
