"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { PinContainer } from './3d-pin';
import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link'; // Importing the Link component

// Define card data dynamically
const cardData = [
  {
    title: "Custom Software Development",
    description:
      "Your vision combined with our code to deliver a bespoke software solution that works just the way you want.",
    imageUrl: "https://cdn.relinns.com/assets/images/home-what-we-do-one.png",
    link: "/services/custom-software-development", // Example route for this card
  },
  {
    title: "Low Code Development",
    description:
      "Our solutions are low on code but high on performance, resulting in faster & efficient apps.",
    imageUrl: "https://cdn.relinns.com/assets/images/home-what-we-do-four.png",
    link: "/services/low-code-development", // Example route for this card
  },
  {
    title: "Custom Chatbot Development",
    description:
      "Get custom chatbots tailored for your use case & integrated with your existing & preferred software system.",
    imageUrl: "https://cdn.relinns.com/assets/images/home-what-we-do-two.png",
    link: "/services/custom-chatbot-development", // Example route for this card
  },
  {
    title: "eCommerce Solutions",
    description:
      "We craft scalable online stores with a user-centric view, be it web & mobile apps, chat storefronts, or AI-assisted e-shopping.",
    imageUrl: "https://cdn.relinns.com/assets/images/home-what-we-do-five.png",
    link: "/services/ecommerce-solutions", // Example route for this card
  },
  {
    title: "Generative AI Consulting",
    description:
      "We are your pathfinders in the generative AI age, helping you strategize the perfect blueprint for all things AI.",
    imageUrl: "https://cdn.relinns.com/assets/images/home-what-we-do-three.png",
    link: "/services/generative-ai-consulting", // Example route for this card
  },
  {
    title: "AI Model Development",
    description:
      "We shape AI algorithms & ML models to enhance data analysis, automate processes, & predict outcomes.",
    imageUrl: "https://cdn.relinns.com/assets/images/home-what-we-do-six.png",
    link: "/services/ai-model-development", // Example route for this card
  },
];

const GridCards: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <ul
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-1 px-4 py-6 justify-items-center"
      style={{
        gap: "0px",
        margin: "30px",
        padding: "30px", // Small gap between items
      }}
    >
      {cardData.map((card, index) => (
        <li
          key={index}
          className={`custom-card z-100 overflow-hidden p-0 relative bg-[#1A1A1A] rounded-xl h-[480px] w-[360px] border-0 aos-init aos-animate
          ${index % 3 === 1 ? "mt-0" : "mt-8"}`} // Staggering effect: middle is up, sides are down
          data-aos="fade-up"
        >
          <Link href={card.link}> {/* Wrap the card with Link for routing */}
            <a>
              <div
                className=" flex flex-col justify-between h-full bg-cover bg-center text-white rounded-xl neon-card"
                style={{ backgroundImage: `url(${card.imageUrl})` }}
              >
                <div className="flex flex-col justify-end p-4 h-full">
                  <h3 className="text-lg font-bold font-mulish2">{card.title}</h3>
                  <p className="text-sm font-mulish3">{card.description}</p>
                </div>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GridCards;
