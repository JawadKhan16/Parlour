"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-black shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
      <div>
  {/* Logo */}
      <h1 className="text-white text-2xl font-bold">Nail House</h1>
       <p className="text-sm text-white underline mt-1">By Aisha Khan</p>
      </div>

        {/* Right Section Menu*/}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white text-lg font-semibold">
          <li className="hover:text-gray-300"><Link href="/">Home</Link></li>
          <li className="hover:text-gray-300"><Link href="/ServicePage">Services</Link></li>
          <li className="hover:text-gray-300"><Link href="/AboutPage">About</Link></li>
          <li className="hover:text-gray-300"><Link href="/ContactPage">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 bg-black py-4 text-white text-lg font-semibold">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/ServicePage" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link href="/AboutPage" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/ContactPage" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
