import React from "react";
import styled from "styled-components";
import AboutSectionFour from "../components/About/AboutSectionFour";
import AboutSectionOne from "../components/About/AboutSectionOne";
import AboutSectionThree from "../components/About/AboutSectionThree";
import AboutSectionTwo from "../components/About/AboutSectionTwo";
import HomeSectionFour from "../components/Home/HomeSectionFour";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10rem 15rem;

  @media (max-width: 1300px) {
    padding: 5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem;
  }
`;

const AboutPage: React.FC = () => {
  return (
    <Container>
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutSectionFour />
      <HomeSectionFour />
    </Container>
  );
};

export default AboutPage;
