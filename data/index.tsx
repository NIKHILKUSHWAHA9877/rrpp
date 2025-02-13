// "use client"; // Required for Next.js Client Component

import { Button } from "@/components/ui/MovingBorders";
import { IconOne, IconTwo, IconThree, IconFour, IconFive, IconSix } from "@/components/Icons";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: `<small>▪️</small>Website Development <br/>
         <small>▪️</small>App development <br />
<small>▪️</small>Ecommerce Listing Optimization<br />
<small>▪️</small>SEO <br/>
<small>▪️</small>Graphics designing<br/>
<small>▪️</small>Voice Cloning & Customization (AI)<br />
`,
        description: "Our Most Requested and Approved Services by Clients 👨‍💻",
        className: "lg:col-span-5 md:col-span-5 md:row-span-4 h-[80vh] ",
        imgClassName: "w-full h-full bg-cover bg-center opacity-30 filter blur-118",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
        

    },
    {
        id: 2,
        title: `<small>▪️</small>3D Walkthrough Video Creation<br / > 
<small>▪️</small>3D Floor Plan Visualization<br />
<small>▪️</small>3D Animation & CGI`,
        description: "Offering the best quality at affordable prices – guaranteed!👨‍💼🤝",
        className: "lg:col-span-3 md:col-span-3 md:row-span-3 lg:min-h-[50vh]",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: `
            <div class="flex flex-col">
                <span class="inline-flex items-start">
                <small>▪️</small>Influencer Marketing</span>
                <span class="pl-9">Campaigns</span>
            </div>
            <div class="mt-2 inline-flex items-start"><small>▪️</small>Social media management</div>
        `,
        description: "Connect with the Right Influencers for Success🪽",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: `<small>▪️</small>Paid Ads<br/> 
        <small>▪️</small>Content Writing`,
        description: "Boost Your Brand with Expert Paid Ads & Content Writing Services ✍️📈",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1 pt-6 pb-11",  // Only top and bottom padding
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "",
    },
    {
        id: 5,
        title: `
         <div class="flex flex-col">
                <span class="inline-flex items-start">
                <small>▪️</small>Video Subtitling &</span>
                <span class="pl-9">Captioning</span>
            </div>
         <small>▪️</small>Professional Dubbing <br />
<small>▪️</small>Voice-over Services<br />
<small>▪️</small>Color Grading<br/>`,
        description: "Content Creation and Video Editing Services🎥📷",
        className: "md:col-span-3 md:row-span-3",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-2 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Klimatee - weather app",
        des: "A web application that shows weather of different locations including your current location",
        img: "/klimatee.png",
        link: "https://klimatee.vercel.app/",
    },
    {
        id: 2,
        title: "Car Slayer",
        des: "A blockchain-based NFT game where players can buy, sell, and trade car NFTs using cryptocurrency.",
        img: "/nft-game.png",
        link: "https://car-slayer.vercel.app/",
    },
    {
        id: 3,
        title: "NFT minting Dapp",
        des: "A decentralized application that allows users to mint NFTs using the Avalanche blockchain.",
        img: "/nft.png",
        link: "https://nft-minting-kappa.vercel.app/",
    },
    {
        id: 4,
        title: "Stakify",
        des: "A decentralized application that allows users to stake tokens and earn rewards on the Polygon blockchain.",
        img: "/stakify.png",
        link: "https://stakify-rose.vercel.app/",
    },
];



export const workExperience = [
    {
        id: 1,
        title: "Blockchain Developer",
        desc: "Build full-stack blockchain applications, from smart contracts to front-end interfaces using Solidity & React.js",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
        icons: [IconOne, IconTwo, IconThree] // Unique icons for this box
    },
    {
        id: 2,
        title: "Blockchain Intern",
        desc: "Assisted in developing tokenomics for a new cryptocurrency project.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
        icons: [IconFour, IconFive, IconSix] // Different icons for this box
    }
];


export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: ""
    },
    {
        id: 2,
        img: "/twit.svg",
        link: ""
    },
    {
        id: 3,
        img: "/link.svg",
        link: ""
    },
];
