import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaGraduationCap,
  FaTrophy,
  FaLaptopCode,
  FaCertificate,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import data from "@Component/quocVuData.json";
import { motion } from "framer-motion";

interface Certificate {
  date: string;
  title: string;
  issuer: string;
  description: string[];
}

interface Education {
  date: string;
  degree: string;
  institution: string;
  description: string;
}

interface Award {
  date: string;
  title: string;
  issuer: string;
  description: string;
}

interface Data {
  education: Education[];
  awards: Award[];
  certificates: Certificate[];
}

const TimelineElement = ({
  date,
  icon,
  title,
  subtitle,
  description,
  contentStyle,
  contentArrowStyle,
  iconStyle,
  isExpanded,
  onToggle,
}: {
  date: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  contentStyle: React.CSSProperties;
  contentArrowStyle: React.CSSProperties;
  iconStyle: React.CSSProperties;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const shortDescription =
    description.split(" ").slice(0, 10).join(" ") + "...";

  // Check if the original description is longer than the shortened one
  const isLongDescription = description.length > shortDescription.length;

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      iconStyle={iconStyle}
      icon={icon}
      contentStyle={{
        ...contentStyle,
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
      }}
      contentArrowStyle={contentArrowStyle}
    >
      <h3 className="vertical-timeline-element-title text-xl">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle text-sm italic">
        {subtitle}
      </h4>
      <p className="transition-all duration-300 ease-in-out">
        {isExpanded || !isLongDescription ? description : shortDescription}
      </p>
      {isLongDescription && (
        <button
          className="mt-2 flex items-center text-sm"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          {isExpanded ? (
            <div className="text-[#603F26] px-2 py-1 rounded-md mr-2 mb-2 bg-[#FFDBB5] flex items-center">
              Show Less <FaChevronUp className="ml-1" />
            </div>
          ) : (
            <div className="text-[#603F26] px-2 py-1 rounded-md mr-2 mb-2 bg-[#FFDBB5] flex  items-center">
              Read More <FaChevronDown className="ml-1" />
            </div>
          )}
        </button>
      )}
    </VerticalTimelineElement>
  );
};

const Timeline = () => {
  const [expandedEvents, setExpandedEvents] = useState<{
    [key: number]: boolean;
  }>({});
  const toggleEvent = (index: number) => {
    setExpandedEvents((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const { education, awards, certificates } = data as Data;

  const certificateStyle = {
    contentStyle: { background: "rgb(255, 234, 197)", color: "#603F26" },
    contentArrowStyle: { borderRight: "7px solid rgb(255, 234, 197)" },
    iconStyle: { background: "rgb(255, 234, 197)", color: "#603F26" },
  };

  const educationStyle = {
    contentStyle: { background: "#D5ED9F", color: "#603F26" },
    contentArrowStyle: { borderRight: "7px solid rgb(136,214,108)" },
    iconStyle: { background: "#D5ED9F", color: "#603F26" },
  };

  const awardStyle = {
    contentStyle: { background: "#FFDBB5", color: "#603F26" },
    contentArrowStyle: { borderRight: "7px solid rgb(213,237,159)" },
    iconStyle: { background: "#FFDBB5", color: "#603F26" },
  };

  const certificateEvents = certificates
    .map((cert) => ({
      date: cert.date,
      icon: <FaCertificate />,
      title: cert.title,
      subtitle: cert.issuer,
      description: cert.description.join(" "),
      ...certificateStyle,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const educationEvents = education
    .map((edu) => ({
      date: edu.date,
      icon: <FaGraduationCap />,
      title: edu.degree,
      subtitle: edu.institution,
      description: edu.description,
      ...educationStyle,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const awardEvents = awards
    .map((award) => ({
      date: award.date,
      icon: <FaTrophy />,
      title: award.title,
      subtitle: award.issuer,
      description: award.description,
      ...awardStyle,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const allEvents = [...certificateEvents, ...awardEvents, ...educationEvents];

  return (
    <motion.div
      initial={{
        y: 200,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="pt-44 flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h1 className="absolute top-24 uppercase text-textPri text-2xl tracking-[10px]">
        My Journey
      </h1>
      <VerticalTimeline lineColor="#F7DCB9">
        {allEvents.map((event, index) => (
          <TimelineElement
            key={index}
            date={event.date}
            icon={event.icon}
            title={event.title}
            subtitle={event.subtitle}
            description={event.description}
            contentStyle={event.contentStyle}
            contentArrowStyle={event.contentArrowStyle}
            iconStyle={event.iconStyle}
            isExpanded={expandedEvents[index]}
            onToggle={() => toggleEvent(index)}
          />
        ))}
      </VerticalTimeline>
    </motion.div>
  );
};

export default Timeline;
