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
}) => {
  const shortDescription =
    description.split(" ").slice(0, 10).join(" ") + "...";

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
      onClick={onToggle}
    >
      <h3 className="vertical-timeline-element-title text-xl">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle text-sm italic">
        {subtitle}
      </h4>
      <p className="transition-all duration-300 ease-in-out">
        {isExpanded ? description : shortDescription}
      </p>
      <button
        className="mt-2 flex items-center text-sm "
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
      >
        {isExpanded ? (
          <>
            Show Less <FaChevronUp className="ml-1" />
          </>
        ) : (
          <>
            Read More <FaChevronDown className="ml-1" />
          </>
        )}
      </button>
    </VerticalTimelineElement>
  );
};

const Timeline = () => {
  const [expandedEvents, setExpandedEvents] = useState({});
  const toggleEvent = (index) => {
    setExpandedEvents((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const { education, awards, projects, certificates } = data;

  const certificateStyle = {
    contentStyle: { background: "rgb(255, 234, 197)", color: "#603F26" },
    contentArrowStyle: { borderRight: "7px solid rgb(255, 234, 197)" },
    iconStyle: { background: "rgb(255, 234, 197)", color: "#603F26" },
  };

  const educationStyle = {
    contentStyle: { background: "#D5ED9F", color: "#603F26" },
    contentArrowStyle: { borderRight: "7px solid rrgb(136,214,108)" },
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
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const educationEvents = education
    .map((edu) => ({
      date: edu.date,
      icon: <FaGraduationCap />,
      title: edu.degree,
      subtitle: edu.institution,
      description: edu.description,
      ...educationStyle,
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const awardEvents = awards
    .map((award) => ({
      date: award.date,
      icon: <FaTrophy />,
      title: award.title,
      subtitle: award.issuer,
      description: award.description,
      ...awardStyle,
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

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
