import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaJava,
  FaAws,
  FaDocker,
  FaCogs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiGit,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiMariadb,
  SiSqlite,
  SiKubernetes,
  SiJira,
  SiConfluence,
  SiFigma,
  SiPostman,
  SiFlutter,
  SiLaravel,
  SiExpress,
  SiCplusplus,
  SiCsharp,
  SiDebian,
  SiGooglecloud,
} from "react-icons/si";
import { IoMdCloudDone } from "react-icons/io";
import { AiOutlineCloudSync } from "react-icons/ai";
import { BsUiChecks } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "C#", icon: <SiCsharp /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "SQLite", icon: <SiSqlite /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Jira", icon: <SiJira /> },
  { name: "Confluence", icon: <SiConfluence /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "UI/UX", icon: <BsUiChecks /> },
  { name: "CI/CD", icon: <AiOutlineCloudSync /> },
  { name: "Google Cloud", icon: <SiGooglecloud /> },
  { name: "SMTP", icon: <MdMail /> },
  { name: "Domain", icon: <IoMdCloudDone /> },
];

const chunkSize = Math.ceil(skills.length / 3);
const skillChunks = Array.from({ length: 3 }, (_, i) =>
  skills.slice(i * chunkSize, (i + 1) * chunkSize)
);

const SkillsSection = () => {
  return (
    <div className="pt-48 flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase text-textPri text-2xl tracking-[10px]">
        Skills & Technologies
      </h3>

      <div className="w-[80%]">
        {skillChunks.map((chunk, index) => (
          <Marquee
            key={index}
            direction={index % 2 === 1 ? "right" : "left"}
            speed={100}
            gradient={false}
            loop={0}
            pauseOnHover={true}
          >
            {chunk.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="flex flex-col items-center mx-4 my-4 text-white"
              >
                <div className="text-6xl mb-2">{skill.icon}</div>
                <div>{skill.name}</div>
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
