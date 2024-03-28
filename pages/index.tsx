import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Head from "next/head";
import About from "@/components/About";
import Skills from "@/components/skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-backGroundPri text-[#776B5D] h-screen snap-y snap-mandatory overflow-scroll z-0 ">
      <Head>
        <title>Steven&apos;s Portfolio</title>
      </Head>
      {/** Header */}
      <Header></Header>
      {/** Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/** About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/** Experiment */}

      {/** Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/** Project */}

      {/** Contact Me */}
    </div>
  );
}
