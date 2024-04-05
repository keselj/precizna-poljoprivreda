import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export const KursContainer = styled.div`
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
    flex-direction: column;
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
  @media screen and (max-width: 480px) {
    margin: 0;
    width: 100%;
  }
`;

export const KursH1 = styled.h1`
  font-size: 40px;
  color: #010606;
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const KursPh1 = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 40px;
  padding: 0 40px;

  @media screen and (max-width: 960px) {
    margin: 0;
    padding: 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  & svg {
    margin: 0 20px;
    cursor: pointer;
  }

  & svg:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
  }

  @media screen and (max-width: 960px) {
    margin: 0;
  }
`;
export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
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

export const KursWrapper = styled.div`
  margin: 20px 0;
  display: grid;
  align-items: center;
  padding: 0 140px;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    width: 100%;
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

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);

  transition: all 0.2s ease-in-out;
  color: #fff;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const KursIconWrapper = styled.div``;
export const KursIcon = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const KursH2PWrapper = styled.div`
  margin-top: 15px;
  padding: 5px;
`;

export const KursH2 = styled.h2`
  font-size: 22px;
  margin-bottom: 5px;
  color: black;
  text-align: start;
  padding: 0 10px;
`;

export const KursP = styled.p`
  font-size: 15px;
  text-align: start;
  color: black;
  padding: 0 10px;
  line-height: 25px;
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

export const KursWrapperTwo = styled.div`
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

export const KursCardTwo = styled(Link)`
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

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);

  transition: all 0.2s ease-in-out;
  color: #fff;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const KursIconWrapperTwo = styled.div``;

export const KursIconTwo = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const KursH2PWrapperTwo = styled.div`
  margin-top: 15px;
  padding: 5px;
`;

export const KursH2Two = styled.h2`
  font-size: 22px;
  margin-bottom: 5px;
  color: black;
`;
export const SliderTwoContainer = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

/// Odavde Gore za Sada
