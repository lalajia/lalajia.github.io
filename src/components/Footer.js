import React from "react";
import "../styles/Footer.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-containter">
        <div className="left">
          <div>
            <FaHome siz={20} style={{ color: "white", marginRight: "2rem" }} />
            <p>Vancouver, BC</p>
          </div>
          <div>
            <FaPhone siz={20} style={{ color: "white", marginRight: "2rem" }} />
            <p>+1 778 929 3302</p>
          </div>
          <div>
            <FaMailBulk
              siz={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>selenazheng3@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <h4>Social Media</h4>
          <div className="social">
            <a href="https://github.com/lalajia">
              <FaGithub
                size={40}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/xinyue-zheng-75047a180/">
              <FaLinkedin
                size={40}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
