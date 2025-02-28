// pages/projects.tsx
import React from 'react';
import { FloatingNav } from "@/components/ui/FloatingNav";
import WhiteBg from './WhiteBg';
import Intro from '../../projects/intro';
import Works from '@/components/work/works'; // Ensure the correct import for Works component
import Contact from '../../projects/contact';
import Hero from '@/components/hero/hero'; // Same for Hero component
import { ScrollProvider } from '@/components/providers/ScrollProvider';
import "./routerr.css";

const Projects = () => {
  return (
    <>
     <main className="relative mx-auto sm:px-0 px-0 overflow-clip z-100 rounded-b-[120px]">
      <FloatingNav />
      <ScrollProvider>
        <Hero />
        <Intro />
        <Works />
<Contact/>
      </ScrollProvider>
      </main>
       <WhiteBg
        className="w-full h-[85vh] mt-[-120px]" 
        style={{
          zIndex: 1, 
          display: "flex",
        }}
      />
    </>
  );
};

export default Projects;
