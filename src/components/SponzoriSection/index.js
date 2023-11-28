import React from "react";
import { Button } from "../ButtonElement";

import {
  ReklamaContainer,
  ReklamaWrapper,
  ReklamaRow,
  Column1,
  TextWrapper,
  Column2,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./SponzoriElements";

const SponzoriSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lighText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <ReklamaContainer lightBg={lightBg} id={id}>
        <ReklamaWrapper>
          <ReklamaRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lighText={lighText}>{headline}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                <BtnWrap>
                  <Button
                    to="onama"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </ReklamaRow>
        </ReklamaWrapper>
      </ReklamaContainer>
    </>
  );
};

export default SponzoriSection;
