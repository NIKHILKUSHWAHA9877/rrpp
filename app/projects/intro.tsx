"use client";

import { useLenis } from '@studio-freight/react-lenis';
import { useRef, useState, useEffect } from 'react';

function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber;

  if (progress >= 0 && progress < 1) {
    return 1;
  }

  return 0.2;
}

export default function Intro() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false); // Track if the component is mounted

  useLenis(({ scroll }) => {
    setScrollY(scroll);
  });

  useEffect(() => {
    setMounted(true); // Set to true once the component is mounted
  }, []);

  // Prevent rendering until mounted on the client

  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 4;  // Increased the number of pages to 4
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;

    const percentY =
      Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) /
      clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div
      ref={refContainer}
      className="relative z-10 bg-black text-white dark:bg-white dark:text-black"
      id="intro"
    >
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-10 py-24 text-4xl font-semibold tracking-tight md:py-28 md:text-6xl lg:px-20 lg:py-3 lg:text-7xl">

        <div className="leading-[1.15]">

          {/* First Text Block */}
          <div className="introText" style={{ opacity: opacityForBlock(progress, 0) }}>
            You Create.
            <h2 className="text-3xl font-medium opacity-80 sm:text-6xl md:text-6xl xl:text-[42px]">
              We Edit.
              No stress, no fuss. One less thing on your plate.
            </h2>
          </div>


          {/* Second Text Block */}
          <span
            className="introText inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Streamlined Process
            <h2 className="text-3xl font-medium opacity-80 sm:text-6xl md:text-6xl xl:text-[42px]">
              Spend less time handling video edits and stay focused on your business.
            </h2>
          </span>


          {/* Third Text Block */}
          <span
            className="introText inline-block"
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            We&apos;re passionate about cutting-edge, pixel-perfect editing and intuitively implemented UX.
          </span>



          {/* Fourth Text Block (New Block) */}
          <span
            className="introText inline-block"
            style={{ opacity: opacityForBlock(progress, 3) }}
          >
            
              Enhance Your Brand
        
            <h2 className="text-3xl font-medium opacity-80 sm:text-6xl md:text-6xl xl:text-[42px]">
            Get our editors who create engaging and trendy videos in any style.
            </h2>
          </span>


        </div>
      </div>
    </div>
  );
}
