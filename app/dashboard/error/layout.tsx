import React, { ReactNode } from "react";
import Error from "./page"; // Import Error component
import { FloatingNav } from "@/components/ui/FloatingNav";
interface LayoutProps {
  children: ReactNode; // Define children prop type
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
        <FloatingNav/>
      <Error />
      
    </div>
  );
};

export default Layout;
