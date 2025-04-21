// components/TypewriterText.js
"use client";
import React, { useEffect, useState } from "react";

const TypewriterText = ({ text = "Explore the wonders of space", speed = 100, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else {
        setTimeout(() => setIsDeleting(!isDeleting), pause);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, index, isDeleting, speed, pause]);

  return (
    <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 animate-slide-up">
      {displayedText}
      <span className="animate-blink">|</span>
    </h1>
  );
};

export default TypewriterText;
