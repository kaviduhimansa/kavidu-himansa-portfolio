import React, { useRef, useState, useEffect } from "react";
// 👇 THIS IMPORT WAS MISSING OR INCORRECT
import { motion } from "framer-motion"; 

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const ScrambleText = ({ text, className }) => {
  const intervalRef = useRef(null);
  const [displayText, setDisplayText] = useState(text);

  const scramble = () => {
    let pos = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const scrambled = text.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          return randomChar;
        })
        .join("");

      setDisplayText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        clearInterval(intervalRef.current);
      }
    }, SHUFFLE_TIME);
  };

  useEffect(() => {
    scramble();
  }, []);

  return (
    <motion.h2
      onMouseEnter={scramble}
      className={className}
    >
      {displayText}
    </motion.h2>
  );
};

export default ScrambleText;