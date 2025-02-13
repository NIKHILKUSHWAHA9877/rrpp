"use client"
import { usePathname } from 'next/navigation';  // Import usePathname hook
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "./provider";  

const inter = Inter({ subsets: ["latin"] });

 const metadata: Metadata = {
  title: "Nikhil's Portfolio",
  description: "My portfolio made with Next.js, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();  // Get the current path

  // Determine if we're on a specific route where we want the images
  const isMainPage = pathname === "/";  // Assuming your main page is at '/'
  const isAboutPage = pathname === "/about";  // Example for another specific route

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Main wrapper with rounded bottom corners */}
          <div className="relative w-full rounded-b-2xl z-0">
            
            {/* Conditionally render the background images only on specific pages */}
            {isMainPage && (
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {/* First Image */}
                <img
                  src="/analytics.png"
                  alt="Analytics"
                  className="absolute z-20"
                  style={{
                    top: "365rem",   
                    left: "68%",     
                    opacity: 0.4,    
                    maxWidth: "40vw",  
                    maxHeight: "80vh", 
                    height: "auto",
                  }}
                />

                {/* Second Image */}
                <img
                  src="/color.png"
                  alt="Second Image"
                  className="absolute z-20"
                  style={{
                    top: "7rem",   
                    left: "80.6%",  
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
