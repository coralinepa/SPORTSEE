import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
  margin-top: 110px;
`;

const NotFoundTitle = styled.h3`
  font-size: 288px;
`;

const NotFoundContent = styled.div`
  font-size: 36px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  display: block;
  width: fit-content;
  padding-bottom: 70px;
  text-decoration: underline;
`;

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundContent>
        Oups ! La page que vous demandez n&rsquo;existe pas.
      </NotFoundContent>

      <StyledLink to="/">Retourner sur la page d&rsquo;accueil</StyledLink>
    </NotFoundContainer>
  );
}

export default NotFound;
