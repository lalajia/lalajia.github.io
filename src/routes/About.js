import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import TimeLines from "../components/TimeLines";

const About = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Header heading="Who am I" text="XXX" />
      <TimeLines />
      <Footer></Footer>
    </div>
  );
};

export default About;
