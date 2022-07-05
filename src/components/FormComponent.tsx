import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";

import InputComponent from "./InputComponent";

const Container = styled.div``;

const Form = styled.form`
  position: relative;
`;

const Message = styled.textarea`
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

  margin-bottom: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FormComponent: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  console.log(name);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFunction: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setFunction(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputComponent
          placeholder="Name"
          required={true}
          type="text"
          name="Name"
          value={name}
          onChange={(e) => handleChange(e, setName)}
        />

        <InputComponent
          placeholder="Email"
          required={true}
          type="email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e, setEmail)}
        />

        <InputComponent
          placeholder="Phone"
          required={true}
          type="tel"
          name="Phone"
          value={phone}
          onChange={(e) => handleChange(e, setPhone)}
        />

        <Message placeholder="Your message" />

        <ButtonContainer>
          <CustomButton text="Submit" />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default FormComponent;
