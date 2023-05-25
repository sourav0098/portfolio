import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

export default function About() {
  const skills = [
    "Java",
    "Spring Boot",
    "GraphQL",
    "Nextjs",
    "TypeScript",
    "Angular",
    "Reactjs",
    "Nodejs",
    "Express",
    "MongoDB",
    "HTML 5",
    "CSS 3",
    "JavaScript (ES6+)",
    "MySQL",
    "JUnit",
    "Mockito",
    "AWS",
    "Git",
  ];

  return (
    <section
      id="about"
      className="max-w-contentContainer mx-auto py-10 lgl:py-18 flex flex-col gap-4"
    >
      <SectionTitle title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-8">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I am Sourav Choudhary, a highly skilled software developer with a
            passion for creating innovative solutions. With experience in Java,
            Spring Boot, and React.js, I have developed a strong foundation in
            web development. I thrive in collaborative team environments and
            believe in delivering high-quality results. Constantly seeking
            opportunities for growth and learning, I am dedicated to staying
            updated with the latest technologies and trends in the industry.
          </p>
          <p>Some of the technologies I have worked with: </p>
          <ul className="max-w-[580px] font-titleFont grid grid-cols-2 sml:grid-cols-3 md:grid-cols-4 text-sm gap-2 ">
            {skills.map((skill, index) => {
              return (
                <li className="flex items-center gap-2" key={index}>
                  <span>
                    <AiFillThunderbolt />
                  </span>
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="grid w-full sm:w-2/3 sml:w-[370px] md:w-2/3 grid-cols-3 md:grid-cols-6 m-auto lgl:grid-cols-3 gap-8 items-center lgl:w-1/3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="Java" loading="lazy" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" alt="Spring Boot" loading="lazy" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Reactjs" loading="lazy" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" loading="lazy" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
            alt="Nextjs"
            className="invert"
            loading="lazy"
          />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt="Typescript" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
