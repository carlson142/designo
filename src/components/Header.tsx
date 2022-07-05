import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../assets/shared/desktop/logo-dark.png";

import { IoMenu, IoClose } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

const Container = styled.header`
  width: 100%;
  padding: 5rem 15rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1300px) {
    padding: 5rem;
  }

  @media (max-width: 500px) {
    padding: 5rem 2rem;
  }
`;

const LogoContainer = styled(Link)``;

const Logo = styled.img`
  width: auto;
  height: 3rem;
`;

const DTMenu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DTItem = styled(Link)`
  text-decoration: none;
  color: black;

  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: 1px solid transparent;

  transition: var(--tr);

  :not(:last-child) {
    margin-right: 3rem;
  }

  :hover {
    border-bottom: 1px solid black;
  }
`;

const MBMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header: React.FC = () => {
  const [mobile, showMobile] = useState<boolean>(false);

  const toggleMenu = (): void => {
    showMobile((prev) => !prev);
  };

  return (
    <Container>
      <LogoContainer to={"/designo/"}>
        <Logo src={logo} alt="logo" />
      </LogoContainer>

      <DTMenu>
        <DTItem to={"/about"}>Our Company</DTItem>
        <DTItem to={"/location"}>Locations</DTItem>
        <DTItem to={"/contact"}>Contact</DTItem>
      </DTMenu>

      <MBMenu onClick={toggleMenu}>
        {mobile === false ? <IoMenu size={25} /> : <IoClose size={25} />}
      </MBMenu>

      {mobile && <MobileMenu toggleMenu={toggleMenu} />}
    </Container>
  );
};

export default Header;
