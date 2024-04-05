import styled from "styled-components";
import Slider from "react-slick";

export const CarouselImage = styled.img`
  width: 200px;
  object-fit: cover;
  display: flex !important;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  border-radius: 10px;
  width: 100%;
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  outline: none;
  height: 100px;
  background-color: #fff;

  @media screen and (min-width: 440px) {
    border: 1px solid #bebebe;
  }
`;

export const ButtonContainer = styled.div`
  display: flex !important;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & svg:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
  }
  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }
`;

export const ReviewSlider = styled(Slider)`
  width: 100%;
  padding-bottom: 50px;

  .slick-track {
    display: flex;
    padding: 30px;
    gap: 3rem;
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

export const CardButton = styled.button`
  background-color: #ffca00;
  font-size: 1.3rem;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  margin: auto 0 0 0;
  border: none;
  border-radius: 0 0 10px 10px;

  &:hover {
    background-color: #112f4a;
    transition: background-color 0.2s ease-in;
  }
`;

export const SpanHeader1 = styled.span`
  font-size: 30px;
  margin-bottom: 50px;
  width: auto;
  letter-spacing: 0.06rem;
  line-height: 1.06;
  text-align: start;
  flex-direction: column;
  margin-left: 50px;
  font-weight: bold;
  margin-right: 8px;
  color: #ffca00;

  @media screen and (max-width: 414px) {
    margin-left: 15px;
  }

  @media screen and (max-width: 430px) {
    margin-left: 15px;
  }
  @media screen and (max-width: 360px) {
    margin-left: 15px;
  }
`;

export const SpanHeader2 = styled.span`
  font-size: 25px;
  margin-bottom: 50px;
  width: auto;
  letter-spacing: 0.06rem;
  line-height: 1.06;
  text-align: start;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  font-weight: bold;
`;

export const Heading = styled.h2`
  font-size: 25px;
  letter-spacing: 0.06rem;
  line-height: 1.06;
  text-align: start;
  display: flex;
  flex-direction: row;
`;

export const Section = styled.section`
  margin: auto;
  width: auto;
  min-width: auto;
  max-width: $100%;
  height: 800px;

  @media screen and (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  }
`;
