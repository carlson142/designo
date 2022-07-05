import React from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton";

const Container = styled.section`
  padding: 7rem 0;
  background-color: var(--color-peach);

  border-radius: 2rem;

  display: flex;
  justify-content: space-between;

  transform: translateY(15rem);

  @media (max-width: 1300px) {
    flex-direction: column;

    padding: 5rem 0;
  }
`;

const Left = styled.div`
  flex: 1;

  padding: 0 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: white;

  @media (max-width: 768px) {
    padding: 0 3rem;
  }
`;

const Heading = styled.h3`
  font-size: 4rem;
  font-weight: 500;

  margin-bottom: 2rem;

  @media (max-width: 1300px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;

  @media (max-width: 1300px) {
    text-align: center;

    margin-bottom: 3rem;
  }
`;

const Right = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeSectionFour: React.FC = () => {
  return (
    <Container>
      <Left>
        <Heading>Let’s talk about your project</Heading>

        <Text>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </Text>
      </Left>

      <Right>
        <CustomButton text="Get in touch" />
      </Right>
    </Container>
  );
};

export default HomeSectionFour;
