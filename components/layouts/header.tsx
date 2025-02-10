'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SectionContainer from './section-container';

export default function Header() {
  const pathName = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure the component is mounted before applying any dynamic changes
  }, []);

  if (!mounted) return null; // Prevent SSR mismatch

  return (
    <SectionContainer>
      <header className="z-40 bg-transparent py-5 md:py-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <Link
              href="/"
              className={classNames(
                'horizontal-underline hidden text-3xl font-extrabold sm:block',
                {
                  'horizontal-underline-active': pathName === '/',
                }
              )}
            >
              d.
            </Link>
          </div>
          <div className="flex items-center space-x-3 text-base leading-5">
            <div className="flex items-center space-x-4">
              {/* Any additional header content goes here */}
            </div>
          </div>
        </div>
      </header>
    </SectionContainer>
  );
}
