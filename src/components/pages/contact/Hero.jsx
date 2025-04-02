'use client';

import {motion} from "framer-motion"
import ContactForm from '@/components/pages/contact/ContactForm';
import SalonDetails from '@/components/pages/contact/SaloonDetails';

export default function Hero() {
  return (
    <section className="relative w-screen min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4">Contact Us</motion.h1>
        <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-gray-300 mb-8">We’d love to hear from you! Reach out with any questions or appointments.</motion.p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <ContactForm />
        <SalonDetails />
      </div>
      {/* Map Section */}
      <div className="mt-16 max-w-6xl mx-auto text-center">
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-semibold mb-4">Find Us Here</motion.h2>
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-gray-300 mb-6">
          Visit our salon at the location below. We look forward to seeing you!
        </motion.p>
        
        {/*Google Map */}
        <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
          <iframe
          title="Nalihouse Location"
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121064.99571544437!2d73.72547479726563!3d18.51619440000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14301efcf2f%3A0xe00a9bdb068f7342!2sThe%20Nail%20House%20By%20Aisha%E2%80%94%20Nails%20%7C%20Skin%20%7C%20Hair%20%7C%20Lashes%20%26%20More%E2%80%A6Best%20Salon%20in%20Pune!5e0!3m2!1sen!2sin!4v1743579441066!5m2!1sen!2sin"
            
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            >
          </iframe>
        </div>
        </div>
    </section>
  );
}
