import React, { useState } from "react";
import HomePageSection from "../components/HomePage";
import SponzoriSection from "../components/SponzoriSection";
import {
  homeObjectOne,
  homeObjectThree,
  homeObjectTwo,
} from "../components/SponzoriSection/Data";

import Usluge from "../components/Usluge";
import Footer from "../components/Footer";
import Kursevi from "../components/Kursevi";
import SliderTwo from "../components/SliderTwo";
import Kursevi2 from "../components/Kursevi2";
import YourSlider from "../components/TestSlider";

import data from "../components/Kursevi2/Kursevi2Data";
import Layout from "./Layout";

const Home = () => {
  return (
    <>
      <Layout />
      <HomePageSection />
      <Kursevi />
      <Usluge />
      <SliderTwo />
      {/* <YourSlider data={data} /> */}
      {/* <SponzoriSection {...homeObjectOne} /> */}
      {/* <Kursevi2 /> */}
      {/* <SponzoriSection {...homeObjectTwo} /> */}
      <Footer />
    </>
  );
};

export default Home;
