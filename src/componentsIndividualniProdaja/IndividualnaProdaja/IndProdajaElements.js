import styled from "styled-components";
import { Link } from "react-router-dom";

export const IndividualniKursContainer = styled.div`
  height: auto;
  text-align: left;
  padding: 100px;

  @media screen and (max-width: 1366px) {
    padding: 0;
    max-width: 1293px;
  }
`;

export const ImgAtTop = styled.img`
  width: 135px;
  height: 135px;
`;

export const FormLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 26px;

  @media screen and (max-width: 375px) {
    flex-direction: column;
    gap: 25px;
  }

  @media screen and (max-width: 414px) {
    flex-direction: column;
    gap: 25px;
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
    gap: 25px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 25px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 55px;
  }
`;
export const UpperContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex: 1;
  border-radius: 15px;
  background-color: #fff;
  width: 100%;
  justify-items: center;

  @media (max-width: 375px) {
    width: 99.5%; /* Take full width of the parent */
    padding: 15px; /* Adjust padding to suit smaller screen */
    border-radius: 10px; /* Adjust border radius for smaller screen */
    box-shadow: 1px 1px 10px rgb(26, 26, 26); /* Adjust shadow if needed */
  }

  @media screen and (max-width: 414px) {
    width: 99.5%;
  }

  @media screen and (max-width: 430px) {
    width: 99.5% !important;
  }

  @media screen and (max-width: 412px) {
    width: 99.5%;
  }

  @media screen and (max-width: 540px) {
    width: 99.5%;
  }
`;

export const UpperLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const UpperRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
`;

export const NameOfProduct = styled.h2`
  margin-top: 55px;
  font-size: 40px;
  text-align: start;
  margin-bottom: 24px;

  @media screen and (max-width: 375px) {
    font-size: 25px;
    margin-top: 100px;
  }

  @media screen and (max-width: 414px) {
    font-size: 25px;
    margin-top: 110px;
  }



  @media screen and (max-width: 430px) {
    font-size: 25px;

    margin-top: 110px;
  }

  @media screen and (max-width: 540px) {
    font-size: 25px;

    margin-top: 110px;
`;

export const DurationShort = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Price = styled.h5`
  font-weight: bold;
  font-size: 30px;
`;

export const PDViDostava = styled.p`
  font-size: 1em;
  margin-left: 30px;
`;

export const NoteBatteries = styled.h2`
  margin-bottom: 10px;
  font-size: 2.308rem;

  @media screen and (max-width: 375px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 414px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 390px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 430px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 360px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 412px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 344px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 412px) {
    word-spacing: 4px;
    line-height: 19px;
    letter-spacing: 0px;
  }
`;

export const KolicinaContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Minus = styled.span`
  border: 1px solid rgba(110, 110, 110, 0.5);
  height: 34px;
  width: 34px;
  border-radius: 50%;
  opacity: 0.5;
  cursor: pointer;
  display: flex;
  padding-bottom: 3.5px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: transparent;
  }
`;

export const Kolicina = styled.div`
  font-size: 23px;
  color: #6e6e6e;
  background-color: transparent;
  width: 1px;
  min-width: 50px;
  padding: 0;
  border: 0;
  box-shadow: none;
  text-align: center;
`;

export const Plus = styled.button`
  border: 1px solid rgba(110, 110, 110, 0.5);
  height: 34px;
  width: 34px;
  border-radius: 50%;
  opacity: 0.5;
  cursor: pointer;
  display: flex;
  padding-bottom: 3.5px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: transparent;
`;

export const ImageGalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  flex: 1;
`;
export const ThumbnailColumn = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 400px;
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }
`;

export const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 10px;
  cursor: pointer;
  border: 2px solid ${(props) => (props.selected ? "#000" : "transparent")};
  transition: all 0.3s ease;
`;

