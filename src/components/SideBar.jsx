import styled from "styled-components";

import LogoYoga from "../assets/icons/yoga.png";
import LogoSwim from "../assets/icons/swim.png";
import LogoCycle from "../assets/icons/cycle.png";
import LogoDumbbel from "../assets/icons/dumbbel.png";

const Aside = styled.aside`
  background-color: #020203;
  display: flex;
  flex: 0 0 117px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Nav = styled.nav`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListItem = styled.li`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
`;

const Footer = styled.footer`
  color: #fff;
  font-size: 12px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  transform: rotate(-180deg);
  writing-mode: vertical-rl;
`;

function Sidebar() {
  return (
    <Aside>
      <Nav>
        <List>
          <ListItem>
            <img src={LogoYoga} alt="Yoga" />
          </ListItem>
          <ListItem>
            <img src={LogoSwim} alt="Swim" />
          </ListItem>
          <ListItem>
            <img src={LogoCycle} alt="Cycle" />
          </ListItem>
          <ListItem>
            <img src={LogoDumbbel} alt="Dumbbel" />
          </ListItem>
        </List>
      </Nav>
      <Footer className="sidebar_footer">
        <p>Copyright, SportSee 2020</p>
      </Footer>
    </Aside>
  );
}
export default Sidebar;
