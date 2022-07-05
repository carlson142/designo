import React from "react";
import styled from "styled-components";
import HomeSectionFour from "../components/Home/HomeSectionFour";

import circle from "../assets/shared/desktop/bg-pattern-three-circles.svg";

import canada from "../assets/locations/desktop/image-map-canada.png";
import australia from "../assets/locations/desktop/image-map-australia.png";
import uk from "../assets/locations/desktop/image-map-united-kingdom.png";

const Container = styled.div`
  padding: 10rem 15rem;
  padding-top: 5rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    padding: 5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem;
  }
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(25rem, 50rem));
  grid-template-rows: repeat(3, 30rem);
  grid-gap: 3rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 30rem);
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8rem;

  background-color: #fdf3f0;

  border-radius: 1rem;

  background-image: url(${circle});
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding: 0 3rem;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: space-evenly;

    text-align: center;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h3`
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-peach);

  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeadingTransparent = styled(Heading)`
  color: transparent;
`;

const BoldInfo = styled.p`
  font-size: 1.6rem;
  font-weight: 700;

  margin-bottom: 1rem;
`;

const ThinInfo = styled.p`
  font-size: 1.6rem;
  font-weight: 400;

  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Map = styled.div`
  border-radius: 1rem;
  overflow: hidden;
`;

const MapImg = styled.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

const CanadaInfo = styled(Info)`
  grid-column: 1/3;
  grid-row: 1/2;

  @media (max-width: 1000px) {
    grid-column: 1/4;
    grid-row: 2/3;
  }
`;

const CanadaMap = styled(Map)`
  grid-column: 3/4;
  grid-row: 1/2;

  @media (max-width: 1000px) {
    grid-column: 1/4;
    grid-row: 1/2;
  }
`;

const AustraliaInfo = styled(Info)`
  grid-column: 2/4;
  grid-row: 2/3;

  @media (max-width: 1000px) {
    grid-column: 1/4;
    grid-row: 4/5;
  }
`;

const AustraliaMap = styled(Map)`
  grid-column: 1/2;
  grid-row: 2/3;

  @media (max-width: 1000px) {
    grid-column: 1/4;
    grid-row: 3/4;
  }
`;

const UKInfo = styled(Info)`
  grid-column: 1/3;
  grid-row: 3/4;

  @media (max-width: 1000px) {
    grid-column: 1/4;
    grid-row: 6/7;
  }
`;

const UKMap = styled(Map)`
  grid-column: 3/4;
  grid-row: 3/4;

  @media (max-width: 1000px) {
    grid-column: 1/4;
    grid-row: 5/6;
  }
`;

const LocationPage: React.FC = () => {
  return (
    <Container>
      <LocationGrid>
        {/* CANADA */}
        <CanadaInfo>
          <InfoBlock>
            <Heading>Canada</Heading>
            <BoldInfo>Designo Central Office</BoldInfo>
            <ThinInfo>3886 Wellington Street</ThinInfo>
            <ThinInfo>Toronto, Ontario M9C 3J5</ThinInfo>
          </InfoBlock>

          <InfoBlock>
            <HeadingTransparent>Canada</HeadingTransparent>
            <BoldInfo>Contact</BoldInfo>
            <ThinInfo>P : +1 253-863-8967</ThinInfo>
            <ThinInfo>M : contact@designo.co</ThinInfo>
          </InfoBlock>
        </CanadaInfo>

        <CanadaMap>
          <MapImg src={canada} alt="canada" />
        </CanadaMap>

        {/* AUSTRALIA */}
        <AustraliaInfo>
          <InfoBlock>
            <Heading>Australia</Heading>
            <BoldInfo>Designo Central Office</BoldInfo>
            <ThinInfo>19 Balonne Street</ThinInfo>
            <ThinInfo>New South Wales 2443</ThinInfo>
          </InfoBlock>

          <InfoBlock>
            <HeadingTransparent>Canada</HeadingTransparent>
            <BoldInfo>Contact</BoldInfo>
            <ThinInfo>P : (02) 6720 9092</ThinInfo>
            <ThinInfo>M : contact@designo.au</ThinInfo>
          </InfoBlock>
        </AustraliaInfo>

        <AustraliaMap>
          <MapImg src={australia} alt="australia" />
        </AustraliaMap>

        {/* UK */}
        <UKInfo>
          <InfoBlock>
            <Heading>United Kingdom</Heading>
            <BoldInfo>Designo Central Office</BoldInfo>
            <ThinInfo>13 Colorado Way</ThinInfo>
            <ThinInfo>Rhyd-y-fro SA8 9GA</ThinInfo>
          </InfoBlock>

          <InfoBlock>
            <HeadingTransparent>Canada</HeadingTransparent>
            <BoldInfo>Contact</BoldInfo>
            <ThinInfo>P : 078 3115 1400</ThinInfo>
            <ThinInfo>M : contact@designo.uk</ThinInfo>
          </InfoBlock>
        </UKInfo>

        <UKMap>
          <MapImg src={uk} alt="uk" />
        </UKMap>
      </LocationGrid>
      <HomeSectionFour />
    </Container>
  );
};

export default LocationPage;
