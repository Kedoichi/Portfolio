import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        y: 200,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase text-textPri text-2xl tracking-[10px]">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        src="/Image/profilePic.jpeg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-80 xl:h-80"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h2 className="text-4xl font-semibold">My Background</h2>
        <p className="text-base">
          A dedicated and results-driven Software Engineer with a Bachelor's
          degree in Information Technology from La Trobe University,
          specializing in innovative front-end and back-end development.
          Demonstrates a strong commitment to continuous learning and
          professional growth, with a proven track record of implementing
          scalable web solutions and enhancing user experience. Excels in a
          collaborative environment, leveraging technical expertise in
          JavaScript, React, Node.js, and full-stack development to drive
          business success and technological advancement.
        </p>
      </div>
    </motion.div>
  );
}
