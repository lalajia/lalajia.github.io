import React from "react";
import Footer from "../components/Footer";
import ProjectDetails from "../components/ProjectDetails";
import NavBar from "../components/NavBar";

const Project = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ProjectDetails heading="Projects" text="Some recent projects" />
      <Footer></Footer>
    </div>
  );
};

export default Project;
