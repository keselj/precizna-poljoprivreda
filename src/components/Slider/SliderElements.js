import styled from "styled-components";

export const SliderContaner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SliderH1 = styled.h1`
  margin-top: 100px;
  color: rgb(0, 0, 0);
  font-size: 36px;
  text-align: center;
  font-weight: bold;
`;

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 300px;
`;

export const ArrowWrapper = styled.div``;

export const Arrow = styled.div`
  position: absolute;
  filter: drop-shadow(0px 0px 5px #555);
  width: 2rem;
  height: 2rem;
  color: white;
  cursor: pointer;

  &.arrow-left {
    left: 1rem;
  }

  &.arrow-right {
    right: 1rem;
  }
`;

export const Slide = styled.img`
  border-radius: 0.5rem;
  box-shadow: 0px 0px 7px #666;
  width: 250px;
  height: 150px;
  &.slide-hidden {
    display: none;
  }
`;

export const Indicators = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
`;

export const Indicator = styled.button`
  background-color: white;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 100%;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px #555;
  margin: 0 0.2rem;
  cursor: pointer;

  &.indicator-inactive {
    background-color: grey;
  }
`;
