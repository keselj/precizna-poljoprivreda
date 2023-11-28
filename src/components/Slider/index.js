import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import {
  SliderContaner,
  SliderH1,
  SliderWrapper,
  ArrowWrapper,
  Arrow,
  Slide,
  Indicator,
  Indicators,
} from "./SliderElements";

const data = [
  {
    src: "http://tupanjac.rs/wp-content/uploads/2017/02/logo4-2.jpg",
    alt: "Tupanjac",
  },
  {
    src: "https://mikron-doo.rs/wp-content/themes/mikron_v2/assets/images/logo.svg",
    alt: "Mikron",
  },
  {
    src: "https://assets.corteva.com/is/image/Corteva/LOG-Corteva_Logo-Corporate-Global-V1",
    alt: "Corteva",
  },
  {
    src: "https://www.deltaagrar.rs/images/template/logo.png",
    alt: "Deltaagrar",
  },
  {
    src: "https://www.kitedoo.rs/wp-content/uploads/2022/05/logo-kite-doo.png",
    alt: "Kitedoo",
  },
];

const Slider = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <SliderContaner>
      <SliderH1>Naši Parteri</SliderH1>
      <SliderWrapper>
        <Arrow className="arrow arrow-left" onClick={prevSlide}>
          <BsArrowLeftCircleFill />
        </Arrow>

        {data.map((item, idx) => {
          return (
            <Slide
              key={idx}
              src={item.src}
              alt={item.alt}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <Arrow className="arrow arrow-right" onClick={nextSlide}>
          <BsArrowRightCircleFill />
        </Arrow>
        <Indicators>
          {data.map((_, idx) => {
            return (
              <Indicator
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              />
            );
          })}
        </Indicators>
      </SliderWrapper>
    </SliderContaner>
  );
};

export default Slider;
