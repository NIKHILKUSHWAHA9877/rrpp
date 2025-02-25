import { ReactNode } from 'react';

export interface WorkProps {
  children: ReactNode;
  progress: number;
}

export function WorkRight({ children, progress }: WorkProps) {
  const translateY = Math.max(-50, -(progress - 0.5) * 50);

  return (
    <div
      className="flex h-[10vh] lg:h-auto  flex-col justify-center lg:items-center  pointer-events-auto"
      style={{ transform: `translateY(${translateY}px)`,
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",}}
      
    >
      <div className="w-full  max-w-md px-10 pt-10 md:px-0 lg:pt-0">{children}</div>
    </div>
  );
  
}
