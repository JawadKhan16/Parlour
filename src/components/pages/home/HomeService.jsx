"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const images = ["ServiceImages/service1.webp", "/ServiceImages/service2.webp",
   "/ServiceImages/service3.webp","/ServiceImages/service4.webp"]; 

export default function HeroService() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); 
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-gray-500">
      {/* Left Section - Image */}
      <div className="relative flex-1 h-screen">
        <img
          src={images[currentImage]}
          alt="Salon"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        
      </div>

      {/* Right Section - Text */}
      <div className="relative z-10 flex-1 p-12 text-white text-left">
        <div className="max-w-lg ml-auto">
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-white text-left"
          >
            OUR SERVICES
          </motion.h1>
          <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" text-white text-left"
          >
            <li>1. Manicure & Pedicure: 💅 Luxury Nail Care Pamper your hands and feet with our expert manicures and pedicures.
                 Choose from classic, gel, or acrylic nails with stunning designs.</li>
            
            <li>2. Nail Art & Extensions: 💇‍♀️ Transform Your Look From elegant French tips to bold, trendy
             nail art, we offer creative and long-lasting nail extensions customized to
              your style.</li>

              <li>3. Facials & Skin Treatments: ✨ Glow Like Never Before
              Rejuvenate your skin with our specialized facials, hydrating treatments, 
              and anti-aging solutions designed for radiant skin.</li>
          </motion.ul>


          {/* Buttons */}
          <div className="mt-6 flex gap-6 justify-start">
            <a
              href="/ContactPage"
              className="border-2 border-white px-6 py-3 text-white font-semibold hover:bg-white hover:text-black transition"
            >
              CONTACT US
            </a>
            <a
              href="#"
              className="border-2 border-white px-6 py-3 text-white font-semibold hover:bg-white hover:text-black transition"
            >
              FOLLOW US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
