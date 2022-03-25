import axios from "axios";
import React, { useState } from "react";

const TreatmentDosageInfoPage = () => {
  const [callbackId, setcallbackId] = useState("");
  const handleClick = () => {
    const option = {
      method: "POST",
      url: "",
      headers: {
        Authorization: "Token 1510567c4cc54a3a8f6deabbccc65604a8b636a5",
      },
      //header Token Data 추가 => object 형태로 추가
      data: {},
    };
    axios(option).then(({ data }) => {
      console.log(data);
    });
  };

  const handleClickResult = () => {
    const option = {
      method: "POST",
      url: "",
      headers: {
        Authorization: "Token 1510567c4cc54a3a8f6deabbccc65604a8b636a5",
      },
      //header Token Data 추가 => object 형태로 추가
      data: {},
    };
    axios(option).then(({ data }) => {
      console.log(data);
    });
  };

  //1./scrap/common/nhis/TreatmentDosageInfoSimple 올바른 요청 작성하기 (handleClick)
  //2.위의 요청에서 응답으로 받은 callbackId 를 useState 저장
  //3./scrap/captcha 에 저장한 callbackId 전달하는 axios 요청을 작성하기 (handleClickResult)

  return (
    <div>
      <button onClick={handleClick}>인증 요청</button>
      <button onClick={handleClickResult}>정보 요청</button>
    </div>
  );
};

export default TreatmentDosageInfoPage;
