"use client";

import { usePathname } from "next/navigation";  
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "../styles/responsivenss.css";
import "../styles/globals.css";

import { ThemeProvider } from "./provider";
import { useState, useEffect } from "react";  // Import React hooks

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Nikhil's Portfolio",
  description: "My portfolio made with Next.js, TypeScript, and Tailwind CSS",
};

// Define the viewport hook inside this file
function useViewport() {
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Set initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, height };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();  // Get the current path
  const { width, height } = useViewport();  // Get viewport dimensions

  // Check if we are on specific pages
  const isMainPage = pathname === "/";
  const isAboutPage = pathname === "/about";

  return (
    
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Main wrapper */}
          <div className="relative w-full rounded-b-2xl z-0">
            
            {/* Conditionally render images on specific pages */}
            {isMainPage && (
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <img
                  src="/color.png"
                  alt="Second Image"
                  className="absolute colorpng z-20"
                  style={{
                    top: width && width < 768 ? "5rem" : "7rem",  // Adjust for small screens
                    left: width && width < 768 ? "50%" : "80.6%",
                    transform: width && width < 768 ? "translateX(-50%)" : "none",
                    opacity: 0.4,
                    maxWidth: "50vw",
                    maxHeight: "70vh",
                    height: "auto",
                  }}
                />
              </div>

            )}

            {/* Main content */}
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
