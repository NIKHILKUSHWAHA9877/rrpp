"use client";

import { useState, useEffect } from "react";
import { FloatingNav } from "@/components/ui/FloatingNav"; // Ensure correct path
import "./3d-video.css"; // Import 3D video page styles
import WhiteBg from "./WhiteBg";
import Contact from "./Contact";
import Page3DVideo from "./page";
import HamsterLoader from "@/components/ui/Hamster"; // Import the loader

const Layout3DVideo = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after content loads
    }, 600); // Adjust time if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        // Show Hamster Loader while loading
        <div className="flex justify-center items-center h-screen bg-black">
          <HamsterLoader />
        </div>
      ) : (
        // Once loaded, show the main content
        <div className="overflow-clip z-50 rounded-b-[120px]">
          <FloatingNav />
          <Page3DVideo />
          <Contact />
        </div>
      )}

      {/* Footer Section */}
      <WhiteBg
        className="w-full h-[100vh] mt-[-300px] footer3"
        style={{
          zIndex: 1,
          display: "flex",
        }}
      />
    </>
  );
};

export default Layout3DVideo;
