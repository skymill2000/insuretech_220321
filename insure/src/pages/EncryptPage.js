import React, { useState } from "react";
import Header from "../components/Header";

const EncryptPage = () => {
  const [plainText, setPlainText] = useState("");
  const [encryptedText, setencryptedText] = useState("");
  return (
    <div>
      <Header title={"데이터 암호화"}></Header>
      <input type="text" /> <br />
      <input type="password" />
      <br />
      <button>암호화</button>
    </div>
  );
};

export default EncryptPage;
