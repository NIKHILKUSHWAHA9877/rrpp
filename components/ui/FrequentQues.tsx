"use client";

import React, { useState } from "react";
import "./frequent.css"; // Ensure your CSS file is properly set up
import "boxicons/css/boxicons.min.css"; // Import Boxicons CSS

const faqData = [
  { question: "What makes your development services SEO-driven?", answer: "We incorporate SEO best practices in each stage, from clean coding to mobile optimization, ensuring your website is ready to rank on search engines." },
  { question: "How long does it take to build a website?", answer: "The timeline varies, but we typically complete most projects in 4-8 weeks, depending on complexity and requirements." },
  { question: "Will I be able to update my website myself?", answer: "Yes! We offer user-friendly CMS solutions that make it easy for you to manage and update content without needing a developer." },
  { question: "Can you help with content creation for SEO?", answer: "Absolutely. We create engaging, SEO-optimized content that resonates with your audience and boosts your site’s rankings." },
  { question: "What kind of websites do you specialize in?", answer: "We develop a range of websites, from e-commerce to informational and complex platforms tailored to unique business needs." },
  { question: "What web development services do you offer?", answer: "We offer a full range of web development services including custom website design, e-commerce development, responsive design, content management systems (CMS), web applications, and website maintenance." },
  { question: "How much does web development cost?", answer: "The cost of web development depends on the complexity and requirements of your project. Contact us for a free quote based on your specific needs and features." },
  { question: "Do you offer SEO services as part of web development?", answer: "Yes, we offer SEO optimization as part of our web development process to ensure your website is search-engine-friendly and can rank well on Google." },
  { question: "Can you redesign my existing website?", answer: "Yes, we can redesign your existing website to make it more modern, responsive, and user-friendly, improving both aesthetics and functionality." },
  { question: "Will my website be mobile-friendly?", answer: "Absolutely! All of our websites are designed to be fully responsive, ensuring they look and function well on all devices, including smartphones and tablets." },
  { question: "Do I need to provide content for my website?", answer: "While we can assist with content creation, you’ll need to provide key information about your business, services, and products. We can also help with content strategy and copywriting if needed." },
  { question: "Can you help with e-commerce website development?", answer: "Yes, we specialize in developing secure, user-friendly e-commerce websites tailored to your business needs. We work with platforms like Shopify, WooCommerce, and custom solutions." },
  { question: "Do you provide website maintenance after launch?", answer: "Yes, we offer ongoing website maintenance services to ensure your site stays updated, secure, and fully functional. We can provide support as needed." },
  { question: "Is my website secure?", answer: "We implement strong security protocols such as SSL certificates, secure payment gateways, and regular updates to ensure your website is safe from hackers and other threats." },






  { question: "Q: Do you offer website hosting services?", answer: "While we don't offer hosting directly, we can recommend reliable hosting providers and help you set up hosting for your website based on your needs." },
  { question: "Q: Can you help with website performance optimization?", answer: "Yes, we optimize websites for speed, making sure your site loads quickly to provide a better user experience and improve SEO rankings." },
  { question: "Q: What happens if my website breaks or has an issue after it's launched?", answer: "We offer ongoing support and troubleshooting. If any issues arise, you can contact us, and we will work to resolve them promptly." },
  { question: "Q:Can you integrate third-party tools and software into my website?", answer: "Yes, we can integrate various third-party tools, such as payment gateways, CRM systems, email marketing platforms, and social media tools." },
  { question: "Do I need to provide content for my website?", answer: "While we can assist with content creation, you’ll need to provide key information about your business, services, and products. We can also help with content strategy and copywriting if needed." },
  { question: "Q:Will my website be optimized for search engines?", answer: "Yes, we ensure your website is SEO-friendly by optimizing on-page elements like title tags, meta descriptions, and images to help improve your search engine rankings." },
  { question: "Q: What is the difference between a custom website and a template website?", answer: "A custom website is built from scratch with unique design and functionality, while a template website uses pre-designed layouts that can be quickly customized." },
  { question: "Q: Can you help with branding and logo design?", answer: "Yes, we offer branding services including logo design, color schemes, typography, and overall brand identity to make your website reflect your business vision." },
  { question: "Q: How do I get started with my web development project?", answer: "Simply contact us for a free consultation. We'll discuss your project goals, design preferences, and functionality needs to create a plan tailored to your business." }
];

const FrequentQues: React.FC = () => {
    // State to track which question is currently open
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
    // Function to toggle the answer visibility and arrow rotation
    const toggleAnswer = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index); // Toggle between showing and hiding
    };
  
    return (
      <div className="hero-accordion">
        <div className="accordion-text">
          <ul className="faq-text">
            {faqData.map((item, index) => (
              <li key={index} className={activeIndex === index ? "showAnswer" : ""}>
                <div
                  className="question-arrow"
                  onClick={() => toggleAnswer(index)}
                >
                  <span className="question">{item.question}</span>
                  <i className={`bx bxs-chevron-down arrow ${activeIndex === index ? "rotate" : ""}`}></i>
                </div>
                <p className="pp">{item.answer}</p>
                <span className="line"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default FrequentQues;