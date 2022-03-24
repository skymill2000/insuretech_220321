import axios from "axios";
import React, { useState } from "react";
import Header from "../components/Header";
import SearchInput from "../components/Phamacy/SearchInput";
import SearchResult from "../components/Phamacy/SearchResult";

const PhamacyPage = () => {
  const [phamacyList, setPhamacyList] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInputText(value);
  };

  const handleClick = () => {
    axios
      .get(
        `http://apis.data.go.kr/B551182/pharmacyInfoService/getParmacyBasisList?ServiceKey=uiu3ZzNzDB04UbxOtOL1atH04WOtxB5WSKkPbaCASVHbwgcsIPwHA5Qp6xOmSe6fzCnUVifZcfTXDkgNegv4qQ==&emdongNm=방이동`
      )
      .then(function ({ data }) {
        console.log(data);
        setPhamacyList(data);
      });
  };
  return (
    <div>
      <Header title={"약국 검색"}></Header>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      {/* <SearchResult phamacyList={phamacyList}></SearchResult> */}
    </div>
    // 약국명과 약국 주소에대한 검색 결과를 표시 하세요
  );
};

export default PhamacyPage;
