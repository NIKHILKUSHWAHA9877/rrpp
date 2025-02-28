import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

import FrequentQues from "@/components/ui/FrequentQues";
import { Button } from "./ui/MovingBorders";

const Footer = () => {
    return (
        <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-[#5a6042] to-[#b4b98d]">your</span> digital
                    presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-3 my-5 text-center">
                    Reach us out today and let&apos;s discuss how our team can help you
                    achieve your goals.
                </p>
                <a href="mailto:nikhik15kumar@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>

            {/* Updated section with correct flex layout for video and form */}
            <section className="Top-container">
                <div className="top-portfolio-container">
                    {/* Left side: Video */}
                    <div className="portfolio-container-left">
                        <video
                            src="/vid.mp4"
                            controls
                            autoPlay
                            muted
                            loop
                        ></video>

<span className="button-container">
    <Button
        duration={2000}
        borderRadius="10px"
        className="relative text-xl text-white bg-transparent p-0 m-0"
        style={{ width: '30%', marginTop: '40px', height: '120px' }}
    >
        <div className="relative flex items-center justify-center w-full h-full p-0 m-0 bg-black rounded-lg overflow-hidden">
            <p className="text-white text-center p-4 m-0 text-[15px] font-medium whitespace-normal">
                Responsive and Mobile-Friendly Design
            </p>
        </div>
    </Button>

    <Button
        duration={2000}
        borderRadius="10px"
        className="relative text-xl text-white bg-transparent p-0 m-0"
        style={{ width: '30%', marginTop: '40px', height: '120px' }}
    >
        <div className="relative flex items-center justify-center w-full h-full p-0 m-0 bg-black rounded-lg overflow-hidden">
            <p className="text-white text-center p-4 m-0 text-[15px] font-medium whitespace-normal">
                Fast Loading Speed and Performance
            </p>
        </div>
    </Button>

    <Button
        duration={2000}
        borderRadius="10px"
        className="relative text-xl text-white bg-transparent p-0 m-0"
        style={{ width: '30%', marginTop: '40px', height: '120px' }}
    >
        <div className="relative flex items-center justify-center w-full h-full p-0 m-0 bg-black rounded-lg overflow-hidden">
            <p className="text-white text-center p-4 m-0 text-[15px] font-medium whitespace-normal">
                SEO and Visibility in Search Engines
            </p>
        </div>
    </Button>

    <Button
        duration={2000}
        borderRadius="10px"
        className="relative text-xl text-white bg-transparent p-0 m-0"
        style={{ width: '30%', marginTop: '40px', height: '120px' }}
    >
        <div className="relative flex items-center justify-center w-full h-full p-0 m-0 bg-black rounded-lg overflow-hidden">
            <p className="text-white text-center p-4 m-0 text-[15px] font-medium whitespace-normal">
                Unlimited Scalability
            </p>
        </div>
    </Button>
</span>

                    </div>

                    {/* Right side: Form */}
                    <div className="portfolio-form-right">
    <form 
        id="LpForm" 
        method="POST" 
        name="LpForm"
        action="https://formspree.io/f/xzzdndwg" // Your Formspree link
        encType="multipart/form-data"
    >
        <h4>Let's Build It Together</h4>
        <p className="LpForm-p">Get Free Consultation From Experts</p>
        
        <span>
            <input type="text" placeholder="Enter Name" id="name" name="NAME" required />
        </span>

        <span>
            <input type="text" placeholder="Enter Phone Number" id="phone" name="NUMBER" required />
        </span>

        <span>
            <input type="text" placeholder="Enter Location" id="location" name="CITY" required />
        </span>

        <div className="form-group"> 
            <div className="requirements-box">
                <textarea 
                    id="requirements" 
                    name="requirements" 
                    className="requirements-textarea"
                    placeholder="Write Your Requirements here"
                ></textarea>

                {/* File Upload (Hidden) */}
                <input 
                    type="file" 
                    id="fileUpload" 
                    className="file-input" 
                    name="attachment" 
                    multiple
                />

                {/* Browse Files Button */}
                <label htmlFor="fileUpload" className="file-upload-label">
                    BROWSE FILES
                </label>
            </div>
        </div>

        <button className="dev-submit" type="submit">
            <div className="button-text">Submit</div>
        </button>
    </form>
</div>
</div>
            </section>

            <div className="text-white-200 md:mt-10 my-5 text-center title-sec">
                <h2 style={{ textAlign: 'center', fontSize: '36px', fontFamily: 'Poppins, sans-serif' }}>
                    FREQUENTLY ASKED
                    <span className="text-purple">  QUESTION'S</span>
                </h2>
            </div>

            <div className="flex justify-center items-center min-h-screen w-full">
                <FrequentQues />
            </div>


     

            <a 
  href="https://wa.me/919877851595?text=Hello_Googenix%2C%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%20this%3F" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ textDecoration: 'none', color: 'inherit' }} // Keeps the original text styling
>
  <article>
    <h1>OK, let's do it</h1>
  </article>
</a>

        </footer>
    );
}

export default Footer;
