'use client';

import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative w-screen min-h-[60vh] flex items-center justify-center text-white px-6 py-16 bg-gradient-to-r from-black to-gray-700">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold">About NailHouse</h1>
        <p className="mt-4 text-lg text-gray-300">
          Discover our passion for beauty and self-care.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
