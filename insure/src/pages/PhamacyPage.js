import React from "react";
import Header from "../components/Header";
import SearchInput from "../components/Phamacy/SearchInput";
import SearchResult from "../components/Phamacy/SearchResult";

const PhamacyPage = () => {
  return (
    <div>
      <Header title={"약국 검색"}></Header>
      <SearchInput></SearchInput>
      <SearchResult></SearchResult>
    </div>
  );
};

export default PhamacyPage;
