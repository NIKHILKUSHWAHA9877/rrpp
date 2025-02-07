'use client';  // Required for Next.js Client Component

import React, { useState } from 'react';
import Head from 'next/head'; // Importing Next.js Head component for meta tags and links

const testimonialsData = [
  {
    name: "Zack",
    review: "We’ve been extremely impressed with the speed and quality of output. They are always responsive to feedback and maintain a professional and vested approach to both the client and product.",
  },
  {
    name: "Jane Smith",
    review: "The team is professional in their approach and is willing to go the extra mile for client satisfaction, something we have never experienced until now.",
  },
  {
    name: "Mark Wilson",
    review: "These guys are highly reliable, always delivering on time and with high quality. Their attention to detail, professionalism, and responsiveness contribute to our success.",
  },
  {
    name: "Lucy Brown",
    review: "Fantastic work, I saw results almost immediately. Worth every penny! Their commitment to excellence is unparalleled.",
  }
];

const Testimonials = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="py-16 font-custom">
      <Head>
        {/* Google Fonts Link for Google Sans (Roboto as fallback) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Title Section with Spotlight Gradient Effect */}
      <div className="text-center relative py-12"
        style={{
          background: "radial-gradient(circle, rgba(98, 0, 234, 0.6) 10%, rgba(98, 0, 234, 0) 40%)",
          paddingTop: "60px",
          paddingBottom: "60px",
         
        }}
      >
        <h2 className="mb-4 text-white text-[32px] font-semibold">Stories That <span className="text-yellow-400">Define Us</span></h2>
        <p className="text-gray-300 text-[22px] font-medium">Discover the Emotion, Trust, and Success Shared by Those We’ve Proudly Served</p>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial p-8 rounded-xl bg-opacity-50 shadow-lg hover:shadow-2xl transition-all flex flex-col items-center space-y-4"
              style={{
                background: "rgba(0, 0, 0, 0.2)", // Light black shadow effect
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)", // Smooth blend effect
                borderRadius: "16px",
              }}
            >
              <img
                src="/tes.png"
                className="w-24 h-24 rounded-full object-cover border-4 border-yellow-100"
                style={{ width: '96px', height: '96px', objectFit: 'cover' }}
              />

              {/* Testimonial Text with Fading Effect */}
              <div className="relative w-full text-center">
                <p className={`text-[18px] text-white mb-4 ${expanded === index ? "fade-none" : "fade-out"}`}>
                  {expanded === index ? testimonial.review : `${testimonial.review.substring(0, 150)}...`}
                </p>
                {expanded !== index && (
                  <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black to-transparent"></div>
                )}
              </div>

              {/* Read More Button */}
              <button
                onClick={() => toggleExpand(index)}
                className="relative text-yellow-400 font-semibold hover:underline"
              >
                {expanded === index ? "Read Less" : "Read More"}
              </button>

              <p className="mt-4 font-semibold text-[18px] text-white">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for Font & Fading Effect */}
      <style jsx>{`
        .font-custom {
         font-family: 'Poppins', sans-serif; /* Applying Roboto as font family */
        }

        /* Text Fade Effect */
        .fade-out {
          position: relative;
          display: block;
          max-height: 4.5rem;
          overflow: hidden;
        }

        .fade-out::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30px;
          background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
