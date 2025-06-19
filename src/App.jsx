// App.jsx
import React from "react";
import Nav from "./components/Main/Nav";
import Home from "./components/Main/Home";
import Skills from "./components/Main/Skills";
import Project from "./components/Main/Project";
import Contact from "./components/Main/Contact";
import Footer from "./components/Main/Footer";
import Education from "./components/Main/Education";
import Experience from "./components/Main/Experience";

function App() {
  return (
    <>
      <Nav />
      <div id="home"><Home /></div>
      <div id="experience"><Experience /></div>
      <div id="project"><Project /></div>
      <div id="skills"><Skills /></div>
      <div id="education"><Education /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}

export default App;
