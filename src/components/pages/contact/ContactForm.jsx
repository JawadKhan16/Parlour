'use client'

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) =>
     {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xqaawlro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSuccessMessage(''), 5000);
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Send a Message</h2>

      {successMessage && (
        <p className="bg-green-600 text-white text-center p-2 rounded mb-4">{successMessage}</p>
      )}

      <div className="mb-4">
        <input 
          type="text" name="name" placeholder="Your Name"
          value={formData.name} onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-900 text-white rounded border border-gray-700 focus:outline-none focus:border-purple-500"
          required
        />
      </div>

      <div className="mb-4">
        <input 
          type="email" name="email" placeholder="Your Email"
          value={formData.email} onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-900 text-white rounded border border-gray-700 focus:outline-none focus:border-purple-500"
          required
        />
      </div>

      <div className="mb-4">
        <input 
          type="text" name="subject" placeholder="Subject"
          value={formData.subject} onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-900 text-white rounded border border-gray-700 focus:outline-none focus:border-purple-500"
          required
        />
      </div>

      <div className="mb-4">
        <textarea 
          name="message" placeholder="Your Message" rows="4"
          value={formData.message} onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-900 text-white rounded border border-gray-700 focus:outline-none focus:border-purple-500"
          required
        />
      </div>

      <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg">
        Send Message
      </button>
    </form>
  );
}
