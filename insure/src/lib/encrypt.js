const { createCipheriv, createHmac } = require("crypto");
const makeAES = (plainText) => {
  const key = "H3uVnnOnNIXXsH63CsgswUsmICSCdVsn";
  const iv = "dwUgwmwOndnJOmOX";
  const cipher = createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(plainText, "utf8", "base64");
  encrypted += cipher.final("base64");
  console.log("aes-256-cbc 방식으로 암호화한 값 : ", encrypted);
  return encrypted;
};

//b3Bu7QBZ0q96+f2GY2NQmaT1XnZElI1+wRdSHBOY01s=
//b3Bu7QBZ0q96+f2GY2NQmaT1XnZElI1+wRdSHBOY01s=

const sha256Enc = (plainText) => {
  const secret = "abcdefg";
  const hash = createHmac("sha512", secret).update(plainText).digest("base64");
  console.log(hash);
};

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

export default {
  makeAES,
};
