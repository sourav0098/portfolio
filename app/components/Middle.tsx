import React from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Middle() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects/>
    </div>
  );
}
