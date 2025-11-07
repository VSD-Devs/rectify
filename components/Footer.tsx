'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo noLink size="large" />
            <p className="text-slate-600 text-sm leading-relaxed">
              Specialists in renewable energy recruitment and talent acquisition across engineering and technology sectors. Operating in the USA, UK, and Europe.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors"><Instagram size={20} /></Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@rectifyinternational.com" className="hover:text-blue-600 transition-colors">info@rectifyinternational.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <a href="tel:+44123456789" className="hover:text-blue-600 transition-colors">+44 123 456 789</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 mt-12 pt-8">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 justify-center sm:justify-start">
            <Link href="/privacy" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-400">|</span>
            <Link href="/terms" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-400">|</span>
            <Link href="/cookies" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
              Cookie Policy
            </Link>
            <span className="text-slate-400">|</span>
            <button
              onClick={() => {
                localStorage.removeItem('cookieConsent');
                window.location.reload();
              }}
              className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Manage Cookies
            </button>
          </div>
          
          {/* Copyright and Credits */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-slate-500 mb-4 sm:mb-0">
              &copy; {new Date().getFullYear()} Rectify. All Rights Reserved.
            </p>
            <p className="text-sm text-slate-500">
              Built by <a href="http://www.devora.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 underline underline-offset-4 transition-colors">Devora</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 