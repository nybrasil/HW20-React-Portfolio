import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/aboutme" pages={AboutMe} />
        <Route path="/portfolio" pages={Portfolio} />
        <Route path="/contact" pages={Contact} />
        <Route path="/resume" pages={Resume} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
