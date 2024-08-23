import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import AnimateBackground from "./AnimateBackground";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Quoc T. Vu (Steven)",
      "Specializing in crafting innovative web and mobile applications.",
      "Looking for graduate role",
      "Full-stack developer",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 13,
    delaySpeed: 1700,
  });

  return (
    <div className="h-screen flex flex-col space-y-4 sm:space-y-8 items-center justify-center text-center overflow-hidden text-textPri px-4 sm:px-8">
      <AnimateBackground />
      <h2 className="text-xs sm:text-sm uppercase pb-1 sm:pb-2 tracking-[1px]"></h2>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-2 sm:px-5 lg:px-10 max-w-3xl">
        <span className="font-semibold">{text}</span>
        <Cursor cursorColor="" />
      </h1>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 z-10 ">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#certificate">
          <button className="heroButton">Certificate</button>
        </Link>
        <Link href="#workExperience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#project">
          <button className="heroButton">Project</button>
        </Link>
        <Link href="#contact">
          <button className="heroButton">Contact</button>
        </Link>
      </div>
    </div>
  );
}
