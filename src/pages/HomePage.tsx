import React from "react";
import styled from "styled-components";
import HomeSectionFour from "../components/Home/HomeSectionFour";
import HomeSectionOne from "../components/Home/HomeSectionOne";
import HomeSectionThree from "../components/Home/HomeSectionThree";
import HomeSectionTwo from "../components/Home/HomeSectionTwo";

const Container = styled.div`
  padding: 10rem 15rem;
  padding-top: 5rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    padding: 5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem;
  }
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
    </Container>
  );
};

export default HomePage;
