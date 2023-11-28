import React from "react";
import Footer from "../components/Footer";
import IndividualniKurs from "../componentsIndividualniKurs/IndividualniKurs";
import Layout from "./Layout";

const IndKursPage = () => {
  return (
    <>
      <Layout />
      <IndividualniKurs />
      <Footer />
    </>
  );
};

export default IndKursPage;
