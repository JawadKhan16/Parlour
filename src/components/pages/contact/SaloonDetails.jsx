'use client'

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function SaloonDetails() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Salon Information</h2>

      <div className="space-y-3">
        <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-purple-500" /> Taboot Street Camp, Pune City</p>
        <p className="flex items-center gap-2"><FaPhoneAlt className="text-purple-500" /> +91 9067551556</p>
        <p className="flex items-center gap-2"><FaEnvelope className="text-purple-500" /> info@thenailhouse.com</p>
      </div>

      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-purple-500 hover:text-purple-400"><FaFacebook size={24} /></a>
        <a href="#" className="text-purple-500 hover:text-purple-400"><FaInstagram size={24} /></a>
        <a href="#" className="text-purple-500 hover:text-purple-400"><FaWhatsapp size={24} /></a>
      </div>

      
    </div>
  );
}
