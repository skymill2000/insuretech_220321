import axios from "axios";
import React, { useState } from "react";
import Header from "../components/Header";
import NewsList from "../components/News/NewsList";
import SearchInput from "../components/News/SearchInput";

const NewSearchPage = () => {
  const [newsList, setNewsList] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInputText(value);
  };

  const handleClick = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchInputText}&from=2022-02-25&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5`
      )
      .then(function ({ data }) {
        setNewsList(data.articles);
      });
  };

  return (
    <div>
      <Header title={"뉴스 검색"}></Header>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      <NewsList newsList={newsList}></NewsList>
    </div>
  );
};

export default NewSearchPage;
