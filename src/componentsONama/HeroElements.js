import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1eeee;

  @media screen and (max-width: 414px) {
    overflow-x: hidden;
  }

  @media screen and (max-width: 430px) {
    overflow-x: hidden;
  }

  @media screen and (max-width: 360px) {
    overflow-x: hidden;
  }

  @media screen and (max-width: 768px) {
    overflow-x: hidden;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
// background: url(${image1}) no-repeat center center fixed;

// export const BackgroundImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   opacity: 0.5;
// `;

// export const ColorOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: #yourColor; // Replace with your desired color
//   opacity: 0.3;
// `;

export const Title = styled.h2`
  margin-top: 170px;
  color: rgb(0, 0, 0);
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  width: 500px;

  @media screen and (max-width: 412px) {
    font-size: 18px !important;
    margin-top: 140px;
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and {
    max-width: 480px;
  }
   {
    font-size: 32px;
  }

  @media screen and (max-width: 414px) {
    font-size: 23px;
  }

  @media screen and (max-width: 430px) {
    font-size: 23px;
  }

  @media screen and (max-width: 360px) {
    font-size: 17px;
    width: 90%;
    margin-top: 140px;
  }

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 38px;
  }

  @media screen and (max-width: 280px) {
    font-size: 18px;
  }

  @media screen and (max-width: 412px) {
    font-size: 23px !important;
  }
`;

export const TwoImagesContainer = styled.div`
  display: flex;
  margin: 50px 0;
  height: 550px;
  max-width: 1300px;
  justify-content: space-between;
  align-items: center;
  background-color: #f1eeee;

  @media screen and (max-width: 414px) {
    flex-direction: column;
    gap: 50px;
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
    gap: 50px;
  }

  @media screen and (max-width: 360px) {
    flex-direction: column;
    gap: 50px;
    margin-top: 300px;
    margin-right: 40px;
    margin-bottom: 0px;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-left: 0px;
  }

  @media screen and (max-width: 412px) {
    flex-direction: column;
    gap: 50px;
    margin-top: 300px;
    margin-right: 0px;
    margin-bottom: 0px;
  }

  @media screen and (max-width: 280px) {
    width: 10%;
  }
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

  @media screen and (max-width: 768px) {
    margin: 0 40px;
  }

  @media screen and (max-width: 360px) {
    &:hover {
      transform: none;
      transition: none;
    }
  }

  @media screen and (max-width: 280px) {
    width: 1000%;
    margin-left: 80px;
  }
`;

export const ZokiImage = styled.img`
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ZokiDescriptionIme = styled.p`
  text-align: center;
  background-color: #f1eeee;
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

export const ZokiDescription = styled.p`
  text-align: center;
  background-color: #f1eeee;
  color: #000;
  font-size: 16px;
`;

export const KrleDescriptionIme = styled.p`
  text-align: center;
  background-color: #f1eeee;
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

}
  @media screen and (max-width: 768px) {
    margin: 0 40px;

    }

  @media screen and (max-width: 360px) {
    &:hover {
      transform: none;
      transition: none;
  }

  @media screen and (max-width: 280px) {
    width: 1000%;
    margin-left: 80px;
  }
`;

export const KrleImage = styled.img`
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const KrleDescription = styled.p`
  text-align: center;
  font-size: 16px;
  color: #000;
  background-color: #f1eeee;
`;

export const SecondTitleandDescriptionContainer = styled.div`
  font-size: 18px;
  text-align: center;

  @media screen and (max-width: 414px) {
    margin-top: 500px;
  }

  @media screen and (max-width: 430px) {
    margin-top: 500px;
  }

  @media screen and (max-width: 360px) {
    margin-top: 350px;
  }
`;

export const SecondTitle = styled.h4`
  font-size: 28px;
  text-align: center;
  margin-bottom: 50px;
  font-weight: bold;

  @media screen and (max-width: 375px) {
    margin-left: 0 !important;
    font-size: 23px;
    width: 100% !important;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-left: 45px;
  }

  @media screen and (max-width: 414px) {
    margin-left: 0 !important;
    font-size: 23px !important;
    width: 100% !important;
    margin-top: -120px;
  }

  @media screen and (max-width: 430px) {
    margin-left: 0 !important;
    font-size: 23px !important;
    width: 100% !important;
    margin-top: -120px;
  }

  @media screen and (max-width: 360px) {
    margin-left: 0 !important;
    font-size: 23px !important;
    width: 100% !important;
    margin-top: 0 !important;
  }

  @media screen and (max-width: 412px) {
    margin-left: 0 !important;
    font-size: 23px !important;
    width: 100% !important;
  }

  @media screen and (max-width: 1024px) {
    font-size: 35px;
  }

  @media screen and (max-width: 280px) {
    margin-left: 0 !important;
    font-size: 23px !important;
    width: 100% !important;
  }
`;

export const DescriptionTwo = styled.p`
  font-size: 16px;
  text-align: start;
  margin: 30px;
  padding: 0 120px;
  line-height: 35px;

  @media screen and (max-width: 375px) {
    text-align: center;
    font-weight: 500;
    font-size: 17px !important;
    word-spacing: 4px;
    line-height: 23px;
    letter-spacing: 1px;
    padding: 0;
    margin: 30px 0;
  }

  @media screen and (max-width: 412px) {
    text-align: center;
    font-weight: 500;
    font-size: 17px !important;
    word-spacing: 4px;
    line-height: 23px;
    letter-spacing: 1px;
    padding: 0;
    margin: 30px 0;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    font-weight: 500;
    font-size: 17px !important;
    word-spacing: 4px;
    line-height: 23px;
    letter-spacing: 1px;
    padding: 0;
    margin: 30px 0;
  }

  @media screen and (max-width: 820px) {
    text-align: center;
    font-weight: 500;
    font-size: 17px !important;
    word-spacing: 4px;
    line-height: 23px;
    letter-spacing: 1px;
    padding: 0;
    margin: 30px 0;
  }

  @media screen and (max-width: 1024px) {
    text-align: center;
    font-weight: 500;
    font-size: 17px !important;
    word-spacing: 4px;
    line-height: 23px;
    letter-spacing: 1px;
    padding: 0;
    margin: 30px 0;
  }

  @media screen and (max-width: 280px) {
    text-align: center;
    font-weight: 500;
    font-size: 17px !important;
    word-spacing: 4px;
    line-height: 23px;
    letter-spacing: 1px;
    padding: 0;
    margin: 30px 0;
  }
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

  @media screen and (max-width: 360px) {
    font-size: 19px;
    margin-top: -30px;
  }

  @media screen and (max-width: 412px) {
    margin-top: -20px;
    font-size: 23px !important;
  }

  @media screen and (max-width: 1024px) {
    margin-top: -20px;
    font-size: 35px;
  }

  @media screen and (max-width: 280px) {
    font-size: 18px;
  }
`;

export const RestOfTeamContainerImages = styled.div`
  display: flex;
  height: 100%;
  max-width: 1300px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 80px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    width: 80%;
    margin-left: 90px;
  }

  @media screen and (max-width: 414px) {
    flex-direction: column;
    gap: 25px;
    margin-left: 50px;
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
    gap: 25px;
    margin-left: 50px;
  }

  @media screen and (max-width: 360px) {
    flex-direction: column;
    margin-left: 0px;
    margin-top: -55px;
  }

  @media screen and (max-width: 412px) {
    margin-top: -55px;
    margin-right: 50px;
  }

  @media screen and (max-width: 820px) {
    gap: 0px;
  }

  @media screen and (max-width: 280px) {
    gap: 20px;
  }
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

}

  @media screen and (max-width: 768px) {
    flex-basis: calc(100% / 2 - 40% );
    margin: 20px 10px;
  }

  @media screen and (max-width: 360px) {
    &:hover {
      transform: none;
      transition: none;
  }

  @media screen and (max-width: 820px) {
    margin: 0 12px;
  }
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
