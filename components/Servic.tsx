"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const stats = [
  { label: "Projects Delivered", value: 150 },
  { label: "Countries Served", value: 80 },
  { label: "Partners", value: 30 },
  { label: "Team Size", value: 50 },
];

const AnimatedNumber = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let totalDuration = 2000;
    let incrementTime = totalDuration / end;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [value]);

  return <>{count}</>;
};

const Servic = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet" />
      </Head>
      <section className="pt-24 pb-12" style={{ backgroundColor: "rgb(0, 3, 25)" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="b-number-wrapper">
                <p className="text-gray-300 font-semibold mb-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>{stat.label}</p>
                <motion.div 
                  className="text-5xl bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: "linear-gradient(45deg, #FFD700, #FF69B4, #00BFFF)",
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 300,
                    backgroundSize: "100% 100%",
                    animation: "shining 3s ease-in-out infinite"
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <AnimatedNumber value={stat.value} />+
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes shining {
            100% { filter: brightness(1); }
          }
        `}</style>
      </section>
    </>
  );
};

export default Servic;