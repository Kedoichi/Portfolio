import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.facebook.com/quocchic/"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>{" "}
        <SocialIcon
          url="https://github.com/Kedoichi"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>{" "}
        <SocialIcon
          url="https://www.linkedin.com/in/tien-quoc-vu-2065a6162/"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="flex flex-row items-center text-textPri cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
        <p className="uppercase hiddne md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
