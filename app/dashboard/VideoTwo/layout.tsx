"use client";

import { ReactNode } from "react";
import { FloatingNav } from "@/components/ui/FloatingNav"; // Ensure this path is correct
import "./3d-video.css"; // Import 3D video page styles
import WhiteBg from "./WhiteBg";
import Contact from "./Contact";
import Page3DVideo from "./page";
import "./3d-video.css"

const Layout3DVideo = () => {
  return (
    <>
    <div className='overflow-clip z-100 rounded-b-[120px]'>
    <div>
      {/* Navigation Bar (Shared across the site) */}
      <FloatingNav/>
      {/* Page Content (Automatically renders `page.tsx`) */}
      
     <Page3DVideo/>
    </div>
    <Contact/>
     </div>
       <WhiteBg
  className="w-full h-[100vh] mt-[-300px] footer3"
  style={{
    zIndex: 1,
    display: "flex",
  }}
/> 
</>
  );
};

export default Layout3DVideo;

