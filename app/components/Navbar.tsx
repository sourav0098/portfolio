"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 4,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const ref = useRef<string | any>("");

  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({
      behavior: "smooth",
    });

    // update class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const handleClick = (e: any) => {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  };

  return (
    <nav className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-gradient-to-r from-body1 from-20% to-body2 t0-80% px-4">
      <div className="mx-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <p className="text-textGreen text-4xl tracking-wider font-navFont">Sourav Choudhary</p>
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[15px] gap-7">
            {links.map((link, index) => {
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={handleScroll}
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                >
                  <motion.li
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: (index - 1) * 0.1 }}
                  >
                    {link.name}
                  </motion.li>
                </Link>
              );
            })}
          </ul>
          <a href="/assets/resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[15px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* Hamburger icon */}
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group" onClick={() => setShowMenu(true)}>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>

        {/* Mobile View Menu */}
        {showMenu && (
          <div
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-timelineColor flex flex-col items-center px-4 py-10 relative"
            >
              <RxCross2 className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4" onClick={() => setShowMenu(false)} />
              <div className="flex flex-col items-center gap-6">
                <ul className="flex flex-col text-base gap-6">
                  {links.map((link, index) => {
                    return (
                      <Link
                        key={link.id}
                        href={link.href}
                        onClick={handleScroll}
                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                      >
                        <motion.li
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: (index - 1) * 0.1 }}
                        >
                          {link.name}
                        </motion.li>
                      </Link>
                    );
                  })}
                </ul>
                <a href="/assets/resume.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>
                {/* Icons */}
                <div className="flex gap-8 text-textDark">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, ease: "easeIn" }}
                    href="mailto:souravchoudhary1998@gmail.com"
                    aria-label="Mail"
                    target="_blank"
                  >
                    <span className="w-6 h-6 text-4xl inline-flex items-center justify-content hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <FaEnvelope />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, ease: "easeIn" }}
                    href="https://github.com/sourav0098"
                    aria-label="Github"
                    target="_blank"
                  >
                    <span className="w-6 h-6 text-4xl inline-flex items-center justify-content hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <FaGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/sourav009/"
                    aria-label="Linkedin"
                    target="_blank"
                  >
                    <span className="w-6 h-6 text-4xl inline-flex items-center justify-content hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <FaLinkedin />
                    </span>
                  </motion.a>
                </div>

                <p className="text-textDark">souravchoudhary1998@gmail.com</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </nav>
  );
}
