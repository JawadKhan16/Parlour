'use client'

import ContactForm from '@/components/pages/contact/ContactForm';
import SalonDetails from '@/components/pages/contact/SaloonDetails';

export default function Hero() {
  return (
    <section className="relative w-screen min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-300 mb-8">We’d love to hear from you! Reach out with any questions or appointments.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <ContactForm />
        <SalonDetails />
      </div>
    </section>
  );
}
