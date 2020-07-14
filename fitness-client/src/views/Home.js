import React from "react";
// import sections
import Hero from "../components/Hero";
import FeaturesTiles from "../components/FeaturesTiles";
import FeaturesSplit from "../components/FeaturesSplit";
import Testimonial from "../components/Testimonial";
import Cta from "../components/Cta";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
};

export default Home;
