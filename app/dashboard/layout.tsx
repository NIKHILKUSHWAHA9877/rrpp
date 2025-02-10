"use client"
import '@fontsource/mukta';
import Header from '@/components/layouts/header';
import LenisProvider from '@/components/providers/LenisProvider';
import ThemeProvider from '@/components/providers/ThemeProvider';
// import { Metadata } from 'next';
import { ReactNode } from 'react';
import { useEffect, useState } from 'react';

// Set metadata for the entire app layout (using the new metadata API)


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // You can render a loading state or just return null while loading

  return (
    <div className="bg-white text-black antialiased dark:bg-black dark:text-white">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        themes={['dark', 'light']}
      >
        <Header />
        <LenisProvider>{children}</LenisProvider>
      </ThemeProvider>
    </div>
  );
}