import React from 'react';
import Page from './page';  // Import the Page component
import { FloatingNav } from '@/components/ui/FloatingNav';
import WhiteBg from './WhiteBg';
import Contact from '@/app/projects/contact';
import "./about.css"
const Layout = () => {
  return (
    <>
   
      {/* You can add a header, footer, or any global structure here */}
 
      {/* Main Content */}
      <main className=" overflow-clip min-h-screen  rounded-b-[120px]">
        
        <FloatingNav/>
        <Page />  {/* Importing Page component */}


        <Contact/>
      </main>

   

<WhiteBg
className="w-full h-[75vh] mt-[-130px] footer4" // Negative margin to pull up
style={{
  zIndex: "1", // Ensuring it appears above the background, below the main content
  display: "flex",
}}
/>
</>
  );
};

export default Layout;
