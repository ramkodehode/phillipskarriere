import styled from "styled-components";

export const HomeTitle = styled.h1`
  position: absolute;
  width: 649px;
  height: 187.13px;
  left: 73px;
  top: 100px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 3rem;
  line-height: 74px;

  text-transform: uppercase;

  color: white;
`;

export const HomeSmaller = styled.p`
  position: absolute;
  width: 572px;
  height: 152.76px;
  left: 73px;
  top: 400px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 165%;

  color: #cae6ff;
`;

const HomeText = () => {
  return (
    <div>
      <HomeTitle>
        Her kommer <br /> Phillipskarriere.no
      </HomeTitle>
      <HomeSmaller>
        Karriereveiledning - en god investering for mennesker i omstilling
        <br></br>
        <br />
        Dine muligheter - vårt ansvar
      </HomeSmaller>
    </div>
  );
};

export default HomeText;
