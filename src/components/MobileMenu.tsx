import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #333136;

  position: absolute;
  top: 12rem;
  left: 0;

  z-index: 1000;

  width: 100%;
  height: 40rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
`;

const Item = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;

  color: white;
  font-size: 2.5rem;

  text-align: center;

  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

interface MMProps {
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MMProps> = ({ toggleMenu }) => {
  return (
    <Container>
      <Menu>
        <Item to={"/about"} onClick={toggleMenu}>
          Our Company
        </Item>
        <Item to={"/location"} onClick={toggleMenu}>
          Locations
        </Item>
        <Item to={"/contact"} onClick={toggleMenu}>
          Contact
        </Item>
      </Menu>
    </Container>
  );
};

export default MobileMenu;
