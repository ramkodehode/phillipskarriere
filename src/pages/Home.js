import styled from "styled-components";
import sittendestudenter from "../img/sittendestudenter.png";
import HomeText from "./homePage/HomeText";

export const Box = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 746px;
  height: 827px;

  left: 0px;
  top: 160px;

  background: #254d5e;

  @media only screen and (max-width: 40em) {
    width: 90rem;
  }
`;

export const PicStudent = styled.img`
  position: absolute;
  width: 733px;
  height: 751.38px;
  left: 731px;
  top: 220px;

  @media only screen and (max-width: 40em) {
    border-radius: 20%;
    left: 650px;
    top: 200px;
  }
`;

const Home = () => {
  return (
    <div>
      <Box>
        <HomeText />
      </Box>
      <PicStudent src={sittendestudenter} alt="sittendestudenter" />
    </div>
  );
};

export default Home;
