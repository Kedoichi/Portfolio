import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import About from "@/components/About";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Experience from "@/components/Experience";
import Timeline from "@/components/Experience";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import SkillsSection from "@/components/Skills";
import ProjectsSection from "@/components/Project";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-backGroundPri text-[#776B5D] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-[#F6E6CB]/30 scrollbar-thumb-[#A0937D]/80 scroll-smooth">
      <Head>
        <title>Steven&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <SkillsSection />
      </section>
      <section id="certificate" className="snap-start">
        <Certificate />
      </section>
      <section id="workExperience" className="snap-start">
        <Experience />
      </section>
      <section id="project" className="snap-start">
        <ProjectsSection />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
      {/* Project section can be added here */}

      {/* Contact Me section can be added here */}

      <footer className="sticky bottom-0 pb-5 w-full backdrop-blur-[1px]">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <div className="bg-[#A0937D] hover:bg-[#776B5D] text-white rounded-lg p-2 px-2 cursor-pointer transition-colors duration-300 shadow-lg">
              <FontAwesomeIcon
                icon={faArrowUp}
                className="h-4 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6"
              />
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
}
