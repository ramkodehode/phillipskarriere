import {
  Column,
  Container,
  MarginDiv,
  NewSection,
  NewSectionSuccess,
} from "../styles/Styles";

import styled from "styled-components";

import Trude from "../img/Trude.jpg";

export const Image = styled.img`
  width: 561px;
  height: 683px;
  left: 800.24px;
  top: 1203px;

  position: absolute;

  @media only screen and (max-width: 40em) {
    /* left: 87px;
    top: 1700px; */
    border-radius: 50%;
  }
`;

export const MarginDivSuccess = styled.div`
  width: 576px;
  height: 314px;

  left: 87px;
  top: 1271px;
  position: absolute;
`;

export const BackgroundBox = styled.div`
  position: absolute;
  width: 555px;
  height: 683px;
  left: 748px;
  top: 1151px;

  background: #195570;

  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

export const TitleMuligheter = styled.h1`
  font-size: 2rem;
  font-family: "Poppins";
`;

export const TextMuligheter = styled.p`
  font-size: 1.5rem;
  font-family: "Poppins";
`;

const Sucess = () => {
  return (
    <Container>
      <NewSectionSuccess>
        <Column>
          <Container>
            <MarginDivSuccess>
              <TitleMuligheter>Trude Skarstein Phillips</TitleMuligheter>

              <TextMuligheter>
                Karriereveileder og foreleser på høyskole nivå innen HR,
                organisasjon og ledelse. Utvikler og leverer
                karrierelæringsprogram for unge og voksne. Mange års erfaring
                fra ledelse, rekruttering pg som selvstending næringsdrivende.
              </TextMuligheter>
            </MarginDivSuccess>
          </Container>
          <BackgroundBox />
          <Image src={Trude} alt="picture of Trude" />
        </Column>
      </NewSectionSuccess>
    </Container>
  );
};

export default Sucess;
