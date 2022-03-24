import React from "react";

const SearchInput = ({ handleClick, handleChange }) => {
  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={handleClick}>검색</button>
    </div>
  );
};

export default SearchInput;
