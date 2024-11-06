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
  @media screen and (max-width: 430px) {
    font-size: 35px;
  }
`;

export const TextP = styled.p`
  margin-top: 60px;
  margin-left: 50px;
  margin-right: 50px;
  color: rgb(0, 0, 0);
  font-size: 20px;
  text-align: center;
  line-height: 35px;

  @media screen and (max-width: 375px) {
    font-size: 17px !important;
    word-spacing: 4px;
    line-height: 23px;
    letter-spacing: 1px;
    margin-left: 10px;
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 17px !important;
    word-spacing: 4px;
    line-height: 23px;
    letter-spacing: 1px;
    margin-left: 10px;
    margin-right: 10px;
  }

  @media screen and (max-width: 414px) {
    font-size: 17px !important;
    word-spacing: 4px;
    line-height: 23px;
    letter-spacing: 1px;
    margin-left: 10px;
    margin-right: 10px;
  }

  @media screen and (max-width: 390px) {
    font-size: 17px !important;
    word-spacing: 4px;
    line-height: 23px;
    letter-spacing: 1px;
    margin-left: 10px;
    margin-right: 10px;
  }

  @media screen and (max-width: 430px) {
    font-size: 17px !important;
    word-spacing: 4px;
    line-height: 23px;
    letter-spacing: 1px;
    margin-left: 10px;
    margin-right: 10px;
  }

  @media screen and (max-width: 412px) {
    font-size: 17px !important;
    word-spacing: 4px;
    line-height: 23px;
    letter-spacing: 1px;
    margin-left: 10px;
    margin-right: 10px;
  }

  @media screen and (max-width: 820px) {
    font-size: 19px;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1366px) {
    max-width: 1293px;
  }
`;
