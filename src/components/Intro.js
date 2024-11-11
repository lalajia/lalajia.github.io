import "../styles/Intro.css";
import { Link } from "react-router-dom";
import bgImg from "../assets/bg.jpeg";

import React from "react";

const Intro = () => {
  return (
    <div className="intro">
      <div className="mask">
        <img className="bgImg" src={bgImg} alt="bgImg" />
      </div>
      <div className="content">
        <h1>Hi, Here is Xinyue Zheng</h1>
        <div className="btns">
          <Link to="/about">
            <button className="btn">About</button>
          </Link>

          <Link to="/project">
            <button className="btn">Project</button>
          </Link>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
