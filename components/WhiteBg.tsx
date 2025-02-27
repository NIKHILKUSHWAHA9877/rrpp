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


          <h2 className="mb-0 text-black  leading-none">
            LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER · LET’S WORK TOGETHER ·
          </h2>
        </div>
      </div>

      {/* Footer Section */}

      <img src="/bottomG.jpg" alt="Logo" className="bottomG" />



      <div className="absolute bottom-0 left-0 w-full px-4 py-3 flex flex-col md:flex-row justify-between items-center overflow-hidden text-center md:text-left">
  {/* Copyright Section */}



  <p className="text-gray-600 text-xs md:text-sm font-light md:font-normal fancy2">
  Copyright © 2025 Designed & Developed with 💓 by{" "}
  <span className="font-custom underline text-blue-500">Nikhil</span> in India.
  All Rights Reserved. | Powered by Googenix
</p>

{/* Default: Hidden on all screens */}



<p className="hidden text-gray-600 text-xs font-light fancy3 custom-small-text">

<span className="fancy3">Copyright © 2025 Designed & Developed with 💓 by{" "} <span className="font-custom underline text-blue-500">Nikhil</span></span> 
 
  <br /> <span className="fancy3">in India All Rights Reserved.| Powered by  
  <span className="fancy"> Googenix</span></span> 
</p>


  {/* Social Media Section */}
  <div className="flex items-center gap-4 mt-3 md:mt-0">
    {socialMedia.map((info) => (
      <div key={info.id}>
        <a
          href={info.link}
          rel="noreferrer noopener"
          target="_blank"
          className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
        >
          <img src={info.img} alt="social icons" width={16} height={16} className="md:w-5 md:h-5" />
        </a>
      </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhiteBg;
