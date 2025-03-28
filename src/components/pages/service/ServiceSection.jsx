'use client'

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Luxury Manicure",
    description: "Get the perfect nails with our professional manicure service.",
    image: "/ServiceImages/manicure.webp", 
  },
  {
    title: "Relaxing Pedicure",
    description: "Experience ultimate foot relaxation with our pedicure treatment.",
    image: "/ServiceImages/pedicure.webp",
  },
  {
    title: "Glowing Facial",
    description: "Rejuvenate your skin with our deep-cleansing facial services.",
    image: "/ServiceImages/glow.webp",
  },
  {
    title: "Elegant Hair Styling",
    description: "Get a stunning hair makeover from our expert stylists.",
    image: "/ServiceImages/hair.webp",
  },
];

const ServiceSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-8"
        >
          Our Services
        </motion.h1>
        
        <p className="text-gray-400 mb-12">
          Discover a range of premium beauty and grooming services at NailHouse.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-400 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
