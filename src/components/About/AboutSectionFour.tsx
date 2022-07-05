import React from "react";
import styled from "styled-components";

import hero from "../../assets/about/desktop/image-real-deal.jpg";
import circles from "../../assets/shared/desktop/bg-pattern-three-circles.svg";

const Container = styled.div`
  padding: 15rem 0 0 0;

  @media (max-width: 1000px) {
    padding: 5rem 0 0 0;
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
    height: 85rem;
  }

  @media (max-width: 500px) {
    height: 90rem;
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
    padding: 0 2rem;
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

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const AboutSectionFour: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={hero} alt="hero" />
        </Left>

        <Right>
          <Header>The real deal</Header>

          <Text>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </Text>

          <Text>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </Text>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default AboutSectionFour;
