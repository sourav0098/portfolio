import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-contentContainer mx-auto py-10 lgl:py-18 flex flex-col gap-4"
    >
      <SectionTitle title="Projects" />
      {/* Project 1 */}
      <div className="w-full flex flex-col items-center justify-center gap-28">
        <div className="flex flex-col lg:flex-row gap-6">
          <a
            href="https://quickpik.vercel.app/"
            target="_blank"
            aria-label="QuickPik Ecommerce Web application"
            className="w-full xl:w-1/2 h-auto relative group"
          >
            <div>
              <Image
                className="w-full h-full object-contain rounded-md"
                src="/assets/project_1.png"
                alt="E-commerce"
                priority={false}
                width={900}
                height={700}
              ></Image>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-3 items-start xl:items-end xl:text-right z-10 text-textDark">
            <a
              href="https://quickpik.vercel.app/"
              target="_blank"
              className="hover:underline"
            >
              <h3 className="text-2xl font-bold">QuickPik E-Commerce</h3>
            </a>
            <p className="text-sm">
              QuickPik is an innovative ecommerce platform for purchasing the
              latest electronics. The user-friendly frontend interfaces,
              catering to both admins and shoppers, offer convenient features
              like rich text editing and{" "}
              <span className="text-textLight">Mapbox </span>address autofill.
              QuickPik leverages{" "}
              <span className="text-textLight">Image Kit</span> as a digital
              asset manager to optimize website image loading times by 60%
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <span className="skill-pill">Reactjs</span>
              <span className="skill-pill">Java</span>
              <span className="skill-pill">Springboot</span>
              <span className="skill-pill">MySQL</span>
              <span className="skill-pill">AWS</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/sourav0098/e-commerce-client"
                target="_blank"
                aria-label="Github"
              >
                <span className="w-8 h-8 text-2xl inline-flex items-center justify-content cursor-pointer hover:-translate-y-2 transition-all duration-300">
                  <FaGithub />
                </span>
              </a>
              <a
                href="https://quickpik.vercel.app/"
                target="_blank"
                aria-label="QuickPik"
              >
                <span className="w-8 h-8 text-2xl inline-flex items-center justify-content cursor-pointer hover:-translate-y-2 transition-all duration-300">
                  <FaLink />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Project 2 */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-20">
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          <a
            href="https://wisepal-tutor-finder.netlify.app/"
            target="_blank"
            aria-label="Wisepal: find a tutor"
            className="w-full xl:w-1/2 h-auto relative group"
          >
            <div>
              <Image
                className="w-full h-full object-contain rounded-md"
                src="/assets/project-2.png"
                alt="Wisepal"
                priority={false}
                width={900}
                height={700}
              ></Image>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-3 items-start text-left z-10 text-textDark">
            <a
              href="https://quickpik.vercel.app/"
              target="_blank"
              className="hover:underline"
            >
              <h3 className="text-2xl font-bold">WisePals: Find a Tutor</h3>
            </a>
            <p className="text-sm">
              Wise Pals is a platform that connects students with tutors. The
              user can filter for the tutor of his preference from different
              parameters such as the subject and the price. The user can also
              register as a tutor and add his information to the platform.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <span className="skill-pill">Reactjs</span>
              <span className="skill-pill">TypeScript</span>
              <span className="skill-pill">Nodejs</span>
              <span className="skill-pill">Express</span>
              <span className="skill-pill">MongoDB</span>
              <span className="skill-pill">Material UI</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/sourav0098/WisePals"
                target="_blank"
                aria-label="Github"
              >
                <span className="w-8 h-8 text-2xl inline-flex items-center justify-content cursor-pointer hover:-translate-y-2 transition-all duration-300">
                  <FaGithub />
                </span>
              </a>
              <a
                href="https://wisepal-tutor-finder.netlify.app/"
                target="_blank"
                aria-label="WisePals"
              >
                <span className="w-8 h-8 text-2xl inline-flex items-center justify-content cursor-pointer hover:-translate-y-2 transition-all duration-300">
                  <FaLink />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Project 3 */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-20">
        <div className="flex flex-col lg:flex-row gap-6">
          <a
            href="https://github.com/sourav0098/TechBlog"
            target="_blank"
            aria-label="Tech blog Web application"
            className="w-full xl:w-1/2 h-auto relative group"
          >
            <div>
              <Image
                className="w-full h-full object-contain rounded-md"
                src="/assets/project-3.png"
                alt="Tech blog"
                priority={false}
                width={900}
                height={700}
              ></Image>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-3 items-start xl:items-end xl:text-right z-10 text-textDark">
            <a
              href="https://quickpik.vercel.app/"
              target="_blank"
              className="hover:underline"
            >
              <h3 className="text-2xl font-bold">Tech Blog Web Application</h3>
            </a>
            <p className="text-sm">
              A dynamic tech blog application designed to create a platform for
              tech enthusiasts to ask questions, share knowledge, and connect
              with like-minded individuals. The application features a
              user-centric interface, making it easy for users to interact with
              content through liking, commenting, and post filtering
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <span className="skill-pill">Java</span>
              <span className="skill-pill">J2EE</span>
              <span className="skill-pill">JSP</span>
              <span className="skill-pill">MySQL</span>
              <span className="skill-pill">Bootstrap</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/sourav0098/TechBlog"
                target="_blank"
                aria-label="Github"
              >
                <span className="w-8 h-8 text-2xl inline-flex items-center justify-content cursor-pointer hover:-translate-y-2 transition-all duration-300">
                  <FaGithub />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
