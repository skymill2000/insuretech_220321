import React from "react";
import styled from "styled-components";

const HospitalListItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  border: 1px solid;
`;

const HospitalName = styled.div``;
const HospitalLv = styled.div``;
const HospitalAddress = styled.div``;

const HospitalListItem = ({ addr, clCd, clCdNm, yadmNm, ykiho }) => {
  const moveToHospitalDetail = () => {
    console.log(ykiho);
    window.location.href = `/hospitalDetail?ykiho=${ykiho}`;
  };
  return (
    <HospitalListItemBlock>
      <HospitalName>{yadmNm}</HospitalName>
      <HospitalLv>
        {clCdNm}
        {clCd}
      </HospitalLv>
      <HospitalAddress>{addr}</HospitalAddress>
      <button onClick={moveToHospitalDetail}>상세 정보보기</button>
    </HospitalListItemBlock>
  );
};

export default HospitalListItem;
