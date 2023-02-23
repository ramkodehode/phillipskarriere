import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 332.56px;
  height: 426px;
  left: 94px;
  top: 1095px;
`;

export const BoxedBoxes = styled.div`
  width: 332.56px;
  height: 426px;

  background: #3e6a7c;

  border: 1px solid white;

  text-align: center;
`;

export const NewSection = styled.section`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 185px;
  top: 1095px;
`;

export const PaddingDiv = styled.div`
  padding: 40px 30px;
  @media only screen and (max-width: 40em) {
    padding: 0px;
  }
`;

export const PSTyle = styled.div`
  align-items: center;
`;

export const MainContentDiv = styled.div`
  padding: 0px 30px;
`;

export const MarginDiv = styled.div`
  margin-left: 50px;
  margin-right: 50px;

  @media only screen and (max-width: 40em) {
    margin-top: 50px;
  }
`;

export const NewSectionSuccess = styled.section`
  display: flex;
  flex-direction: row;
`;

export const ImageLogo = styled.img`
  position: absolute;
  width: 58px;
  height: 50.73px;
  left: 73px;
  top: 47px;
`;
