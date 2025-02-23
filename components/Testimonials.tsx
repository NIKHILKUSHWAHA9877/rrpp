"use client";

import React, { useEffect , useState , useRef } from "react";
import "./Testimonials.css";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Testimonials: React.FC = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const testimonialRef = useRef(null);
  const [highlightFirst, setHighlightFirst] = useState(true);
  const [highlightSecond, setHighlightSecond] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll(".testimonial-item");

    // Animate testimonials on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          } else {
            entry.target.classList.remove("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => elements.forEach((element) => observer.unobserve(element));
  }, []);




  // Separate useEffect for last testimonial highlight
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const section = document.querySelector(".testimonial-item");
  //     if (!section) return;

  //     const bounding = section.getBoundingClientRect();
  //     const viewportHeight = window.innerHeight;

  //     // First span highlights when it enters viewport
  //     if (bounding.top < viewportHeight * 0.7 && !highlightFirst) {
  //       setHighlightFirst(true);
  //       setScrollCount(0); // Reset scroll counter for second span
  //     }

  //     // Count scrolls after first span is highlighted
  //     if (highlightFirst && !highlightSecond) {
  //       setScrollCount((prev) => prev + 1);

  //       // After 3 scrolls, second span highlights
  //       if (scrollCount >= 5) {
  //         setHighlightSecond(true);
  //       }
  //     }

  //     // Reset effect when scrolling out of section
  //     if (bounding.bottom < 0 || bounding.top > viewportHeight) {
  //       setHighlightFirst(false);
  //       setHighlightSecond(false);
  //       setScrollCount(0); // Reset scroll count
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [highlightFirst, highlightSecond, scrollCount]);
  useEffect(() => {
    if (!firstRef.current || !secondRef.current) return;

    const firstText = new SplitType(firstRef.current, { types: "words" });
    const secondText = new SplitType(secondRef.current, { types: "words" });

    // ✅ First line highlights when it appears
    gsap.fromTo(
      firstText.words,
      { color: "#777", opacity: 0.3 },
      {
        color: "#ffffff",
        opacity: 1,
        mixBlendMode: "normal",
        duration: 0.5,
        stagger: 0.08,
        scrollTrigger: {
          trigger: firstRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      }
    );
    

    // ✅ Second line highlights AFTER multiple scrolls (delayed effect)
    gsap.fromTo(
      secondText.words,
      { color: "#333" },
      {
        color: "white",
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: secondRef.current,
          start: "top 50%", // 🔥 Delayed trigger (user needs to scroll more)
          toggleActions: "restart none none reset",
        },
      }
    );
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




      <figure className="testimonial-item relative text-left">
  <img
    src="/tes.png"
    alt=""
    className="rounded-full border-4 border-yellow-100"
    style={{
      width: "60px",
      height: "60px",
      position: "absolute",
      top: "0",
      marginTop: "20px",
      left: "50%",
      transform: "translateX(-50%)",
    }}
  />
  <div
    className="text-below-image last-testimonial"
    style={{
      marginTop: "70px",
      fontSize: "18px",
      lineHeight: "1",
      padding: "10px",
      textAlign: "center",
    }}
  >
    Jane
  </div>

  <div
    className="text-below-image last-testimonial"
    style={{
      fontSize: "18px",
      lineHeight: "1.6",
      padding: "10px",
    }}
  >
    ----Everything was on time and as needed.
  </div>
  <figcaption>
    <div>
      <div>
        <h3>Trust</h3>
      </div>
    </div>
  </figcaption>
</figure>







<figure className="testimonial-item relative text-left">
      <img
        src="/tes.png"
        alt="James"
        className="rounded-full border-4 border-yellow-100"
        style={{
          width: "60px",
          height: "60px",
          position: "absolute",
          top: "0",
          left: "50%",
          marginTop: "20px",
          transform: "translateX(-50%)",
        }}
      />
      <div className="text-below-image" style={{ marginTop: "80px", fontSize: "19px", textAlign: "center" }}>
        James
      </div>

      {/* ✅ First Line Highlights First */}
      <div className="testimonial-content">
        <span className="testimonial-line" ref={firstRef}>
          ----An amazing journey with the team. They listened to our needs and delivered beyond expectations.
        </span>
        {/* ✅ Second Line Highlights After More Scrolling */}
        <span className="testimonial-line" ref={secondRef}>
          Their creativity and expertise helped elevate our business to new heights.
        </span>
      </div>

      <figcaption>
        <div>
         <div><h3>Creativity</h3></div> 
        </div>
      </figcaption>
    </figure>



    </section>
    </div>
  );
};

export default Testimonials;