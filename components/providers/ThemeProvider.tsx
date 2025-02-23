'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';  // Import ReactNode for type safety

interface ThemeProviderProps {
  children: ReactNode;  // Explicitly type children as ReactNode
  // You can extend this with any other props if needed, e.g.:
  // attribute?: string;
  // enableSystem?: boolean;
}

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
