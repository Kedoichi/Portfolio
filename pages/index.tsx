import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#F3EEEA] text-[#776B5D] h-screen snap-y snap-mandatory overflow-scroll z- ">
      <Head>
        <title>Steven&apos;s Portfolio</title>
      </Head>
      {/** Header */}
      <Header></Header>
      {/** Hero */}
      {/** Experiment */}
      <section id="hero" className="snap-center">
        <Hero></Hero>
      </section>
      {/** About */}
      {/** Skills */}
      {/** Project */}
      {/** Contact Me */}
    </div>
  );
}
