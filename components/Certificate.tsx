import React from "react";
import { motion } from "framer-motion";
import quocVuData from "@Component/quocVuData.json";
import CertCard from "./CertCard";

type Props = {};

export default function Certificate({}: Props) {
  return (
    <motion.div
      initial={{
        y: 200,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="pb-28 h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 uppercase text-textPri text-xl md:text-2xl tracking-[8px] md:tracking-[10px] mb-8 md:mb-0">
        Certificate
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll md:p-10 snap-x snap-mandatory scrollbar scrollbar-track-[#F6E6CB]/30 scrollbar-thumb-[#A0937D]/80 mt-24 md:mt-32">
        {quocVuData.certificates.map((exp) => (
          <CertCard key={exp.id} certificate={exp} />
        ))}
      </div>
    </motion.div>
  );
}
