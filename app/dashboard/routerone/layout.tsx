"use client";

import '@fontsource/mukta';
import Header from '@/components/layouts/header';
import LenisProvider from '@/components/providers/LenisProvider';
import ThemeProvider from '@/components/providers/ThemeProvider';
import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import "./routerr.css";
import HamsterLoader from '@/components/ui/Hamster'; // Import the Hamster Loader

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600); // Simulate loading delay
    return () => clearTimeout(timer);
  }, [pathname]); // Runs when pathname changes

  return (
    <div className="bg-white text-black antialiased dark:bg-black dark:text-white">
      <ThemeProvider>
        <Header />
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black  z-50">
            <HamsterLoader /> {/* Show the Hamster Loader when loading */}
          </div>
        )}
        <LenisProvider>{children}</LenisProvider>
      </ThemeProvider>
    </div>
  );
}
