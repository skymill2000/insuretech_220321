import React, { useState } from "react";
import Header from "../components/Header";
import encrypt from "../lib/encrypt";

const EncryptPage = () => {
  const [plainText, setPlainText] = useState("");
  const [encryptedText, setencryptedText] = useState("");

  const handleClick = () => {
    setencryptedText(encrypt.makeAES(plainText));
  };

  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPlainText(value);
  };

  return (
    <div>
      <Header title={"데이터 암호화"}></Header>
      아이디 : <input type="text" /> <br />
      비밀번호 : <input type="password" onChange={handleChangePassword} />
      <br />
      {encryptedText}
      <button onClick={handleClick}>암호화</button>
    </div>
  );
};

export default EncryptPage;
