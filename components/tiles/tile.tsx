'use client';

import { cloneElement, useContext, useState, useEffect } from 'react';
import { TileContext } from '@/components/tiles/TileContext';

interface TileProps {
  page: number;
  children: JSX.Element;
}

export const Tile = ({ page, children }: TileProps) => {
  const { currentPage, numOfPages } = useContext(TileContext);
  const [mounted, setMounted] = useState(false); // Track if the component has mounted

  useEffect(() => {
    setMounted(true); // Set to true after mounting to avoid SSR mismatch
  }, []);

  if (!mounted) return null; // Prevent rendering until mounted on client-side

  const progress = Math.max(0, currentPage - page);
  let opacity = Math.min(1, Math.max(0, progress * 4));

  if (progress > 0.85 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }

  return (
    <div
      className="absolute top-0 w-full"
      style={{
        opacity,
        pointerEvents: progress >= 0 || progress >= 1 ? 'none' : undefined,
      }}
    >
      {cloneElement(children, {
        progress: progress,
        opacity: opacity,
      })}
    </div>
  );
};
