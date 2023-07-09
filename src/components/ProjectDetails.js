import React, { Component } from "react";
import "../styles/ProjectDetails.css";

class ProjectDetails extends Component {
  render() {
    return (
      <div className="projectdetails">
        <div className="projectheading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
