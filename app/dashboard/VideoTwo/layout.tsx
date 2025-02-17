"use client";

import { ReactNode } from "react";
import { FloatingNav } from "@/components/ui/FloatingNav"; // Ensure this path is correct
import "./3d-video.css"; // Import 3D video page styles
import WhiteBg from "@/components/WhiteBg";
interface LayoutProps {
  children: ReactNode;
}

const Layout3DVideo = ({ children }: LayoutProps) => {
  return (
    <>
    <main>
    <div>
      {/* Navigation Bar (Shared across the site) */}
      <FloatingNav/>
      {/* Page Content (Automatically renders `page.tsx`) */}
      {children}
     
    </div>
     </main>
    <WhiteBg
        className="w-full h-[100vh] mt-[280px] footer2"
         // Keep negative margin to pull up
        style={{
          zIndex: 1, // Ensuring it appears above the background but below the main content
          display: "flex",
          
        }}
      />
</>
  );
};

export default Layout3DVideo;

