import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import HomeSectionFour from "../components/Home/HomeSectionFour";

import WebComponent from "../components/Web/WebComponent";

import bg from "../assets/web-design/desktop/bg-pattern-intro-web.svg";
import app from "../assets/home/desktop/image-app-design.jpg";
import graphic from "../assets/home/desktop/image-graphic-design.jpg";

import { webData } from "../webData";

const Container = styled.div`
  padding: 10rem 15rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    padding: 5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem;
  }
`;

const IntroContainer = styled.div`
  padding: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--color-peach);
  border-radius: 1rem;

  color: white;

  background-image: url(${bg});
  background-position: right;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding: 5rem;
  }
`;

const IntroHeading = styled.h2`
  font-size: 5rem;
  font-weight: 700;

  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
`;

const NavComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 30rem;
  grid-gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 30rem);
  }
`;

const App = styled.div`
  grid-column: 1/2;

  @media (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

const Graphic = styled.div`
  grid-column: 2/3;

  @media (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;

  border-radius: 1rem;
  overflow: hidden;

  position: relative;

  cursor: pointer;

  transition: var(--tr);

  :hover {
    filter: sepia(60%);
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;

  background-size: cover;

  @media (max-width: 768px) {
    background-size: contain;
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
`;

const Text = styled.span`
  font-size: 1.8rem;
  color: white;
  text-transform: uppercase;
`;

const WebDesign: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <IntroContainer>
        <IntroHeading>Web design</IntroHeading>
        <IntroText>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </IntroText>
      </IntroContainer>

      <WebComponent data={webData} />

      <NavComponent>
        <App
          onClick={() => {
            navigate("/appdesign");
          }}
        >
          <ImageContainer>
            <Image src={app} alt="web" />

            <InfoContainer>
              <Heading>App Design</Heading>
              <Text>View project</Text>
            </InfoContainer>
          </ImageContainer>
        </App>

        <Graphic
          onClick={() => {
            navigate("/graphicdesign");
          }}
        >
          <ImageContainer>
            <Image src={graphic} alt="web" />

            <InfoContainer>
              <Heading>Graphic Design</Heading>
              <Text>View project</Text>
            </InfoContainer>
          </ImageContainer>
        </Graphic>
      </NavComponent>

      <HomeSectionFour />
    </Container>
  );
};

export default WebDesign;