export const MainImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  height: 400px;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;
export const ZoomedImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.zoom * 100}%;
  opacity: ${(props) => (props.isZoomed ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

//// NOVI KOJI RADE

export const DownContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stacking sections vertically */
  width: 100%;
  padding: 20px;
  box-shadow: 2px 2px 15px rgb(26, 26, 26);
  border-left: 5px solid rgb(17, 29, 30);
  background-color: #fff;
  margin-top: 20px;
`;

export const OpisContainer = styled.div`
  width: 100%;
  padding: ${(props) => (props.isVisible ? "20px" : "0")};
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-top: 10px;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  max-height: ${(props) =>
    props.isVisible ? "2000px" : "0"}; /* Smooth transition */
  overflow: hidden;
  transition: opacity 0.4s ease, max-height 0.4s ease, padding 0.4s ease;
`;

export const OpisTitle = styled.h2`
  cursor: pointer;
  font-size: 24px;
  text-align: center;
  padding: 10px;
  color: #333;
  border-bottom: ${({ active }) => (active ? "3px solid #333" : "none")};
  transition: border-bottom 0.3s ease;
  &:hover {
    color: #000;
  }
`;

export const OpisTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
`;

export const PrviOpisContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9; /* Add background for separation */
  border-radius: 10px;
  margin-bottom: 20px;

  @media screen and (max-width: 375px) {
    padding: 10px; /* Reduce padding for mobile */
  }

  @media screen and (max-width: 430px) {
    padding: 10px;
  }
`;

export const ImeArtikla = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;

  @media screen and (max-width: 375px) {
    font-size: 20px;
  }

  @media screen and (max-width: 430px) {
    font-size: 20px;
  }
`;

export const PrviOpisArtikla = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
  margin-bottom: 10px;

  @media screen and (max-width: 375px) {
    font-size: 14px;
  }

  @media screen and (max-width: 430px) {
    font-size: 14px;
  }
`;

export const PrveVrednostiArtiklaContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 375px) {
    flex-direction: column; /* Stack values vertically on smaller screens */
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

export const MaxVremeLeta = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const ZastitaKlase = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const Transmisition = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const DaljinskiUpravljac = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const SenzoriArtikla = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const NocnaKamera = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const Tereni = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const DrugiOpisArtikla = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
  margin-bottom: 20px;
`;

export const DrugeVrednostiArtiklaContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;

  @media screen and (max-width: 375px) {
    flex-direction: column;
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

export const KlasaZastite = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const MaxNosivost = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const OtpNaVetar = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const RadnaTemp = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const MaxVisina = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const OstaliOpisContainer = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;

  @media screen and (max-width: 375px) {
    padding: 10px;
  }

  @media screen and (max-width: 430px) {
    padding: 10px;
  }
`;

export const DrugiNaslov = styled.h3`
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;

  @media screen and (max-width: 375px) {
    font-size: 18px;
  }

  @media screen and (max-width: 430px) {
    font-size: 18px;
  }
`;

export const DrugiOpisDescription = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const TreciNaslov = styled.h3`
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;

  @media screen and (max-width: 375px) {
    font-size: 18px;
  }

  @media screen and (max-width: 430px) {
    font-size: 18px;
  }
`;

export const TreciOpisDescription = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const CetvrtiNaslov = styled.h3`
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;

  @media screen and (max-width: 375px) {
    font-size: 18px;
  }

  @media screen and (max-width: 430px) {
    font-size: 18px;
  }
`;

export const CetvrtiOpisDescription = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const PetiNaslov = styled.h3`
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;

  @media screen and (max-width: 375px) {
    font-size: 18px;
  }

  @media screen and (max-width: 430px) {
    font-size: 18px;
  }
`;

export const PetiOpisDescription = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const SestiNaslov = styled.h3`
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;

  @media screen and (max-width: 375px) {
    font-size: 18px;
  }

  @media screen and (max-width: 430px) {
    font-size: 18px;
  }
`;

export const SestiOpisDescription = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

export const BaterijaArtikla = styled.p`
  font-size: 16px;
  color: rgba(110, 110, 110, 0.98);
`;

//Sidebar

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f5f5f5;
  padding: 20px;
  position: fixed;
  height: 100%;
  overflow-y: auto;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
`;

export const SidebarLink = styled(Link)`
  display: block;
  padding: 10px 15px;
  margin-bottom: 10px;
  color: #333;
  text-decoration: none;
  font-size: 18px;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #ddd;
    color: #000;
  }

  &:active {
    background-color: #ccc;
    color: #333;
  }
`;
