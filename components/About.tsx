import React from "react";
import { motion } from "framer-motion";
import OptimizedImage from "./OptimizedImage";

export default function About() {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="min-h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 justify-center md:justify-evenly mx-auto items-center py-16 md:py-0"
    >
      <h3 className="absolute top-24 uppercase text-textPri text-2xl tracking-[10px] hidden md:block">
        About
      </h3>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10">
        <motion.div
          initial={{ x: -200, opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          className="flex-shrink-0 w-48 h-48 rounded-full md:rounded-lg md:w-64 md:h-64 xl:w-80 xl:h-80 overflow-hidden"
        >
          <OptimizedImage
            src="/Image/profilePic.jpeg"
            alt="Profile Picture"
            width={320}
            height={320}
          />
        </motion.div>
        <div className="space-y-6 md:space-y-10 px-0 md:px-10">
          <h2 className="text-4xl font-semibold">My Background</h2>
          <p className="text-base text-justify px-3 indent-5 lg:indent-0 md: px-0 lg:text-left whitespace-pre-wrap">
            A dedicated and results-driven Software Engineer with a
            Bachelor&apos;s degree in Information Technology from La Trobe
            University, specializing in innovative front-end and back-end
            development. Demonstrates a strong commitment to continuous learning
            and professional growth, with a proven track record of implementing
            scalable web solutions and enhancing user experience. Excels in a
            collaborative environment, leveraging technical expertise in
            JavaScript, React, Node.js, and full-stack development to drive
            business success and technological advancement.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
