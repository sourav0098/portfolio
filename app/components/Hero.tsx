import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-container mt-24 mx-auto py-10 mdl:py-24 flex items-center justify-evenly flex-wrap mdl:px-10 lgl:px-4"
    >
      <div className="flex flex-col gap-4 lgl:gap-4">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg font-titleFont tracking-wide text-textGreen"
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-3xl lgl:text-4xl xl:text-5xl font-titleFont font-semibold flex flex-col"
        >
          Sourav Choudhary
          <span className="text text-textDark mt-2 lgl:mt-4">
            I am a Full Stack Developer
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-base md:max-w-[620px] text-textDark font-medium"
        >
          I am a skilled web developer with strong foundation in Java and Springboot. My proficiency extends to front-end and back-end development, allowing me to create seamless web applications. I specialize in using React and its ecosystem to build user-friendly and responsive interfaces.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my projects!
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Image
          src="/assets/programmer.webp"
          alt="Programmer"
          className="w-full mdl:w-[450px] lgl:w-[330px] xl:w-[450px] object-cover"
          width={400}
          height={400}
          priority={true}
        ></Image>
      </motion.div>
    </section>
  );
}
