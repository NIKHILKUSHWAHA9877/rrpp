"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const Page = () => {
  const [showMoreFounder, setShowMoreFounder] = useState(false);
  const [showMoreCofounder, setShowMoreCofounder] = useState(false);

  const stats = [
    { label: "Projects Delivered", value: 150 },
    { label: "Countries Served", value: 80 },
    { label: "Partners", value: 30 },
    { label: "Team Size", value: 50 },
  ];
  
  // Step 2: Define the AnimatedNumber component
  const AnimatedNumber = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const end = value;
      if (start === end) return;
  
      const totalDuration = 2000; // 2 seconds animation
      const incrementTime = totalDuration / end;
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
  
      return () => clearInterval(timer); // Cleanup to prevent memory leaks
    }, [value]);
  
    return <>{count}</>;
  };



  const handleReadMoreFounder = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowMoreFounder(!showMoreFounder);
  };

  const handleReadMoreCofounder = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowMoreCofounder(!showMoreCofounder);
  };

  const founderText = [
    "Project Manager",
    "Global Client Relationship Manager",
    "Operations Head",
    "Brand Strategist",
    "International Market Specialist",
  ];

  const cofounderText = [
    "Tech Freelancer",
    "Tech Lead",
    "META",
    "SDE at Testbook",
    "Global Developer Collaborator",
  ];

  return (
    <div className="bg-black abtmain">
      {/* The Googenix Story Section */}
      <section className="text-center py-16">
        <h1 className="text-6xl mt-28 text-white">
        The Googenix <span className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-[#b23ed5] to-[#AA55B5]">Story</span>
          
           </h1>
        <hr className="fade-2" />
      
        <p className="mt-4 max-w-2xl mx-auto text-xl text-white  ">
          Our repertoire caters to everything digital and necessary for today’s businesses. Our work culture mirrors our digital solutions, forged for reliability, innovation, & speed. It starts with a line of code and ends with our clients' smiles.
        </p>
       
      </section>

      {/* Founder and Cofounder Section */}
      <section className="flex mb-32 justify-center items-start py-16 space-x-8">
        {/* Founder */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 mb-4">
            <img
              src="/path-to-founder-image.jpg"
              alt="Founder"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 font-semibold text-2xl text-white">Founder</h2>
          <small className="opacity-35">Personal Working Experience</small>
          <p className="mt-2 text-lg text-white">
            <span className="mr-2 inline-block">Freelancer , </span>
            <span className="mr-2 inline-block">Entrepreneur</span>
          </p>

          {/* Text container with fixed height */}
          <div className="mt-2  w-full h-auto overflow-hidden relative">
            <div
              className={`transition-all duration-500 ease-in-out ${
                showMoreFounder ? "max-h-full opacity-100" : "max-h-0 opacity-0"
              }`}
              style={{
                maxHeight: showMoreFounder ? "1000px" : "0", // Adjusted to prevent collapse issues
                transition: "max-height 0.5s ease, opacity 0.5s ease",
               
                overflow: "hidden",
              }}
            >
              <div className="text-center text-lg">
                {founderText.map((text, index) => (
                  <span
                    key={index}
                    className={`text-lg ${
                      showMoreFounder
                        ? "text-white opacity-100"
                        : "text-gray-500 opacity-70"
                    } transition-all block`}
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>
            {/* Read More / Read Less Link - Centered */}
            <div className="mt-2 text-center">
              <p className="text-sm text-gray-500 opacity-60">
                <a
                  href="#"
                  onClick={handleReadMoreFounder}
                  className="text-blue-500 cursor-pointer hover:text-blue-700"
                >
                  {showMoreFounder ? "Read less" : "Read more"}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Cofounder */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 mb-4">
            <img
              src="/path-to-cofounder-image.jpg"
              alt="Cofounder"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 font-semibold text-white text-2xl ">Co-founder</h2>
          <small className="opacity-35">Personal Working Experience</small>
          <p className="mt-2 text-sm text-white">
            <span className="mr-2 text-lg inline-block">Software Developer</span>
            
          </p>

          {/* Text container with fixed height */}
          <div className="mt-2 w-full h-auto overflow-hidden relative">
            <div
              className={`transition-all duration-500 ease-in-out ${
                showMoreCofounder ? "max-h-full opacity-100" : "max-h-0 opacity-0"
              }`}
              style={{
                maxHeight: showMoreCofounder ? "1000px" : "0", // Adjusted to prevent collapse issues
                transition: "max-height 0.5s ease, opacity 0.5s ease",
                overflow: "hidden",
              }}
            >
              <div className="text-center">
                {cofounderText.map((text, index) => (
                  <span
                    key={index}
                    className={`text-lg ${
                      showMoreCofounder
                        ? "text-white opacity-100"
                        : "text-gray-500 opacity-70"
                    } transition-all block`}
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>
            {/* Read More / Read Less Link - Centered */}
            <div className="mt-2 text-center">
              <p className="text-sm text-gray-500 opacity-60">
                <a
                  href="#"
                  onClick={handleReadMoreCofounder}
                  className="text-blue-500 cursor-pointer hover:text-blue-700"
                >
                  {showMoreCofounder ? "Read less" : "Read more"}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The rest of the sections */}
      <section className="text-center py-16 bg-black text-white">
  <h2 className="text-5xl font-semibold"> <span
className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-[#338e62] to-[#66CDAA] transition-all">How We Work for</span> You at Googenix</h2>
  <hr className="fade-3"/>
  <p className="mt-4 text-xl max-w-3xl mx-auto">
    At Googenix, we follow two distinct, yet effective approaches to ensure your project runs smoothly and successfully. Here’s how we guarantee top-tier results:
  </p>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto">

    {/* Approach 1 */}
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between">
      <h3 className="text-3xl font-semibold text-blue-500 mb-4">Approach 1: Direct & Dedicated Collaboration</h3>
      <p className="text-[19px] mb-4">
        At Googenix, we believe in a hands-on approach. Once we understand your requirements, we assign a dedicated team of 50+ highly skilled professionals who will immediately start working on your project. Throughout the process, we keep you updated at every step, ensuring you are always in the loop and your expectations are met without compromise. We work closely with you, ensuring that the solution is tailored perfectly to your needs.
      </p>
      
      {/* Summary Points for Approach 1 */}
      <div className="mt-auto space-y-4 text-left">
        <ul className="list-disc pl-6 text-[19px] mb-8">
          <li>Dedicated team of 50+ skilled professionals working just for you.</li>
          <li>Frequent updates and close collaboration throughout the project.</li>
          <li>Tailored solutions to meet your exact business needs.</li>
          <li>100% Satisfaction Guarantee—We make sure you’re happy with the results!</li>
          <li>Money-Back Guarantee if we fail to meet your expectations.</li>
        </ul>
      </div>
    </div>

    {/* Approach 2 */}
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between">
      <h3 className="text-3xl font-semibold text-blue-500 mb-4">Approach 2: Best of India’s Talent</h3>
      <p className="text-lg mb-4">
        India is home to some of the most intelligent, creative, and cost-effective developers and designers. With this in mind, we bring the best talent right to your doorstep. After understanding your requirements clearly, our team at Googenix will select the finest professionals from India to work on your project. You don’t need to worry about anything—our team will handle everything from start to finish. You can focus on growing your business while we manage all the details of your project, delivering exceptional results, on time, and within budget.
      </p>

      {/* Summary Points for Approach 2 */}
      <div className="mt-auto space-y-4 text-left">
        <ul className="list-disc pl-6 text-lg">
          <li>Access to the best developers and designers from India at affordable rates.</li>
          <li>No project management needed from your side—we handle everything!</li>
          <li>Focus on growing your business while we handle all the details.</li>
          <li>100% Satisfaction Guarantee—Our team works until you're fully satisfied.</li>
          <li>Money-Back Guarantee—If you're not satisfied, you get your money back.</li>
        </ul>
      </div>
    </div>

  </div>



  {/* Why Choose Googenix Section with 6 Grid Cards */}
  <div className="mt-36 text-center">
    <h3 className="text-5xl font-semibold mb-4">
    <span className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-[#b23ed5] to-[#AA55B5]">Why Choose</span> Googenix?</h3>

    <hr className="fade-2" />

    {/* Grid of 6 Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center text-left p-10">
      <div className="card-container">
        <div className="title-card">
          <p>TRUST</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.277 16.515c..."></path>
          </svg>
        </div>
        <div className="card-content">
          <p className="description">For us, the basis of a fulfilling partnership is trust. We thus take all necessary steps to construct it. While being open, we also use prudence when necessary. We are comfortable enough with one other, as well as with our partners and clients, to be vulnerable.</p>
        </div>
      </div>

      <div className="card-container">
        <div className="title-card">
          <p>EMPATHY</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.277 16.515c..."></path>
          </svg>
        </div>
        <div className="card-content">
          <p className="description">We have empathy with other people's ideas and sentiments, including their wants, needs, objectives, values, and obstacles. We pay attention, try to comprehend, and respond to strengthen our working connections.</p>
        </div>
      </div>

      <div className="card-container">
        <div className="title-card">
          <p>COLLABORATION</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.277 16.515c..."></path>
          </svg>
        </div>
        <div className="card-content">
          <p className="description">Whether working on a client project or collaborating internally, we promote teamwork. To accomplish shared objectives, we put on the hat of a partner and engage, support, brainstorm, and share our expertise and experience.</p>
        </div>
      </div>

      {/* Repeat 3 more cards with different content */}
      <div className="card-container">
        <div className="title-card">
          <p>COMMITMENT</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.277 16.515c..."></path>
          </svg>
        </div>
        <div className="card-content">
          <p className="description">We demonstrate our abilities, enthusiasm, and earnest effort by upholding our commitments and keeping our word. We work diligently and genuinely so that we can fulfill or surpass expectations.</p>
        </div>
      </div>

      <div className="card-container">
        <div className="title-card">
          <p>INNOVATION</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.277 16.515c..."></path>
          </svg>
        </div>
        <div className="card-content">
          <p className="description">We constantly absorb the newest technological developments. This aids in creating a creative environment to provide valuable expertise and abilities to each project.</p>
        </div>
      </div>

      <div className="card-container">
        <div className="title-card">
          <p>COMMUNICATION</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.277 16.515c..."></path>
          </svg>
        </div>
        <div className="card-content">
          <p className="description">Reaction time and 24/7 accessibility are two of our main concerns. Apart from the normal daily/weekly meetings, each member of our team is available via phone call, Skype chat, or email since we genuinely want to be your extended team.</p>
        </div>
      </div>
    </div>
  </div>


</section>


























      <section className="py-16 px-8 w-full min-h-screen flex flex-col justify-center items-center">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-white">
        <span className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-[#5a6042] to-[#b4b98d]">Delivering Success</span> <br/> Consistently And At Scale

        </h2>
      </div>

      {/* Content Section with Image on the Right and Stats on the Left */}
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto max-w-screen-xl mt-8">
        {/* Left Side Stats */}
        <div className="w-full md:w-1/2 text-white text-left md:text-left mb-8 md:mb-0 ">
          {/* Stats Layout in 2 Rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {/* First Row */}
            <div className="flex flex-col items-center">
              <p className="text-gray-300 font-semibold mb-2 font-quicksand  whitespace-nowrap">Projects Delivered</p>
              <motion.div
                className="text-6xl bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 text-transparent bg-clip-text font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <AnimatedNumber value={150} />+
              </motion.div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-300 font-semibold mb-2 font-quicksand whitespace-nowrap ">Countries Served</p>
              <motion.div
                className="text-6xl bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 text-transparent bg-clip-text font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <AnimatedNumber value={80} />+
              </motion.div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col items-center">
              <p className="text-gray-300 font-semibold mb-2 font-quicksand whitespace-nowrap ">Partners</p>
              <motion.div
                className="text-6xl bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 text-transparent bg-clip-text font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <AnimatedNumber value={30} />+
              </motion.div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-300 font-semibold mb-2 font-quicksand whitespace-nowrap ">Team Size</p>
              <motion.div
                className="text-6xl bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 text-transparent bg-clip-text font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <AnimatedNumber value={50} />+
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex justify-center ml-[100px]"> {/* Added ml-8 to move the image more to the right */}
  <img
    src="/path-to-image.jpg" // Replace with your image path
    alt="Success Image"
    className="w-full h-auto object-cover rounded-lg shadow-lg"
  />
</div>

      </div>
    </section>


      <section className="py-16 px-8">
        <h2 className="text-5xl  text-center text-white">
        <span className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(51,58,110)] via-[#7A8BD1] to-[#6A80C3] transition-all">Our Vision & Mission</span> Statement</h2>
        <h3 className="text-2xl font-semibold text-center mt-4 text-white">
          App Development Process which Results in Engaging Apps
        </h3>
        <hr className="fade-2" />
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <img
              src="https://cdn.relinns.com/assets/customer-satisfaction.svg"
              alt="Logo"
              className="mx-auto w-24 h-24 object-contain"
            />
            <h4 className="mt-4 font-semibold text-white">Customer Satisfaction</h4>
            <p className="mt-2 text-sm text-white">[Space for your text]</p>
          </div>
          <div className="text-center">
            <img
              src="https://cdn.relinns.com/assets/relinns-way-life.svg"
              alt="Logo"
              className="mx-auto w-24 h-24 object-contain"
            />
            <h4 className="mt-4 font-semibold text-white">Googenix Way of Life</h4>
            <p className="mt-2 text-sm text-white">[Space for your text]</p>
          </div>
          <div className="text-center">
            <img
              src="https://cdn.relinns.com/assets/back-to-socity.svg"
              alt="Logo"
              className="mx-auto w-24 h-24 object-contain"
            />
            <h4 className="mt-4 font-semibold text-white">Giving it Back to Society</h4>
            <p className="mt-2 text-sm text-white">[Space for your text]</p>
          </div>
        </div>
      </section>



<section>






    <div className="container-fluid  w-full bg-light-grey-bg">
   
        
        {/* Images inside the box */}
        <div className="client-badges py-16">
          {/* Outer container for the images */}
          <div className="bg-white p-4  shadow-md mt-8">


          <div className="container mx-auto">
        {/* Text inside the box */}
        <div className=" p-6 rounded-lg text-center">
          <h3 className="pt-8 md:pt-16 text-black font-regular text-2xl md:text-4xl mb-14">
            A satisfied customer is the best business strategy of all.
          </h3>
        </div>

            {/* CSS Grid layout for aligning 5 images per row */}
            <div className="grid grid-cols-5 mb-8 gap-6 mx-auto justify-items-center">
              {/* Each image in its respective grid item */}
              <div data-aos="zoom-in" data-aos-once="true" data-aos-delay="100" className="badge aos-init aos-animate">
                <img
                  loading="lazy"
                  className="object-contain"
                  src="https://cdn.relinns.com/assets/images/home-almas.svg"
                  
                  style={{ width: "200px", height: "100px" , filter: "invert(1)" }}
                />
              </div>
              <div data-aos="zoom-in" data-aos-once="true" data-aos-delay="100" className="badge aos-init aos-animate">
                <img
                  loading="lazy"
                  className="object-contain"
                  src="https://cdn.relinns.com/assets/badges/client-badges/khata-book.svg"
                  alt="Khata Book logo"
                  style={{ width: "150px", height: "100px" }}
                />
              </div>
              <div data-aos="zoom-in" data-aos-once="true" data-aos-delay="100" className="badge aos-init aos-animate">
                <img
                  loading="lazy"
                  className="object-contain"
                  src="https://cdn.relinns.com/assets/images/home-sanesa.svg"
                  alt="University of California logo"
                  style={{ width: "200px", height: "100px" , filter: "invert(1)" }}
                />
              </div>
              <div
  data-aos="zoom-in"
  data-aos-once="true"
  data-aos-delay="100"
  className="badge aos-init aos-animate"
>
  <img
    loading="lazy"
    className="object-contain"
    src="https://cdn.relinns.com/assets/images/home-eventure.svg"
    alt="Intervue logo"
    style={{ height: "100px", position: "relative", left: "-5px" , filter: "invert(1)" }}
  />
</div>

              <div data-aos="zoom-in" data-aos-once="true" data-aos-delay="100" className="badge aos-init aos-animate">
                <img
                  loading="lazy"
                  className="object-contain"
                  src="https://cdn.relinns.com/assets/images/home-educo-global.svg"
                  alt="Medoplus"
                  style={{ height: "110px" }}
                />
              </div>
              {/* Repeat for the remaining images */}
              <div data-aos="zoom-in" data-aos-once="true" data-aos-delay="100" className="badge aos-init aos-animate">
                <img
                  loading="lazy"
                  className="object-contain"
                  src="/alpino.svg"
                  alt="UAE Ministry of Education logo"
                  style={{ width: "140px", height: "100px" }}
                />
              </div>
              <div data-aos="zoom-in" data-aos-once="true" data-aos-delay="100" className="badge aos-init aos-animate">
                <img
                  loading="lazy"
                  className="object-contain"
                  src="/stage.webp"
                  alt="Zircle logo"
                  style={{ width: "150px", height: "100px" }}
                />
              </div>
              <div data-aos="zoom-in" data-aos-once="true" data-aos-delay="100" className="badge aos-init aos-animate">
                <img
                  loading="lazy"
                  className="object-contain"
                  src="/ZEE.png"
                  alt="Manchester City logo"
                  style={{ width: "160px", height: "90px" }}
                />
              </div>
              <div data-aos="zoom-in" data-aos-once="true" data-aos-delay="100" className="badge aos-init aos-animate">
                <img
                  loading="lazy"
                  className="object-contain"
                  src="https://cdn.relinns.com/assets/badges/client-badges/woodland.svg"
                  alt="Woodland logo"
                  style={{ width: "150px" }}
                />
              </div>
              <div data-aos="zoom-in" data-aos-once="true" data-aos-delay="100" className="badge aos-init aos-animate">
                <img
                  loading="lazy"
                  className="object-contain"
                  src="https://cdn.relinns.com/assets/badges/client-badges/apollo.svg"
                  alt="Apollo logo"
                  style={{ width: "150px" , height:"100px"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>









    
</section>

    </div>
  );
};

export default Page;
