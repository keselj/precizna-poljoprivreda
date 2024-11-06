import { Link } from "react-router-dom";
import styled from "styled-components";

export const KursContainer = styled.div`
  margin: 0 auto;
  align-items: center;
  grid-gap: 16px;
  padding: 10px 50px;
  height: 100%;

  @media screen and (max-width: 1366px) {
    max-width: 1293px;
  }
`;

export const KursWrapper = styled.div`
  margin: 40px 0;
  display: grid;
  align-items: center;
  padding: 0 140px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

  @media screen and (max-width: 1366px) {
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }

  @media screen and (max-width: 375px) {
    gap: 50px;
  }

  @media screen and (max-width: 414px) {
    gap: 50px;
  }

  @media screen and (max-width: 390px) {
    margin-left: 10px;
  }

  @media screen and (max-width: 430px) {
    gap: 50px;
  }

  @media screen and (max-width: 768px) {
    gap: 50px;
  }

  @media screen and (max-width: 820px) {
    gap: 50px;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 1024px) {
    gap: 50px;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 280px) {
  }
`;

export const KursCard = styled(Link)`
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

  @media screen and (max-width: 1366px) {
    width: 300px;
  }

  @media screen and (max-width: 375px) {
    width: 90%;
  }

  @media screen and (max-width: 414px) {
    width: 110%;
  }

  @media screen and (max-width: 390px) {
    width: 120%;
  }

  @media screen and (max-width: 430px) {
    width: 120%;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 820px) {
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 912px) {
  }

  @media screen and (max-width: 540px) {
  }

  @media screen and (max-width: 280px) {
    width: 95%;
  }

  @media screen and (max-width: 412px) {
    margin-left: -30px;
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
  padding: 0 10px;

  @media screen and (max-width: 1366px) {
    font-size: 18px;
  }
`;

export const KursP = styled.p`
  font-size: 15px;
  text-align: start;
  color: black;
  padding: 0 10px;
  line-height: 25px;

  @media screen and (max-width: 375px) {
    font-size: 13px;
  }

  @media screen and (max-width: 414px) {
    font-size: 14px;
  }

  @media screen and (max-width: 820px) {
    font-size: 15px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }

  @media screen and (max-width: 280px) {
    font-size: 11.2px;
  }
`;
