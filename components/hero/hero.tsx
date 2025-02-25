'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { ScrollContext } from '../providers/ScrollProvider';
import { renderCanvas } from './renderCanvas';
import "./hero.css";
export default function Hero() {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div className="overflow-hidden">
      <h1 className="sr-only overflow-hidden">
      
      </h1>
      <div className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-36">
            <div ref={ref} className="flex cursor-default flex-col space-y-2">
              <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl mt-16">
                Unlimited Video Editing Service
              </h1>
              <h2 className="text-3xl font-medium opacity-80 sm:text-6xl md:text-6xl xl:text-[42px]">
                Tailored for modern-day video editing, so you can create video content without the hassle of managing.
              </h2>
              <Link
                href="/about"
                className="underline-magical text-sm w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl mt-6"
              >
                Below Explore Our Most Popular Edits Right Now &rarr;
              </Link>
            </div>
            <motion.div
              animate={{
                transform: `translateY(${progress * 10}vh)`,
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8"
            >
              <div
                role="presentation"
                className="flex cursor-pointer flex-col items-center justify-center"
                onClick={() => {
                  const intro = document.querySelector('#intro');
                  intro?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <HiOutlineArrowNarrowDown size={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>

     
    </div>
  );
}
