import styled from "styled-components";
import image1 from "../images/Logo/logoFax.png";

export const HeroContainer = styled.div`
  max-width: 1700px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1eeee;
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
// background: url(${image1}) no-repeat center center fixed;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  opacity: 0.5;
`;

export const ColorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #yourColor; // Replace with your desired color
  opacity: 0.3;
`;

export const Title = styled.h2`
  margin-top: 170px;
  color: rgb(0, 0, 0);
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  width: 500px;

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

export const TwoImagesContainer = styled.div`
  display: flex;
  margin: 50px 0;
  height: 550px;
  max-width: 1300px;
  justify-content: space-between;
`;

export const ZokiContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 530px;
  width: 300px;
  margin: 0 80px;
  box-shadow: 0 2px 50px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
  color: #fff;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;

    filter: grayscale(0%);
  }
`;

export const ZokiImage = styled.img`
  margin-bottom: 15px;
`;

export const ZokiDescriptionIme = styled.p`
  text-align: center;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

export const ZokiDescription = styled.p`
  text-align: center;
  background-color: #fff;
  color: #000;
  font-size: 16px;
`;

export const KrleDescriptionIme = styled.p`
  text-align: center;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

export const KrleContainer = styled.div`
display: flex;
flex-direction: column;
height: 530px;
width: 300px;
margin: 0 80px;
box-shadow: 0 2px 50px rgba(0, 0, 0, 0.4);
transition: all 0.2s ease-in-out;
color: #fff;
line-height: 20px;



&:hover {
  transform: scale(1.1);
  transition: all 0.2s ease-in-out;

  filter: grayscale(0%);
`;

export const KrleImage = styled.img`
  margin-bottom: 15px;
`;

export const KrleDescription = styled.p`
  text-align: center;
  font-size: 16px;
  color: #000;
`;

export const SecondTitleandDescriptionContainer = styled.div`
  font-size: 18px;
  text-align: center;
`;

export const SecondTitle = styled.h4`
  font-size: 28px;
  text-align: center;
  margin-bottom: 50px;
  font-weight: bold;
`;

export const DescriptionTwo = styled.p`
  font-size: 16px;
  text-align: start;
  margin: 30px;
  padding: 0 120px;
  line-height: 35px;
`;

export const RestOfTeamContainer = styled.div`
  display: flex;
  margin: 50px 0;
  height: 100%;
  max-width: 1300px;
  justify-content: space-between;
  flex-direction: column;
`;

export const RestOfTheTeamTitle = styled.h5`
  font-size: 28px;
  text-align: center;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 80px;
`;

export const RestOfTeamContainerImages = styled.div`
  display: flex;
  height: 100%;
  max-width: 1300px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 80px;
`;

export const CardOfTeamMember = styled.div`
display: flex;
flex-direction: column;
text-align: start;
height: 445px;
width: 235px;
margin: 0 20px;
box-shadow: 0 2px 50px rgba(0, 0, 0, 0.4);
transition: all 0.2s ease-in-out;
color: #fff;
line-height: 20px;



&:hover {
  transform: scale(1.1);
  transition: all 0.2s ease-in-out;

  filter: grayscale(0%);
`;

export const ImageOfTeamMember = styled.img`
  height: 350px;
  width: 235px;
  margin-bottom: 20px;
`;

export const DescriptionOfTeamMember = styled.p`
  text-align: center;
  font-size: 12px;
  color: #000;
  padding: 0 10px;
  margin-bottom: 20px;
`;
