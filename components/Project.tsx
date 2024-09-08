import { motion } from "framer-motion";
import React from "react";
import quocVuData from "@Component/quocVuData.json";
import Image from "next/image";

const projects = quocVuData.projects;

const ProjectsSection = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="py-24 sm:py-32 flex flex-col relative text-center max-w-7xl px-4 sm:px-6 md:px-10 mx-auto items-center"
    >
      <h3 className="uppercase text-textPri text-xl sm:text-2xl tracking-[8px] sm:tracking-[10px] mb-4">
        My Projects
      </h3>
      <h5 className="text-textPri text-sm sm:text-base tracking-[1px] font-extralight italic mb-8 sm:mb-12">
        I have worked on a wide range of websites. Here are some of my web
        development projects.
      </h5>
      <div className="w-full md:w-[90%] lg:w-[80%] space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="">
            <div
              className={`bg-[#ffeac5] rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out mt-4 hover:scale-105 [&_div]:hover:pt-2 flex flex-col ${
                index % 2 === 1
                  ? "lg:flex-row [&_img]:lg:hover:rotate-[2deg] [&_img]:lg:hover:translate-x-[-5%] [&_img]:lg:hover:scale-100 [&_img]:lg:translate-x-[-12%]"
                  : "lg:flex-row-reverse [&_img]:lg:hover:rotate-[-2deg] [&_img]:lg:hover:translate-x-[5%] [&_img]:lg:hover:scale-100 [&_img]:lg:translate-x-[-12%]"
              }`}
            >
              {project.image[0] ? (
                <div className="w-full h-64 md:h-80 lg:h-auto lg:min-w-[35%] lg:max-w-[35%] overflow-hidden relative hover:pt-2 duration-300 ease-in-out">
                  <Image
                    src={project.image[0]}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform transition-left duration-300 ease-in-out transform rounded-t-lg lg:rounded-none lg:rounded-l-lg lg:absolute lg:scale-125"
                  />
                </div>
              ) : (
                <div className="w-full h-64 md:h-80 lg:h-auto lg:min-w-[35%] lg:max-w-[35%]" />
              )}
              <div className="flex-grow flex flex-col px-4 sm:px-6 py-4 md:py-6 duration-300 ease-in-out">
                <h3 className="text-textPri text-lg sm:text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-800 text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-[#603F26] text-xs sm:text-sm px-2 py-1 rounded-md mr-2 mb-2 bg-[#FFDBB5]"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
