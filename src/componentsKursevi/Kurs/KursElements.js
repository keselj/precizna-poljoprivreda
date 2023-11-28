import { Link } from "react-scroll";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const KursContainer = styled.div`
  margin: 0 auto;
  align-items: center;
  grid-gap: 16px;
  padding: 10px 50px;
  height: 100%;
`;

export const KursWrapper = styled.div`
  margin: 40px 0;
  display: grid;
  align-items: center;
  padding: 0 140px;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const KursCard = styled(NavLink)`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  height: 620px;
  width: 383px;
  border-left: 5px solid #ffca00;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  color: #fff;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const KursIconWrapper = styled.div``;

export const KursH2PWrapper = styled.div`
  margin-top: 15px;
  padding: 5px;
`;

export const KursIcon = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const KursH2 = styled.h2`
  font-size: 22px;
  margin-bottom: 5px;
  color: black;
`;

export const KursP = styled.p`
  font-size: 18px;
  text-align: start;
  color: black;
`;

export const KursLink = styled(Link)`
  font-size: 16px;
  text-decoration: underline;
  position: relative;
  bottom: 0;
  color: black;
`;
