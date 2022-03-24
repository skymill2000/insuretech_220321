import React, { useState } from "react";
import Header from "../components/Header";
import SearchResult from "../components/Hospital/SearchResult";
import SearchInput from "../components/Hospital/SearchInput";
import axios from "axios";

const HospitalPage = () => {
  const [hospitalList, setHospitalList] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInputText(value);
  };
  const handleClick = () => {
    const option = {
      method: "GET",
      url: "http://apis.data.go.kr/B551182/hospInfoService1/getHospBasisList1",
      params: {
        ServiceKey:
          "uiu3ZzNzDB04UbxOtOL1atH04WOtxB5WSKkPbaCASVHbwgcsIPwHA5Qp6xOmSe6fzCnUVifZcfTXDkgNegv4qQ==",
        sidoCd: 110000,
        clCd: 31,
        yadmNm: searchInputText,
      },
    };

    axios(option).then(function ({ data }) {
      console.log(data);
      setHospitalList(data.response.body.items.item);
    });
  };
  return (
    <div>
      <Header title={"병원정보 목록"} />
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      <SearchResult hospitalList={hospitalList}></SearchResult>
      {
        //searchInput
        //searchList <- HospitalListItem
        /* HospitalListItem 컴포넌트를 활용하여 병원 목록을 출력 searchList 안에 선언 */
      }
    </div>
  );
};

export default HospitalPage;
