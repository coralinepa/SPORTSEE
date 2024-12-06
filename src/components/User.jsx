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
const StyledUser = styled.p`
  color: #fff;
`;

const Avatar = styled.div`
  background-color: ${(props) => props.$bgColor};
  width: 30px;
  height: 30px;
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
          <UserLink to={`profile/12`}>K</UserLink>
        </Avatar>
        <Avatar $bgColor="#282D30">
          <UserLink to={`profile/18`}>C</UserLink>
        </Avatar>
      </Flex>
    </StyledUser>
  );
}

export default User;
