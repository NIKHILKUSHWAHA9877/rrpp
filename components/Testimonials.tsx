"use client"

import React, { useEffect } from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.testimonial-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        } else {
          entry.target.classList.remove('animate-slide-up'); // Remove class when not in view
        }
      });
    }, { threshold: 0.1 }); // Trigger the animation when 10% of the element is visible

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  return (

    <div>
      {/* Heading Section - Placed Above the Grid */}
      <div className="text-center relative py-12" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <h6 className="background">
          <h1 className="yeh1">
            <span className="aqua">Stories That</span>
            <span className="pink"> Define Us</span>
          </h1>
        </h6>
        <p className="text-gray-300 text-[22px] font-medium">
          Discover the Emotion, Trust, and Success Shared by Those We’ve Proudly Served
        </p>
      </div>


    <section className="testimonial-grid">



     

      <figure className="relative text-left">
        <img
          src="/tes.png"
          alt="Ms Marvel"
          className="rounded-full border-4 border-yellow-100"
          style={{
            width: '60px',
            height: '60px',
            position: 'absolute',
            top: '0',
            left: '50%',
            marginTop:"20px",
            transform: 'translateX(-50%)',
          }}
        />
         <div className="text-below-image" style={{ marginTop: '80px', fontSize: '18px' , textAlign:"center" }}>
         Zack
        </div>
        <div className="text-below-image" style={{ marginTop: '10px', fontSize: '18px', lineHeight: '2.1', padding: '10px' }}>
          ----We’ve been extremely impressed with the speed and quality of output. They are always responsive to feedback and maintain a professional and vested approach to both the client and product.
        </div>
        <figcaption>
        <div><div><h3>Innovation</h3></div></div>
        </figcaption>
      </figure>

      {/* Repeat for other grid items */}
      <figure className="testimonial-item relative text-left">
        <img
          src="/tes.png"
          alt="Ms Marvel"
          className="rounded-full border-4 border-yellow-100"
          style={{
            width: '60px',
            height: '60px',
            position: 'absolute',
            top: '0',
            left: '50%',
            marginTop:"20px",
            transform: 'translateX(-50%)',
          }}
        />
            <div className="text-below-image" style={{ marginTop: '80px', fontSize: '18px' , textAlign:"center" }}>
            Lucy Brown
        </div>
        <div className="text-below-image" style={{ marginTop: '10px', fontSize: '18px', lineHeight: '2.1', padding: '10px' }}>
          ----The team is professional in their approach and is willing to go the extra mile for client satisfaction, something we have never experienced until now.
        </div>
        <figcaption>
          <div><div><h3>Reliability</h3></div></div>
        </figcaption>
      </figure>

      <figure className=" testimonial-item relative text-left">
        <img src="/tes.png" alt="" 
         className="rounded-full  border-4 border-yellow-100"
         style={{
          width: '60px',
          height: '60px',
          position: 'absolute',
          top: '0',
          left: '50%',
          marginTop:"20px",
          transform: 'translateX(-50%)', // Center horizontally
        }}/>
            <div className="text-below-image" style={{ marginTop: '80px', fontSize: '18px' , textAlign:"center" }}>
         Rajma
        </div>
         <div className="text-below-image" style={{ marginTop: '1px', fontSize: '18px' , 
         lineHeight: '2.1',  
        padding: '10px'}}>
         ----"Fantastic work, I saw results almost immediately. Worth every penny! Their commitment to excellence is unparalleled.
    </div>
        <figcaption>
          <div><div><h3>Speeeeeeeeed</h3></div></div>
        </figcaption>
      </figure>
      <figure className="testimonial-item relative text-left">
        <img src="/tes.png" alt="" 
         className="rounded-full  border-4 border-yellow-100"
         style={{
          width: '60px',
          height: '60px',
          position: 'absolute',
          top: '40px',
          left: '50%',
          marginTop:"20px",
          transform: 'translateX(-50%)', // Center horizontally
        }} />
            <div className="text-below-image" style={{ marginTop: '120px', fontSize: '18px' , textAlign:"center" }}>
            Mark Wilson
        </div>
         <div className="text-below-image" style={{ marginTop: '10px', fontSize: '18px' , 
         lineHeight: '2.1',  
        padding: '10px',}}>
         ----These guys are highly reliable, always delivering on time and with high quality. Their attention to detail, professionalism, and responsiveness contribute to our success.
    </div>
        <figcaption>
          <div><div><h3>Black Panther</h3></div></div>
        </figcaption>
      </figure>
      <figure className="testimonial-item  relative text-left">
        <img src="/tes.png" alt="" 
         className="rounded-full  border-4 border-yellow-100"
         style={{
          width: '60px',
          height: '60px',
          position: 'absolute',
          top: '0',
          marginTop:"20px",
          left: '50%',
          transform: 'translateX(-50%)', // Center horizontally
        }} />
         <div className="text-below-image" style={{ marginTop: '67px', fontSize: '18px' , 
         lineHeight: '1',  
        padding: '10px' , textAlign:"center"}}>
      Jane
    </div>
    <div className="text-below-image" style={{ marginTop: '[-10px]', fontSize: '18px' , 
         lineHeight: '1.6',  
        padding: '10px',}}>
         ----Everything was on time and as needed.
    </div>
        <figcaption>
          <div><div><h3>Trust</h3></div></div>
        </figcaption>
      </figure>
      <figure className="relative text-left">
        <img src="/tes.png" alt="" 
         className="rounded-full  border-4 border-yellow-100"
         style={{
          width: '60px',
          height: '60px',
          position: 'absolute',
          top: '0',
          left: '50%',
          marginTop:"20px",
          transform: 'translateX(-50%)', // Center horizontally
        }} />
         <div className="text-below-image" style={{ marginTop: '70px', fontSize: '18px' , 
         lineHeight: '2.1',  
        padding: '10px' , textAlign:"center"}}>
      Ms Marvel
    </div>
        <figcaption>
          <div><div><h3>Thanos</h3></div></div>
        </figcaption>
      </figure>

    </section>
    </div>
  );
};

export default Testimonials;