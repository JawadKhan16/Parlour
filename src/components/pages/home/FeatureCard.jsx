"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureCard({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center w-full sm:w-80 mx-auto"
    >
      <Image
        src={feature.image}
        alt={feature.title}
        width={150}
        height={80}
        className="mb-4"
      />
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{feature.title}</h3>
      <p className="text-gray-600 mt-2">{feature.description}</p>
    </motion.div>
  );
}
