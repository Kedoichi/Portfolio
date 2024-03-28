import React from "react";
import { motion } from "framer-motion";
function Skills() {
  return (
    <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto">
      <h3 className="absolute top-24 uppercase text-textPri text-2xl tracking-[10px]">
        {" "}
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-5"></div>
    </motion.div>
  );
}

export default Skills;
