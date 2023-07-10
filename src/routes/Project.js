import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProjectDetails from "../components/ProjectDetails";

const Project = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Header heading="Projects" text="Some recent projects" />
      <ProjectDetails />
      <Footer></Footer>
    </div>
  );
};

export default Project;
