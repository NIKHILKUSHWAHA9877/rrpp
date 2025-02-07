import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikhil's Portfolio",
  description: "My portfolio made with Next.js, TypeScript, and Tailwind CSS",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* ✅ Main wrapper without overflow-hidden to keep sticky scrolling working */}
          <div className="relative w-full min-h-screen">
            
            {/* ✅ Restrict only the image inside this container */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
  <img
    src="/analytics.png"
    alt="Analytics"
    className="absolute z-10"
    style={{
      top: "365rem",   // Move image down
      left: "68%",     // Move image slightly right
      opacity: 0.4,    // Reduce opacity
      maxWidth: "40vw",  // Prevents it from overflowing
      maxHeight: "80vh", // Ensures it doesn’t go too big
      height: "auto",
    }}
  />
  
  {/* Second image */}
  <img
    src="/color.png"
    alt="Second Image"
    className="absolute z-20"
    style={{
      top: "7rem",   // Adjust this for position
      left: "80.6%",     // Adjust this for position
      opacity: 0.4,    // Adjust opacity
      maxWidth: "50vw", // Adjust max width
      maxHeight: "70vh", // Adjust max height
      height: "auto",
    }}
  />
</div>

            {/* ✅ Main content (sticky scrolling will still work) */}
            <div className="relative z-5">
              {children}
            </div>

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}