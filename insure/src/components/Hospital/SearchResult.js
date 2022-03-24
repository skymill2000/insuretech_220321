import React from "react";

const SearchResult = ({ phamacyList }) => {
  return (
    <div>
      {phamacyList.map((data, index) => {
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
