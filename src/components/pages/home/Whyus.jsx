"use client";

import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard"; 
import { features } from "./featuresData"; 

export default function Whyus() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-gray-600 to-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold text-white"
        >
          WHY CHOOSE US
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg sm:text-xl text-white"
        >
          Choose our salon for an exceptional experience and a commitment to exceeding your expectations.
        </motion.p>
      </div>

      {/* Responsive Cards Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}
