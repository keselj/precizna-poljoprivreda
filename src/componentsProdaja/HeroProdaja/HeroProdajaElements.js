import styled from "styled-components";

export const HeaderProdaja = styled.h1`
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

  @media screen and (max-width: 414px) {
    font-size: 35px;
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

export const HeroProdajaContent = styled.div`
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

export const KursPprice = styled.div`
  display: flex; /* Align items horizontally */
  align-items: center; /* Center align the items vertically */
  gap: 10px; /* Space between the burger and text */
  font-size: 21px;
  font-weight: 700;
  color: black;
  margin-top: 40px;
  margin-bottom: 40px;
  cursor: pointer; /* Cursor changes to pointer on hover */

  /* Style for the burger icon container */
  .burger-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px; /* Width of the burger icon */
    height: 20px; /* Height to accommodate three lines */
    position: relative;
    padding-left: 10px;
  }

  /* Style for each line in the burger icon */
  .burger-line {
    width: 90%;
    height: 4px;
    background-color: black;
  }
`;