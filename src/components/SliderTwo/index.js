import React, { useState } from "react";
import { data, data2 } from "./SliderTwoData";
import { sliderSettings, sliderSettings2 } from "./SliderTwoData";
import {
  Heading,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
  SpanHeader1,
  SpanHeader2,
  Section,
} from "./SliderTwoElements";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [sliderRef2, setSliderRef2] = useState(null);

  return (
    <Section inverse>
      <Heading>
        <SpanHeader1>| </SpanHeader1>
        NAŠI PARTNERI
      </Heading>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {data.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} />
          </ImageWrapper>
        ))}
      </ReviewSlider>

      <ReviewSlider {...sliderSettings2} ref={setSliderRef2}>
        {data2.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} />
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  );
};

export default Carousel;
