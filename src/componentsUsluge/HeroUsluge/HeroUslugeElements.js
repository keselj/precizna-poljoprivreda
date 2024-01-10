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
`;

export const HeroUslugeContent = styled.div`
  max-width: 1700px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
