import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type LinkButtonProps = {
  href: string;
  text?: string;
  isGithub?: boolean;
  className?: string;
  showIcon?: boolean;
  buttonType?: "primary" | "secondary" | "ghost";
};

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  text,
  isGithub = false,
  className = "",
  showIcon = true,
  buttonType = "primary",
}) => {
  // Default text based on link type
  const defaultText = isGithub ? "View Code" : "Visit Site";
  const displayText = text || defaultText;

  // Button styling based on type
  const buttonStyles = {
    primary:
      "bg-[#FFDBB5] text-[#603F26] hover:bg-[#FFD19A] border-2 border-[#D6B69A] shadow-md hover:shadow-lg",
    secondary:
      "bg-white text-gray-700 hover:bg-gray-100 border-2 border-[#FFE4C4] shadow-md hover:shadow-lg",
    ghost:
      "bg-transparent text-[#603F26] hover:bg-[#FFDBB5]/30 border-2 border-[#FFDBB5] shadow-sm hover:shadow-md",
  };

  // Icon component based on link type
  const IconComponent = isGithub ? FaGithub : FaExternalLinkAlt;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block ${className}`}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <div
          className={`${buttonStyles[buttonType]} cursor-pointer rounded-full px-4 py-2 text-md font-semibold tracking-wide transition-all duration-200 flex items-center justify-center`}
        >
          {displayText}
          {showIcon && (
            <span className="ml-2">
              <IconComponent size={14} />
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default LinkButton;
