import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import TimeLines from "../components/TimeLines";
import Certificate from "../components/Certificate";

const About = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Header heading="Who am I" text="An Explorer" />
      <TimeLines />
      <Certificate />
      <Footer></Footer>
    </div>
  );
};

export default About;
