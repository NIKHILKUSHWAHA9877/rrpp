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
          {/* Main wrapper with relative positioning */}
          <div className="relative">
            {/* Image container positioned over the background */}
            <div className="absolute top-[10rem] left-[2rem] sm:top-[20rem] sm:left-[10rem] md:top-[30rem] md:left-[20rem] lg:top-[40rem] lg:left-[50rem] xl:top-[138.3rem] xl:left-[70rem] z-10 pointer-events-none">
              <img
                src="/cod.png" // Path to your PNG image in the public folder
                alt="Background Overlay"
                className="object-contain w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[140px] lg:w-[55rem] lg:h-[50rem]"
                loading="lazy"
              />
            </div>

            {/* Main content */}
            <div className="relative z-5">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}