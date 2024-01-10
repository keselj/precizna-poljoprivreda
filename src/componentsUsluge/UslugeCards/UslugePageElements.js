import styled from "styled-components";
import { Link } from "react-router-dom";

export const UslugeCardsContainer = styled.div`
  margin: 0 auto;
  align-items: center;
  grid-gap: 16px;
  padding: 10px 50px;
  height: 100%;
`;

export const UslugeCardsWrapper = styled.div`
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

export const UslugeCardsCard = styled(Link)`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  height: 620px;
  width: 383px;
  border-left: 5px solid rgb(121, 27, 39);

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  color: #fff;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const UslugeCardsIconWrapper = styled.div``;

export const UslugeCardsH2PWrapper = styled.div`
  margin-top: 15px;
  padding: 5px;
`;

export const UslugeCardsIcon = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const UslugeCardsH2 = styled.h2`
  font-size: 22px;
  margin-bottom: 5px;
  color: black;
  padding: 0 10px;
`;

export const UslugeCardsP = styled.p`
  font-size: 15px;
  text-align: start;
  color: black;
  padding: 0 10px;
  line-height: 25px;
`;
