import React from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Middle() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects/>
      <Contact/>
    </div>
  );
}
