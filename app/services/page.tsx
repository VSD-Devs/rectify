'use client';

import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Users,
  Search,
  Map,
  Award,
  CheckCircle,
  Leaf,
  Battery,
  Wind,
  Zap,
  Building,
  Settings,
  Briefcase,
  Server,
  Bot,
  Train,
  Droplets
} from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import StructuredData from '@/components/StructuredData';

const PARTNER_APPLICATION_URL =
  'https://form.typeform.com/to/EaW2PZUK?typeform-source=rectifyinternational.com';

export default function Services() {
  const offerings = [
    {
      icon: Users,
      title: "Strategic Talent Partnerships",
      description: "For companies with multiple hiring needs, urgent project delivery requirements, or ongoing specialist recruitment challenges.",
      features: [
        "Annual or project-based hiring support",
        "Priority access to specialist talent",
        "Structured delivery process",
        "Long-term recruitment partnership"
      ]
    },
    {
      icon: Search,
      title: "Specialist Search & Shortlist Delivery",
      description: "Targeted recruitment for hard-to-find technical, engineering and project professionals across niche markets.",
      features: [
        "Passive candidate engagement",
        "Technical qualification",
        "Shortlist delivery",
        "Interview and feedback support"
      ]
    },
    {
      icon: Map,
      title: "Market Mapping & Talent Intelligence",
      description: "A clear view of the market before hiring, helping clients understand salary expectations, competitor talent pools and candidate availability.",
      features: [
        "Competitor mapping",
        "Salary benchmarking",
        "Candidate availability",
        "Location and skill-gap analysis"
      ]
    },
    {
      icon: Award,
      title: "Executive & Leadership Search",
      description: "Senior-level search for companies hiring leaders across energy, infrastructure, engineering and mission-critical environments.",
      features: [
        "Senior technical leaders",
        "Project directors",
        "Department heads",
        "Country and regional leadership"
      ]
    }
  ];

  const marketSpecialisms = [
    {
      title: 'Renewable Energy',
      icon: Leaf,
      cardClass: 'from-teal-50 to-blue-50 border-teal-100',
      iconClass: 'from-teal-500 to-teal-600',
      itemIconClass: 'text-teal-600',
      items: [
        { icon: Battery, label: 'Energy Storage' },
        { icon: Wind, label: 'Wind – Onshore & Offshore' },
        { icon: Zap, label: 'Solar' },
        { icon: Leaf, label: 'Hydrogen' },
        { icon: Leaf, label: 'ESG & Sustainability' },
        { icon: Zap, label: 'Power Delivery' },
      ],
    },
    {
      title: 'Engineering & Built Environment',
      icon: Building,
      cardClass: 'from-blue-50 to-indigo-50 border-blue-100',
      iconClass: 'from-blue-500 to-blue-600',
      itemIconClass: 'text-blue-600',
      items: [
        { icon: Settings, label: 'Automation & Controls' },
        { icon: Building, label: 'Building Services / MEP' },
        { icon: Building, label: 'Civil & Structural Engineering' },
        { icon: Building, label: 'Architecture' },
        { icon: Briefcase, label: 'Construction & Project Delivery' },
        { icon: Zap, label: 'Electrical Engineering' },
      ],
    },
    {
      title: 'Data Centres / Mission Critical',
      icon: Server,
      cardClass: 'from-indigo-50 to-violet-50 border-indigo-100',
      iconClass: 'from-indigo-500 to-indigo-600',
      itemIconClass: 'text-indigo-600',
      items: [
        { icon: CheckCircle, label: 'QA/QC' },
        { icon: Settings, label: 'Commissioning' },
        { icon: Zap, label: 'Electrical Infrastructure' },
        { icon: Settings, label: 'Mechanical / HVAC / Cooling' },
        { icon: Bot, label: 'BMS, Controls & Automation' },
        { icon: Briefcase, label: 'Construction / Project Management' },
      ],
    },
    {
      title: 'Infrastructure',
      icon: Map,
      cardClass: 'from-slate-50 to-blue-50 border-slate-200',
      iconClass: 'from-slate-600 to-blue-600',
      itemIconClass: 'text-slate-600',
      items: [
        { icon: Zap, label: 'Power & Utilities' },
        { icon: Zap, label: 'Grid Connection / Interconnection' },
        { icon: Zap, label: 'Transmission & Distribution' },
        { icon: Train, label: 'Rail & Transport Infrastructure' },
        { icon: Droplets, label: 'Water & Environmental Infrastructure' },
        { icon: Briefcase, label: 'Major Projects / Programme Delivery' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation activePage="services" />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-blue-50 to-slate-50" />
        
        {/* Gradient fade to blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />

        {/* Animated Tribal Pattern Background */}
        <div className="absolute inset-0 opacity-[0.13] overflow-hidden">
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
            
            {/* Flowing Tribal Lines */}
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
            
            {/* Decorative dots */}
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4 leading-[1.1] tracking-[-0.02em]">
            Our Services
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-700 mb-6 font-light leading-tight">
            Specialist talent partnerships for energy, engineering, infrastructure and mission-critical projects.
          </p>
          
          <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Rectify International partners with companies across renewable energy, engineering, infrastructure and data centres to solve hard-to-fill hiring challenges through market intelligence, targeted search and strategic talent delivery.
          </p>

          <p className="text-sm sm:text-base text-slate-600 mb-10 max-w-2xl mx-auto">
            We do not operate as a generic recruitment supplier. Companies apply to work with Rectify, and if accepted, we recommend the most suitable partnership model based on hiring volume, urgency, market difficulty and project requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={PARTNER_APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-base sm:text-lg px-8 py-3.5 h-12 sm:h-auto min-h-[48px] w-full sm:w-auto group shadow-sm"
              >
                Apply to Rectify Your Talent Strategy
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link href="#what-we-offer">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base sm:text-lg px-8 py-3.5 h-12 sm:h-auto min-h-[48px] w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                Explore What We Offer
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="what-we-offer" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden -mt-8 pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-[-0.01em]">
              What We Offer
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Four specialist services designed for companies that need more than a standard recruitment supplier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {offerings.map((offering, index) => {
              const accentGradients = [
                'from-blue-600 to-teal-600',
                'from-teal-600 to-blue-600',
                'from-blue-600 via-teal-600 to-blue-700',
                'from-teal-600 via-blue-600 to-teal-700'
              ];
              const iconBgs = [
                'from-blue-50 to-teal-50',
                'from-teal-50 to-blue-50',
                'from-blue-50 via-teal-50 to-blue-50',
                'from-teal-50 via-blue-50 to-teal-50'
              ];
              const iconColors = [
                'text-blue-600',
                'text-teal-600',
                'text-blue-600',
                'text-teal-600'
              ];

              const Icon = offering.icon;

              return (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl p-8 sm:p-9 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  {/* Subtle top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${accentGradients[index]} rounded-t-2xl`} />

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconBgs[index]} flex items-center justify-center mb-6 group-hover:scale-[1.02] transition-transform`}>
                    <Icon className={`h-7 w-7 ${iconColors[index]}`} />
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-[-0.01em]">
                    {offering.title}
                  </h3>

                  <p className="text-[15px] leading-relaxed text-slate-600 mb-6">
                    {offering.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <p className="text-xs font-semibold tracking-[0.5px] text-slate-500 mb-3 uppercase">Key Features</p>
                    <ul className="space-y-2.5">
                      {offering.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-slate-700 text-[15px]">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mt-[3px] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Specialisms */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-[-0.01em]">
              Market Specialisms
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Deep expertise across energy, engineering, infrastructure and mission-critical environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {marketSpecialisms.map((specialism) => {
              const Icon = specialism.icon;

              return (
                <div
                  key={specialism.title}
                  className={`bg-gradient-to-br ${specialism.cardClass} rounded-2xl p-8 sm:p-9 border`}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${specialism.iconClass} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-[-0.01em]">
                    {specialism.title}
                  </h3>
                  <ul className="space-y-2.5 text-slate-700">
                    {specialism.items.map((item) => {
                      const ItemIcon = item.icon;

                      return (
                        <li key={item.label} className="flex items-start gap-3 text-[15px]">
                          <ItemIcon className={`h-4 w-4 ${specialism.itemIconClass} mt-[3px] flex-shrink-0`} />
                          <span>{item.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        
        {/* Subtle geometric accents */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-12 w-28 h-28 border-2 border-white rotate-45" />
          <div className="absolute bottom-20 right-16 w-20 h-20 border-2 border-white rotate-45" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-tight mb-4">
            Ready to solve your specialist hiring challenges?
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto mb-8 leading-relaxed">
            Apply to Rectify your talent strategy and we will review whether there is a strong fit to support your hiring goals.
          </p>

          <a
            href={PARTNER_APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-700 text-base sm:text-lg px-8 py-3.5 h-12 sm:h-auto min-h-[48px] shadow-sm transition-all"
            >
              Apply to Rectify Your Talent Strategy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Specialist Talent Partnerships',
          description: 'Strategic talent partnerships for energy, engineering, infrastructure and mission-critical projects. Market intelligence, targeted search and strategic talent delivery.',
          provider: {
            '@type': 'ProfessionalService',
            name: 'Rectify International',
            url: (typeof globalThis.process !== 'undefined' && globalThis.process.env?.NEXT_PUBLIC_SITE_URL) || 'https://rectifyinternational.com',
          },
          areaServed: ['US', 'GB', 'EU'],
          serviceType: [
            'Strategic Talent Partnerships',
            'Specialist Search & Shortlist',
            'Market Mapping & Talent Intelligence',
            'Executive & Leadership Search'
          ]
        }}
      />
    </div>
  );
}
