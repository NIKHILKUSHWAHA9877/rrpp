"use client";
import '@fontsource/mukta';  // Import Mukta font

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:grid-auto-rows-auto gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};
export const BentoGridItem = ({
  className,
  title = '',  
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string;  // Ensure title is always a string
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
    
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('nikhik15kumar@gmail.com');
        setCopied(true);
    }

    return (
        
      <div
      className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1] ",
          className,
          "hover:border-2 hover:gradient-border hover:rounded-[2rem]"
      )}
      style={{
          background: 'rgb(4, 7, 29)',
          backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
  >
            
            {/* Rest of the existing content */}
            <div className={`${id === 6 && "flex justify-center"} h-full`}>

                <div className="w-full h-full absolute">
                    {img && (
                        <img src={img} alt={img} className={cn(imgClassName, 'object-cover object-center')} />
                    )}
                </div>

                <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
                    {spareImg && (
                        <img src={spareImg} alt={spareImg} className={"object-cover object-center w-full h-full"} />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation className="z-40"/>
                )}

<div className={cn(
                    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
                )}>

                    {/* Existing content */}
                    {id === 1 && (
                        <div className="font-mukta font-extralight md:max-w-32 md:text-xl lg:text-base text-sm text-[#C1C2D3] z-10">


<div className="font-mukta font-extralight md:max-w-33 md:text-xl lg:text-base text-sm text-[#C1C2D3] z-10 relative" style={{
  }}
>
     <div
      style={{
        position: 'absolute',
        bottom: '-40px', // Adjust vertical position
        left: '-8rem', // Adjust horizontal position
        width: '20rem', // Set width of the PNG image container
        height: '19rem', // Set height of the PNG image container
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '10px',
        alignItems: 'center',
        zIndex: 1,
       transform: 'rotate(-28deg)',
      }}
    >
      <img
        src="/persona.webp"
      />
    </div>
</div>

                            {description}
                        </div>
                    )}



                    {id === 2 && (
                        <div className="font-mukta font-extralight md:max-w-33 md:text-xl lg:text-base text-sm text-[#C1C2D3] z-10">


<div className="font-mukta font-extralight md:max-w-33 md:text-xl lg:text-base text-sm text-[#C1C2D3] z-10 relative" style={{
  }}
>
     <div
      style={{
        position: 'absolute',
        top: '3px', // Adjust vertical position
        left: '28rem', // Adjust horizontal position
        width: '20rem', // Set width of the PNG image container
        height: '19rem', // Set height of the PNG image container
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '10px',
        alignItems: 'center',
        zIndex: 1,
       
      }}
    >
      <img
        src="/color.png"
      />
    </div>
</div>
                            {description}
                        </div>
                    )}


{id === 3 && (
                        <div className="font-mukta font-extralight md:max-w-33 md:text-xl lg:text-base text-sm text-[#C1C2D3] z-10">
                            {description}
                        </div>



                    )}

{id === 4 && (
  <div className="font-mukta font-extralight md:max-w-33 md:text-xl lg:text-base text-sm text-[#C1C2D3] z-10 relative" style={{
  }}
>
     <div
      style={{
        position: 'absolute',
        top: '1px', // Adjust vertical position
        left: '12rem', // Adjust horizontal position
        width: '18rem', // Set width of the PNG image container
        height: '17rem', // Set height of the PNG image container
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '10px',
        alignItems: 'center',
        zIndex: 1,
       
      }}
    >
      <img
        src="/ad.png"
      />
    </div>
    <div
      style={{
        position: 'absolute',
        top: '-180px', // Adjust vertical position
        left: '-8rem', // Adjust horizontal position
        width: '18rem', // Set width of the PNG image container
        height: '17rem', // Set height of the PNG image container
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '10px',
        alignItems: 'center',
        zIndex: 1, 
        transform: 'rotate(180deg)', 
      }}
    >
<img
  src="/b4.svg"
      />
    </div>
    {description}
  </div>
)}




{id === 5 && (
  <div
    className="relative font-mukta font-extralight md:max-w-33 md:text-xl lg:text-base text-sm text-[#C1C2D3] z-10"
    style={{
        
    }}
  >
    {/* PNG Image 1 with individual background */}
    <div
      style={{
        position: 'absolute',
        top: '5px', // Adjust vertical position
        left: '25rem', // Adjust horizontal position
        width: '8rem', // Set width of the PNG image container
        height: '7rem', // Set height of the PNG image container
        backgroundColor: '#06091f', // Background color for the image
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '10px',
        alignItems: 'center',
        zIndex: 1,
      }}
    >
      <img
        src="/influncer.png" // Replace with your actual PNG path
        style={{
          width: '100%', // Image takes full width of the container
          height: '100%', // Image takes full height of the container
        }}
        alt="Influencer"
      />
    </div>

    {/* PNG Image 2 with individual background */}
    <div
      style={{
        position: 'absolute',
        top: '70px', // Adjust vertical position
        left: '38rem', // Adjust horizontal position
        width: '8rem', // Set width of the PNG image container
        height: '7rem', // Set height of the PNG image container
        backgroundColor: '#06091f', // Background color for the image
        display: 'flex',
        borderRadius: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
      }}
    >
      <img
        src="/vid.png" // Replace with your actual PNG path
        style={{
          width: '100%', // Image takes full width of the container
          height: '100%', // Image takes full height of the container
        }}
        alt="Video"
      />
    </div>

    {/* PNG Image 3 with individual background */}
    <div
      style={{
        position: 'absolute',
        top: '130px', // Adjust vertical position
        left: '31rem', // Adjust horizontal position
        width: '8rem', // Set width of the PNG image container
        height: '7rem', // Set height of the PNG image container
        backgroundColor: '#06091f', // Background color for the image
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        borderRadius: '10px',
        transform: 'rotate(-32deg)', // Rotate image if needed
      }}
    >
      <img
        src="/ed.png" // Replace with your actual PNG path
        style={{
          width: '100%', // Image takes full width of the container
          height: '100%', // Image takes full height of the container
        }}
        alt="Editing"
      />
    </div>

    {/* PNG Image 4 with individual background */}
    <div
      style={{
        position: 'absolute',
        top: '130px', // Adjust vertical position
        left: '23rem', // Adjust horizontal position
        width: '8rem', // Set width of the PNG image container
        height: '7rem', // Set height of the PNG image container
        backgroundColor: '#06091f', // Background color for the image
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        zIndex: 1,
        transform: 'rotate(-10deg)', // Rotate image if needed
      }}
    >
      <img
        src="/dub.png" // Replace with your actual PNG path
        style={{
          width: '100%', // Image takes full width of the container
          height: '100%', // Image takes full height of the container
        }}
        
      />
    </div>
    <div
      style={{
        position: 'absolute',
        top: '-23px', // Adjust vertical position
        left: '35rem', // Adjust horizontal position
        width: '8rem', // Set width of the PNG image container
        height: '7rem', // Set height of the PNG image container
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        zIndex: 1,
        transform: 'rotate(-10deg)', // Rotate image if needed
      }}
    >
      <img
        src="/gro.png" // Replace with your actual PNG path
        style={{
          width: '100%', // Image takes full width of the container
          height: '100%', // Image takes full height of the container
        }}
        
      />
    </div>
    {/* Description text */}
    <div className="z-10">{description}</div>
  </div>
)}

   <div
                        className={`font-mukta text-lg lg:text-3xl max-w-100 font-bold z-10 space-y-2`}
                        dangerouslySetInnerHTML={{
                            __html: typeof title === 'string' ? title : '' // Ensure title is a valid string
                        }}
                    />

                    {id === 2 && (
                        <div className="absolute inset-0 z-0">
                            <GridGlobe />
                        </div>
                    )}

{id === 3 && (
    <div className="flex gap-1 lg:gap-3 w-fit absolute lg:right-0 right-0 top-0 lg:-right-13">
        {/* First Column */}
        <div className="flex flex-col gap-3 lg:gap-1">
            {/* First Box */}
            <div 
                className="rounded-lg p-0 flex justify-center items-center" 
                style={{
                    backgroundColor: "#10132E",
                    transform: "translateY(-47px)" // Moves the box 5px upwards
                }}
            >
                <div className="rounded-lg p-2 flex justify-center items-center">
                    <img src="/one.jpg" alt="Solidity" className="h-20 w-20 lg:h-25 lg:w-25" />
                </div>
            </div>

            {/* Second Box */}
            <div 
                className="rounded-lg flex justify-center items-center" 
                style={{
                    backgroundColor: "#10132E",
                    transform: "translateY(-39px) translateX(-5px)" // Moves the box 5px upwards
                }}
            >
                <div className="flex p-2 justify-center items-center">
                    <img src="/makt.jpg" alt="Makt" className="h-20 w-25 lg:h-25 lg:w-35" />
                </div>
            </div>

            {/* Third Box (No image, only background) */}
            <div 
                className="rounded-lg p-1 flex justify-center items-center" 
                style={{
                    backgroundColor: "#202540",
                    transform: "translateY(-29px) translateX(-5px)",
                    minHeight: "5rem", // Minimum height to avoid compression
                    width: "100%", // Ensure full width
                    padding: ""
                    
                }}
                
            >
                    <img src="/influmn.png" className="h-20 w-25 object-cover" />
                
            </div>
        </div>
    </div>
)}




                    {id === 6 && (
                        <div className="mt-5 relative z-40">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }} />
                            </div>
                            <div className="bento-item relative z-20">
                            <MagicButton 
                              className="z-50"
                            title={copied ? 'Email copied' : 'Copy my email'} 
                            icon={<IoCopyOutline />} position="left" 
                            otherClasses="bg-[#161a31]" handleClick={handleCopy} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};