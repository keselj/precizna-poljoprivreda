import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  NavLogoSideBar,
  SideBarLinkKonakt,
} from "./SideBarElemendts";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/prodaja">Prodaja</SidebarLink>{" "}
          <SidebarLink to="/kursevi">Kursevi</SidebarLink>
          <SidebarLink to="/usluge"> Usluge</SidebarLink>{" "}
          <SidebarLink to="/blog">Blog</SidebarLink>{" "}
          <SidebarLink to="/onama">O Nama</SidebarLink>{" "}
          <SideBarLinkKonakt
            to="footer"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Kontakt
          </SideBarLinkKonakt>
        </SidebarMenu>
      </SidebarWrapper>
      <NavLogoSideBar to="/" />
    </SidebarContainer>
  );
};

export default Sidebar;
