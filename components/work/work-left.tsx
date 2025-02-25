import { WorkProps } from '../work/work-right';

export function WorkLeft({ children, progress }: WorkProps) {
  let translateY = Math.max(0, 50 - progress * 3 * 50);

  if (progress > 0.85) {
    translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  }

  return (
    <div
      className="flex  sm:h-[20vh] md:h-[20vh]  lg:h-auto flex-col items-center bg-black justify-center  "
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="leading-1 p-2 md:leading-10 text-white">{children}</div>
    </div>
  );
}
