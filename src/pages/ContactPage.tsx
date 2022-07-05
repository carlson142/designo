import React from "react";
import styled from "styled-components";

import circle from "../assets/contact/desktop/bg-pattern-hero-desktop.svg";
import FormComponent from "../components/FormComponent";

const Container = styled.div`
  padding: 5rem 10rem 15rem 10rem;

  @media (max-width: 1300px) {
    padding: 5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem;
  }
`;

const Wrapper = styled.div`
  background-color: var(--color-peach);
  border-radius: 1rem;

  padding: 10rem 10rem;
  display: flex;

  position: relative;

  @media (max-width: 1000px) {
    padding: 10rem 5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 10rem 3rem;
  }
`;

const BG = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const BGImage = styled.img``;

const Left = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  justify-content: center;

  color: white;

  padding-right: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 4rem;
    padding-right: 0;
  }
`;

const Header = styled.h3`
  font-size: 5rem;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
`;

const Right = styled.div`
  flex: 1;
`;

const ContactPage: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <BG>
          <BGImage src={circle} alt="bg" />
        </BG>

        <Left>
          <Header>Contact us</Header>

          <Text>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </Text>
        </Left>

        <Right>
          <FormComponent />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default ContactPage;
