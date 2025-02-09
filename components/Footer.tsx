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

                        <span>
                            {/* Wrapping each <p> inside a Button component for MovingBorder */}
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
                        <form id="LpForm" method="post" name="LpForm">
                            <h4>Let's Build It Together</h4>
                            <p className="LpForm-p">Get Free Consultation From Experts</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"></path>
                                </svg>
                                <input type="text" placeholder="Enter Name" id="name" name="NAME" />
                            </span>

                            <span>
                                <span className="prefix">+91</span>
                                <input type="text" placeholder="Enter Phone Number" id="phone" name="NUMBER" />
                            </span>

                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
                                </svg>
                                <input type="text" placeholder="Enter Location" id="location" name="CITY" />
                            </span>

                            <input type="hidden" id="submissionDate" name="submissionDate" />
                            <div className="cheak-box-class">
                                <div className="chekbox-sec">
                                    {/* Updated to ensure the checked attribute is a boolean */}
                                    <input
                                        type="checkbox"
                                        checked={true} // Ensure this is a boolean value
                                        required
                                    />
                                    <label>By engaging Visible Gain, you consent to our Privacy Policy</label>
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


     

            <article>
    <h1>OK,let's do it</h1>
  </article>
        </footer>
    );
}

export default Footer;
