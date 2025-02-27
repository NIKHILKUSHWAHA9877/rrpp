"use client";
import React, { useEffect, useState } from "react";
import BookList from "./page";
import { FloatingNav } from "@/components/ui/FloatingNav";
import WhiteBg from "./WhiteBg";
import Contact from "./Contact";
import Londa from "./londa";
import HamsterLoader from "@/components/ui/Hamster";
import { usePathname } from "next/navigation";
import "./logo.css";

const Layout: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
     {loading ? (
        // Show Hamster Loader while loading
        <div className="flex bg-black justify-center items-center h-screen">
          <HamsterLoader />
        </div>
      ) : (
        <main className="maain relative mx-auto sm:px-0 px-0 overflow-clip z-100 rounded-b-[120px]">
          <FloatingNav />
          <BookList />
          <div>
            <p className="browser-warning">
              If this looks wonky to you, it’s because this browser doesn’t support the CSS
              property 'aspect-ratio'.
            </p>

            <Londa />
            <div className="stack">
              {/** Extract this into a separate component if needed */}
              {[
                {
                  img: "https://cdn.relinns.com/assets/images/home-rt-integrity-logo.png",
                  title: "Detailed Brand Analysis",
                  points: [
                    "🚀We research your brand’s identity.",
                    "🚀We study competitors to stand out.",
                    "🚀We create designs tailored to your audience.",
                  ],
                },
                {
                  img: "https://cdn.relinns.com/assets/images/home-rt-collaboration-logo.png",
                  title: "Most Affordable Packages",
                  points: [
                    "🚀Flexible plans to suit all budgets.",
                    "🚀Transparent pricing with no hidden fees.",
                    "🚀High-quality designs at affordable rates.",
                  ],
                },
                {
                  img: "https://cdn.relinns.com/assets/images/home-rt-responsibility-logo.png",
                  title: "Experienced Designers",
                  points: [
                    "🚀Skilled designers with years of experience.",
                    "🚀Expertise in crafting unique, professional logos.",
                    "🚀Creative solutions that align with your brand.",
                  ],
                },
                {
                  img: "https://cdn.relinns.com/assets/images/home-rt-taking-initiative-logo.png",
                  title: "Multiple Design Concepts",
                  points: [
                    "🚀We provide several unique logo concepts.",
                    "🚀You can choose the design that fits best.",
                    "🚀Revisions included for perfect results.",
                  ],
                },
                {
                  img: "https://cdn.relinns.com/assets/images/home-rt-excellence-logo.png",
                  title: "4.8/5 rating",
                  points: [
                    "🚀That’s our average customer rating from 1000+ reviews.",
                    "🚀Money-back guarantee! Yes, that's true.",
                  ],
                },
                {
                  img: "https://cdn.relinns.com/assets/images/home-innovation-logo.png",
                  title: "24/7 Creativity",
                  points: [
                    "🚀Professional designers online and available worldwide.",
                    "🚀Day or Night we are always available.",
                  ],
                },
              ].map((item, index) => (
                <div className="card" key={index}>
                  <div className="image">
                    <div className="tr">
                      <img src={item.img} alt="Logo" className="logo5" />
                      <h2>{item.title}</h2>
                    </div>
                    <ul className="ju">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Contact />
        </main>
      )}

      <WhiteBg
        className="w-full h-[90vh] mt-[-150px] sm:mt-[-150px] footer2 white-bg"
        style={{
          zIndex: 50,
          display: "flex",
        }}
      />
    </>
  );
};

export default Layout;
