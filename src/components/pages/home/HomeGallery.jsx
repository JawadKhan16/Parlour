"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const images = [
  "/our-saloon/img1.webp",
  "/our-saloon/img2.webp",
  "/our-saloon/img3.webp",
  "/our-saloon/img4.webp",
  "/ServiceImages/manicure.webp",
  "/ServiceImages/pedicure.webp",
];

export default function HomeGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + imagesPerPage < images.length ? prev + imagesPerPage : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - imagesPerPage >= 0 ? prev - imagesPerPage : images.length - imagesPerPage));
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-500 w-full min-h-screen text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-bold text-4xl sm:text-5xl mb-8"
        >
          SALOON GALLERY
        </motion.h1>

        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Image Cards */}
          <div className="grid grid-cols-3 gap-6">
            {images.slice(currentIndex, currentIndex + imagesPerPage).map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-80 object-cover" />
              </motion.div>
            ))}
          </div>

          
            {/*carousel effect */}
          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
          >
            <ChevronRight size={32} />
          </button>
        </div>
        {/*Description */}
        <div><motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 text-3xl font-bold">
        Welcome to NailHouse – Where Beauty Meets Luxury!
          </motion.h1>

          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white">
            At NailHouse, we believe in enhancing your natural beauty with premium salon services in
             a luxurious and relaxing environment. Our expert beauticians are trained 
            to provide top-notch care, ensuring you receive a pampering experience like no other.
          </motion.p>
          </div>
      </div>
    </section>
  );
}
