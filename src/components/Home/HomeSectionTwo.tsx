import React from "react";
import styled from "styled-components";

import web from "../../assets/home/desktop/image-web-design-large.jpg";
import app from "../../assets/home/desktop/image-app-design.jpg";
import graphic from "../../assets/home/desktop/image-graphic-design.jpg";
import { useNavigate } from "react-router-dom";

const Container = styled.section`
  padding: 10rem 0;

  display: grid;
  grid-template-columns: repeat(2, minmax(30% 50%));
  grid-template-rows: repeat(2, 30rem);

  grid-gap: 2rem;

  @media (max-width: 1300px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, 35rem);
  }

  @media (max-width: 768px) {
    padding: 10rem 0 5rem 0;
  }
`;

const Web = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;

  @media (max-width: 1300px) {
    grid-row: 1/2;
  }
`;

const App = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;

  @media (max-width: 1300px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;

const Graphic = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;

  @media (max-width: 1300px) {
    grid-column: 1/2;
    grid-row: 3/4;
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

  /* background-size: cover; */
  object-fit: cover;

  @media (max-width: 1300px) {
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

const HomeSectionTwo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Web
        onClick={() => {
          navigate("/webdesign");
        }}
      >
        <ImageContainer>
          <Image src={web} alt="web" />

          <InfoContainer>
            <Heading>Web Design</Heading>
            <Text>View project</Text>
          </InfoContainer>
        </ImageContainer>
      </Web>

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
    </Container>
  );
};

export default HomeSectionTwo;
