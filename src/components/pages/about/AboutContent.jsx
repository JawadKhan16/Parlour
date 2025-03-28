'use client';

import {motion} from "framer-motion";

const AboutContent = () => {
  return (
    <section className="w-full bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        
        className="text-3xl font-semibold">
        Who We Are
        </motion.h2>

        <motion.p 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-4 text-gray-300">
          At NailHouse, we believe in providing high-quality beauty services in a relaxing and luxurious environment.
          Our team of experts ensures that every client feels pampered and confident with our personalized treatments.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutContent;
