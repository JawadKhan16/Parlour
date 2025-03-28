'use client'

import { motion } from "framer-motion";
import Image from "next/image";

export default function Reviews() {
  return (
    <section className="relative w-full min-h-screen text-white py-16 px-6 bg-gradient-to-r from-black to-gray-500">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-bold text-4xl sm:text-5xl mb-12"
        >
          CLIENT REVIEWS
        </motion.h1> 
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white">
            "At NailHouse, our priority is to provide top-notch beauty and grooming services 
            that leave our clients feeling confident and refreshed. Every treatment is designed with care,
             using high-quality products and expert techniques to ensure the best experience. 
            But don't just take our word for it—see what our happy clients have to say!"
          </motion.p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* Review Cards */}
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg border border-gray-300 shadow-lg text-center"
            >
              {/* Profile Image */}
              <div className="w-16 h-16 mx-auto overflow-hidden rounded-full border-2 border-white">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>

              {/* Review Text */}
              <p className="text-black text-sm mt-4 leading-relaxed">{review.text}</p>

              {/* Star Rating */}
              <div className="flex justify-center mt-2">
                {Array(review.rating).fill().map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Reviewer Name */}
              <p className="mt-2 text-white text-sm font-semibold">- {review.name} -</p>
            </motion.div>

                
            
          ))}
        </div>
      </div>
    </section>
  );
}


const reviews = [
  {
    name: "Aaron Loeb",
    text: "The cream is moisturizing, which I like. I was sensitive to scents, but I love the fragrance.",
    image: "/client/client1.webp", 
    rating: 5
  },
  {
    name: "Sophia Lee",
    text: "Great experience! The service was amazing, and the staff was very professional.",
    image: "/client/client2.webp",
    rating: 5
  },
  {
    name: "Daniel Smith",
    text: "I loved the ambiance and quality of the salon. Highly recommended!",
    image: "/client/client3.webp",
    rating: 4
  }
  
];
