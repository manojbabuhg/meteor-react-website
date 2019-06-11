import React, { Component } from "react";
import "./Header.css";

const heroStyle = {
  backgroundColor: "#f44336",
  height: "70vh",
  backgroundSize: "cover"
};
class Header extends Component {
  render() {
    return (
      <div className="header">
        <header style={heroStyle}>
          <h1>{this.props.title}</h1>
          <p>Minimalist setup and only includes the bare essentials</p>
          <a href="#button">{this.props.button}</a>
        </header>
      </div>
    );
  }
}

export default Header;
