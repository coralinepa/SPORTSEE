import styled from "styled-components";

import Logo from "../assets/logo/logo.png";
import Navbar from "./NavBar";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #020203;
  justify-content: space-between;
  padding: 0 91px 0 28px;
  flex: 0 0 91px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const UnstyledTitle = styled.h1`
  all: unset;
  line-height: 0;
  margin-right: 149px;
`;

function Header() {
  return (
    <StyledHeader>
      <UnstyledTitle>
        <img src={Logo} alt="SportSee" height={60} />
      </UnstyledTitle>
      <Navbar />
    </StyledHeader>
  );
}
export default Header;
