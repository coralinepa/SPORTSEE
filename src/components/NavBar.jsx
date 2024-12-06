import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const NavListItem = styled.li`
  color: #fff;

  & a.active {
    text-decoration: underline;
  }
`;

function Navbar({ id }) {
  return (
    <NavList>
      <NavListItem>
        <NavLink to="/">Accueil</NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to={`profile/${id}`}>Profil</NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/settings">Réglage</NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/community">Communauté</NavLink>
      </NavListItem>
    </NavList>
  );
}

Navbar.propTypes = {
  id: PropTypes.string,
};

export default Navbar;
