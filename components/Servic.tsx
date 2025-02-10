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

    const totalDuration = 2000; // 2 seconds animation
    const incrementTime = totalDuration / end;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer); // Cleanup to prevent memory leaks
  }, [value]);

  return <>{count}</>;
};

const Servic = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* ✅ Fixed Section */}
      <section
        style={{
          paddingTop: "14px",
          height: "auto",
          overflow: "hidden",
          backgroundColor: "#000319",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="b-number-wrapper">
              <p className="text-gray-300 font-semibold mb-2 font-quicksand">{stat.label}</p>
              <motion.div
                className="text-5xl bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 text-transparent bg-clip-text font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <AnimatedNumber value={stat.value} />+
              </motion.div>
            </div>
          ))}
        </div>
      </section> {/* ✅ Correctly closed the section */}
    </>
  );
};

export default Servic;
