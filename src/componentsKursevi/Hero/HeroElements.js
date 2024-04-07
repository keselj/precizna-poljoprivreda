import styled from "styled-components";

export const Header = styled.h1`
  margin-top: 170px;
  color: rgb(0, 0, 0);
  font-size: 48px;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and {
    max-width: 480px;
  }
   {
    font-size: 32px;
  }

  @media screen and (max-width: 375px) {
    font-size: 35px;
  }
`;

export const TextP = styled.p`
  margin-top: 60px;
  color: rgb(0, 0, 0);
  font-size: 20px;
  text-align: start;
  max-width: 1200px;
  line-height: 35px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and {
    max-width: 480px;
  }
   {
    font-size: 18px;
  }

  @media screen and (max-width: 375px) {
    font-size: 10px;
    width: 90%;
    margin-left: -50px;
  }

  @media screen and (max-width: 414px) {
    font-size: 17px;
  }

  @media screen and (max-width: 430px) {
    font-size: 18px;
  }

  @media screen and (max-width: 360px) {
    font-size: 15px;
    margin-left: 15px;
    text-align: left;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px !important;
  }

  @media screen and (max-width: 912px) {
    font-size: 23px;
  }

  @media screen and (max-width: 540px) {
    font-size: 18px !important;
  }

  @media screen and (max-width: 280px) {
    font-size: 14px !important;
  }

  @media screen and (max-width: 412px) {
    font-size: 15px !important;
  }
`;

export const HeroContent = styled.div`
  max-width: 1700px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
