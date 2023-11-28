import React, { useState } from "react";
// import "./YourSliderStyles.css"; // Don't forget to link your styles

const YourSlider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length);
  };

  const getSlideStyle = (index) => {
    if (index === 0) {
      return {
        width: "432px",
        height: "620px",
        background: "black",
        borderRadius: "10px",
      };
    } else {
      return {
        width: "320px",
        height: "440px",
        background: "black",
        borderRadius: "10px",
      };
    }
  };

  return (
    <div className="your-slider-container">
      <div className="slider-arrow left-arrow" onClick={prevSlide}>
        {"<"}
      </div>
      {data.map((item, index) => (
        <div
          key={item.id}
          className="slider-slide"
          style={getSlideStyle(index)}
        >
          <img src={item.src} alt={item.alt} />
          <div className="slide-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      <div className="slider-arrow right-arrow" onClick={nextSlide}>
        {">"}
      </div>
    </div>
  );
};

export default YourSlider;
