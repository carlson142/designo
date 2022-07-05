import React from "react";
import styled from "styled-components";

import hero from "../../assets/about/desktop/image-world-class-talent.jpg";
import circles from "../../assets/shared/desktop/bg-pattern-three-circles.svg";

const Container = styled.div`
  padding: 15rem 0rem 10rem 0;

  @media (max-width: 1000px) {
    padding: 10rem 0rem 5rem 0;
  }
`;

const Wrapper = styled.div`
  border-radius: 2rem;
  overflow: hidden;

  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: 65rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 85rem;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    height: 110rem;
  }
`;

const Left = styled.div`
  flex: 1;

  @media (max-width: 1000px) {
    height: 50%;
  }
`;

const Image = styled.img`
  width: 47rem;

  object-fit: cover;

  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;

const Right = styled.div`
  flex: 2;

  background-color: #f0e8e6;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 5rem;

  background-image: url(${circles});
  background-repeat: no-repeat;
  background-position: bottom;

  @media (max-width: 1000px) {
    flex: 1;
    height: 50%;
  }

  @media (max-width: 500px) {
    padding: 0 3rem;
  }
`;

const Header = styled.h3`
  font-size: 5rem;
  color: var(--color-peach);

  margin-bottom: 2rem;

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

  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const AboutSectionTwo: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={hero} alt="hero" />
        </Left>

        <Right>
          <Header>World-class talent</Header>

          <Text>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </Text>

          <Text>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </Text>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default AboutSectionTwo;
