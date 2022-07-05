import React from "react";
import styled from "styled-components";

import CardComponent from "./CardComponent";

const Container = styled.div`
  padding: 10rem 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 50rem;
  grid-gap: 5rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 60rem;
  }
`;

interface IData {
  id: number;
  title: string;
  text: string;
  img: string;
}

interface WebCProps {
  data: IData[];
}

const WebComponent: React.FC<WebCProps> = ({ data }) => {
  return (
    <Container>
      {data.map((el) => (
        <CardComponent key={el.id} {...el} />
      ))}
    </Container>
  );
};

export default WebComponent;
