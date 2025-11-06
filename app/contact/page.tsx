'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Menu,
  X,
  Send,
  Loader2,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { toast } from 'sonner';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send enquiry');
      }

      toast.success('Thank you for your enquiry!', {
        description: 'We\'ll get back to you within 24 hours.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send enquiry', {
        description: 'Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/services" className="text-slate-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/contact" className="text-blue-600 font-semibold">Contact</Link>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Talk to a Consultant
                </Button>
              </Link>
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
                className="block px-4 py-3.5 text-slate-700 hover:text-blue-600 text-base rounded-lg hover:bg-slate-50 transition-colors min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="block px-4 py-3.5 text-slate-700 hover:text-blue-600 text-base rounded-lg hover:bg-slate-50 transition-colors min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3.5 text-blue-600 font-semibold text-base rounded-lg hover:bg-blue-50 transition-colors min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-semibold min-h-[48px]">
                    Talk to a Consultant
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient - Blue focused for Contact */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-blue-50 to-slate-50">
        </div>
        
        {/* Gradient fade to blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>

        {/* Animated Tribal Pattern Background */}
        <div className="absolute inset-0 opacity-[0.15] overflow-hidden">
          <svg 
            className="absolute inset-0 w-full h-full translate-y-12" 
            viewBox="0 0 1200 800" 
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="tribalGradient1Contact" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#2563eb" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="tribalGradient2Contact" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#4f46e5" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            
            {/* Flowing Tribal Lines - Layer 1 */}
            <g className="tribal-layer-1">
              <path
                d="M-200,150 Q50,80 250,180 Q450,280 650,200 Q850,120 1050,220 Q1250,320 1450,180 Q1650,40 1850,150"
                fill="none"
                stroke="url(#tribalGradient1Contact)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-tribal-flow-1"
              />
              <path
                d="M-150,350 Q100,280 350,380 Q600,480 850,400 Q1100,320 1350,420 Q1600,520 1850,380"
                fill="none"
                stroke="url(#tribalGradient1Contact)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-tribal-flow-2"
              />
              <path
                d="M-100,550 Q200,480 500,580 Q800,680 1100,600 Q1400,520 1700,620 Q2000,720 2300,550"
                fill="none"
                stroke="url(#tribalGradient1Contact)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-tribal-flow-3"
              />
            </g>
            
            {/* Flowing Tribal Lines - Layer 2 */}
            <g className="tribal-layer-2">
              <path
                d="M-250,100 Q-50,180 150,120 Q350,60 550,140 Q750,220 950,160 Q1150,100 1350,180 Q1550,260 1750,120"
                fill="none"
                stroke="url(#tribalGradient2Contact)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-tribal-flow-4"
              />
              <path
                d="M-200,300 Q50,380 300,320 Q550,260 800,340 Q1050,420 1300,360 Q1550,300 1800,380 Q2050,460 2300,300"
                fill="none"
                stroke="url(#tribalGradient2Contact)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-tribal-flow-5"
              />
              <path
                d="M-150,500 Q100,580 400,520 Q700,460 1000,540 Q1300,620 1600,560 Q1900,500 2200,580"
                fill="none"
                stroke="url(#tribalGradient2Contact)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-tribal-flow-6"
              />
            </g>
            
            {/* Additional flowing lines for depth */}
            <g className="tribal-layer-3">
              <path
                d="M-180,250 Q80,200 280,280 Q480,360 680,300 Q880,240 1080,320 Q1280,400 1480,280"
                fill="none"
                stroke="url(#tribalGradient1Contact)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeOpacity="0.75"
                className="animate-tribal-flow-7"
              />
              <path
                d="M-120,450 Q180,400 420,480 Q660,560 900,500 Q1140,440 1380,520 Q1620,600 1920,480"
                fill="none"
                stroke="url(#tribalGradient2Contact)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeOpacity="0.7"
                className="animate-tribal-flow-8"
              />
            </g>
            
            {/* Decorative Tribal Elements */}
            <g className="tribal-decorative">
              <circle cx="200" cy="300" r="4" fill="#4f46e5" opacity="0.5" className="animate-tribal-pulse-1" />
              <circle cx="600" cy="200" r="3.5" fill="#2563eb" opacity="0.5" className="animate-tribal-pulse-2" />
              <circle cx="1000" cy="400" r="4" fill="#06b6d4" opacity="0.5" className="animate-tribal-pulse-3" />
              <circle cx="400" cy="600" r="3.5" fill="#2563eb" opacity="0.5" className="animate-tribal-pulse-4" />
              <circle cx="800" cy="500" r="4" fill="#4f46e5" opacity="0.5" className="animate-tribal-pulse-5" />
              <circle cx="1200" cy="250" r="3" fill="#06b6d4" opacity="0.5" className="animate-tribal-pulse-6" />
            </g>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-0">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-3 md:mb-2 leading-[1.1] md:leading-tight px-2">
            Let's{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-700 mb-4 font-light">
            Ready to find the right talent for your team?
          </h2>
          
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            Fill out the form below and our recruitment consultants will be in touch to discuss your requirements.
          </p>
        </div>

        {/* Scroll to form arrow */}
        <button
          onClick={scrollToForm}
          className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group z-20"
          aria-label="Scroll to contact form"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600 border-2 border-blue-700 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all group-hover:bg-blue-700 group-hover:scale-110">
            <ChevronDown className="h-7 w-7 md:h-8 md:w-8 text-white transition-colors" />
          </div>
        </button>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden -mt-32 pt-32 sm:pt-36 md:pt-40">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80" 
            alt=""
            className="w-full h-full object-cover opacity-[0.03]"
            aria-hidden="true"
          />
        </div>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 right-1/4 w-96 h-96 border-2 border-teal-300 rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 border-2 border-blue-300 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-3">Send us a Message</h2>
              <p className="text-sm sm:text-base text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors"
                  placeholder="Enter your company name (optional)"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="block w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your talent challenges and how we can help..."
                  required
                ></textarea>
              </div>
              
              <div className="text-center pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold group transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}