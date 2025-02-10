import React, { FC } from 'react';
import { socialMedia } from '@/data'; // Import social media data

interface WhiteBgProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const WhiteBg: FC<WhiteBgProps> = ({ className = '', style, children }) => {
  return (
    <div
      className={`bg-white ${className}`}
      style={{
        ...style,
        backgroundColor: 'white', // Ensure the background is white
      }}
    >
      {children}

      {/* Marquee Effect Inside WhiteBg */}
      <div className="marquee-container">
        <div className="marquee w-full">
          <h2 className="mb-0 text-black leading-none">
            LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER ·
          </h2>
        </div>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-0 left-0 w-full px-6 py-4 flex justify-between items-center">
        {/* Copyright Section */}
        <p className="text-gray-600 md:text-base text-sm md:font-normal font-light">
  Copyright © 2025 Designed & Developed with 💓 by <span className="font-custom underline text-blue-500">Nikhil</span> in India. All Rights Reserved. | Powered by Googenix
</p>


        {/* Social Media Section */}
        <div className="flex items-center gap-6">
          {socialMedia.map((info) => (
            <div key={info.id}>
              <a
                href={info.link}
                rel="noreferrer noopener"
                target="_blank"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="social icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhiteBg;
