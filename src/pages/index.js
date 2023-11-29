import React from "react";
import HomePageSection from "../components/HomePage";
import Usluge from "../components/Usluge";
import Footer from "../components/Footer";
import Kursevi from "../components/Kursevi";
import SliderTwo from "../components/SliderTwo";
import Layout from "./Layout";

const Home = () => {
  return (
    <>
      <Layout />
      <HomePageSection />
      <Kursevi />
      <Usluge />
      <SliderTwo />
      <Footer />
    </>
  );
};

export default Home;
