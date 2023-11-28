import { useState, useEffect } from "react";
import React from "react";
import "slick-carousel/slick/slick.css";
import data from "./Kursevi2Data";
import {
  Img,
  Description,
  Title,
  Slider1,
  MainContainer,
  CardContener,
  CardBig,
  CardSmall,
  ArrowRight,
  ArrowLeft,
} from "./Kursevi2Elements";

const Kursevi2 = () => {
  const sliderRef = React.useRef(null);

  const [bigCardIndex, setBigCardIndex] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => {
      setBigCardIndex(next);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleMoveToBigCard = (index) => {
    if (index !== bigCardIndex) {
      setBigCardIndex(index);
    }
  };
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  useEffect(() => {
    const slider = document.getElementsByClassName("slick-track")[0];
    if (slider) {
      slider.addEventListener("transitionend", () => {
        const allCards = document.getElementsByClassName("slick-slide");
        for (let i = 0; i < allCards.length; i++) {
          if (parseInt(allCards[i].style.left, 10) === 0) {
            handleMoveToBigCard(parseInt(allCards[i].dataset.index, 10));
            break;
          }
        }
      });
    }
  }, [bigCardIndex]);

  return (
    <MainContainer>
      <Slider1 ref={(slider) => (sliderRef.current = slider)} {...settings}>
        {data.map((item, index) => (
          <CardContener key={index}>
            {index === bigCardIndex ? (
              <CardBig>
                <Img src={item.src} alt={item.alt} />
                <Title>{item.title}</Title>
                {index === bigCardIndex ? (
                  <Description>{item.description}</Description>
                ) : null}
              </CardBig>
            ) : (
              <CardSmall onClick={() => handleMoveToBigCard(index)}>
                <Img src={item.src} alt={item.alt} />
                <Title>{item.title}</Title>
              </CardSmall>
            )}
          </CardContener>
        ))}
      </Slider1>
      <ArrowLeft onClick={handlePrevious} />
      <ArrowRight onClick={handleNext} />
    </MainContainer>
  );
};

export default Kursevi2;
