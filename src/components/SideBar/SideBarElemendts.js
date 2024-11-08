import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link } from "react-scroll";
import logoBeli from "../../images/Logo/logoBeli.png";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-top: 15px;
    margin-right: 15px;
  }

  @media screen and (max-width: 820px) {
    margin-top: 15px;
    margin-right: 15px;
  }

  @media screen and (max-width: 853px) {
    margin-top: 15px;
    margin-right: 15px;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 19.2px;
  right: 24px;
  background: transparent;
  font-size: 32px;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-column: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #ffca00;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 853px) {
    font-size: 40px;
  }

  @media screen and (max-width: 414px) {
    font-size: 30px;
  }

  @media screen and (max-width: 430px) {
    font-size: 30px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 40px;
  }
`;

export const SideBarLinkKonakt = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #ffca00;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 853px) {
    font-size: 40px;
  }

  @media screen and (max-width: 414px) {
    font-size: 30px;
  }

  @media screen and (max-width: 430px) {
    font-size: 30px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 40px;
  }
`;

export const NavLogoSideBar = styled(LinkRouter)`
  justify-self: center;
  cursor: pointer;
  margin: 24px 20px;
  text-decoration: none;
  background: url(${logoBeli}) no-repeat center center;
  background-size: cover;

  width: 40px;
  height: 30px;
  min-width: 145px;
  min-height: 45px;

  @media screen and (max-width: 768px) {
    margin-top: -300px;
  }

  @media screen and (max-width: 820px) {
    margin-top: -300px;
  }

  @media screen and (max-width: 280px) {
    margin-top: -50px;
  }

  @media screen and (max-width: 853px) {
    margin-top: -500px;
  }

  @media screen and (max-width: 414px) {
    margin-top: -200px;
  }

  @media screen and (max-width: 430px) {
    margin-top: -200px;
  }
`;
