"use client"

import '@fontsource/dancing-script'; // For Fontsource import

import React, { useState, useEffect, useMemo } from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FaLocationArrow } from 'react-icons/fa';

// Define types for mouse position
type MousePosition = {
  x: number;
  y: number;
};

// Define types for circular movement
type CircularMovement = {
  x: number;
  y: number;
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const getCircularMovement = (
    initialX: number,
    initialY: number,
    mouseX: number,
    mouseY: number,
    range: number = 30
  ): CircularMovement => {
    const deltaX = mouseX - initialX;
    const deltaY = mouseY - initialY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = Math.atan2(deltaY, deltaX);

    const newX = initialX + range * Math.cos(angle);
    const newY = initialY + range * Math.sin(angle);

    return { x: newX, y: newY };
  };

  const star1InitialPosition = { x: -290, y: -30 };
  const star2InitialPosition = { x: 380, y: 150 };

  useEffect(() => {
    const debouncedHandleMouseMove = debounce(handleMouseMove, 10);
    document.addEventListener('mousemove', debouncedHandleMouseMove);
    return () => {
      document.removeEventListener('mousemove', debouncedHandleMouseMove);
    };
  }, []);

  const { x: pinkStarX, y: pinkStarY } = useMemo(() => 
    getCircularMovement(star1InitialPosition.x, star1InitialPosition.y, mousePosition.x, mousePosition.y, 40),
    [mousePosition]
  );

  const { x: yellowStarX, y: yellowStarY } = useMemo(() => 
    getCircularMovement(star2InitialPosition.x, star2InitialPosition.y, mousePosition.x, mousePosition.y, 40),
    [mousePosition]
  );

  return (
    <div className='pt-20 pb-36 z-0'>
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen lg:h-[70vh] 2xl:h-[100vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center z-0">
        <div className="absolute z-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89px] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
          </h2>

          <TextGenerateEffect className='text-center text-[30px] sm:text-[40px] md:text-5xl lg:text-6xl' words='Transforming concepts into seamless user experiences'  />

          <p className=''>
          <h1 className='fancy'> <span>INNOVATING THE FUTURE IN A CHANGING ERA
          </span></h1>
          </p>








          {/* Chatbot | Generative AI | LLM Section */}
          <div className="custom-solutions text-center pb-14 md:pb-0">
  <div className="custom-solutions-container px-3 py-1 flex justify-center gap-2 sm:gap-4 rounded-lg bg-[#38413A] w-auto min-w-[250px] mx-auto mt-8 flex-nowrap">
    <p className="custom-text text-[#9EEFAD] text-sm sm:text-base">Chatbot</p>
    <span className="custom-text">|</span>
    <p className="custom-text text-[#9EEFAD] text-sm sm:text-base">Generative AI</p>
    <span className="custom-text">|</span>
    <p className="custom-text text-[#9EEFAD] text-sm sm:text-base">LLM</p>
  </div>


            {/* Pink Star Image */}
            <div className="relative">
              <img 
                src="https://cdn.relinns.com/assets/images/home-pink-star.svg" 
                alt="Pink color star" 
                className="pink-star layer absolute w-8 h-8 sm:w-12 sm:h-12"
                style={{
                  transform: `translateX(${pinkStarX}px) translateY(${pinkStarY}px)`,
                  transition: 'transform 0.2s ease-out'
                }}
              />
            </div>

            {/* Yellow Star Image */}
            <div className="relative">
              <img 
                src="https://cdn.relinns.com/assets/images/home-yellow-star.svg" 
                alt="Yellow color star" 
                className="yellow-star layer absolute w-8 h-8 sm:w-12 sm:h-12"
                style={{
                  transform: `translateX(${yellowStarX}px) translateY(${yellowStarY}px)`,
                  transition: 'transform 0.2s ease-out'
                }}
              />
            </div>
          </div>

          {/* Build AI with Us Button */}
          <div className="pt-8 sm:pt-16 md:pt-24 pb-0 md:pb-0 -mb-14">
  <div className="buttons-wrapper w-auto min-w-[200px] mx-auto">
    <a 
      href="#about"
      className="sec-button pointer bg-[#38413A] text-sm sm:text-base md:text-xl text-[#e0e4e1] font-regular flex items-center justify-center cursor-pointer py-2 px-4 sm:py-4 sm:px-7 rounded-3xl border-2 border-[#6D3776] hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.4)] transition-all duration-300"
    >
      <span className="cursor-pointer">Book Our Creatives</span>
    </a>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

// Debounce function with proper type annotations
const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: unknown, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export default Hero;