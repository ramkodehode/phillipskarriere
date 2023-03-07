import { Column, Container, NewSectionSuccess } from "../styles/Styles";

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
  top: 1200px;
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

export const LinkedinButton = styled.button`
  padding: 5px;
  font-size: 1.5rem;
  font-family: "Poppins";
`;

export const MobilText = styled.p`
  font-size: 1.5rem;
  font-family: "Poppins";
`;

const urlLinkedin =
  "https://www.linkedin.com/in/trude-skarstein-phillips-4b7a97251/";

const Sucess = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      ></link>

      <Container>
        <NewSectionSuccess>
          <Column>
            <Container>
              <MarginDivSuccess>
                <TitleMuligheter>Trude Skarstein Phillips</TitleMuligheter>

                <TextMuligheter>
                  {/* Karriereveileder og foreleser på høyskole nivå innen HR,
                organisasjon og ledelse. Utvikler og leverer
                karrierelæringsprogram for unge og voksne. Mange års erfaring
                fra ledelse, rekruttering pg som selvstending næringsdrivende. */}
                  Karriereveileder og rådgiver i eget selskap. Jeg utvikler og
                  leverer ulike karrierelæringsprogram. Kundene mine er unge og
                  voksne i omstilling på studie- og arbeidsmarkedet. Foreleser i
                  tillegg på høyskolenivå innen HR, organisasjon og ledelse. Har
                  mange års erfaring fra ulike roller innen hotelledelse,
                  prosjektledelse og forretningsutvikling. De siste 12 årene som
                  selvstendig næringsdrivende innen rekruttering og omstilling.
                  Formal kompetanse; Økonomi, markedsføring, prosjektledelse,
                  pedagogikk, og master i karriereveiledning.
                  <br />
                  <br></br>
                  <MobilText>Mobil: 91691334</MobilText>
                  <MobilText>Epost: trude@phillipskarriere.no </MobilText>
                  <br />
                  <LinkedinButton
                    onClick={() => {
                      window.location.href = urlLinkedin;
                    }}
                  >
                    Linkedin <i class="fa fa-linkedin-square"></i>
                  </LinkedinButton>
                </TextMuligheter>
              </MarginDivSuccess>
            </Container>
            <BackgroundBox />
            <Image src={Trude} alt="picture of Trude" />
          </Column>
        </NewSectionSuccess>
      </Container>
    </div>
  );
};

export default Sucess;
