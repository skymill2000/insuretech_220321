import React from "react";
import axios from "axios";
import Header from "../components/Header";

const AxiosTest = () => {
  const handleClick = () => {
    let data = "데이터 받기전";
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&from=2022-02-25&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5`
      )
      .then(function (response) {
        // handle success
        data = response;
        console.log(data);
      });
  };
  return (
    <>
      <Header title={"데이터 요청 실습"}></Header>
      <button onClick={handleClick}>요청 전송</button>
    </>
  );
};

export default AxiosTest;
