import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function AnimateBackground({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div
        className="absolute border  [#EBE3D5] rounded-full h-[200px] w-[200px] mt-52
animate-ping"
      />{" "}
      <div
        className="absolute border  border-[#EBE3D5] rounded-full h-[300px] w-[300px] mt-52
animate-ping"
      />{" "}
      <div
        className="absolute border  border-[#EBE3D5] rounded-full h-[500px] w-[500px] mt-52
animate-ping"
      />{" "}
      <div className="absolute border border-[#B0A695] rounded-full h-[650px] w-[650px] mt-52 animate-pulse opacity-10" />
    </div>
  );
}
