import styled from "styled-components";
import { Link, Link as LinkRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logoBeliZeleni from "../../images/Logo/logoBeliZeleni.jpg";
import logoFaxZeleni from "../../images/Logo/logoFaxZeleni.png";
import { Link as ScrollLink } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "rgb(26, 47, 41);")};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-top: -80px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all case;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding: 0;
  max-width: 1500px;
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  margin: 24px 20px;
  text-decoration: none;
  background: ${({ scrollNavLogo }) =>
    scrollNavLogo
      ? `url(${logoBeliZeleni}) no-repeat center center / contain`
      : `url(${logoBeliZeleni}) no-repeat center center / contain`};
  background-color: rgb(26, 47, 41); /* The improved transparency spell */
  background-size: cover;

  width: 40px;
  height: 30px;
  min-width: 145px;
  min-height: 45px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1247px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 28.8px;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  aling-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 1247px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  margin: 0 30px;
  margin-top: 8px;
`;
export const NavLinks = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 16px;
  height: 100%;
  cursor: pointer;
  white-space: nowrap;
  font-weight: bold;

  &.active {
    border-bottom: 3px solid #ffca00;
    color: #ffca00;
  }

  &:hover {
    color: #ffca00;
  }
`;

export const NavLinksKontakt = styled(ScrollLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 16px;
  height: 100%;
  cursor: pointer;
  white-space: nowrap;
  font-weight: bold;

  &.active {
    border-bottom: 3px solid #ffca00;
    color: #ffca00;
  }

  &:hover {
    color: #ffca00;
  }
`;

export const NavLogoFax = styled(LinkRouter)`
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  background: url(${logoFaxZeleni}) no-repeat center center;
  background-size: cover;

  margin: 10px 30px;

  width: 50px;
  height: 20px;
  min-width: 90px;
  min-height: 75px;
  transition: all 0.2 ease-in-out;

  @media screen and (max-width: 1247px) {
    display: none;
  }
`;

// export const NavBtn = styled.nav`
//   dispay: flex;
//   align-items: center;

//   @media screen and (max-width: 1087px) {
//     display: none;
//   }
// `;
// export const NavBtnLink = styled(LinkRouter)`
//   border-radius: 50px;
//   background: #fff;
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: black;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2 ease-in-out;
//   text-decoration: none;
// `;
