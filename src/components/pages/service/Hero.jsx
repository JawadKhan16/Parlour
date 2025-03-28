"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-screen min-h-screen flex flex-col items-center 
    justify-center text-white px-6 py-16 bg-gradient-to-r from-black to-gray-500">
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center"
      >
        Our Premium Services
      </motion.h2>
      <p className="text-center text-white max-w-2xl mt-2">
        Experience luxury with our top-notch beauty and grooming services.
      </p>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl w-full">
        {/* Service 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
        >
          <h3 className="text-xl text-black font-semibold">Luxury Manicure</h3>
          <p className="text-gray-600 mt-2">
            Get the perfect nails with our professional manicure service.
          </p>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
        >
          <h3 className="text-xl text-black font-semibold">Hair Styling</h3>
          <p className="text-gray-600 mt-2">
            Trendy cuts, colors, and styles tailored just for you.
          </p>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
        >
          <h3 className="text-xl text-black font-semibold">Bridal Makeup</h3>
          <p className="text-gray-600 mt-2">
            Look stunning on your special day with expert bridal makeup.
          </p>
        </motion.div>

        {/* Service 4 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
        >
          <h3 className="text-xl text-black font-semibold">Spa & Relaxation</h3>
          <p className="text-gray-600 mt-2">
            Enjoy a relaxing spa session to rejuvenate your body and mind.
          </p>
        </motion.div>
      </div>

      {/*Image */}
      <div className="flex items-center justify-center mt-12">
        <Image
          src="/service.jpg" 
          alt="Service"
          width={450}
          height={450}
          className="rounded-full shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
