import styled from "styled-components";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "react-slick";

export const Slider1 = styled(Slider)`
  display: flex;
  grid-gap: 16px;
  width: 100%;
`;

export const CardContener = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Img = styled.img`
  margin: 0 auto;
  height: 150px;
  width: 150px;
  border-radius: 5%;
  align-items: start;
`;

export const Title = styled.h2`
  margin-left: 50px;
  width: 70%;
  font-size: 30px;
  padding: 20px 0;
  border-radius: 5px;
  font-size: 33px;
  color: white;
`;

export const Description = styled.p`
  margin: 20px auto;
  width: 80%;
  font-size: 16px;
  margin: 20px auto;
  color: white;
  font-weight: bold;
`;

export const MainContainer = styled.div`
  margin: 0 auto;
  align-items: center;
  height: 100%;
  background: white;
  width: 100%;
`;

export const CardBig = styled.div`
  width: 432px;
  height: 620px;
  background: black;
  border-radius: 10px;
`;

export const CardSmall = styled.div`
  width: 320px;
  height: 440px;
  background: black;
  border-radius: 10px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  width: 65px;
  height: 65px;
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  width: 65px;
  height: 65px;
`;
