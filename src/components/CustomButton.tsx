import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-light-grey);

  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 500;

  padding: 1.5rem 3rem;

  cursor: pointer;

  border: none;
  border-radius: 1rem;

  transition: var(--tr);

  :hover {
    background-color: var(--color-ltpeach);
    color: white;
  }
`;

interface ButtonProps {
  text: string;
}

const CustomButton: React.FC<ButtonProps> = ({ text }) => {
  return <Button>{text}</Button>;
};

export default CustomButton;
