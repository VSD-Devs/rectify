'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';

export default function CookiePolicy() {
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
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center">
              <Logo />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/services" className="text-slate-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</Link>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Talk to a Consultant
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
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

        {/* Mobile Navigation */}
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

      {/* Content */}
      <main className="pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-slate-600 text-lg">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                1. What Are Cookies?
              </h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="mb-4">
                This Cookie Policy explains how Rectify uses cookies and similar technologies on our website and what choices you have regarding them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                2. Types of Cookies We Use
              </h2>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
                2.1 Essential Cookies
              </h3>
              <p className="mb-4">
                These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Setting your privacy preferences</li>
                <li>Filling in forms</li>
                <li>Logging in to your account</li>
                <li>Remembering your cookie preferences</li>
              </ul>
              <p className="mb-4">
                These cookies do not store any personally identifiable information and are essential for providing you with services you have requested.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
                2.2 Analytics Cookies
              </h3>
              <p className="mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Improve our website&apos;s functionality and user experience</li>
                <li>Understand which pages are most popular</li>
                <li>Identify areas where we can improve our services</li>
                <li>Measure the effectiveness of our content</li>
              </ul>
              <p className="mb-4">
                We may use services like Google Analytics for this purpose. These cookies do not directly identify you, but they may collect information about your browsing behaviour.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
                2.3 Marketing Cookies
              </h3>
              <p className="mb-4">
                These cookies may be set through our site by our advertising partners. They may be used to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Build a profile of your interests</li>
                <li>Show you relevant content and advertisements on other sites</li>
                <li>Measure the effectiveness of advertising campaigns</li>
              </ul>
              <p className="mb-4">
                These cookies require your consent before they can be set. You can manage your preferences at any time using our cookie banner or settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                3. Third-Party Cookies
              </h2>
              <p className="mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics and deliver content. These may include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Google Analytics:</strong> To analyse website usage and improve our services</li>
                <li><strong>Social Media Platforms:</strong> To enable social sharing and integration</li>
                <li><strong>Email Marketing Services:</strong> To track email campaign performance</li>
              </ul>
              <p className="mb-4">
                These third parties may use cookies to collect information about your online activities across different websites. We do not control these third-party cookies, and you should check the respective privacy policies of these third parties for more information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                4. How Long Do Cookies Last?
              </h2>
              <p className="mb-4">
                Cookies can be either &quot;session&quot; or &quot;persistent&quot; cookies:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser. They help maintain your session while you navigate our website.</li>
                <li><strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them. They help us remember your preferences and improve your experience on return visits.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                5. Managing Your Cookie Preferences
              </h2>
              <p className="mb-4">
                You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.
              </p>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
                5.1 Cookie Banner
              </h3>
              <p className="mb-4">
                When you first visit our website, you will see a cookie banner that allows you to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Accept all cookies</li>
                <li>Reject all non-essential cookies</li>
                <li>Manage your preferences for different types of cookies</li>
              </ul>
              <p className="mb-4">
                You can change your preferences at any time by clicking on the cookie settings link in our website footer or by clearing your browser cookies and revisiting our site.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">
                5.2 Browser Settings
              </h3>
              <p className="mb-4">
                You can also control cookies through your browser settings. Here are links to instructions for popular browsers:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">Microsoft Edge</a></li>
              </ul>
              <p className="mb-4">
                Please note that disabling certain cookies may affect the functionality of our website and your ability to use some features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                6. Do Not Track Signals
              </h2>
              <p className="mb-4">
                Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted, and our website does not currently respond to DNT signals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                7. Updates to This Policy
              </h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                8. More Information
              </h2>
              <p className="mb-4">
                For more information about how we handle your personal data, please see our{' '}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">
                9. Contact Us
              </h2>
              <p className="mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <p className="mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@rectifyinternational.com" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">
                    info@rectifyinternational.com
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+44123456789" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">
                    +44 123 456 789
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

