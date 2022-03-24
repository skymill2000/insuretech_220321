import React from "react";
import HospitalListItem from "./HospitalListItem";

const SearchResult = ({ hospitalList }) => {
  return (
    <div>
      {hospitalList.map((data, index) => {
        return <HospitalListItem addr={data.addr}></HospitalListItem>;
      })}
    </div>
  );
};

export default SearchResult;
