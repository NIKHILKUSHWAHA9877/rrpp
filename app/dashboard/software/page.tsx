"use client";
import { useState, useEffect } from "react";
import { FaChartPie, FaUser, FaTruck, FaChartLine } from "react-icons/fa";
import FeaturesSection from "./featuresSection"
import MediaAndBadges from "./MediaAndBadges";
import { renderCanvas } from "@/components/hero/renderCanvas";
import Slider from './swiper';



import "./software.css"
const images = [
  "https://cdn.appsrhino.com/new-website-2022/assets/newImage/hm-banner1-new.webp",
  "https://cdn.appsrhino.com/new-website-2022/assets/newImage/hm-banner2-new.webp",
  "https://cdn.appsrhino.com/new-website-2022/assets/newImage/hm-banner4-new.webp",
];

export default function Page() {
  const [currentImage, setCurrentImage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0) ;

  const [fade, setFade] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);; // Track clicked button

  const handleButtonClick = (index :number) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    renderCanvas(); // Apply the canvas effect when the component mounts
  }, []);


  // Handle smooth image change effect
  const changeImage = (index :number) => {
    setFade(false); // Start fading out
    setTimeout(() => {
      setHoveredIndex(index); // Change image
      setFade(true); // Start fading in
    }, 200); // Small delay for smooth effect
  };
  const sections = [
    {
      id: "dashboard",
      title: "Dashboard",
      description: "Aerial view for the admin to keep track of users and agents.",
      icon: <FaChartPie   />, // Replace with actual icon if needed
      image: "https://cdn.appsrhino.com/new-website-2022/assets/newImage/dashboard-solution.svg", // Replace with your actual image
    },
    {
      id: "customer",
      title: "Customer App",
      description: "Intuitive app design let users order and book easily on the go.",
      icon:  <FaUser/>,
      image: "https://cdn.appsrhino.com/new-website-2022/assets/newImage/customer-solution.svg",
    },
    {
      id: "agent",
      title: "Agent App",
      description: "Agents can receive on-demand orders for delivery and booking requests.",
      icon: <FaTruck />,
      image: "https://cdn.appsrhino.com/new-website-2022/assets/newImage/agent-solution.svg",
    },
    {
      id: "analytics",
      title: "Analytics",
      description: "Crunch orders, deliveries, and payment data for better business insights.",
      icon: <FaChartLine />,
      image: "https://cdn.appsrhino.com/new-website-2022/assets/newImage/analytics-solution.svg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className=" relative w-full flex flex-col md:flex-row items-center justify-between text-white px-8 mt-40 h-auto md:h-[100vh]">
        {/* Left Section (Text) */}

        <canvas id="canvas" className="absolute top-0 left-0 w-full h-full z-[-1]"></canvas>


        <div className="md:w-1/2 px-6 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-5xl font-bold">
          <span className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-[#b23ed5] to-[#AA55B5]">Custom Mobile</span> App and Website Development</h1>
          
          {/* Button only for small screens */}
          <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg md:hidden block">
            Get in Touch
          </button>
          
          <p className="mt-4 text-lg max-w-lg">
            Googenix provides solutions for on-demand Grocery delivery, Alcohol delivery, Food delivery, Laundry delivery, Home services, Doctors, Plumbers and Electrician services, Taxi and Logistics services.
          </p>
          
          {/* Button for large screens */}
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hidden md:block cont"
           onClick={() => window.open("https://wa.me/919877851595?text=Hi%20Googenix%20........", "_blank", "noopener,noreferrer")}
          >
            Get in Touch
          </button>
        </div>

        {/* Right Section (Auto-changing Image) */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 order-last md:order-none">
          <img
            src={images[currentImage]}
            alt="Mobile App UI"
            className="w-[250px] md:w-[550px] h-auto rounded-lg shadow-lg transition-all duration-500"
          />
        </div>
      </div>

      {/* Trusted Brands Section */}
      <div className="w-full py-12 px-8 text-center h-[60vh] slo">
        <h2 className="text-2xl md:text-3xl text-white mt-10 font-semibold mb-6">
          Trusted by <span className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-[#b23ed5] to-[#AA55B5]">40+</span> Global Brands
        </h2>
        
        {/* Slider Container for Small Screens */}
        <div className="flex flex-wrap justify-center gap-6 md:hidden overflow-hidden relative w-full">
  <div className="flex gap-6 animate-slide">
    {/* Duplicate logos for smooth infinite scrolling */}
    {[...Array(2)].flatMap(() => [
      <img src="https://cdn.relinns.com/assets/images/home-almas.svg" className="h-22" alt="Authentic" />,
      <img src="https://cdn.relinns.com/assets/badges/client-badges/khata-book.svg" className="h-22" alt="Chatahoot" style={{ filter: "invert(1)" }} />,
      <img src="https://cdn.relinns.com/assets/images/home-sanesa.svg" className="h-22" alt="KhataBook" />,
      <img src="https://cdn.relinns.com/assets/images/home-eventure.svg" className="h-22" alt="Woodland" />,
      <img src="https://cdn.relinns.com/assets/images/home-educo-global.svg" className="h-22" alt="Local" />,
      <img src="https://cdn.relinns.com/assets/badges/client-badges/woodland.svg" className="h-22" alt="Apollo" style={{ filter: "invert(1)" }} />,
    ])}
  </div>
</div>


        {/* Static Grid for Large Screens */}
        <div className="hidden md:flex flex-wrap justify-center gap-6">
          <img src="https://cdn.relinns.com/assets/images/home-almas.svg" className="h-22" alt="Authentic" />
          <img src="https://cdn.relinns.com/assets/badges/client-badges/khata-book.svg" className="h-22" alt="Chatahoot" style={{ filter: "invert(1)" }} />
          <img src="https://cdn.relinns.com/assets/images/home-sanesa.svg" className="h-22" alt="KhataBook" />
          <img src="https://cdn.relinns.com/assets/images/home-eventure.svg" className="h-22" alt="Woodland" />
          <img src="https://cdn.relinns.com/assets/images/home-educo-global.svg" className="h-22" alt="Local" />
          <img src="https://cdn.relinns.com/assets/badges/client-badges/woodland.svg" className="h-22" alt="Apollo" style={{ filter: "invert(1)" }} />
        </div>
      </div>


      {/* Sections with Buttons and Images */}
      <div className="bg-white">
        <h2 className="text-5xl font-bold text-center mb-[-40px] text-gray-800 p-11">
          An <span
className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-[#338e62] to-[#399375] transition-all">end-to-end Solution</span> at Googenix
 <hr className="fade-3"/>
        </h2>
       
        {/* Responsive Layout for Buttons and Images */}
        <div className="conta flex flex-col md:flex-row justify-center items-start">
          {/* Buttons Section */}
        {/* Buttons Section */}
<div className="buttons-section w-full md:w-1/2 flex flex-col items-center">
  {sections.map((section, index) => (
    <div key={section.id} className="w-full flex flex-col items-center">
      <div
        className={`button ${hoveredIndex === index ? "active" : ""}`}
        onMouseEnter={() => changeImage(index)}
        onMouseLeave={() => changeImage(0)} // Reset image on hover out
        onClick={() =>
          setSelectedIndex(selectedIndex === index ? null : index)
        } // Toggle image on click
      >
        {/* Dynamic Icon */}
        <div className="icon text-5xl text-blue-700">{section.icon}</div>

        <div className="button-text">
          <h3>{section.title}</h3>
          <p>{section.description}</p>
        </div>
      </div>

      {/* Show Image Below Clicked Button (Only on Mobile) */}
      {selectedIndex === index && (
        <div className="md:hidden w-full flex justify-center  mobiimg ">
          <img
            src={section.image}
            alt={section.title}
            className="w-[90%] max-w-[500px] rounded-lg shadow-lg transition-all duration-500"
          />
        </div>
      )}
    </div>
  ))}
</div>

{/* Right Image Section for Large Screens */}



          {/* Right: Image Section (Only for Large Screens) */}
          <div className="image-section w-1/2 hidden md:flex justify-center">
            <img
              src={sections[hoveredIndex].image}
              alt={sections[hoveredIndex].title}
              className={`hovered-image w-3/4 ${fade ? "fade-in" : "fade-out"}`}
            />
          </div>
        </div>
</div>
<FeaturesSection/>

<div className="cards-wrapper">
  {/* Main Heading */}
  <h1 className="main-heading">
  <span className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(51,58,110)] via-[#7A8BD1] to-[#6A80C3] transition-all">Why choose</span> Googenix?</h1>
  <hr className="fade-3"/>
  <h2 className="sub-heading">Why Googenix is the #1 Choice for On-Demand App Development</h2>

<div className="cards-container">
<div className="carddd small-card">
  <div className="card-header">
    <div className="card-icon-container">
      {/* SVG replaced with image */}
      <img 
        className="card-icon" 
        src="https://cdn.appsrhino.com/new-website-2022/assets/images/why-appsrhino-one.svg" 
        alt="Card Icon"
      />
    </div>
    <h3 className="card__title">Your App, Your Brand</h3>
  </div>
  <p className="card__content">
    Get a custom delivery app with your brand logo & images, and give your customers a personalized experience.
  </p>
  <div className="card__arrow">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
      <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
    </svg>
  </div>
</div>


  <div className="carddd small-card">
    <div className="card-header">
      <div>
      {/* Replace inline SVG with an image */}
      <img 
        className="card-icon" 
        src="https://cdn.appsrhino.com/new-website-2022/assets/images/why-appsrhino-two.svg" 
        alt="Card Icon" 
        height="20" 
        width="20"
      />
    </div>
      <h3 className="card__title">Flexible Pricing</h3>
    </div>
    <p className="card__content">Flexible pricing plans offer you the ideal balance between innovation and investment. You can choose between SaaS and Custom Solution.</p>
    <div className="card__arrow">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
        <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
      </svg>
    </div>
  </div>


  <div className="carddd small-card">
    <div className="card-header">
      <div>
      {/* Replace inline SVG with an image */}
      <img 
        className="card-icon" 
        src="https://cdn.appsrhino.com/new-website-2022/assets/images/why-appsrhino-three.svg" 
        alt="Card Icon" 
        height="20" 
        width="20"
      />
    </div>
      <h3 className="card__title">Diverse Market Expertise</h3>
    </div>
    <p className="card__content">Our experience has taken us across the globe, empowering diverse business models and markets. We have contributed to the growth of various startups as well as the stability of Enterprises.</p>
    <div className="card__arrow">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
        <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
      </svg>
    </div>
  </div>


  <div className="carddd small-card">
    <div className="card-header">
      <div>
      {/* Replace inline SVG with an image */}
      <img 
        className="card-icon" 
        src="https://cdn.appsrhino.com/new-website-2022/assets/images/why-appsrhino-four.svg" 
        alt="Card Icon" 
        height="20" 
        width="20"
      />
    </div>
      <h3 className="card__title">Unmatched Support</h3>
    </div>
    <p className="card__content">Googenix provides all the support and guidance you require, both pre and post-launch.</p>
    <div className="card__arrow">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
        <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
      </svg>
    </div>
  </div>


  <div className="carddd small-card">
    <div className="card-header">
      <div>
      {/* Replace inline SVG with an image */}
      <img 
        className="card-icon" 
        src="https://cdn.appsrhino.com/new-website-2022/assets/images/why-appsrhino-five.svg" 
        alt="Card Icon" 
        height="30px" 
        width="30px"
      />
    </div>
      <h3 className="card__title">Scalability</h3>
    </div>
    <p className="card__content">From an early stage of being a startup to the establishing point of an Enterprise we provide an ideal solution, ranging from SaaS to a total custom solution.</p>
    <div className="card__arrow">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
        <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
      </svg>
    </div>
  </div>


</div>

<div className="contact-container">
  <button 
    className="contact-btn" 
    onClick={() => window.open("https://wa.me/919877851595?text=Hi%20Googenix%20........", "_blank", "noopener,noreferrer")}
  >
    Contact Us
  </button>
  
</div>



</div>

<Slider />
<MediaAndBadges/>
    </>
  );
}
