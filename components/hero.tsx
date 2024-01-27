import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import AnimateBackground from "./animateBackground";

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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <AnimateBackground></AnimateBackground>
      <h2 className="text-sm uppercase pb-2 tracking-[1px]"></h2>
      <h1>
        <span className="text-2xl lg:text-4xl font-semibold px-10">{text}</span>
        <Cursor cursorColor=""></Cursor>
      </h1>
    </div>
  );
}
