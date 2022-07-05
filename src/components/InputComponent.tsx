import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;

  padding: 1rem 2rem;

  border: none;
  border-bottom: 1px solid white;
  outline: none;

  background-color: transparent;
  color: white;

  font-size: 1.6rem;
  font-family: inherit;

  ::placeholder {
    color: white;
  }

  :not(:last-child) {
    margin-bottom: 3rem;
  }
`;

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  value: string;
}

const InputComponent: React.FC<InputProps> = ({
  name,
  onChange,
  placeholder,
  required,
  type,
  value,
}) => {
  return (
    <Input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
    />
  );
};

export default InputComponent;
