"use client";


import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./StickyScroll.css"

const industryData = [
  { imageUrl: "/ecomm.png", text: "E-commerce" },
  { imageUrl: "https://cdn.relinns.com/assets/images/home-industry-education.svg", text: "Education" },
  { imageUrl: "/healthcare.png", text: "Healthcare" },
  { imageUrl: "/realestate.png", text: "Real Estate" },
  { imageUrl: "/logistics.png", text: "Logistics" },
  { imageUrl: "/travel.png", text: "Travel" },
  { imageUrl: "/oil-gas.svg", text: "Oil & Gas" },
];

const StickyScroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll(".industry-section");
    const observerOptions = { root: null, threshold: 0.55 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target);
          setActiveIndex(index);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen"
      style={{
        marginBottom: "-210px",
      }}
    >
      {/* 🔹 Fixed Background Overlay to Prevent Flickering */}
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-100 pointer-events-none -z-10"></div>

      {/* Sticky Content */}
      <div className="sticky top-0 flex flex-col items-center justify-center h-screen w-full text-center">
        
        {/* Image - Always Visible */}
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={industryData[activeIndex]?.imageUrl}
            alt={industryData[activeIndex]?.text}
            className="w-24 h-24 mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Text List - At Least 5 Items Visible Below */}
        <div className="relative h-[250px] flex flex-col items-center justify-start w-full overflow-hidden">
          {industryData.map((industry, index) => {
            const visibleIndexes = Array.from({ length: 5 }, (_, i) => (activeIndex + i) % industryData.length);
            const isVisible = visibleIndexes.includes(index);
            const isTop = index === activeIndex; // Active text at top

            const opacity = isTop ? 1 : isVisible ? 0.6 - (visibleIndexes.indexOf(index) * 0.1) : 0;
            const scale = isTop ? 1.2 : 1;
            const translateY = (index - activeIndex) * 40 + 20; // 🔹 Increased spacing between text items

            return (
              <motion.p
                key={industry.text}
                className="font-mulish  text-white text-center w-full transition-all text-2xl"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity, scale, y: translateY }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                  whiteSpace: "nowrap",
                  display: opacity === 0 ? "none" : "block",
                  position: "absolute",
                    fontFamily: '"Mulish", serif',
                    fontWeight: "lighter",
                }}
              >
                {industry.text}
              </motion.p>
            );
          })}
        </div>
      </div>

      {/* Scrollable Sections */}
      <div className="w-full">
        {industryData.map((_, index) => (
          <div key={index} className="industry-section h-[60vh] flex items-center justify-center"></div>
        ))}
      </div>
    </section>
  );
};

export default StickyScroll;