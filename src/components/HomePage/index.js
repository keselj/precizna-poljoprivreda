import React, { useState } from "react";
import { Button } from "../ButtonElement";
import {
  HomePageContainer,
  HomeBackground,
  ImageBackground,
  HomeContent,
  HomeH1,
  HomeP,
  HomeButtonWrapper,
  ArrowForward,
  ArrowRight,
} from "./HomePageElements";

const HomePageSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HomePageContainer id="home">
      <HomeBackground>
        <ImageBackground></ImageBackground>
      </HomeBackground>
      <HomeContent>
        <HomeH1>Krle i Zoki Prestavljaju</HomeH1>
        <HomeP>Kursevi na kojima nesto i naucite a nesto i platite</HomeP>
        <HomeButtonWrapper>
          <Button to="onama" onMouseEnter={onHover} onMouseLeave={onHover}>
            Kupi odma {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HomeButtonWrapper>
      </HomeContent>
    </HomePageContainer>
  );
};

export default HomePageSection;
