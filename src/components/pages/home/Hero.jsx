"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col lg:flex-row items-center bg-gray-500">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gray-500 opacity-70"></div>

      {/* Left Section */}
      <div className="relative z-10 flex-1 p-12 text-white">
        <div className="max-w-lg">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-white text-left"
          >
            THE NAIL HOUSE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-left"
          >
            Expertly educated, our teams deliver superior hairdressing and
            treatments, and our beautifully designed salons offer you a space
            to relax.
          </motion.p>

          {/* Buttons */}
          <div className="mt-6 flex gap-6">
            <a
              href="/ServicePage"
              className="border-2 border-white px-6 py-3 text-white font-semibold hover:bg-white hover:text-black transition"
            >
              SERVICES
            </a>
            <a
              href="/AboutPage"
              className="border-2 border-white px-6 py-3 text-white font-semibold hover:bg-white hover:text-black transition"
            >
              KNOW MORE
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex-1 max-h-screen">
        <img
          src="/saloon.webp"
          alt="Salon"
          className="w-screen h-screen object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-500"></div>
      </div>
    </section>
  );
}
