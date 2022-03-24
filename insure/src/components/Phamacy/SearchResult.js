import React from "react";

const SearchResult = ({ phamacyList }) => {
  return (
    <div>
      {phamacyList.map((data, index) => {
        return <p key={index}></p>;
      })}
    </div>
  );
};

export default SearchResult;
