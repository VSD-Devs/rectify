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
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';

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
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      timeline: "8-12 weeks",
      successRate: "92"
    },
    {
      icon: Users,
      title: "Permanent Placement",
      description: "Full-time recruitment across all levels, from graduate engineers to department heads.",
      features: ["Technical specialists", "Project managers", "Operations teams", "Graduate programs"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      timeline: "3-6 weeks",
      successRate: "87"
    },
    {
      icon: Clock,
      title: "Contract & Interim",
      description: "Flexible staffing solutions for project-based work and temporary leadership roles.",
      features: ["Project specialists", "Interim management", "Seasonal workforce", "Emergency cover"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      timeline: "1-2 weeks",
      successRate: "95"
    },
    {
      icon: Lightbulb,
      title: "Talent Consulting",
      description: "Strategic workforce planning and talent strategy development for sustainable growth.",
      features: ["Workforce planning", "Salary benchmarking", "Market intelligence", "Talent mapping"],
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
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
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Logo />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-blue-600">Home</Link>
              <Link href="/services" className="text-blue-600 font-semibold">Services</Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-600">Contact</Link>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Talk to a Consultant
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Home</Link>
              <Link href="/services" className="block px-3 py-2 text-blue-600 font-semibold">Services</Link>
              <Link href="/contact" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Contact</Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Talk to a Consultant
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50">
          <div className="absolute inset-0">
            {/* Floating puzzle pieces */}
            <div className="absolute top-20 left-10 w-16 h-16 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-400 animate-pulse">
                <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
              </svg>
            </div>
            <div className="absolute top-40 right-20 w-20 h-20 opacity-15">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-teal-400 animate-pulse delay-1000">
                <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Briefcase className="h-16 w-16 text-blue-600 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full animate-bounce"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Comprehensive recruitment solutions designed to solve your unique talent challenges. From executive search to strategic consulting, we have the expertise to complete your team puzzle.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                    <div className="text-sm text-slate-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.timeline}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:shadow-lg transition-all">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                {/* Floating puzzle piece */}
                <div className="absolute -top-2 -right-2 w-8 h-8 opacity-30 group-hover:opacity-50 transition-opacity">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-teal-400 animate-pulse">
                    <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures we find the perfect piece for your puzzle, every time.
            </p>
          </div>
          
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center relative z-10">
                    {/* Step number */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-6 w-6 text-slate-600" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Puzzle piece decoration */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 opacity-30">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-400 animate-pulse">
                      <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Why Choose Rectify</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Solving recruitment challenges with precision and expertise
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Guaranteed Results</h4>
                    <p className="text-slate-600">6-month replacement guarantee on all permanent placements, ensuring long-term success.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Market Intelligence</h4>
                    <p className="text-slate-600">Real-time salary data and market insights to make informed hiring decisions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Dedicated Partnership</h4>
                    <p className="text-slate-600">Assigned consultant who becomes an extension of your team, understanding your culture and needs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professional consultation meeting"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">15+ Years</p>
                    <p className="text-sm text-slate-600">Industry Experience</p>
                  </div>
                </div>
              </div>
              
              {/* Floating puzzle pieces */}
              <div className="absolute -top-4 -right-4 w-10 h-10 opacity-30">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-teal-400 animate-pulse">
                  <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Ready to solve your recruitment challenge?
          </h2>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 group">
            Talk to a Consultant
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}