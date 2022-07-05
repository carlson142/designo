import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 2rem;
  overflow: hidden;
`;

const Top = styled.div`
  height: 70%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Bot = styled.div`
  height: 30%;

  display: flex;
  flex-direction: column;

  padding: 0 3rem;

  align-items: center;
  justify-content: center;

  background-color: #fdf3f0;

  cursor: pointer;
  transition: var(--tr);

  :hover {
    background-color: var(--color-peach);
  }
`;

const Heading = styled.h4`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: var(--color-peach);

  margin-bottom: 1rem;

  ${Bot}:hover & {
    color: white;
  }
`;

const Text = styled.div`
  font-size: 1.6rem;
  line-height: 1.6;
  color: black;

  text-align: center;

  ${Bot}:hover & {
    color: white;
  }
`;

interface CardProps {
  title: string;
  text: string;
  img: string;
}

const CardComponent: React.FC<CardProps> = ({ img, text, title }) => {
  return (
    <Container>
      <Top>
        <Image src={img} />
      </Top>

      <Bot>
        <Heading>{title}</Heading>

        <Text>{text}</Text>
      </Bot>
    </Container>
  );
};

export default CardComponent;
