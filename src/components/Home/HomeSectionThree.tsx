import React from "react";
import styled from "styled-components";

import leaf from "../../assets/shared/desktop/bg-pattern-leaf.svg";
import circle from "../../assets/shared/desktop/bg-pattern-small-circle.svg";

import img1 from "../../assets/home/desktop/illustration-passionate.svg";
import img2 from "../../assets/home/desktop/illustration-resourceful.svg";
import img3 from "../../assets/home/desktop/illustration-friendly.svg";

const Container = styled.section`
  display: flex;
  padding: 0;

  position: relative;
`;

const BGContainer = styled.div`
  position: absolute;
  bottom: -30rem;
  right: -10rem;

  @media (max-width: 1300px) {
    display: none;
  }
`;

const BG = styled.img`
  transform: rotate(180deg);
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  padding: 5rem;

  max-width: 40rem;
  min-width: 25rem;

  height: 50rem;

  @media (max-width: 1300px) {
    max-width: 100%;
  }

  @media (max-width: 500px) {
    padding: 3rem 0;
  }
`;

const CardImage = styled.div`
  background: url(${circle});
`;

const Image = styled.img``;

const CardHeading = styled.h3`
  font-size: 2.5rem;
  letter-spacing: 1px;
  font-weight: 500;
`;

const CardText = styled.p`
  text-align: center;
  font-size: 1.6rem;
  line-height: 1.6;
`;

const HomeSectionThree: React.FC = () => {
  return (
    <Container>
      <BGContainer>
        <BG src={leaf} alt="leaf" />
      </BGContainer>

      <CardContainer>
        {/* CARD 1 */}
        <Card>
          <CardImage>
            <Image src={img1} alt="img 1" />
          </CardImage>

          <CardHeading>Passionate</CardHeading>

          <CardText>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </CardText>
        </Card>

        {/* CARD 2 */}
        <Card>
          <CardImage>
            <Image src={img2} alt="img 1" />
          </CardImage>

          <CardHeading>Resourceful</CardHeading>

          <CardText>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </CardText>
        </Card>

        {/* CARD 3 */}
        <Card>
          <CardImage>
            <Image src={img3} alt="img 1" />
          </CardImage>

          <CardHeading>Friendly</CardHeading>

          <CardText>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </CardText>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default HomeSectionThree;
