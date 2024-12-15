import { Link } from "react-router-dom";
import styled from "styled-components";

const UserLink = styled(Link)`
  position: relative;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const StyledUser = styled.div`
  color: #fff;
`;

const Avatar = styled.div`
  background-color: ${(props) => props.$bgColor};
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & hover {
    opacity: 0.5;
  }
`;

function User() {
  return (
    <StyledUser>
      <Flex>
        <Avatar $bgColor="#ff0200">
          <UserLink to={`profile/12`}>Karl</UserLink>
        </Avatar>
        <Avatar $bgColor="#282D30">
          <UserLink to={`profile/18`}>Cécilia</UserLink>
        </Avatar>
      </Flex>
    </StyledUser>
  );
}

export default User;
