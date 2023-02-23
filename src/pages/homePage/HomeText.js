import styled from 'styled-components';

export const HomeTitle = styled.h1`
  position: absolute;
  width: 649px;
  height: 187.13px;
  left: 73px;
  top: 100px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 3rem;
  line-height: 74px;

  text-transform: uppercase;

  color: #e3f2ff;
`;

export const HomeSmaller = styled.p`
  position: absolute;
  width: 572px;
  height: 152.76px;
  left: 73px;
  top: 400px;

  font-family: 'Poppins';
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
        Her kommer <br /> websiden til <br /> Phillipskarriere.no
      </HomeTitle>
      <HomeSmaller>
        {/* Lev livet ditt her og nå, og vær samtidig nysgjerrig på fremtiden din!
        Du skal ha mulighet til å finne og velge din studie- og yrkesretning ut
        i fra egne ønsker, interesser og forutsetninger. */}
        Vår karriereveildning hjelper deg å finne veien videre.
        <br></br>
        Dine muligheter - vårt ansvar
      </HomeSmaller>
    </div>
  );
};

export default HomeText;
