import styled from "styled-components";
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
    flex-direction: column;
  }
`;

export const WrapperH1P = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    order: -1;
    margin-bottom: 20px;
  }
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
  color: #010606;
  margin-bottom: 40px;
  padding: 0 20px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 0;

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
  @media screen and (max-width: 480px) {
    width: auto;
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

export const UslugeWrapper = styled.div`
  margin: 40px 0;
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

export const UslugeCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  height: 620px;
  width: 383px;
  border-left: 5px solid rgb(121, 27, 39);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);

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

export const UslugeH2 = styled.h2`
  font-size: 22px;
  margin-bottom: 5px;
  color: black;
  padding: 0 10px;
`;

export const UslugeP = styled.p`
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
  border-left: 5px solid rgb(121, 27, 39);

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
export const SliderTwoContainer = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
