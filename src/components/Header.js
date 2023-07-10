import React, { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="headingarea">
        <div className="content">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Header;
