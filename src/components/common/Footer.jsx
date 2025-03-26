
import { Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-6 w-6" />
              <span className="font-bold text-lg">The Nail House</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your destination for premium nail care and beauty services.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="text-sm hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday: 9am - 8pm</li>
              <li>Saturday: 9am - 6pm</li>
              <li>Sunday: 10am - 5pm</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Address: Taboot Street, Camp, pune 411001</li>
              
              <li>Phone: +91 9067551882 </li>
              <li>Email: info@thenailhouse.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; The Nail House. All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
  }
  