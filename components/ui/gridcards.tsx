"use client";

import React, { useEffect, useState } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import Link from 'next/link'; // Importing the Link component
import "@/styles/nebiourflip.css"
import ReactCompareImage from "react-compare-image";

// Define card data dynamically
const cardData = [
  {
    title: "From Edits to Voice: Full Video Solutions",
    description:
      "We offer professional video editing, color grading, dubbing, voice-overs, and subtitles to enhance your content. Whether you're a creator or a business, we ensure top-quality visuals and sound. Let’s bring your vision to life!",
    imageUrl: "/weedit.webp",
    imageWidth: "280%",  // Add specific width
    imageHeight: "290px",
    link: "/dashboard/routerone",
    backContent: {
      images: [
        "/aurat.png"],
        backgroundColor: "#ffcc00",  // Custom background color
        imageSize: { width: "70%", height: "100%" },
      text: [
        <h2 className="thDh">DO YOU KNOW?</h2>,
        <p className="thDp">🔝With over <b>400 million</b> views on YouTube, our work speaks for itself. We've partnered with industry giants like Amazon Prime Video, Stage OTT, and many more, delivering high-quality, impactful content that truly engages audiences. 🎥✨</p>,
        <p className="thDp">🏆Googenix is Trusted by startups and enterprises alike for stunning work.
</p>,
      ],
    },
  },



  {
    title: "Low Code Development",
    description:
      "Our solutions are low on code but high on performance, resulting in faster & efficient apps.",
    imageUrl: "https://cdn.relinns.com/assets/images/home-what-we-do-four.png",
    imageWidth: "100%",
    imageHeight: "100%",  // Add specific width
    link: "/services/low-code-development",
    backContent: {
      images: [
        "" ],
        backgroundColor: "#ffcc00",  // Custom background color
        imageSize: { width: "70%", height: "100%" },
      text: "software dev"
    },// Example route for this card
  },


  {
    title: "3D Visualization & Animation Services",
    description:
      "Step into the future with our cutting-edge 3D walkthrough videos, interactive floor plans, and mind-blowing CGI animations. Perfect for architects, realtors, and creatives—let's bring your vision to life with stunning realism and unbeatable prices-guaranteed!",
    imageUrl: ["/3d blur.jpg", "/3d normal.jpg" ],
      imageWidth: "280%",  // Add specific width
    imageHeight: "320px",
    link: "/dashboard/VideoTwo",
    backContent: {
      images: ["/out-0.webp"],
     borderRadius: "22px",
      backgroundColor: "#A01F29",  // Custom background color
      imageSize: { width: "85%", height: "100%" },
      text: [
        <h2 className="thDh">DO YOU KNOW?</h2>,
        <p className="thDp">✅ We Successfully collaborated with 11+ clients on high-quality 3D projects.</p>,
        <p className="thDp">🔁 Proud to have a 90% client retention rate, showcasing our commitment to quality and satisfaction.</p>,
        <p className="thDp">🏆Googenix is Trusted by startups and enterprises alike for stunning 3D visuals.
</p>,
      ],
    },
  },


  {
    title: "🎨 Custom Logos & Graphics for Every Need",
    description:
      "We specialize in custom logo designs, YouTube thumbnail logos, social media graphics, and all types of photo designs to make your brand stand out. Whether you need a sleek professional logo or eye-catching visuals, our team delivers high-quality, affordable, and unique designs tailored to your vision.",
    imageUrl: "/brabding.jpg",
    imageWidth: "280%",  // Add specific width
    imageHeight: "220px",
    link: "/dashboard/logoRoute",
    backContent: {
      images: ["/lgoBck.jpg"],
        backgroundColor: "#ffcc00",  // Custom background color
        imageSize: { width: "100%", height: "250px" },
      text: [<h2 className="thDh">DO YOU KNOW?</h2>,
        <p className="thDp">🎨 Your brand’s first impression matters! We craft custom logos & graphics that capture your identity and leave a lasting impact.</p>,
        <p className="thDp">🔥 50+ brands trust Googenix for visually stunning, memorable designs that set them apart.</p>,
        <p className="thDp">✨ More options, better choices! Our designers don’t just create one logo—we provide multiple unique designs so you can choose the perfect fit for your brand.
</p>,]
    }, // Example route for this card
  },



  {
    title: "Generative AI Consulting",
    description:
      "We are your pathfinders in the generative AI age, helping you strategize the perfect blueprint for all things AI.",
    imageUrl: "https://cdn.relinns.com/assets/images/home-what-we-do-three.png",
    link: "/services/generative-ai-consulting",
    backContent: {
      images: [
        "/",
        "https://cdn.relinns.com/assets/images/back-image-2.png"],
        backgroundColor: "#ffcc00",  // Custom background color
        imageSize: { width: "100%", height: "200px" },
      text: "Here’s some more information about our Custom Software Development services. We provide scalable and customized solutions for your business."
    },// Example route for this card
  },



  {
    title: "AI Model Development",
    description:
      "We shape AI algorithms & ML models to enhance data analysis, automate processes, & predict outcomes.",
    imageUrl: "https://cdn.relinns.com/assets/images/home-what-we-do-six.png",
    link: "/services/ai-model-development",
    backContent: {
      images: [
        "https://cdn.relinns.com/assets/images/back-image-1.png",
        "https://cdn.relinns.com/assets/images/back-image-2.png"],
        backgroundColor: "#ffcc00",  // Custom background color
        imageSize: { width: "100%", height: "200px" },
      text: "Here’s some more information about our Custom Software Development services. We provide scalable and customized solutions for your business."
    }, // Example route for this card
  },

];



const GridCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredDetails, setHoveredDetails] = useState<any>(null);


  const getFlippingCardIndex = (hoverIndex: number): number | null => {
    const columns = 3; // 3 cards per row
    const row = Math.floor(hoverIndex / columns);
    const column = hoverIndex % columns;
  
    if (row === 0) {
      if (column === 0) return hoverIndex + 1; // Card 0 → Card 1 flips
      if (column === 1) return hoverIndex + 1; // Card 1 → Card 2 flips
      if (column === 2) return hoverIndex - 1; // Card 2 → Card 1 flips
    }
    
    if (row === 1) {
      if (column === 0) return hoverIndex + 1; // Card 3 → Card 4 flips
      if (column === 1) return hoverIndex - 1; // Card 4 → Card 3 flips
      if (column === 2) return hoverIndex - 1; // Card 5 → Card 4 flips
    }
  
    return null; // Default case (should not happen)
  };
  
  

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const columns = 3;

  const handleMouseEnter = (index: number, card: any) => {
    setHoveredIndex(index);
    setHoveredDetails(card);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setHoveredDetails(null);
  };

  return (
    <ul
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-6 justify-items-center"
      style={{
        margin: "30px",
        padding: "30px",
      }}
    >
      {cardData.map((card, index) => {
        const row = Math.floor(index / columns);
        const column = index % columns;

        const isNeighboringCard =
          (hoveredIndex === index - 1 && Math.floor(hoveredIndex / columns) === row) ||
          (hoveredIndex === index + 1 && Math.floor(hoveredIndex / columns) === row);

        const isMiddleCard = index !== 0 && index !== cardData.length - 1;

        return (
          <li
            key={index}
            className={`custom-card relative z-100 overflow-hidden p-0 bg-[#1A1A1A] rounded-xl h-[480px] w-[360px] border-0 aos-init aos-animate
            ${index % 3 === 1 ? "mt-0" : "mt-8"} 
            ${isNeighboringCard && isMiddleCard ? "hovered" : ""}`}
            data-aos="fade-up"
            onMouseEnter={() => handleMouseEnter(index, card)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Rotated Banner on top-left edge */}
          {/* Hide the banner when this card is hovered or when its neighboring card is flipping */}
{hoveredIndex === null || index !== getFlippingCardIndex(hoveredIndex) ? (
  <div
    className="absolute top-[70px] left-[-60px] w-[200px] bg-black text-white text-center font-bold py-2 rotate-[45deg]  z-20"
    style={{
      transform: "rotate(-35deg)",
      transformOrigin: "left top",
    }}
  >
    CLICK
  </div>
) : null}



            <Link href={card.link}>
            <div className="card-inner">
            <div className="card-front">
  {card.title === "3D Visualization & Animation Services" && Array.isArray(card.imageUrl) ? (
    <div className="image-comparison-container" style={{ width: "100%", height: "100%" }}>
      <ReactCompareImage
        leftImage={card.imageUrl[0]}  // First image
        rightImage={card.imageUrl[1]} // Second image
        sliderLineColor="white"
        handleSize={40} // Adjust handle size
        hover={true} // Enable hover slider
      />
    </div>
  ) : (
    <img
      src={Array.isArray(card.imageUrl) ? card.imageUrl[0] : card.imageUrl}
      className="card-front-image"
      style={{
        width: card.imageWidth || "100%",
        height: card.imageHeight || "auto",
        objectFit: "cover",
      }}
      alt="Card Image"
    />
  )}
</div>




  {/* ✅ Fix typo here: className instead of clsssName */}
  <div className="fronttext">
    <h3 className="text-lg font-bold font-mulish2">{card.title}</h3>
    <p className="text-sm font-mulish3">{card.description}</p>
  </div>




  <div className="card-back">
  {hoveredDetails ? (
    <div className="card-back-content">
      {/* Use the dynamic background color and image size */}
      <div
        className="image-container"
        style={{
          backgroundColor: hoveredDetails.backContent.backgroundColor, // Use card's background color
        }}
      >
        {hoveredDetails.backContent.images.map((img: string, imgIndex: number) => (
          <img
            key={imgIndex}
            src={img}
            alt={`Back image ${imgIndex}`}
            className="card-back-image"
            style={{
              width: hoveredDetails.backContent.imageSize.width,  // Use card's image width
              height: hoveredDetails.backContent.imageSize.height,  // Use card's image height
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
      <div className="card-text">
        <p>{hoveredDetails.backContent.text}</p>
      </div>
    </div>
  ) : (
    <div className="card-back-content">
      {/* Same logic for non-hovered state */}
      <div
        className="image-container"
        style={{
          backgroundColor: hoveredDetails?.backContent.backgroundColor,
        }}
      >
        {hoveredDetails?.backContent.images.map((img: string, imgIndex: number) => (
          <img
            key={imgIndex}
            src={img}
            alt={`Back image ${imgIndex}`}
            className="card-back-image"
            style={{
              width: hoveredDetails?.backContent.imageSize.width,
              height: hoveredDetails?.backContent.imageSize.height,
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
 





                      <div className="card-text">
                        {hoveredDetails?.backContent.heading && (
                          <h2 className="text-2xl font-bold text-center mb-4">
                            {hoveredDetails?.backContent.heading}
                          </h2>
                        )}
                        <div className="leaderboard">
                          {hoveredDetails?.backContent.text.map((element: string, index: number) => (
                            <div key={index}>{element}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Link>

          </li>
        );
      })}
    </ul>
  );
};

export default GridCards;