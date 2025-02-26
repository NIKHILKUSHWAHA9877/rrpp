import React from 'react';
import Page from './page';  // Import the Page component
import { FloatingNav } from '@/components/ui/FloatingNav';
import WhiteBg from '@/components/WhiteBg';
import Contact from '@/app/projects/contact';
import "./about.css"
const Layout = () => {
  return (
    <>
    <div className="relative flex-col mx-auto sm:px-0 px-0 overflow-clip  rounded-b-[120px]">
      {/* You can add a header, footer, or any global structure here */}
 
      {/* Main Content */}
      <main >
        <FloatingNav/>
        <Page />  {/* Importing Page component */}
      </main>

      {/* You can add a footer here if needed */}
      {/* <footer className="py-4 bg-gray-800 text-white text-center">
        <p>&copy; 2025 Googenix. All rights reserved.</p>
      </footer> */}
      <Contact/>
    </div>

<WhiteBg
className="w-full h-[85vh] mt-[-100px]" // Negative margin to pull up
style={{
  zIndex: "1", // Ensuring it appears above the background, below the main content
  display: "flex",
}}
/>
</>
  );
};

export default Layout;
