import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Link from "next/link";

type skills = {
  name: string;
  image: string;
};

type Certificate = {
  id: number;
  title: string;
  company: string;
  logo: string;
  date: string;
  location: string;
  skills: skills[];
  description: string[];
  link?: string; // Add this optional property
};

type Props = {
  certificate: Certificate;
};

function CertCard({ certificate }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#F1E5D1] p-5 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden relative"
    >
      {certificate.link && (
        <Link href={certificate.link} target="_blank" rel="noopener noreferrer">
          <div className="absolute top-4 right-4 bg-[#ffffff] cursor-pointer border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors duration-200 z-100">
            View Credential
          </div>
        </Link>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-32 h-32 relative xl:w-[200px] xl:h-[200px] overflow-hidden"
      >
        <Image
          src={`/Data${certificate.logo}`}
          alt={certificate.company}
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </motion.div>

      <div className="px-0 md:px-10 w-full">
        <h4 className="text-4xl font-light">{certificate.title}</h4>
        <h5 className="font-bold text-2xl mt-1">{certificate.company}</h5>
        <div className="flex flex-wrap gap-2 my-2">
          {certificate.skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 bg-white rounded-full px-3 py-1"
            >
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
        <p className="uppercase py-5 text-gray-500">{certificate.date}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {certificate.description.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default CertCard;
