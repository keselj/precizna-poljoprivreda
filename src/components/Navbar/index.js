import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogoFax,
  NavLinksKontakt,
} from "./NavbarElements";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Navbar = ({ toggle }) => {
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
              <NavLinks to="/kursevi" onClick={toggleHome}>
                KURSEVI
              </NavLinks>
            </NavItem>{" "}
            <NavItem>
              <NavLinks to="/usluge" onClick={toggleHome}>
                USLUGE
              </NavLinks>
            </NavItem>{" "}
            <NavItem>
              <NavLinks to="/prodaja" onClick={toggleHome}>
                PRODAJA
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/zanimljivosti" onClick={toggleHome}>
                BLOG
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/onama" onClick={toggleHome}>
                O NAMA
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksKontakt
                to="footer"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                KONTAKT
              </NavLinksKontakt>
            </NavItem>
          </NavMenu>
          <NavLogoFax to="http://polj.uns.ac.rs/"></NavLogoFax>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
