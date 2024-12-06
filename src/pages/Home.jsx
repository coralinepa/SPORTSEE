import styled from "styled-components";

import User from "../components/User";

const Container = styled.section`
  margin: 110px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.h2`
  font-size: 50px;
  & span {
    color: red;
  }
`;

const Subtitle = styled.p`
  font-size: 15px;
`;

function Home() {
  return (
    <Container>
      <Title>
        Bienvenue sur <span>SportSee</span>
      </Title>
      <Subtitle>
        Choisissez un utilisateur pour accéder au tableau de bord :{" "}
      </Subtitle>
      <User />
    </Container>
  );
}

export default Home;
