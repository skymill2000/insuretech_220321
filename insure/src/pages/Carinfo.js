import axios from "axios";
import React, { useState } from "react";

const Carinfo = () => {
  const [carnum, setcarnum] = useState("");
  const [onwer, setonwer] = useState("");
  const handleClick = () => {
    const option = {
      method: "POST",
      url: "https://datahub-dev.scraping.co.kr/assist/common/carzen/CarAllInfoInquiry",
      headers: {
        Authorization: "Token 332460548c3348109095d32b82710b518cbb318e",
      },
      //header Token Data 추가 => object 형태로 추가
      data: {
        REGINUMBER: carnum,
        OWNERNAME: onwer,
      },
    };
    axios(option).then(({ data }) => {
      console.log(data);
    });
  };
  const handleChangeCarnum = (e) => {
    const { value } = e.target;
    setcarnum(value);
  };
  const handleChangeOwner = (e) => {
    const { value } = e.target;
    setonwer(value);
  };

  return (
    <div>
      차량 번호 <input onChange={handleChangeCarnum}></input>
      <br></br>
      소유주 : <input onChange={handleChangeOwner}></input>
      <br></br>
      <button onClick={handleClick}>차량 정보 조회하기</button>
    </div>
  );
};

export default Carinfo;
