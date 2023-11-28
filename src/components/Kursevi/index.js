import React, { useState } from "react";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import { IconContext } from "react-icons";
import {
  data,
  dataSecond,
  sliderSettings,
  sliderSettingsTwo,
} from "./KurseviData";

import { ArrowForward, ArrowRight } from "../HomePage/HomePageElements";
import {
  KursContainer,
  KursH1,
  KursWrapper,
  KursPh1,
  WrapperH1P,
  KursCard,
  SliderWrapper,
  KursH2,
  KursIcon,
  KursP,
  KursIconWrapper,
  KursH2PWrapper,
  ButtonContainer,
  ReviewSliderKursevi,
  KursCardTwo,
  KursH2PWrapperTwo,
  KursH2Two,
  KursIconTwo,
  KursIconWrapperTwo,
  KursWrapperTwo,
  SliderTwoContainer,
  ReviewSliderTwo,
  SliderContainer,
} from "./KurseviElements";

import { Button } from "../ButtonElement";

const Kursevi = () => {
  const [hover, setHover] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);
  const [sliderRefTwo, setSliderRefTwo] = useState(null);

  function handleArrowClick(direction) {
    if (direction === "left") {
      sliderRef.slickPrev();
      sliderRefTwo.slickPrev();
    } else if (direction === "right") {
      sliderRef.slickNext();
      sliderRefTwo.slickNext();
    }
  }

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <KursContainer>
      <WrapperH1P>
        <KursH1>Kursevi</KursH1>
        <KursPh1>
          U okviru naše platforme, pružamo intezivne specijalizovane kurseve
          koji se održavaju na Poljoprivrednom fakultetu u Novom Sadu iz oblasti
          savremene poljoprivrede. Predavači na kursevima su stručnjaci
          zaposleni na Poljoprivrednom fakultetu i drugim naučno-istraživačkim
          institucijama, kao i eksperti iz privrede sa velikim radnim iskustvom
        </KursPh1>
        <Button to="/kursevi" onMouseEnter={onHover} onMouseLeave={onHover}>
          Pregeled svih Kurseva {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </WrapperH1P>
      <SliderWrapper>
        <SliderContainer>
          <ReviewSliderKursevi {...sliderSettings} ref={setSliderRefTwo}>
            {data.map((el, index) => (
              <KursWrapper>
                <KursCard key={index}>
                  <KursIconWrapper>
                    <KursIcon src={el.src} alt={el.alt} />
                  </KursIconWrapper>
                  <KursH2PWrapper>
                    <KursH2>{el.title}</KursH2>
                    <KursP> {el.description}</KursP>
                  </KursH2PWrapper>
                </KursCard>
              </KursWrapper>
            ))}
          </ReviewSliderKursevi>
          <SliderTwoContainer>
            <ReviewSliderTwo {...sliderSettingsTwo} ref={setSliderRef}>
              {dataSecond.map((el, index) => (
                <KursWrapperTwo>
                  <KursCardTwo key={index}>
                    <KursIconWrapperTwo>
                      <KursIconTwo src={el.src} alt={el.alt} />
                    </KursIconWrapperTwo>
                    <KursH2PWrapperTwo>
                      <KursH2Two>{el.title}</KursH2Two>
                    </KursH2PWrapperTwo>
                  </KursCardTwo>
                </KursWrapperTwo>
              ))}
            </ReviewSliderTwo>
            <ButtonContainer>
              <IconContext.Provider value={{ size: "5rem", color: "#000" }}>
                <MdKeyboardArrowLeft onClick={() => handleArrowClick("left")} />
                <MdKeyboardArrowRight
                  onClick={() => handleArrowClick("right")}
                />
              </IconContext.Provider>
            </ButtonContainer>
          </SliderTwoContainer>
        </SliderContainer>
      </SliderWrapper>
    </KursContainer>
  );
};

export default Kursevi;
