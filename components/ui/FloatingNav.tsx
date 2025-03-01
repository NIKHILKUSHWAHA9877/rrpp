"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: (NavItem & { subDropdownItems?: NavItem[] })[];
}

export const FloatingNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "Products",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "Coming Soon", href: "" },
      ],
    },
    {
      label: "Tech Services",
      href: "#projects",
      hasDropdown: true,
      dropdownItems: [
        { label: "Software Development", href: "/dashboard/software" },
        { label: "App development", href: "/dashboard/software" },
        { label: "Website Development", href: "/dashboard/software" },
        { label: "Video Editing", href: "/dashboard/routerone" },
        { label: "Voice Solutions", href: "/dashboard/routerone" },
        { label: "3D Video Services", href: "/dashboard/VideoTwo" },
        { label: "3D Animation & CGI", href: "/dashboard/VideoTwo" },
        { label: "Graphics designing", href: "/dashboard/logoRoute" },
        { label: "Logo designing", href: "/dashboard/logoRoute" },
       
      ],
    },
   {
      label: "Business Growth Solutions",
      href: "#projects",
      hasDropdown: true,
      dropdownItems: [
        { label: "Ecommerce Listing Optimization", href: "#projects" },
        { label: "Paid Ads", href: "#projects" },
        { label: "SEO", href: "#projects" },
        { label: "Influencer Marketing Campaigns", href: "#projects" },
        { label: "Social media management", href: "#projects" },
        { label: "Content Writing", href: "#projects" },
      ],
    }, {
      label: "Work",
      href: "#projects",
      hasDropdown: true,
      dropdownItems: [
        { label: "Portfolio", href: "#projects" }, 
        // {
        //   label: "Case Studies",
        //   href: "#",
        //   subDropdownItems: [
        //     { label: "ModWash", href: "/modwash" },
        //     { label: "Punjab Agro's Five Rivers", href: "/punjab-agro" },
        //     { label: "ISEA - Guatemala", href: "/isea-guatemala" },
        //     { label: "Optique", href: "/optique" },
        //     { label: "The Black Book", href: "/the-black-book" },
        //     { label: "4allPromos", href: "/4allpromos" },
        //     { label: "Cyboard", href: "/cyboard" },
        //     { label: "TryKardi", href: "/trykardi" },
        //     { label: "MedoPlus", href: "/medoplus" },
        //     { label: "ChatAhoot", href: "/chatahoot" },
        //     { label: "Authentic Drilling", href: "/authentic-drilling" },
        //     { label: "GrumpNow", href: "/grumpnow" },
        //     { label: "Mall Shoppee", href: "/mall-shoppee" },
        //   ],
        // },
      ],
    },
    { label: "About", href: "/dashboard/about" },
  ];


  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 50 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  return (
    <motion.nav
      className="fixed top-6 left-0 right-0 mx-auto bg-[#333] border border-[#FFFFFF19] rounded-xl lg:rounded-2xl py-2 px-3 lg:py-3 lg:px-4 w-[80%] max-w-[1300px] z-50 shadow-[0_8px_25px_rgba(255,255,255,0.2)]"
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="flex justify-between items-center h-14">
        <div className="logo items-center  "> <img
          src="/logo.png"
          alt="Logo"
          className="cursor-pointer w-[200px] h-auto  mt-[-45px] flex"
        />
        
        <div className="fancy4 w-[130px] mt-[-125px] absolute left-1/2 transform -translate-x-1/2"></div>
        </div>
    
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 text-base font-medium">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              <Link
                href={item.href}
                className="hover:text-gray-300 transition relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className="w-4 h-4 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {item.hasDropdown && item.dropdownItems && (
  <div className="absolute left-0 hidden bg-[#333] border border-[#FFFFFF19] rounded-xl py-2 px-3 space-y-1 group-hover:block z-50 min-w-[200px] sm:min-w-[220px] md:min-w-[250px]">
    {item.dropdownItems.map((dropdownItem) => (
      <div key={dropdownItem.label} className="relative group/sub">
        <Link
          href={dropdownItem.href}
          className="block text-white hover:text-gray-300 px-3 py-1.5 rounded-md hover:bg-[#444] transition-colors flex items-center justify-between"
        >
          {dropdownItem.label}
          {dropdownItem.subDropdownItems && (
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </Link>
        
        {dropdownItem.subDropdownItems && (
          <div className="absolute left-full top-0 hidden bg-[#333] border border-[#FFFFFF19] rounded-xl py-2 px-3 space-y-1 group-hover/sub:block min-w-[250px] max-h-[300px] sm:max-h-[250px] md:max-h-[300px] overflow-y-auto z-50">
            {dropdownItem.subDropdownItems.map((subItem) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                className="block text-white hover:text-gray-300 whitespace-nowrap hover:bg-[#444] px-3 py-1.5 rounded-md transition-colors"
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
)}




            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-[#444] transition-colors"
          onClick={toggleMobileMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Get in Touch Button (Desktop) */}
        <div className="hidden md:block">
        <a 
  href="https://wa.me/919877851595?text=Hello_Googenix%2C%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%20this%3F" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ textDecoration: 'none', color: 'inherit' }} // Keeps the original text styling
>
        <Button className="custom-button border text-white px-6 py-2 transition">
    Get in Touch
</Button>
</a>
        </div>
      </div>

{/* Mobile Navigation */}
{/* Mobile Navigation */}
{isMenuOpen && (
  <div className="md:hidden absolute top-full left-0 right-0 bg-[#333] border border-[#FFFFFF19] rounded-xl mt-2 p-4 space-y-3 z-50">
    {navItems.map((item) => (
      <div key={item.label} className="relative">
        {item.hasDropdown ? (
          <>
            <button
              className="w-full text-left text-white flex items-center justify-between p-1.5 rounded-md hover:bg-[#444] text-xs" 
              onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
            >
              {item.label}
              <svg
                className={`w-3 h-3 transform transition-transform ${
                  activeDropdown === item.label ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeDropdown === item.label && item.dropdownItems && (
              <div className="ml-3 space-y-1"> {/* Further reduced spacing */}
                {item.dropdownItems.map((dropdownItem) => (
                  <div key={dropdownItem.label} className="relative">
                    {dropdownItem.subDropdownItems ? (
                      <>
                        <button
                          className="w-full text-left text-white flex items-center justify-between p-1.5 rounded-md hover:bg-[#444] text-xs"
                          onClick={() => setActiveSubDropdown(activeSubDropdown === dropdownItem.label ? null : activeSubDropdown)}
                        >
                          {dropdownItem.label}
                          <svg
                            className={`w-3 h-3 transform transition-transform ${
                              activeSubDropdown === dropdownItem.label ? "rotate-90" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {activeSubDropdown === dropdownItem.label && (
                          <div className="ml-3 space-y-1"> {/* Further reduced sub-dropdown spacing */}
                            {dropdownItem.subDropdownItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block text-white p-1.5 rounded-md hover:bg-[#444] text-xs" 
                                onClick={toggleMobileMenu}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={dropdownItem.href}
                        className="block text-white p-1.5 rounded-md hover:bg-[#444] text-xs" 
                        onClick={toggleMobileMenu}
                      >
                        {dropdownItem.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <Link
            href={item.href}
            className="block text-white p-1.5 rounded-md hover:bg-[#444] text-xs"
            onClick={toggleMobileMenu}
          >
            {item.label}
          </Link>
        )}
      </div>
    ))}

    {/* Get in Touch Button (Mobile) */}
    <Button
  className="w-full border"
  onClick={() => (window.location.href = "https://wa.me/919877851595?text=Hello%2C%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%20this%3F")}
>
  Get in Touch
</Button>

  </div>
)}


    </motion.nav>
  );
};
