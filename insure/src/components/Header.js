import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-bottom: 1px solid black;
  font-size: 20px;
  font-weight: bold;
`;

const Header = ({ title }) => {
  return <HeaderBlock>{title}</HeaderBlock>;
};

export default Header;
