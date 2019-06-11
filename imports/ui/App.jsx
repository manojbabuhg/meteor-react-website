import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Products from "./components/Products";
import WeAre from "./components/WeAre";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header title="Meteor React Setup" button="About us" />
        <Products />
        <WeAre />
        <Partners />
        <Footer />
      </div>
    );
  }
}
