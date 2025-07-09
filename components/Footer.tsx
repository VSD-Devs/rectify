'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="/rectify-logo.png" alt="Rectify Logo" className="h-12" />
            <p className="text-slate-400 text-sm">
              Solving change through people. Experts in energy recruitment and consultancy.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/sectors" className="hover:text-white transition-colors">Sectors</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center space-x-2"><span>Email:</span> <a href="mailto:info@rectify.com" className="hover:text-white">info@rectify.com</a></li>
              <li className="flex items-center space-x-2"><span>Phone:</span> <a href="tel:+44123456789" className="hover:text-white">+44 123 456 789</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-slate-400 mb-4">Subscribe to our newsletter for the latest industry insights.</p>
            <form className="flex">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-800 border-slate-700 text-white rounded-r-none focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-l-none">
                <ArrowRight size={20} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Rectify. All Rights Reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built by <a href="http://www.devora.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4">Devora</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 