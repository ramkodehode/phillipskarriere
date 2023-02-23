import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.ul`
  display: flex;

  padding: 10px;
  margin: 0 auto;

  /* align-items: center;
  justify-content: space-between; */

  /* position: sticky;
  top: 5px;
  z-index: 1; */

  /* @media only screen and (max-width: 40em) {
    display: none;
  } */
`;

export const NavTitle = styled.h1`
  position: absolute;
  width: 265px;
  height: 49.79px;
  left: 137px;
  top: 30px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 52px;

  color: #000000;
`;

export const Navdiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  left: 956px;
  top: 61px;
  position: absolute;
`;

export const StyledLink = styled(NavLink)`
  color: #008cea;
  text-decoration: none;
  background: none;
  list-style: none;
  font-weight: bold;
  cursor: pointer;

  width: 81px;
  height: 21.61px;

  font-family: "Rajdhani";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  color: #28191d;

  &.active {
    text-decoration: none;
  }

  @media (max-width: 820px) {
    padding-inline: 20px;
    text-align: center;
    font-size: 20px;
  }
`;
