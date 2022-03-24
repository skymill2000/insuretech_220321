import React from "react";
import axios from "axios";

const AxiosTest = () => {
  const handleClick = () => {
    axios.get("https://naver.com").then(function (response) {
      // handle success
      console.log(response);
    });
  };
  return <button onClick={handleClick}>요청 전송</button>;
};

export default AxiosTest;
