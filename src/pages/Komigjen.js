import styled from "styled-components";

export const KomIgang = styled.h1`
  position: absolute;
  width: 947px;
  height: 69px;
  left: 242px;
  top: 2059px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  text-align: center;

  color: #000000;

  text-transform: uppercase;
`;

export const EmailButton = styled.button`
  position: absolute;
  left: 700px;
  top: 2150px;

  width: 188.48px;
  height: 48.69px;

  background: #ffffff;
  border-radius: 3px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  color: #254d5e;
`;

export const StyledInput = styled.input`
  left: 500px;
  top: 2150px;
  position: absolute;
  width: 180px;
  height: 45px;
`;

export const EmptySpace = styled.div`
  position: absolute;
  width: 1440px;
  height: 300px;
  left: 0px;
  top: 2400px;

  background: rgba(0, 0, 0, 0.8);

  @media only screen and (max-width: 40em) {
    width: 90rem;
  }
`;

const KomIgjen = () => {
  return (
    <div>
      <KomIgang>Så la oss komme i gang!</KomIgang>

      <EmailButton
        onClick={() =>
          window.open(
            "mailto:trude@phillipskarriere.no?subject=Subject&body=Body%20goes%20here"
          )
        }
      >
        TA KONTAKT
      </EmailButton>

      <StyledInput type="email" id="email" required placeholder="Din epost" />

      <EmptySpace></EmptySpace>
    </div>
  );
};

export default KomIgjen;
