'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { toast } from 'sonner';
import { 
  ArrowRight, 
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Puzzle,
  Target,
  Users,
  Leaf,
  Upload
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cv: null as File | null,
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'cv' && files && files[0]) {
      const file = files[0];
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        toast.error('File too large', {
          description: 'Please upload a file smaller than 10MB.',
        });
        return;
      }
      setFormData({ ...formData, cv: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmitCv = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.cv) {
      toast.error('Missing information', {
        description: 'Please fill in all required fields and upload your CV.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const submitFormData = new FormData();
      submitFormData.append('name', formData.name);
      submitFormData.append('email', formData.email);
      if (formData.phone) {
        submitFormData.append('phone', formData.phone);
      }
      submitFormData.append('cv', formData.cv);

      const response = await fetch('/api/submit-cv', {
        method: 'POST',
        body: submitFormData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit CV');
      }

      toast.success('CV submitted successfully', {
        description: 'Thank you for your submission. We will be in touch soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        cv: null,
      });
      setIsCvModalOpen(false);
    } catch (error) {
      toast.error('Error', {
        description: error instanceof Error ? error.message : 'Failed to submit CV. Please try again.',
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
            <div className="flex items-center">
              <Logo />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-blue-600 font-semibold">Home</Link>
              <Link href="/services" className="text-slate-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</Link>
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
                className="block px-4 py-3.5 text-blue-600 font-semibold text-base rounded-lg hover:bg-blue-50 transition-colors min-h-[44px] flex items-center"
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
                className="block px-4 py-3.5 text-slate-700 hover:text-blue-600 text-base rounded-lg hover:bg-slate-50 transition-colors min-h-[44px] flex items-center"
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
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-teal-50">
        </div>
        
        {/* Gradient fade to blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none"></div>

        {/* Animated Tribal Pattern Background */}
        <div className="absolute inset-0 opacity-[0.15] overflow-hidden">
          <svg 
            className="absolute inset-0 w-full h-full translate-y-12" 
            viewBox="0 0 1200 800" 
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="tribalGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0d9488" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="tribalGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0d9488" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#2563eb" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            
            {/* Flowing Tribal Lines - Layer 1 */}
            <g className="tribal-layer-1">
              <path
                d="M-200,150 Q50,80 250,180 Q450,280 650,200 Q850,120 1050,220 Q1250,320 1450,180 Q1650,40 1850,150"
                fill="none"
                stroke="url(#tribalGradient1)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-tribal-flow-1"
              />
              <path
                d="M-150,350 Q100,280 350,380 Q600,480 850,400 Q1100,320 1350,420 Q1600,520 1850,380"
                fill="none"
                stroke="url(#tribalGradient1)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-tribal-flow-2"
              />
              <path
                d="M-100,550 Q200,480 500,580 Q800,680 1100,600 Q1400,520 1700,620 Q2000,720 2300,550"
                fill="none"
                stroke="url(#tribalGradient1)"
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
                stroke="url(#tribalGradient2)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-tribal-flow-4"
              />
              <path
                d="M-200,300 Q50,380 300,320 Q550,260 800,340 Q1050,420 1300,360 Q1550,300 1800,380 Q2050,460 2300,300"
                fill="none"
                stroke="url(#tribalGradient2)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-tribal-flow-5"
              />
              <path
                d="M-150,500 Q100,580 400,520 Q700,460 1000,540 Q1300,620 1600,560 Q1900,500 2200,580"
                fill="none"
                stroke="url(#tribalGradient2)"
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
                stroke="url(#tribalGradient1)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeOpacity="0.75"
                className="animate-tribal-flow-7"
              />
              <path
                d="M-120,450 Q180,400 420,480 Q660,560 900,500 Q1140,440 1380,520 Q1620,600 1920,480"
                fill="none"
                stroke="url(#tribalGradient2)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeOpacity="0.7"
                className="animate-tribal-flow-8"
              />
            </g>
            
            {/* Decorative Tribal Elements */}
            <g className="tribal-decorative">
              <circle cx="200" cy="300" r="4" fill="#2563eb" opacity="0.5" className="animate-tribal-pulse-1" />
              <circle cx="600" cy="200" r="3.5" fill="#0d9488" opacity="0.5" className="animate-tribal-pulse-2" />
              <circle cx="1000" cy="400" r="4" fill="#2563eb" opacity="0.5" className="animate-tribal-pulse-3" />
              <circle cx="400" cy="600" r="3.5" fill="#0d9488" opacity="0.5" className="animate-tribal-pulse-4" />
              <circle cx="800" cy="500" r="4" fill="#2563eb" opacity="0.5" className="animate-tribal-pulse-5" />
              <circle cx="1200" cy="250" r="3" fill="#0d9488" opacity="0.5" className="animate-tribal-pulse-6" />
            </g>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-16 md:-mt-20">
          <div className="flex justify-center mb-4 sm:mb-3 md:mb-2">
            <img 
              src="/rectify-half-logo.png" 
              alt="Rectify logo element" 
              className="h-28 sm:h-36 md:h-44 lg:h-48 w-auto"
            />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-3 sm:mb-2 md:mb-2 leading-[1.1] md:leading-tight px-2">
            Connecting{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              talent with opportunity
            </span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 mb-5 sm:mb-4 md:mb-3 font-light px-4">
            Sourcing tomorrow's energy sector talent today.
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-7 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            Specialists in energy recruitment and talent acquisition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 h-12 sm:h-auto min-h-[48px] w-full sm:w-auto group"
              onClick={() => setIsCvModalOpen(true)}
            >
              Submit CV
              <Upload className="ml-2 h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
            </Button>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 h-12 sm:h-auto min-h-[48px] w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                Work With Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Solving Change Banner */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80" 
            alt=""
            className="w-full h-full object-cover opacity-20"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Modern geometric pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="hidden sm:block absolute top-20 left-20 w-32 h-32 border-2 border-white rotate-45"></div>
          <div className="hidden md:block absolute top-40 right-32 w-24 h-24 border-2 border-white rotate-45"></div>
          <div className="hidden lg:block absolute bottom-32 left-32 w-40 h-40 border-2 border-white rotate-45"></div>
          <div className="hidden sm:block absolute bottom-20 right-20 w-28 h-28 border-2 border-white rotate-45"></div>
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full hidden md:block">
            <line x1="15%" y1="25%" x2="75%" y2="45%" stroke="white" strokeWidth="1.5" strokeDasharray="8,8" opacity="0.3"/>
            <line x1="75%" y1="45%" x2="35%" y2="75%" stroke="white" strokeWidth="1.5" strokeDasharray="8,8" opacity="0.3"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed mb-3 sm:mb-4 px-2">
            Solving change through people.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-4 sm:mb-5 md:mb-6 px-4">
            At Rectify, we identify, source, and deliver business-critical talent to the world's most innovative industries. We are business consultants focused on solving today's biggest challenge: finding the right talent.
          </p>
          <div className="mt-4 sm:mt-5 md:mt-6 px-4">
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 h-12 sm:h-auto min-h-[48px] w-full sm:w-auto border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 transition-all shadow-md hover:shadow-lg">
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-1/4 w-96 h-96 border-2 border-blue-300 rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 border-2 border-teal-300 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-5 md:mb-6 px-4">
              Our Approach
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              We understand that behind every successful project is exceptional talent. Our consultants work closely with industry leaders to identify and place the professionals who will drive innovation forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="group relative">
              <div className="relative bg-white rounded-2xl p-0 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-t-2xl z-10"></div>
                
                {/* Image */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                    alt="Strategic talent mapping"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent"></div>
                </div>
                
                <div className="p-6 sm:p-8 mb-6 flex-1 flex flex-col">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-7 w-7 sm:h-8 sm:w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Strategic Talent Mapping</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Identifying key players and emerging talent across industries to match your specific needs and organisational goals.
                  </p>
                </div>
                
                {/* Decorative element */}
                <div className="mt-auto px-6 sm:px-8 pb-6 sm:pb-8 pt-4 sm:pt-6 border-t border-slate-100">
                  <div className="flex items-center text-teal-600 text-sm font-semibold">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="group relative">
              <div className="relative bg-white rounded-2xl p-0 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl z-10"></div>
                
                {/* Image */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                    alt="Cultural fit assessment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent"></div>
                </div>
                
                <div className="p-6 sm:p-8 mb-6 flex-1 flex flex-col">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Cultural Fit Assessment</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Ensuring candidates align with your company's mission and values for long-term success and team cohesion.
                  </p>
                </div>
                
                {/* Decorative element */}
                <div className="mt-auto px-6 sm:px-8 pb-6 sm:pb-8 pt-4 sm:pt-6 border-t border-slate-100">
                  <div className="flex items-center text-blue-600 text-sm font-semibold">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="group relative">
              <div className="relative bg-white rounded-2xl p-0 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-teal-600 rounded-t-2xl z-10"></div>
                
                {/* Image */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80" 
                    alt="Business-driven solutions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent"></div>
                </div>
                
                <div className="p-6 sm:p-8 mb-6 flex-1 flex flex-col">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Puzzle className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Business-Driven Solutions</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Strategic approach that aligns with your business objectives and growth plans for sustainable success.
                  </p>
                </div>
                
                {/* Decorative element */}
                <div className="mt-auto px-6 sm:px-8 pb-6 sm:pb-8 pt-4 sm:pt-6 border-t border-slate-100">
                  <div className="flex items-center text-blue-600 text-sm font-semibold">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Modern geometric pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="hidden sm:block absolute top-20 left-20 w-32 h-32 border-2 border-white rotate-45"></div>
          <div className="hidden md:block absolute top-40 right-32 w-24 h-24 border-2 border-white rotate-45"></div>
          <div className="hidden lg:block absolute bottom-32 left-32 w-40 h-40 border-2 border-white rotate-45"></div>
          <div className="hidden sm:block absolute bottom-20 right-20 w-28 h-28 border-2 border-white rotate-45"></div>
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full hidden md:block">
            <line x1="15%" y1="25%" x2="75%" y2="45%" stroke="white" strokeWidth="1.5" strokeDasharray="8,8" opacity="0.3"/>
            <line x1="75%" y1="45%" x2="35%" y2="75%" stroke="white" strokeWidth="1.5" strokeDasharray="8,8" opacity="0.3"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30 shadow-xl">
              <Leaf className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
            </div>
          </div>
          
          <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-relaxed px-4">
            "Shaping the future of energy by building a sustainable tomorrow through human capital."
          </blockquote>
        </div>
      </section>

      {/* CV Submission Modal */}
      <Dialog open={isCvModalOpen} onOpenChange={setIsCvModalOpen}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-slate-900">Submit Your CV</DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              Upload your CV and we'll get back to you with opportunities that match your skills.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitCv} className="space-y-4 sm:space-y-5 mt-4 sm:mt-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+44 20 1234 5678"
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cv">Upload CV *</Label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="cv"
                  className="flex flex-col items-center justify-center w-full h-28 sm:h-32 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors min-h-[112px] touch-manipulation"
                >
                  <div className="flex flex-col items-center justify-center pt-4 sm:pt-5 pb-4 sm:pb-6 px-4">
                    <Upload className="w-7 h-7 sm:w-8 sm:h-8 mb-2 text-slate-400" />
                    <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-slate-500 text-center">
                      <span className="font-semibold">Tap to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-slate-500 text-center">PDF, DOC, DOCX (MAX. 10MB)</p>
                  </div>
                  <input
                    id="cv"
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleInputChange}
                    className="hidden"
                    required
                  />
                </label>
              </div>
              {formData.cv && (
                <p className="text-sm text-slate-600 mt-2 break-words">
                  Selected: {formData.cv.name}
                </p>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsCvModalOpen(false)}
                className="flex-1 h-12 sm:h-auto min-h-[48px] text-base"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 h-12 sm:h-auto min-h-[48px] text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit CV'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}