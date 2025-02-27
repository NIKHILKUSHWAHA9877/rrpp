"use client"
import '@fontsource/mukta';
import "@fontsource/mulish"; 
import { useState, useEffect } from "react";

import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Testimonials from '@/components/Testimonials';
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import AImodels from "@/components/AImodels";
import Servic from "@/components/Servic";
import StickyScroll from "@/components/StickyScroll";
import WhiteBg from "@/components/WhiteBg";
import Cardd from '@/components/ui/Cardd';
import GridCards from '@/components/ui/gridcards';
import "@/styles/loader.css"
import "../styles/globals.css";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (can be removed if using real API calls)
    const timer = setTimeout(() => setLoading(false), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[rgb(0,3,25)] z-[9999]"
    >
    <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
      <div className="wheel"></div>
      <div className="hamster">
        <div className="hamster__body">
          <div className="hamster__head">
            <div className="hamster__ear"></div>
            <div className="hamster__eye"></div>
            <div className="hamster__nose"></div>
          </div>
          <div className="hamster__limb hamster__limb--fr"></div>
          <div className="hamster__limb hamster__limb--fl"></div>
          <div className="hamster__limb hamster__limb--br"></div>
          <div className="hamster__limb hamster__limb--bl"></div>
          <div className="hamster__tail"></div>
        </div>
      </div>
      <div className="spoke"></div>
    </div>
  </div>
      ) : (
        <>
          {/* Main Content */}
          <main className="relative bg-[rgb(0,3,25)] flex justify-center items-center flex-col mx-auto sm:px-0 px-0 overflow-clip rounded-b-[120px]">
            {/* Content with constrained width */}
            <div className="max-w-7xl w-full mx-auto">
              <FloatingNav />
              <Hero />
              <Servic
                className=""
                style={{
                  zIndex: "9999",
                  position: "relative",
                }}
              />
              <StickyScroll  />
              <Grid />
              <RecentProjects />
              <GridCards />
              <Cardd />
              <Experience />
              <Approach />
            </div>

            {/* Full width background container for AImodels */}
            <div className="w-full m-0 p-0">
              <AImodels />
            </div>

            {/* Content with constrained width */}
            <div className="max-w-7xl w-full mx-auto">
              <Testimonials />
              <Footer />
            </div>
          </main>

          {/* WhiteBg Outside Main */}
          <WhiteBg
            className="w-full h-[85vh] mt-[-100px]"
            style={{
              zIndex: "1",
              display: "flex",
            }}
          />
        </>
      )}
    </>
  );
}