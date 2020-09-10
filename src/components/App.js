import React from "react";
import "../scss/main.scss";
import Navbar from "./Navbar";
import Opening from "./Opening";
import About from "./About";
import Gallery from "./Gallery";
import Menu from "./Menu";
import OnlineStore from "./OnlineStore";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Opening />
      <About />
      <Gallery />
      <Menu />
      <OnlineStore />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
