'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavigationProps {
  activePage?: 'home' | 'services' | 'contact';
}

export default function Navigation({ activePage = 'home' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${activePage === 'home' ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'} transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`${activePage === 'services' ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'} transition-colors`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`${activePage === 'contact' ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'} transition-colors`}
            >
              Contact
            </Link>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Talk to a Consultant
              </Button>
            </Link>
            <a href="tel:+447399836007" className="text-slate-700 hover:text-blue-600 transition-colors">
              Call +44 7399 836007
            </a>
          </div>

          {/* Mobile menu button - larger touch target */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-11 w-11 min-h-[44px] min-w-[44px] p-0 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - improved spacing and touch targets */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              href="/"
              className={`block px-4 py-3.5 ${activePage === 'home' ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'} text-base rounded-lg hover:bg-slate-50 transition-colors min-h-[44px] flex items-center`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`block px-4 py-3.5 ${activePage === 'services' ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'} text-base rounded-lg hover:bg-slate-50 transition-colors min-h-[44px] flex items-center`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`block px-4 py-3.5 ${activePage === 'contact' ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'} text-base rounded-lg hover:bg-slate-50 transition-colors min-h-[44px] flex items-center`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className="pt-2 space-y-3">
              <Link href="/contact" onClick={closeMenu}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-semibold min-h-[48px]">
                  Talk to a Consultant
                </Button>
              </Link>
              <a
                href="tel:+447399836007"
                className="block px-4 py-3.5 text-slate-700 hover:text-blue-600 text-base rounded-lg hover:bg-slate-50 transition-colors min-h-[44px] flex items-center"
                onClick={closeMenu}
              >
                Call +44 7399 836007
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
