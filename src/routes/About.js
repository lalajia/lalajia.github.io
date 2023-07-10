import React from "react";
import Footer from "../components/Footer";
import ProjectDetails from "../components/Header";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ProjectDetails heading="Who am I" text="An Explorer" />
      <Footer></Footer>
    </div>
  );
};

export default About;
