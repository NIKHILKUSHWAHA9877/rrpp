"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocomotiveScroll from "locomotive-scroll";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { renderCanvas } from "@/components/hero/renderCanvas"; // Import renderCanvas function
import "./3d-video.css";
import WhiteBg from "@/components/WhiteBg";
import Page31 from "./Page31";


const Page3DVideo = () => {
  const fixedImageRef = useRef<HTMLDivElement>(null);
  const elemContainerRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // ✅ Hide Loader After Animation
    setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.style.top = "-100%";
      }
    }, 4200);

    const scrollContainer = document.querySelector("#main") as HTMLElement;
    if (!scrollContainer) return;

    // ✅ Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      lerp: 0.7,
      getDirection: true,
    });

    // ✅ Initialize Swiper
    new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
    });

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
    };
  }, []);

  useEffect(() => {
    // Call renderCanvas only for Page 1 when it's mounted
    const page1 = document.getElementById("page1");
    if (page1) {
      renderCanvas(); // Initialize canvas rendering on Page 1
    }
  }, []);

  return (
    <div>
      {/* Loader Section */}
      {/* <div id="loader" ref={loaderRef}>
        <h1>ENVIRONMENTS</h1>
        <h1>EXPERIENCES</h1>
        <h1>CONTENT</h1>
      </div> */}

      {/* Fixed Image Placeholder */}
      <div id="fixed-image" ref={fixedImageRef}></div>

      {/* Main Content */}
      <div id="main">
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
    We are a group of design-driven, goal-focused creators, producers, and designers who
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
  
   <Page31/>

</div>





        {/* Swiper Slider */}
        <div id="page4">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              {Array.from({ length: 7 }).map((_, index) => (
                <div key={index} className="swiper-slide">
                  Slide {index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-Screen Menu */}
      </div>

      {/* Footer */}
      <div id="footer">
        <WhiteBg />
      </div>
    </div>
  );
};

export default Page3DVideo;
