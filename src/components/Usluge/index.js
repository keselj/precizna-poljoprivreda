import React, { useState } from "react";
import { IconContext } from "react-icons";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import {
  UslugeData2,
  UslugeData,
  uslugeSliderSettingsTwo,
  uslugeSliderSettings,
} from "./UslugeData";

import { ArrowForward, ArrowRight } from "../HomePage/HomePageElements";
import {
  UslugeContainer,
  SliderWrapper,
  UslugeWrapper,
  UslugeCard,
  UslugeH1,
  UslugePh1,
  WrapperH1P,
  UslugeH2,
  UslugeIcon,
  UslugeP,
  UslugeIconWrapper,
  UslugeH2PWrapper,
  ButtonContainer,
  ReviewSliderKursevi,
  UslugeCardTwo,
  UslugeH2PWrapperTwo,
  UslugeH2Two,
  UslugeIconTwo,
  UslugeIconWrapperTwo,
  UslugeWrapperTwo,
  SliderTwoContainer,
  ReviewSliderTwo,
  SliderContainer,
} from "./UslugeElements";

import { Button } from "../ButtonElement";

const Usluge = () => {
  const [hover, setHover] = useState(false);
  const [sliderRefUsluge, setSliderRefUsluge] = useState(null);
  const [sliderRefTwoUsluge, setSliderRefTwoUsluge] = useState(null);
  function handleArrowClick2(direction) {
    if (direction === "left") {
      sliderRefUsluge.slickPrev();
      sliderRefTwoUsluge.slickPrev();
    } else if (direction === "right") {
      sliderRefUsluge.slickNext();
      sliderRefTwoUsluge.slickNext();
    }
  }
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <UslugeContainer>
      <SliderWrapper>
        <SliderContainer>
          <SliderTwoContainer>
            <ReviewSliderTwo
              {...uslugeSliderSettingsTwo}
              ref={setSliderRefUsluge}
            >
              {UslugeData2.map((el, index) => (
                <UslugeWrapperTwo>
                  <UslugeCardTwo key={index}>
                    <UslugeIconWrapperTwo>
                      <UslugeIconTwo src={el.src} alt={el.alt} />
                    </UslugeIconWrapperTwo>
                    <UslugeH2PWrapperTwo>
                      <UslugeH2Two>{el.title}</UslugeH2Two>
                    </UslugeH2PWrapperTwo>
                  </UslugeCardTwo>
                </UslugeWrapperTwo>
              ))}
            </ReviewSliderTwo>
            <ButtonContainer>
              <IconContext.Provider value={{ size: "5rem", color: "#000" }}>
                <MdKeyboardArrowLeft
                  onClick={() => handleArrowClick2("left")}
                />
                <MdKeyboardArrowRight
                  onClick={() => handleArrowClick2("right")}
                />
              </IconContext.Provider>
            </ButtonContainer>
          </SliderTwoContainer>
          <ReviewSliderKursevi
            {...uslugeSliderSettings}
            ref={setSliderRefTwoUsluge}
          >
            {UslugeData.map((el, index) => (
              <UslugeWrapper>
                <UslugeCard key={index}>
                  <UslugeIconWrapper>
                    <UslugeIcon src={el.src} alt={el.alt} />
                  </UslugeIconWrapper>
                  <UslugeH2PWrapper>
                    <UslugeH2>{el.title}</UslugeH2>
                    <UslugeP> {el.description}</UslugeP>
                  </UslugeH2PWrapper>
                </UslugeCard>
              </UslugeWrapper>
            ))}
          </ReviewSliderKursevi>
        </SliderContainer>
      </SliderWrapper>
      <WrapperH1P>
        <UslugeH1>Usluge</UslugeH1>
        <UslugePh1>
          U saradnji sa specijalizovanim stručnim firmama iz oblasti
          poljoprivrede, pružamo vam usluge za unapređenje vašeg poslovanja.
          Naša ponuda bazira se na implementaciji najnovijih tehnologija u
          poljoprivrednoj proizvodnji.
        </UslugePh1>
        <Button to="usluge" onMouseEnter={onHover} onMouseLeave={onHover}>
          Pregeled svih Usluga {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </WrapperH1P>
    </UslugeContainer>
  );
};

export default Usluge;
