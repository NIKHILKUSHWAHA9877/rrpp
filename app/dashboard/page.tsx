// pages/projects.tsx
import React from 'react';
import { FloatingNav } from "@/components/ui/FloatingNav";
import WhiteBg from '@/components/WhiteBg';
import Intro from '../projects/intro';
import Works from '@/components/work/works'; // Ensure the correct import for Works component
import Hero from '@/components/hero/hero'; // Same for Hero component
import { ScrollProvider } from '@/components/providers/ScrollProvider';

const Projects = () => {
  return (
    <>
      <FloatingNav />
      <ScrollProvider>
        <Hero />
        <Intro />
        <Works />
      </ScrollProvider>

       <WhiteBg
        className="w-full h-[85vh] mt-[-120px]" // Keep negative margin to pull up
        style={{
          zIndex: 1, // Ensuring it appears above the background but below the main content
          display: "flex",
        }}
      />
    </>
  );
};

export default Projects;
