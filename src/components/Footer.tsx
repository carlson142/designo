import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoYoutube,
} from "react-icons/io5";

import logo from "../assets/shared/desktop/logo-light.png";
import "./Footer.scss";

const Container = styled.footer`
  width: 100%;
  padding: 15rem;

  background-color: black;

  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    padding: 15rem 5rem;
    padding-bottom: 5rem;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogoContainer = styled(Link)`
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Logo = styled.img`
  width: auto;
  height: 3rem;
`;

const DTMenu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DTItem = styled(Link)`
  text-decoration: none;

  font-size: 1.6rem;
  text-transform: uppercase;
  color: white;

  cursor: pointer;
  border-bottom: 1px solid transparent;

  transition: var(--tr);

  :not(:last-child) {
    margin-right: 3rem;
  }

  :hover {
    border-bottom: 1px solid white;
  }

  @media (max-width: 768px) {
    :not(:last-child) {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }
`;

const Bot = styled.div`
  padding: 3rem 0 0 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  ::before {
    content: "";
    display: block;

    position: absolute;
    top: 0;
    left: 0;

    height: 1px;
    width: 100%;
    background-color: white;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    :not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`;

const Info = styled.p`
  font-size: 1.6rem;
  color: white;

  :not(:last-child) {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SocialContainer = styled.div`
  display: flex;
`;

const Social = styled.div`
  :not(:last-child) {
    margin-right: 3rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <Top>
        <LogoContainer to={"/"}>
          <Logo src={logo} alt="logo" />
        </LogoContainer>

        <DTMenu>
          <DTItem to={"/about"}>Our Company</DTItem>
          <DTItem to={"/location"}>Locations</DTItem>
          <DTItem to={"/contact"}>Contact</DTItem>
        </DTMenu>
      </Top>

      <Bot>
        <InfoBlock>
          <Info>Designo Central Office</Info>
          <Info>3886 Wellington Street</Info>
          <Info>Toronto, Ontario M9C 3J5</Info>
        </InfoBlock>

        <InfoBlock>
          <Info>Contact Us (Central Office)</Info>
          <Info>P : +1 253-863-8967</Info>
          <Info>M : contact@designo.co</Info>
        </InfoBlock>

        <SocialContainer>
          <Social>
            <IoLogoFacebook className="social" />
          </Social>
          <Social>
            <IoLogoInstagram className="social" />
          </Social>
          <Social>
            <IoLogoPinterest className="social" />
          </Social>
          <Social>
            <IoLogoTwitter className="social" />
          </Social>
          <Social>
            <IoLogoYoutube className="social" />
          </Social>
        </SocialContainer>
      </Bot>
    </Container>
  );
};

export default Footer;
