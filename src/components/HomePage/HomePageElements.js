import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

import HomeImage2 from "./images/HomeRobot2.png";

export const HomePageContainer = styled.div`
  background: rgb(130, 130, 130);

  display: flex;
  aling-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;
export const HomeBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width; 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: url(${HomeImage2}) no-repeat center center fixed;
  background-size: cover;
`;

export const HomeContent = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 80px;
`;

export const KrleIZokiKnjiga = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 300px;
  height: 600px;
  margin: 40px;
  &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
  }
`;
export const MarkoKnjiga = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 300px;
  height: 600px;
  margin: 40px;
  &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
  }
`;
export const PreNaslovKnjige = styled.h5`
  color: white;
  padding: 0 25px;
  font-size: 17px;
  font-weight: bold;
  margin: 4px 0;
`;
export const TitleOfBook = styled.h5`
  color: white;
  padding: 0 25px;
  font-size: 17px;
  font-weight: bold;
  margin: 4px 0;
`;
export const PUmderTitle = styled.p`
  color: white;
  padding: 0 25px;
  font-size: 17px;
  font-weight: bold;
  margin: 4px 0;
`;
export const BigYellowButton = styled.button`
  background-color: #ffca00;
  width: 250px;
  height: 50px;
  border: 1px black solid;
  margin: 25px;
  text-align: center;
  font-size: 20px;
  border-radius: 10px;
  font-weight: bold;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ImageWrapper = styled.div``;
export const ImageOfBook = styled.img`
  width: 100%;
  height: 100%;
  padding: 25px;
`;
export const ImageOfBook2 = styled.img`
  width: 100%;
  height: 100%;
  padding: 25px;
`;

export const SpanBookTitle = styled.span`
  font-size: 15px;
  letter-spacing: 0.06rem;
  line-height: 1.06;
  text-align: start;
  font-weight: bold;
  color: #ffca00;
`;

export const HomeH1 = styled.h1`
  margin-top: 100px;
  color: #fff;
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

export const HomeP = styled.p`
  margin-top: 24px;
  color: rgb(0, 0, 0);
  font-size: 24px;
  text-aling: center;
  max-width: 600px;
  font-weight: bolder;

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

export const HomeButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
