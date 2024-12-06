import styled from "styled-components";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  padding: 32px;
  gap: 30px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${(props) => props.$bgColor};
  width: 60px;
  height: 60px;
`;

const Image = styled.img``;

const Title = styled.h3`
  color: #282d30;
`;

const Subtitle = styled.p`
  color: #74798c;
`;

function Card({ userKeyData, title, image, subtitle, unit, bgColor }) {
  return (
    <CardContainer>
      <CardIcon $bgColor={bgColor}>
        <Image src={image} alt={title} />
      </CardIcon>
      <CardContent>
        <Title>
          {userKeyData}
          {unit}
        </Title>
        <Subtitle>{subtitle}</Subtitle>
      </CardContent>
    </CardContainer>
  );
}

Card.propTypes = {
  userKeyData: PropTypes.number,
  bgColor: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  subtitle: PropTypes.string,
  unit: PropTypes.string,
};

export default Card;
