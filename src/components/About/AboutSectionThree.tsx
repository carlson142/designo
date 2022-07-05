import React from "react";
import styled from "styled-components";

import circle from "../../assets/shared/desktop/bg-pattern-small-circle.svg";
import leaf from "../../assets/shared/desktop/bg-pattern-leaf.svg";

import canada from "../../assets/shared/desktop/illustration-canada.svg";
import australia from "../../assets/shared/desktop/illustration-australia.svg";
import uk from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 5rem 0rem 10rem 0;

  position: relative;
  overflow: hidden;

  @media (max-width: 1000px) {
    padding: 5rem 0rem 5rem 0;
  }
`;

const BGContainer = styled.div`
  position: absolute;
  bottom: -22rem;
  right: -30rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const BG = styled.img``;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  padding: 5rem;

  max-width: 40rem;
  min-width: 25rem;

  height: 50rem;

  @media (max-width: 1000px) {
    padding: 5rem 0;
  }
`;

const CardImage = styled.div`
  background: url(${circle});
`;

const Image = styled.img``;

const CardHeading = styled.h3`
  font-size: 2.5rem;
  letter-spacing: 1px;
  font-weight: 500;

  color: var(--color-peach);

  text-transform: uppercase;
`;

const CardButton = styled.button`
  background-color: var(--color-peach);
  color: white;

  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;

  padding: 1.5rem 3rem;

  cursor: pointer;

  border: none;
  border-radius: 1rem;

  transition: var(--tr);

  :hover {
    background-color: var(--color-ltpeach);
    color: white;
  }
`;

const AboutSectionThree: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate("/location");
  };

  return (
    <Container>
      <BGContainer>
        <BG src={leaf} alt="bg" />
      </BGContainer>

      <CardContainer>
        <Card>
          <CardImage>
            <Image src={canada} alt="canada" />
          </CardImage>

          <CardHeading>Canada</CardHeading>

          <CardButton onClick={handleClick}>see location</CardButton>
        </Card>

        <Card>
          <CardImage>
            <Image src={australia} alt="canada" />
          </CardImage>

          <CardHeading>Australia</CardHeading>

          <CardButton onClick={handleClick}>see location</CardButton>
        </Card>

        <Card>
          <CardImage>
            <Image src={uk} alt="canada" />
          </CardImage>

          <CardHeading>United Kingdom</CardHeading>

          <CardButton onClick={handleClick}>see location</CardButton>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default AboutSectionThree;
