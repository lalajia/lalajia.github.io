import React from "react";
import badgeaws1 from "../assets/aws-certified-cloud-practitioner.png";
import badgeaws2 from "../assets/aws-academy-graduate-aws-academy-cloud-architecting.png";
import badgeaws3 from "../assets/aws-academy-graduate-aws-academy-cloud-foundations.png";
import badge1 from "../assets/graduate-leadership-institute.png";
import "../styles/Certificate.css";

const Certificate = () => {
  return (
    <div className="certificateheading">
      <h4>Certificate</h4>
      <div className="certifactecontainer">
        <a href="https://www.credly.com/badges/1c19e566-833e-4ca3-8c4b-ba73f8598563/public_url">
          <img src={badgeaws1} alt="badge1" style={{ height: 200 }} />
        </a>
        <a href="https://www.credly.com/badges/7c34d75f-ac5e-4eb8-abfb-b6f27fb5835e/public_url">
          <img src={badgeaws2} alt="badge2" style={{ height: 200 }} />
        </a>
        <a href="https://www.credly.com/badges/fcff155b-f4b4-4120-a6dc-2c02257f17a8/public_url">
          <img src={badgeaws3} alt="badge3" style={{ height: 200 }} />
        </a>
        <a href="https://www.credly.com/badges/0ab1166b-2af8-491d-804d-887bc31e8e11/public_url">
          <img src={badge1} alt="badge4" style={{ height: 200 }} />
        </a>
      </div>
    </div>
  );
};

export default Certificate;
