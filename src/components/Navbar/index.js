import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import React from "react";
// import { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogoFax,
} from "./NavbarElements";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Navbar = ({ toggle }) => {
  // const [activeNavLinks, setActiveNavLinks] = useState([]);
  // const handleNavLinkClick = (e) => {
  //   const path = e.target.pathname;

  //   if (activeNavLinks.includes(path)) {
  //     setActiveNavLinks(activeNavLinks.filter((item) => item !== path));
  //   } else {
  //     setActiveNavLinks([...activeNavLinks, path]);
  //   }
  //   e.target.classList.add("active");
  // };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/kursevi">KURSEVI</NavLinks>
            </NavItem>{" "}
            <NavItem>
              <NavLinks to="/usluge">USLUGE</NavLinks>
            </NavItem>{" "}
            <NavItem>
              <NavLinks to="/prodaja">PRODAJA</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/zanimljivosti">BLOG</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/onama">O NAMA</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/kontakt">KONTAKT</NavLinks>
            </NavItem>
          </NavMenu>
          <NavLogoFax to="http://polj.uns.ac.rs/"></NavLogoFax>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
