import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./software.css"


const sections = [
    { id: 0, title: "Onboarding", description: "Seamless onboarding for users with guided steps.", image: "https://cdn.appsrhino.com/new-website-2022/assets/newImage/onboarding-1-new.webp" },
    { id: 1, title: "Schedular", description: "Automate scheduling for appointments and tasks.", image: "https://cdn.appsrhino.com/new-website-2022/assets/newImage/scheduler-2-new.webp" },
    { id: 2, title: "Tracking", description: "Real-time tracking for users and deliveries.", image: "https://cdn.appsrhino.com/new-website-2022/assets/newImage/track-3-new.webp" },
    { id: 3, title: "Payment", description: "Secure and fast payment integration.", image: "https://cdn.appsrhino.com/new-website-2022/assets/newImage/payment-4-new.webp" },
    { id: 4, title: "Offering", description: "Customized offers and promotions for users.", image: "https://cdn.appsrhino.com/new-website-2022/assets/newImage/offering-5-new.webp" },
    { id: 5, title: "Automated Assignment", description: "Automatically assign tasks to available agents.", image: "https://cdn.appsrhino.com/new-website-2022/assets/newImage/assignment-6-new.webp" },
    { id: 6, title: "Notifications", description: "Instant alerts and notifications for users.", image: "https://cdn.appsrhino.com/new-website-2022/assets/newImage/notification-7-new.webp" },
    { id: 7, title: "Rating & Reviews", description: "Collect valuable customer feedback and ratings.", image: "https://cdn.appsrhino.com/new-website-2022/assets/newImage/rating-8-new.webp" },
  ];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index: number) => setActiveIndex(index);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % sections.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + sections.length) % sections.length);

  return (
    <div className="features-container">
      {/* Heading */}
      <h2 className="features-heading">
      <span className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-[#5a6042] to-[#b4b98d]">Key</span> <span className="highlight">Features</span>
        <hr className="fade-2" />
        <p className="highlishtka">Why Googenix is the #1 Choice for On-Demand App Development
</p>
      </h2>

      {/* Feature Bar with Buttons */}
      <div className="feature-bar">
        {sections.map((section, index) => (
          <p
            key={section.id}
            className={`feature-heading ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleButtonClick(index)}
          >
            {section.title}
          </p>
        ))}
      </div>

      {/* Image Display Section */}
      <div className="feature-main">
        <img
          src={sections[activeIndex].image}
          
          className="feature-image"
        />
<div className="imgmai">
<div className="feature-content">
        <h2 className="feature-title">{sections[activeIndex].title}</h2>
        <p className="feature-description">{sections[activeIndex].description}</p>
      </div>



        {/* Navigation Arrows */}
        <div className="navigation-buttons">
        <button onClick={handlePrev}><FaChevronLeft /></button>
        <button onClick={handleNext}><FaChevronRight /></button>
      </div>
      </div>
    </div>
    </div>
  );
}