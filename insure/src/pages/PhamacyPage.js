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
    axios.get(``).then(function ({ data }) {
      setPhamacyList(data.articles);
    });
  };
  return (
    <div>
      <Header title={"약국 검색"}></Header>
      <SearchInput></SearchInput>
      <SearchResult></SearchResult>
    </div>
  );
};

export default PhamacyPage;
