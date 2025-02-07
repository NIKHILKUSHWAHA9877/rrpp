"use client"; // This must be at the top

import { useEffect, useState, useRef } from "react";

export default function ScrollImage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        const isInView = top < window.innerHeight && bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      {/* Image container - Only shown when in view */}
      {isVisible && (
        <div className="fixed z-10 pointer-events-none custom-image-position">
          <img
            src="/analytics.png" // Path to your PNG image in the public folder
            alt="Background Overlay"
            className="object-contain w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[140px] lg:w-[65rem] lg:h-[50rem] opacity-40"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
