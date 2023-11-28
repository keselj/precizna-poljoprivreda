import styled from "styled-components";
import { Row } from "../Kursevi/GlobalElements";
import Slider from "react-slick";

export const UslugeContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const WrapperH1P = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SliderWrapper = styled.div`
  margin: 0 auto;
  align-items: center;
  grid-gap: 16px;
  padding: 10px 50px;
  height: 100%;
  flex: 2;
`;

export const UslugeH1 = styled.h1`
  font-size: 40px;
  color: #010606;
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const UslugePh1 = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 60px;
`;

export const ButtonContainer = styled(Row)`
  & svg {
    margin: 20px;
    cursor: pointer;
  }

  & svg:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
  }
  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }
`;
export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ReviewSliderKursevi = styled(Slider)`
  width: 400px;

  .slick-track {
    display: flex;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    margin-bottom: 1;
    outline: none;
  }

  .slick-list {
    overflow: hidden;
  }
`;

export const UslugeWrapper = styled.div`
  margin: 40px 0;
  display: grid;
  align-items: center;
  padding: 0 140px;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const UslugeCard = styled.div`
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

export const UslugeIconWrapper = styled.div``;

export const UslugeIcon = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
export const UslugeH2PWrapper = styled.div`
  margin-top: 15px;
  padding: 5px;
`;

export const UslugeH2 = styled.h3`
  font-size: 30px;
  margin-bottom: 30px;
  color: #000;
`;

export const UslugeP = styled.p`
  font-size: 16px;
  text-align: center;
  color: #000;
`;

// Slider 2

export const ReviewSliderTwo = styled(Slider)`
  width: 700px;

  .slick-track {
    display: flex;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    margin-bottom: 1;
    outline: none;
  }

  .slick-list {
    overflow: hidden;
  }
`;

export const UslugeWrapperTwo = styled.div`
  margin: 40px 0;
  display: grid;
  align-items: center;
  padding: 0 140px;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const UslugeCardTwo = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  height: 440px;
  width: 320px;
  border-left: 5px solid #ffca00;
  margin-top: 50px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  color: #fff;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const UslugeIconWrapperTwo = styled.div``;

export const UslugeIconTwo = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const UslugeH2PWrapperTwo = styled.div`
  margin-top: 15px;
  padding: 5px;
`;

export const UslugeH2Two = styled.h2`
  font-size: 22px;
  margin-bottom: 5px;
  color: black;
`;
export const SliderTwoContainer = styled.div``;
