import React from "react";
import HospitalListItem from "./HospitalListItem";

const SearchResult = ({ hospitalList }) => {
  return (
    <div>
      {hospitalList.map((data, index) => {
        return (
          <HospitalListItem
            addr={data.addr}
            clCd={data.clCd}
            clCdNm={data.clCdNm}
            yadmNm={data.yadmNm}
            ykiho={data.ykiho}
          ></HospitalListItem>
        );
      })}
    </div>
    //addr, clCd, clCdNm, yadmNm, ykiho
  );
};

export default SearchResult;
