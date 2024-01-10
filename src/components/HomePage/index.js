import React, { useState } from "react";
// import { Button } from "../ButtonElement";
import KrleiZokiBook from "./images/ZKKnjiga.jpg";
import MarkoKnjigaImage from "./images/MarkovaKnjiga.png";
import {
  HomePageContainer,
  HomeBackground,
  ImageBackground,
  HomeContent,
  KrleIZokiKnjiga,
  MarkoKnjiga,
  PreNaslovKnjige,
  TitleOfBook,
  PUmderTitle,
  BigYellowButton,
  ImageOfBook,
  ImageOfBook2,
  ImageWrapper,
  SpanBookTitle,
} from "./HomePageElements";

const HomePageSection = () => {
  const handleButtonClick = () => {
    window.open(
      "http://polj.uns.ac.rs/sites/default/files/udzbenici/Precizna%20poljoprivreda%20-%20Kosti%C4%87%20Marko%20kona%C4%8Dno.pdf",
      "_blank"
    );
  };

  return (
    <HomePageContainer id="home">
      <HomeBackground>
        <ImageBackground />
      </HomeBackground>
      <HomeContent>
        <KrleIZokiKnjiga>
          <ImageWrapper>
            <ImageOfBook src={KrleiZokiBook} />
          </ImageWrapper>
          <PreNaslovKnjige>
            <SpanBookTitle>| </SpanBookTitle>U PRIPREMI NOVI TIRAŽ
          </PreNaslovKnjige>
          <TitleOfBook>"ZNANJE ZA BOLJE PRINOSE"</TitleOfBook>
          <PUmderTitle>Reklamirajte se u našoj knjizi</PUmderTitle>{" "}
          <PUmderTitle>i privucite stotine novih </PUmderTitle>{" "}
          <PUmderTitle>klijenata</PUmderTitle>
          <BigYellowButton>VIŠE INFORMACIJA</BigYellowButton>
        </KrleIZokiKnjiga>
        <MarkoKnjiga>
          <ImageWrapper>
            <ImageOfBook2 src={MarkoKnjigaImage} />
          </ImageWrapper>
          <PreNaslovKnjige>
            <SpanBookTitle>| </SpanBookTitle>KNJIGA
          </PreNaslovKnjige>
          <TitleOfBook>"PRECIZNA POLJOPRIVREDA"</TitleOfBook>
          <PUmderTitle>Prof. dr Marko Kostić</PUmderTitle>
          <PUmderTitle>Poljoprivredni Fakultet</PUmderTitle>
          <PUmderTitle>Novi Sad</PUmderTitle>
          <BigYellowButton onClick={handleButtonClick}>
            PREUZMITE PDF Besplatno
          </BigYellowButton>
        </MarkoKnjiga>
      </HomeContent>
    </HomePageContainer>
  );
};

export default HomePageSection;

{
  /* <HomeH1>Krle i Zoki Prestavljaju</HomeH1>
        <HomeP>Kursevi na kojima nesto i naucite a nesto i platite</HomeP> */
}
{
  /* <HomeButtonWrapper>
          <Button to="onama" onMouseEnter={onHover} onMouseLeave={onHover}>
            Kupi odma {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HomeButtonWrapper> */
}
