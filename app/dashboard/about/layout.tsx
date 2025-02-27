"use client";
import React, { useEffect, useState } from "react";
import Page from "./page";
import { FloatingNav } from "@/components/ui/FloatingNav";
import WhiteBg from "./WhiteBg";
import Contact from "@/app/projects/contact";
import HamsterLoader from "@/components/ui/Hamster";
import { usePathname } from "next/navigation"; // Import Next.js router hook
import "./about.css";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // Detects route changes

  useEffect(() => {
    setLoading(true); // Show loader when route changes
    const timer = setTimeout(() => setLoading(false), 600); // 500ms delay
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [pathname]); // Runs on route change

  return (
    <>
        {loading ? (
        // Show Hamster Loader while loading
        <div className="flex justify-center items-center h-screen bg-black">
          <HamsterLoader />
        </div>
      ) : (
        <main className="overflow-clip min-h-screen rounded-b-[120px]">
          <FloatingNav />
          <Page />
          <Contact />
        </main>
      )}

      {/* Footer */}
      <WhiteBg
        className="w-full h-[75vh] mt-[-130px]"
        style={{ zIndex: "1", display: "flex" }}
      />
    </>
  );
};

export default Layout;
