import { motion } from "framer-motion";
import React, { useState } from "react";
import quocVuData from "@Component/quocVuData.json";

const projects = quocVuData.projects;

const ProjectsSection = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="pt-44 flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase text-textPri text-2xl tracking-[10px]">
        My projects
      </h3>
      <h5 className="absolute top-36 text-textPri text-lg tracking-[1px] font-extralight italic">
        I have worked on a wide range of websites. Here are some of my web
        development projects.
      </h5>
      <div className="w-[60%] lg:w-[80%] ">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-[#ffeac5] rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out mt-4 hover:scale-105 [&_div]:hover:pt-2 ${
              index % 2 === 1
                ? "flex-row [&_img]:hover:rotate-[1deg] [&_img]:hover:translate-x-[-5%] [&_img]:hover:scale-100 [&_img]:translate-x-[-12%] "
                : "flex-row-reverse [&_img]:hover:rotate-[-1deg] [&_img]:hover:translate-x-[5%] [&_img]:hover:scale-100 [&_img]:translate-x-[-12%] "
            } flex`}
          >
            {project.image[0] ? (
              <div className="lg:min-w-[35%] lg:max-w-[35%] pt-10 overflow-hidden relative hover:pt-2 duration-300 ease-in-out ">
                <img
                  src={project.image[0]}
                  alt={project.title}
                  className="transition-transform transition-left duration-300 ease-in-out transform h-full object-cover rounded-lg absolute scale-125"
                />
              </div>
            ) : (
              <div />
            )}
            <div className="flex-col px-6 px-8 py-4 duration-300 ease-in-out">
              <h3 className="text-textPri text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-800">{project.description}</p>
              <div className="flex flex-wrap mt-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-[#603F26] px-2 py-1 rounded-md mr-2 mb-2 bg-[#FFDBB5]"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
