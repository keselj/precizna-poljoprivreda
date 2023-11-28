import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  NavLogoSideBar,
} from "./SideBarElemendts";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/kursevi">Kursevi</SidebarLink>
          <SidebarLink to="/usluge"> Usluge</SidebarLink>{" "}
          <SidebarLink to="/prodaja">Prodaja</SidebarLink>{" "}
          <SidebarLink to="/onama">O Nama</SidebarLink>{" "}
          <SidebarLink to="/naslovna">Naslovna</SidebarLink>{" "}
          <SidebarLink to="/kontakt">Kontakt</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <NavLogoSideBar to="/" />
    </SidebarContainer>
  );
};

export default Sidebar;
