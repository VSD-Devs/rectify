'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
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
  Leaf
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/rectify-logo.png" 
                alt="Rectify Logo" 
                className="h-20 w-auto" // Changed from h-8 to h-12
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-blue-600 font-semibold">Home</Link>
              <Link href="/services" className="text-slate-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</Link>
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
              <Link href="/" className="block px-3 py-2 text-blue-600 font-semibold">Home</Link>
              <Link href="/services" className="block px-3 py-2 text-slate-700 hover:text-blue-600">Services</Link>
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-1" style={{ marginTop: '20px', marginBottom: '-20px' }}> {/* Adjusted marginBottom to pull it up */}
            <img 
              src="/rectify-half-logo.png" 
              alt="Rectify logo element" 
              className="h-48 w-auto"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-2 leading-tight"> {/* Reduced bottom margin */}
            Your problem,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              we solve it.
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-700 mb-4 font-light">
            Sourcing the talent of tomorrow's future.
          </h2>
          
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            Experts in energy recruitment and consultancy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 group">
              Find Talent
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-slate-300 hover:bg-slate-50">
              Work With Us
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-teal-50/30 to-white relative overflow-hidden">
        {/* Puzzle piece decorations */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-300">
            <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-3 h-3 bg-blue-600 rounded-full absolute -top-1 -left-1"></div>
                <div className="w-3 h-3 bg-teal-600 rounded-full absolute -top-1 -right-1"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full absolute -bottom-1 -left-1"></div>
                <div className="w-3 h-3 bg-teal-400 rounded-full absolute -bottom-1 -right-1"></div>
                <div className="w-12 h-12 border-2 border-slate-300 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-slate-600" />
                </div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Solving change through{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                people.
              </span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-slate-600 leading-relaxed">
                At Rectify, we identify, source, and deliver business-critical talent to the world's most innovative industries. We are business consultants focused on solving today's biggest challenge: finding the right talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* People in Action Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professional team collaboration in modern office"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Floating puzzle pieces around image */}
              <div className="absolute -top-4 -left-4 w-12 h-12 opacity-30">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-400 animate-pulse">
                  <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-teal-400 animate-pulse delay-1000">
                  <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
                </svg>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Approach</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Building tomorrow's energy workforce, today
              </h3>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                We understand that behind every successful energy project is exceptional talent. Our consultants work closely with industry leaders to identify and place the professionals who will drive sustainable innovation forward.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Strategic Talent Mapping</h4>
                    <p className="text-slate-600">Identifying key players and emerging talent in renewable energy, oil & gas, and clean technology sectors.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Cultural Fit Assessment</h4>
                    <p className="text-slate-600">Ensuring candidates align with your company's mission and values for long-term success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Meet the problem solvers
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our consultants combine deep industry knowledge with proven recruitment expertise to solve your most complex talent challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Consultant 1 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Senior Energy Recruitment Consultant"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-1">Senior Consultants</h3>
                  <p className="text-slate-200">15+ years energy sector experience</p>
                </div>
              </div>
              
              {/* Floating puzzle piece */}
              <div className="absolute -top-3 -right-3 w-8 h-8 opacity-40 group-hover:opacity-60 transition-opacity">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-500 animate-pulse">
                  <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
                </svg>
              </div>
            </div>
            
            {/* Consultant 2 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Renewable Energy Specialist"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-1">Renewable Specialists</h3>
                  <p className="text-slate-200">Clean energy & sustainability focus</p>
                </div>
              </div>
              
              {/* Floating puzzle piece */}
              <div className="absolute -top-3 -right-3 w-8 h-8 opacity-40 group-hover:opacity-60 transition-opacity">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-teal-500 animate-pulse delay-500">
                  <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
                </svg>
              </div>
            </div>
            
            {/* Consultant 3 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Executive Search Consultant"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-1">Executive Search</h3>
                  <p className="text-slate-200">C-suite & leadership placement</p>
                </div>
              </div>
              
              {/* Floating puzzle piece */}
              <div className="absolute -top-3 -right-3 w-8 h-8 opacity-40 group-hover:opacity-60 transition-opacity">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-400 animate-pulse delay-1000">
                  <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                  <Target className="h-4 w-4 text-white" />
                </div>
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Success Stories</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Connecting talent with purpose-driven organizations
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-lg">85%</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Placement Success Rate</h4>
                      <p className="text-slate-600">Our candidates stay with their new companies long-term, creating lasting value for both parties.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-600 font-bold text-lg">30</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Days Average Placement</h4>
                      <p className="text-slate-600">Faster time-to-hire without compromising on quality or cultural fit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Successful energy professionals in modern workplace"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
              </div>
              
              {/* Success metrics overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">500+ Placements</p>
                    <p className="text-sm text-slate-600">Across energy sectors</p>
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
      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Puzzle piece network */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-16 h-16">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
              <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
            </svg>
          </div>
          <div className="absolute top-40 right-32 w-20 h-20">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
              <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
            </svg>
          </div>
          <div className="absolute bottom-32 left-32 w-12 h-12">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
              <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
            </svg>
          </div>
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="20%" y1="30%" x2="70%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="5,5" opacity="0.3"/>
            <line x1="70%" y1="50%" x2="40%" y2="80%" stroke="white" strokeWidth="1" strokeDasharray="5,5" opacity="0.3"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Leaf className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <blockquote className="text-3xl md:text-4xl font-light text-white leading-relaxed">
            "Shaping the future of energy by building a sustainable tomorrow through human capital."
          </blockquote>
        </div>
      </section>

      {/* Why Rectify Section - Flowing Design */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Background puzzle elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-24 h-24">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-200">
              <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-teal-200">
              <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Rectify?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>
          
          {/* Flowing layout instead of cards */}
          <div className="space-y-24">
            {/* First feature - Left aligned */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 transform rotate-3 hover:rotate-6 transition-transform duration-300">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Deep Industry Expertise
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Specialized knowledge in energy sector recruitment with deep understanding of industry challenges and opportunities. We don't just find candidates—we solve talent puzzles.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="w-64 h-64 mx-auto">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.1"/>
                        </linearGradient>
                      </defs>
                      <path d="M40,40 L100,40 C110,30 130,30 140,40 L160,40 L160,100 C170,110 170,130 160,140 L160,160 L100,160 C90,170 70,170 60,160 L40,160 L40,100 C30,90 30,70 40,80 Z" fill="url(#grad1)" className="animate-pulse"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Second feature - Right aligned */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3 hover:-rotate-6 transition-transform duration-300">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Business-Driven Recruitment
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Strategic approach to talent acquisition that aligns with your business objectives and growth plans. Every piece fits perfectly into your organizational puzzle.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="w-64 h-64 mx-auto">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#0D9488" stopOpacity="0.1"/>
                        </linearGradient>
                      </defs>
                      <path d="M40,40 L100,40 C110,30 130,30 140,40 L160,40 L160,100 C170,110 170,130 160,140 L160,160 L100,160 C90,170 70,170 60,160 L40,160 L40,100 C30,90 30,70 40,80 Z" fill="url(#grad2)" className="animate-pulse delay-1000"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Third feature - Left aligned */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6 transform rotate-2 hover:rotate-4 transition-transform duration-300">
                    <Leaf className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Sustainable Talent Solutions
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Long-term talent strategies focused on building sustainable teams for the future of energy. We complete the picture for tomorrow's workforce.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="w-64 h-64 mx-auto">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
                          <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.2"/>
                          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.1"/>
                        </linearGradient>
                      </defs>
                      <path d="M40,40 L100,40 C110,30 130,30 140,40 L160,40 L160,100 C170,110 170,130 160,140 L160,160 L100,160 C90,170 70,170 60,160 L40,160 L40,100 C30,90 30,70 40,80 Z" fill="url(#grad3)" className="animate-pulse delay-2000"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-teal-50/50 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-8 right-8 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-300">
            <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
          </svg>
        </div>
        <div className="absolute bottom-8 left-8 w-16 h-16 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-teal-300">
            <path d="M20,20 L50,20 C55,15 65,15 70,20 L80,20 L80,50 C85,55 85,65 80,70 L80,80 L50,80 C45,85 35,85 30,80 L20,80 L20,50 C15,45 15,35 20,30 Z"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Puzzle className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Ready to solve your recruitment challenge?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Let's connect the right talent with your energy projects. Our consultants are ready to help you build tomorrow's workforce today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 group shadow-lg">
                  Talk to a Consultant
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-slate-300 hover:bg-slate-50 shadow-lg">
                  View Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}