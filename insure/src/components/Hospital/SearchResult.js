import React from "react";

const SearchResult = ({ hospitalList }) => {
  return (
    <div>
      {hospitalList.map((data, index) => {
        return (
          <p key={index}>
            {data.yadmNm} {data.addr}
          </p>
        );
      })}
    </div>
  );
};

export default SearchResult;
