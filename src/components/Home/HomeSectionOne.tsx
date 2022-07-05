import React from "react";
import styled from "styled-components";

import dt_bg from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import hero from "../../assets/home/desktop/image-hero-phone.png";

import CustomButton from "../CustomButton";

const Container = styled.section`
  background-color: var(--color-peach);
  border-radius: 1rem;

  display: flex;
  justify-content: space-between;

  height: 64rem;

  background-image: url(${dt_bg});
  background-repeat: no-repeat;
  background-position: right;

  overflow: hidden;

  @media (max-width: 1300px) {
    flex-direction: column;
    height: 70rem;
  }
`;

const InfoContainer = styled.div`
  flex: 2;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 0 0 0 10rem;
  position: relative;

  @media (max-width: 1300px) {
    padding: 5rem;
    flex: 1;
  }

  @media (max-width: 500px) {
    padding: 3rem;
  }
`;

const Heading = styled.h1`
  font-size: 5rem;
  font-weight: 500;

  color: white;

  margin-bottom: 2rem;

  @media (max-width: 1300px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: white;

  margin-bottom: 2rem;

  @media (max-width: 1300px) {
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  @media (max-width: 1300px) {
    align-self: center;
  }
`;

const BGContainer = styled.div`
  flex: 1;

  background-image: url(${hero});
  background-repeat: no-repeat;
  background-position: right-bottom;

  padding-right: 25rem;

  @media (max-width: 1300px) {
    padding-right: 0rem;

    background-position: center;
    background-position: 50% 25%;
  }
`;

const HomeSectionOne: React.FC = () => {
  return (
    <Container>
      <InfoContainer>
        <Heading>
          Award-winning custom designs and digital branding solutions
        </Heading>

        <Text>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </Text>

        <ButtonContainer>
          <CustomButton text="Learn more" />
        </ButtonContainer>
      </InfoContainer>

      <BGContainer></BGContainer>
    </Container>
  );
};

export default HomeSectionOne;
