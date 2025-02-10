import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";
import { IconOne, IconTwo, IconThree, IconFour, IconFive, IconSix } from "@/components/Icons"; // Import Icons
const Experience = () => {
    return (
        <div className="py-20" id="experience">
            <h1 className="heading">
                Our
                <span className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(51,58,110)] via-[#7A8BD1] to-[#6A80C3] transition-all"> work experience</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="2rem"
                        className="flex-1 text-white border-neutral-200 dark:border-slate-800"
                    >
        <div className="flex flex-col items-center p-6 lg:p-8 md:p-6 gap-6"> {/* Adjust padding */}
                            
                            {/* Render icons dynamically */}
                            <div className="flex space-x-6 justify-center p-4"> {/* Add padding and center */}
                                {card.icons.map((IconComponent, index) => (
                                    <div key={index} className="p-13 m-2 bg-gray-800 rounded-lg"> {/* Wrap in div for spacing */}
                                        <IconComponent/> {/* Increase size */}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Experience;
