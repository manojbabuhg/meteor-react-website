import React, { Component } from "react";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">
              Company Name
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
