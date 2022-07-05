import React from "react";
import styled from "styled-components";

import hero from "../../assets/about/desktop/image-about-hero.jpg";
import circle from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg";

const Container = styled.div`
  display: flex;

  border-radius: 1rem;
  overflow: hidden;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: 55rem;
  }

  @media (max-width: 500px) {
    height: 65rem;
  }
`;

const Left = styled.div`
  flex: 2;
  background-color: var(--color-peach);

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 5rem;

  color: white;

  background-image: url(${circle});
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

  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
`;

const Right = styled.div`
  flex: 1;

  @media (max-width: 1000px) {
    height: 50%;
  }
`;

const Image = styled.img`
  height: 100%;

  object-fit: cover;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const AboutSectionOne: React.FC = () => {
  return (
    <Container>
      <Left>
        <Header>About us</Header>

        <Text>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients' audiences.
        </Text>
      </Left>

      <Right>
        <Image src={hero} alt="hero" />
      </Right>
    </Container>
  );
};

export default AboutSectionOne;
