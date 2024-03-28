import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import AnimateBackground from "./animateBackground";
import Link from "next/link";

type Props = {};
export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden text-textPri">
      <AnimateBackground></AnimateBackground>
      <h2 className="text-sm uppercase pb-2 tracking-[1px]"></h2>
      <h1 className="text-5xl lg:text-6xl px-10">
        <span className="font-semibold px-5">{text}</span>
        <Cursor cursorColor="" />
      </h1>

      {/* Button
      
      About
      Experience
      Skills
      Projects
      */}

      <div className="flex space-x-4 z-10">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}
