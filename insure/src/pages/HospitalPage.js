import React, { useState } from "react";
import Header from "../components/Header";
import SearchResult from "../components/Hospital/SearchResult";
import SearchInput from "../components/Hospital/SearchInput";

const HospitalPage = () => {
  const [hospitalList, setHospitalList] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");

  return (
    <div>
      <Header title={"병원정보 목록"} />
      <SearchInput></SearchInput>
      {/* <SearchResult></SearchResult> */}
      {
        //searchInput
        //searchList <- HospitalListItem
        /* HospitalListItem 컴포넌트를 활용하여 병원 목록을 출력 searchList 안에 선언 */
      }
    </div>
  );
};

export default HospitalPage;
