import React from "react";
import Layout from "./Layout";
import Footer from "../components/Footer";
import HeroProdaja from "../componentsProdaja/HeroProdaja/index";
import Prodaja from "../componentsProdaja/ProdajaCards";
import Blog from "../componentsBlog/Blog/Blog";

const ProdajaPage = () => {
  return (
    <>
      <Layout />
      {/* <Blog /> */}
      <HeroProdaja />
      <Prodaja />
      <Footer />
    </>
  );
};

export default ProdajaPage;
