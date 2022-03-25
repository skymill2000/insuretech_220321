import axios from "axios";
import React, { useState } from "react";

const TreatmentDosageInfoPage = () => {
  const [callbackId, setcallbackId] = useState("");
  const [authState, setauthState] = useState(0);
  const [resultList, setresultList] = useState([]);
  const handleClick = () => {
    const option = {
      method: "POST",
      url: "/scrap/common/nhis/TreatmentDosageInfoSimple",
      headers: {
        Authorization: "Token 1510567c4cc54a3a8f6deabbccc65604a8b636a5",
      },
      //header Token Data 추가 => object 형태로 추가
      data: {
        LOGINOPTION: "0",
        JUMIN: "Bln5bAqj9LZqp8IKq0Hlew==",
        DETAILPARSE: "3",
        CHILDPARSE: "1",
        USERNAME: "유관우",
        HPNUMBER: "01091615808",
        TELECOMGUBUN: "2",
      },
    };
    axios(option).then(({ data }) => {
      console.log("callbackId : ", data.data.callbackId);
      setcallbackId(data.data.callbackId);
      setauthState(1);
    });
  };

  const handleClickResult = () => {
    const option = {
      method: "POST",
      url: "/scrap/captcha",
      headers: {
        Authorization: "Token 1510567c4cc54a3a8f6deabbccc65604a8b636a5",
      },
      //header Token Data 추가 => object 형태로 추가
      data: {
        callbackId: callbackId,
        callbackType: "ANY",
      },
    };
    axios(option).then(({ data }) => {
      console.log(data);
      setresultList(data.data.MEDICINELIST);
    });
  };

  //1./scrap/common/nhis/TreatmentDosageInfoSimple 올바른 요청 작성하기 (handleClick)
  //2.위의 요청에서 응답으로 받은 callbackId 를 useState 저장
  //3./scrap/captcha 에 저장한 callbackId 전달하는 axios 요청을 작성하기 (handleClickResult)

  return (
    <div>
      <button onClick={handleClick}>인증 요청</button>
      <br></br>
      <p>{authState === 1 && <>인증을 완료해 주세요</>}</p>
      <br></br>
      <button onClick={handleClickResult}>정보 요청</button>
      {resultList.map((element) => {
        return (
          <>
            <p>진료병원: {element.TREATMEDICALNM} </p>
            <p>진료과목: {element.TREATTYPE} </p>
          </>
        );
      })}
    </div>
  );
};

export default TreatmentDosageInfoPage;
