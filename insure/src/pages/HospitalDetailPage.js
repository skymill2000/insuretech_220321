import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import axios from "axios";

const HospitalDetail = () => {
  const { search } = useLocation();
  console.log("location정보:", useLocation());
  const [result, setResult] = useState();
  const { ykiho } = queryString.parse(search);

  useEffect(() => {
    getHospitalDetailData();
  }, []);

  const getHospitalDetailData = () => {
    console.log("콤포넌트가 마운트 될때 실행됩니다.");
    const option = {
      method: "GET",
      url: "http://apis.data.go.kr/B551182/hospDiagInfoService1/getClinicTop5List1",
      headers: {},
      params: {
        ServiceKey:
          "uiu3ZzNzDB04UbxOtOL1atH04WOtxB5WSKkPbaCASVHbwgcsIPwHA5Qp6xOmSe6fzCnUVifZcfTXDkgNegv4qQ==",
        numOfRows: "1",
        pageNo: "1",
        ykiho: ykiho,
      },
    };
    axios(option).then(({ data }) => {
      console.log(data.response.body.items.item);
      setResult(data.response.body.items.item);
    });
  };

  return (
    <div>
      {result !== undefined && (
        <>
          <p>{result.mfrnIntrsIlnsCdNm1}</p>
          <p>{result.mfrnIntrsIlnsCdNm2}</p>
          <p>{result.mfrnIntrsIlnsCdNm3}</p>
          <p>{result.mfrnIntrsIlnsCdNm4}</p>
          <p>{result.mfrnIntrsIlnsCdNm5}</p>
        </>
      )}
      {result === undefined && (
        <>
          <p>현재 등록된 데이터가 없습니다</p>
        </>
      )}
    </div>
  );
};

export default HospitalDetail;
