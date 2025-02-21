"use client";

import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "swiper/css";
import Swiper from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { renderCanvas } from "@/components/hero/renderCanvas"; 
import "./3d-video.css";
import Page31 from "./Page31";

const Page3DVideo = () => {
  const fixedImageRef = useRef<HTMLDivElement>(null);
  const elemContainerRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add state to handle the active slider (Interior Plan, Floor Plan, 3D Animation)
  const [activeSlider, setActiveSlider] = useState<string>("3d");

  // Swiper reference
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.style.top = "-100%";
      }
    }, 4200);

    const scrollContainer = document.querySelector("#page1") as HTMLElement;
    if (!scrollContainer) return;

    const scroll = new LocomotiveScroll({
      el: scrollContainer,
    });

    // Ensure Swiper initializes AFTER elements exist
    setTimeout(() => {
      swiperRef.current = new Swiper(".mySwiper", {
        slidesPerView: 3,  // Shows 3 slides at once
        centeredSlides: true,
        spaceBetween: 20,
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }, 500); // Wait for DOM to fully load

    // ✅ Page 3 Hover Effect
    if (elemContainerRef.current && fixedImageRef.current) {
      const elemContainer = elemContainerRef.current;
      const fixedImage = fixedImageRef.current;

      elemContainer.addEventListener("mouseenter", () => {
        fixedImage.style.display = "block";
      });

      elemContainer.addEventListener("mouseleave", () => {
        fixedImage.style.display = "none";
      });

      const elems = document.querySelectorAll(".elem");
      elems.forEach((e) => {
        e.addEventListener("mouseenter", function () {
          const image = (e as HTMLElement).getAttribute("data-image");
          fixedImage.style.backgroundImage = `url(${image})`;
        });
      });
    }

    return () => {
      scroll.destroy();
      if (swiperRef.current) swiperRef.current.destroy();
    };
  }, []);

  useEffect(() => {
    // Call renderCanvas only for Page 1 when it's mounted
    const page1 = document.getElementById("page1");
    if (page1) {
      renderCanvas(); // Initialize canvas rendering on Page 1
    }
  }, []);

  // Handlers for the custom buttons
  const handlePrevClick = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNextClick = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  // Render function for Swiper content based on the active slider
  const renderSlider = (type: string) => {
    return (
      
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="swiper-slide">
              {type === "3d" ? (
                <video autoPlay loop muted src={`/video/3d-animation${index + 1}.mp4`} controls />
              ) : (
                <img src={`/images/${type}-plan/${type}-plan${index + 1}.jpg`} alt={`${type} Plan ${index + 1}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  


  return (
    
    <div>
      {/* Fixed Image Placeholder */}
      <div id="fixed-image" ref={fixedImageRef}></div>

      {/* Main Content */}
      <div id="mainn">
        <div id="page1">
          {/* Navigation Bar */}
          <div id="center">
            <div id="left">
              <h3>
                Sundown is a multi-disciplinary studio focused on creating
                unique, end-to-end experiences and environments.
              </h3>
            </div>
            <div id="right">
              <h1>
                SPACES <br />
                THAT <br />
                INSPIRE
              </h1>
            </div>
          </div>

          {/* Hero Shape */}
          {/* Video */}
          <video autoPlay loop muted src="/video.mp4"></video>

          {/* Add Canvas here */}
          <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
        </div>

        {/* Page 2 */}
        <div id="page2">
          <div id="moving-text">
            <div className="con">
              <h1>EXPERIENCES</h1>
              <div id="gola"></div>
              <h1>CONTENT</h1>
              <div id="gola"></div>
              <h1>ENVIRONMENTS</h1>
              <div id="gola"></div>
            </div>
          </div>

          {/* ✅ Page 2 Bottom */}
          <div id="page2-bottom">
            <h1>
              We are a group of design-driven, goal-focused creators and designers who
              believe that the details make all the difference.
            </h1>
            <div id="bottom-part2">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="video-custom"
                src="/thed.mp4" // Replace with the path to your video
              >
                Your browser does not support the video tag.
              </video>
              <p>
                We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into
                reality. We’re here to partner with you through every step of the process and know that relationships
                are the most important things we build.
              </p>
            </div>
          </div>

          <div id="gooey"></div>
        </div>

        {/* Page 3 - Image Hover Animation */}
        <div id="page3">
          <div id="elem-container" ref={elemContainerRef}>
            {[
              "Makers Studio HOI",
              "50th Anniversary",
              "NYFW Popup",
              "Air Force 1 2021",
              "SOHO NYC",
              "SOHO 2023",
              "Play New Kidvision",
            ].map((title, index) => (
              <div key={index} className="elem" data-image={`/images/image${index + 1}.jpg`}>
                <div className="overlay"></div>
                <h2>{title}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Page31 />
        </div>

        {/* Swiper Slider with buttons */}
        <div id="page4">
          {/* Buttons to switch sliders */}
          <div id="slider-buttons" className="flex justify-center space-x-4 ">
  <button
    onClick={() => setActiveSlider("interior")}
    className="group relative bg-slate-900 h-16 w-64 border-2 border-teal-600 text-white text-base font-bold rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-emerald-400 hover:text-emerald-300 p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110"
  >
    Interior Plan
  </button>

  <button
    onClick={() => setActiveSlider("floor")}
    className="group relative bg-slate-900 h-16 w-64 border-2 border-teal-600 text-white text-base font-bold rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-emerald-400 hover:text-emerald-300 p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110"
  >
    Floor Plan
  </button>

  <button
    onClick={() => setActiveSlider("3d")}
    className="group relative bg-slate-900 h-16 w-64 border-2 border-teal-600 text-white text-base font-bold rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-emerald-400 hover:text-emerald-300 p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110"
  >
    3D Animation
  </button>
</div>

          {/* Render the active slider dynamically */}
          <div className="slid">{renderSlider(activeSlider)}
          </div>

          {/* Custom Navigation Buttons */}
          <div className="prevnex" style={{ textAlign: "center", marginTop: "20px" }}>
  <button
    onClick={handlePrevClick}
    className="bg-white text-black border-2 border-emerald-400 text-center w-20 h-8 relative text-sm font-semibold group mr-2"
    type="button"
  >
    <div
      className="bg-green-400 rounded-xl h-6 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[80px] z-10 duration-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        height="15px"
        width="15px"
      >
        <path
          d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
          fill="#000000"
        ></path>
        <path
          d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
          fill="#000000"
        ></path>
      </svg>
    </div>
    <p className="translate-x-2">Prev</p>
  </button>
  <button
    onClick={handleNextClick}
    className="bg-white text-black border-2 border-emerald-400 text-center w-20 h-8 relative text-sm font-semibold group"
    type="button"
  >
    <div
      className="bg-green-400 rounded-xl h-6 w-1/4 flex items-center justify-center absolute right-1 top-[4px] group-hover:w-[80px] z-10 duration-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        height="15px"
        width="15px"
      >
        <path
          d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
          fill="#000000"
        ></path>
        <path
          d="m786.752 512-265.408-265.344a32 32 0 0 1 45.312-45.312l288 288a32 32 0 0 1 0 45.312l-288 288a32 32 0 1 1-45.312-45.312L786.752 512z"
          fill="#000000"
        ></path>
      </svg>
    </div>
    <p className="translate-x-[-4px]">Next</p>
    </button>
   
</div>
</div>
      </div>
  
    </div>
 


  );
};

export default Page3DVideo;
