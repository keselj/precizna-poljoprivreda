import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

import image1 from "../../images/background/pojacanKontrast.png";
import image2 from "../../images/background/image2.jpg";
import image3 from "../../images/background/image3.jpg";
import image4 from "../../images/background/image4.jpg";
import artwork from "../../images/background/artwork22.jpg";

export const HomePageContainer = styled.div`
  background: rgb(130, 130, 130);

  display: flex;
  justify-content: end;
  aling-items: center;
  padding: 0 30px;
  height: 700px;
  position: relative;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-grdient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
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
  background: url(${image1}) no-repeat center center fixed;
  background-size: cover;
`;

export const HomeContent = styled.div`
  z-index: 3;
  max-width: 1700px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
