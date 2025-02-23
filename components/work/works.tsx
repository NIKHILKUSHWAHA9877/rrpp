'use client';

import { useEffect, useState } from 'react';
import { Tile } from '../tiles/tile';
import TileBackground from '../tiles/tile-background';
import { TileContent } from '../tiles/tile-content';
import TileWrapper from '../tiles/tile-wrapper';
import { WorkBackground } from './work-background';
import WorkContent from './work-content';
import { workTiles } from './workTiles';

export default function Works() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set mounted to true after the component is mounted
  }, []);

  if (!mounted) return null; // Prevent rendering on the server

  return (
    <TileWrapper numOfPages={workTiles.length}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        {workTiles.map((work, i) => {
          // Ensure key is always a valid string or number, falling back to index i
          const key = typeof work.title === 'string' && work.title.trim() !== '' ? work.title : i;
          
          return (
            <Tile page={i} key={key}>
              <WorkContent work={work} />
            </Tile>
          );
        })}
      </TileContent>
    </TileWrapper>
  );
}
