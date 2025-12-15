'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Puzzle,
  Search,
  Users,
  Target,
  Briefcase,
  UserCheck,
  TrendingUp,
  Clock,
  Shield,
  CheckCircle,
  Star,
  Award,
  Lightbulb,
  Zap,
  Wind,
  Battery,
  Map,
  Leaf,
  Building,
  Cpu,
  Bot,
  Settings
} from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import StructuredData from '@/components/StructuredData';

export default function Services() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Search,
      title: "Executive Search",
      description: "C-suite and senior leadership recruitment for energy companies driving transformation and growth.",
      features: ["Board-level appointments", "CEO & CTO placement", "Succession planning", "Leadership assessment"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      timeline: "8-12 weeks",
      successRate: "92"
    },
    {
      icon: Users,
      title: "Permanent Placement",
      description: "Full-time recruitment across all levels, from graduate engineers to department heads.",
      features: ["Technical specialists", "Project managers", "Operations teams", "Graduate programs"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      timeline: "3-6 weeks",
      successRate: "87"
    },
    {
      icon: Clock,
      title: "Contract & Interim",
      description: "Flexible staffing solutions for project-based work and temporary leadership roles.",
      features: ["Project specialists", "Interim management", "Seasonal workforce", "Emergency cover"],
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
      timeline: "1-2 weeks",
      successRate: "95"
    },
    {
      icon: Lightbulb,
      title: "Talent Consulting",
      description: "Strategic workforce planning and talent strategy development for sustainable growth.",
      features: ["Workforce planning", "Salary benchmarking", "Market intelligence", "Talent mapping"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      timeline: "2-4 weeks",
      successRate: "100"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We dive deep into your business challenges, culture, and specific talent requirements.",
      icon: Target
    },
    {
      step: "02", 
      title: "Strategic Sourcing",
      description: "Leveraging our network and market intelligence to identify the perfect candidates.",
      icon: Search
    },
    {
      step: "03",
      title: "Assessment & Matching",
      description: "Rigorous evaluation process ensuring technical skills and cultural alignment.",
      icon: UserCheck
    },
    {
      step: "04",
      title: "Placement & Integration",
      description: "Seamless onboarding support and ongoing relationship management.",
      icon: CheckCircle
    }
  ];

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
              <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/services" className="text-blue-600 font-semibold">Services</Link>
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
                className="block px-4 py-3.5 text-slate-700 hover:text-blue-600 text-base rounded-lg hover:bg-slate-50 transition-colors min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="block px-4 py-3.5 text-blue-600 font-semibold text-base rounded-lg hover:bg-blue-50 transition-colors min-h-[44px] flex items-center"
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
        {/* Background Gradient - Blue focused for Services */}
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
              <linearGradient id="tribalGradient1Services" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#2563eb" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="tribalGradient2Services" x1="0%" y1="0%" x2="100%" y2="100%">
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
                stroke="url(#tribalGradient1Services)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-tribal-flow-1"
              />
              <path
                d="M-150,350 Q100,280 350,380 Q600,480 850,400 Q1100,320 1350,420 Q1600,520 1850,380"
                fill="none"
                stroke="url(#tribalGradient1Services)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-tribal-flow-2"
              />
              <path
                d="M-100,550 Q200,480 500,580 Q800,680 1100,600 Q1400,520 1700,620 Q2000,720 2300,550"
                fill="none"
                stroke="url(#tribalGradient1Services)"
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
                stroke="url(#tribalGradient2Services)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-tribal-flow-4"
              />
              <path
                d="M-200,300 Q50,380 300,320 Q550,260 800,340 Q1050,420 1300,360 Q1550,300 1800,380 Q2050,460 2300,300"
                fill="none"
                stroke="url(#tribalGradient2Services)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-tribal-flow-5"
              />
              <path
                d="M-150,500 Q100,580 400,520 Q700,460 1000,540 Q1300,620 1600,560 Q1900,500 2200,580"
                fill="none"
                stroke="url(#tribalGradient2Services)"
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
                stroke="url(#tribalGradient1Services)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeOpacity="0.75"
                className="animate-tribal-flow-7"
              />
              <path
                d="M-120,450 Q180,400 420,480 Q660,560 900,500 Q1140,440 1380,520 Q1620,600 1920,480"
                fill="none"
                stroke="url(#tribalGradient2Services)"
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
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-700 mb-6 md:mb-4 font-light px-4">
            Comprehensive recruitment solutions for renewable energy talent.
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            From executive search to strategic talent consulting, we help you build the right team across renewable energy, engineering, and technology sectors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 h-12 sm:h-auto min-h-[48px] w-full sm:w-auto group">
                Talk to a Consultant
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#our-process">
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 h-12 sm:h-auto min-h-[48px] w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                View Our Process
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-12 md:py-14 bg-gradient-to-b from-slate-50 via-slate-50/50 to-white relative overflow-hidden -mt-32 pt-32 sm:pt-36 md:pt-40">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-1/4 w-96 h-96 border-2 border-blue-300 rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 border-2 border-teal-300 rounded-full"></div>
                  </div>
                  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
              What We Offer
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive recruitment solutions designed to meet your unique talent needs across renewable energy, engineering, and technology sectors in the USA, UK, and Europe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {services.map((service, index) => {
              const gradientColors = [
                'from-teal-500 to-teal-600',
                'from-blue-500 to-blue-600',
                'from-blue-500 via-teal-500 to-teal-600',
                'from-teal-500 via-blue-500 to-blue-600'
              ];
              const iconBgColors = [
                'from-teal-50 to-teal-100',
                'from-blue-50 to-blue-100',
                'from-blue-50 via-teal-50 to-blue-50',
                'from-teal-50 via-blue-50 to-teal-50'
              ];
              const textColors = [
                'text-teal-600',
                'text-blue-600',
                'text-blue-600',
                'text-teal-600'
              ];
              
              return (
                <div key={index} className="group relative">
                  <div className="relative bg-white rounded-2xl p-0 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientColors[index]} rounded-t-2xl z-10`}></div>
                    
                    {/* Service Image */}
                    <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent`}></div>
                    </div>
                    
                    <div className="p-6 sm:p-8 mb-6 flex-1 flex flex-col">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${iconBgColors[index]} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className={`h-7 w-7 sm:h-8 sm:w-8 ${textColors[index]}`} />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{service.title}</h3>
                        <div className="text-xs sm:text-sm text-slate-500 flex items-center bg-slate-50 px-2 sm:px-3 py-1 rounded-full w-fit">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      {service.timeline}
                    </div>
                  </div>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6">
                        {service.description}
                      </p>
                  
                  {/* Features */}
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-2 sm:mb-3">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start sm:items-center text-xs sm:text-sm text-slate-600">
                              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5 sm:mt-0" />
                              <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                
                    {/* Decorative element */}
                    <div className="mt-auto pt-4 sm:pt-6 border-t border-slate-100">
                      <div className={`flex items-center ${textColors[index]} text-xs sm:text-sm font-semibold`}>
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Specialisms Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
              Market Specialisms
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Deep expertise across energy and infrastructure and supporting disciplines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Renewable Energy Specialisms */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-teal-100">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                <Leaf className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Renewable Energy</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <Battery className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Energy Storage</span>
                </li>
                <li className="flex items-start">
                  <Wind className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Wind – Onshore & Offshore</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Solar</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hydrogen</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>ESG</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Power Delivery</span>
                </li>
              </ul>
            </div>

            {/* Engineering */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Building className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Engineering</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <Settings className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automation & Controls</span>
                </li>
                <li className="flex items-start">
                  <Building className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Building Services</span>
                </li>
                <li className="flex items-start">
                  <Building className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Civil</span>
                </li>
                <li className="flex items-start">
                  <Cpu className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Data Centers</span>
                </li>
                <li className="flex items-start">
                  <Building className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Architecture</span>
                </li>
                <li className="flex items-start">
                  <Building className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Construction</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Geographies Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
              Geographies
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              We operate across key markets in the USA, UK, and Europe, connecting talent with opportunities where renewable energy innovation thrives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">USA</h3>
              <p className="text-slate-600">Comprehensive coverage across North American renewable energy markets.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">UK</h3>
              <p className="text-slate-600">Deep market knowledge and established networks across the United Kingdom.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Europe</h3>
              <p className="text-slate-600">Extensive reach across European markets, including Germany and beyond.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section id="our-process" className="py-10 sm:py-12 md:py-14 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 right-1/4 w-96 h-96 border-2 border-teal-300 rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 border-2 border-blue-300 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
              Our Process
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              A proven methodology that ensures we find the right candidate for your role, every time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {process.map((step, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    index === 0 ? 'from-teal-500 to-teal-600' :
                    index === 1 ? 'from-blue-500 to-blue-600' :
                    index === 2 ? 'from-blue-500 via-teal-500 to-teal-600' :
                    'from-teal-500 via-blue-500 to-blue-600'
                  } rounded-t-2xl`}></div>
                  
                  <div className="mb-6">
                    {/* Step number */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white font-bold text-base sm:text-lg group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 text-center">{step.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center">{step.description}</p>
                  </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Modern geometric pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white rotate-45"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border-2 border-white rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-white rotate-45"></div>
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="15%" y1="25%" x2="75%" y2="45%" stroke="white" strokeWidth="1.5" strokeDasharray="8,8" opacity="0.3"/>
            <line x1="75%" y1="45%" x2="35%" y2="75%" stroke="white" strokeWidth="1.5" strokeDasharray="8,8" opacity="0.3"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30 shadow-xl">
              <Users className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed mb-4 sm:mb-6 px-2">
            Ready to find the right talent?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8 px-4">
            Let's discuss how we can help you build your team with exceptional professionals.
          </p>
          <div className="mt-6 sm:mt-8 px-4">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 h-12 sm:h-auto min-h-[48px] w-full sm:w-auto border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 transition-all shadow-md hover:shadow-lg">
            Talk to a Consultant
                <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Recruitment Services',
          description: 'Comprehensive recruitment solutions for renewable energy talent. Executive search, permanent placement, contract recruitment, and talent consulting services.',
          provider: {
            '@type': 'ProfessionalService',
            name: 'Rectify',
            url: (typeof globalThis.process !== 'undefined' && globalThis.process.env?.NEXT_PUBLIC_SITE_URL) || 'https://rectifyinternational.com',
          },
          areaServed: ['US', 'GB', 'EU'],
          serviceType: [
            'Executive Search',
            'Permanent Placement',
            'Contract & Interim Recruitment',
            'Talent Consulting',
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Recruitment Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Executive Search',
                  description: 'C-suite and senior leadership recruitment for energy companies',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Permanent Placement',
                  description: 'Full-time recruitment across all levels',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Contract & Interim',
                  description: 'Flexible staffing solutions for project-based work',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Talent Consulting',
                  description: 'Strategic workforce planning and talent strategy development',
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}