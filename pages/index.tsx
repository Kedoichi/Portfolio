import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

// Dynamically import components
const DynamicSkillsSection = dynamic(() => import("@/components/Skills"), {
  loading: () => <p>Loading Skills...</p>,
});
const DynamicCertificate = dynamic(() => import("@/components/Certificate"), {
  loading: () => <p>Loading Certificates...</p>,
});
const DynamicExperience = dynamic(() => import("@/components/Experience"), {
  loading: () => <p>Loading Experience...</p>,
});
const DynamicProjectsSection = dynamic(() => import("@/components/Project"), {
  loading: () => <p>Loading Projects...</p>,
});
const DynamicContact = dynamic(() => import("@/components/Contact"), {
  loading: () => <p>Loading Contact...</p>,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-backGroundPri text-[#776B5D] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-[#F6E6CB]/30 scrollbar-thumb-[#A0937D]/80 scroll-smooth">
      <Head>
        <title>Steven&apos;s Portfolio</title>
        <meta
          name="description"
          content="Quoc T. Vu is an innovative IT professional specializing in software development and web technologies. Explore his projects and skills in full-stack development."
        />
        <meta
          name="keywords"
          content="Quoc T. Vu, Steven Vu, Full Stack Developer, Web Development, Software Engineering, React, Node.js, Next.js"
        />
        <meta name="author" content="Quoc T. Vu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quocchic.net/" />
        <meta
          property="og:title"
          content="Quoc T. Vu (Steven) - Full Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Quoc T. Vu, an innovative IT professional specializing in software development and web technologies."
        />
        <meta
          property="og:image"
          content="https://quocchic.net/Image/profilePic.jpeg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quocchic.net/" />
        <meta
          property="twitter:title"
          content="Quoc T. Vu (Steven) - Full Stack Developer Portfolio"
        />
        <meta
          property="twitter:description"
          content="Explore the portfolio of Quoc T. Vu, an innovative IT professional specializing in software development and web technologies."
        />
        <meta
          property="twitter:image"
          content="https://quocchic.net/Image/profilePic.jpeg"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-start">
          <About />
        </section>

        <Suspense fallback={<div>Loading...</div>}>
          <section id="skills" className="snap-start">
            <DynamicSkillsSection />
          </section>

          <section id="certificate" className="snap-start">
            <DynamicCertificate />
          </section>

          <section id="workExperience" className="snap-start">
            <DynamicExperience />
          </section>

          <section id="project" className="snap-start">
            <DynamicProjectsSection />
          </section>

          <section id="contact" className="snap-start">
            <DynamicContact />
          </section>
        </Suspense>
      </main>

      {showButton && (
        <footer className="sticky bottom-5 w-full">
          <div className="flex items-center justify-center">
            <Link href="#hero">
              <div className="bg-[#DEAC80] text-[#914F1E] hover:bg-[#EAB652] hover:text-backGroundPri rounded-lg p-2 px-2 cursor-pointer transition-colors duration-300 shadow-lg">
                <FaArrowUp className="h-6 w-6" />
              </div>
            </Link>
          </div>
        </footer>
      )}
    </div>
  );
}
