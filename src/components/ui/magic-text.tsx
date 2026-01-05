"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export interface MagicTextProps {
  text: string;
  highlightWords?: string[];
  className?: string;
}

interface CharProps {
  children: string;
  progress: any;
  range: number[];
  isHighlighted?: boolean;
}

const Char: React.FC<CharProps> = ({ children, progress, range, isHighlighted }) => {
  const opacity = useTransform(progress, range, [0.3, 1]);

  return (
    <span className="relative inline">
      <span className={`absolute opacity-30 ${isHighlighted ? "text-primary" : "text-foreground"}`}>
        {children}
      </span>
      <motion.span
        style={{ opacity }}
        className={isHighlighted ? "text-primary" : "text-foreground"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const MagicText: React.FC<MagicTextProps> = ({ text, highlightWords = [], className }) => {
  const container = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const chars = text.split("");

  // Find highlight range for "Digital Experiences"
  const getHighlightRange = () => {
    if (highlightWords.includes("Digital Experiences")) {
      const bespokeIndex = text.indexOf("Bespoke Digital");
      if (bespokeIndex !== -1) {
        const digitalStart = bespokeIndex + "Bespoke ".length;
        const experiencesEnd = text.indexOf("Experiences", digitalStart) + "Experiences".length;
        return { start: digitalStart, end: experiencesEnd };
      }
    }
    return null;
  };

  const highlightRange = getHighlightRange();

  const isCharHighlighted = (index: number) => {
    if (highlightRange) {
      return index >= highlightRange.start && index < highlightRange.end;
    }
    return false;
  };

  return (
    <p ref={container} className={className}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;

        return (
          <Char 
            key={i} 
            progress={scrollYProgress} 
            range={[start, end]}
            isHighlighted={isCharHighlighted(i)}
          >
            {char}
          </Char>
        );
      })}
    </p>
  );
};
