import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'HIPAA Compliance', href: '/hipaa' },
    ],
    social: [
      {
        name: 'Facebook',
        href: 'https://facebook.com',
        icon: Facebook,
      },
      {
        name: 'Instagram',
        href: 'https://instagram.com',
        icon: Instagram,
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com',
        icon: Twitter,
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: Linkedin,
      },
    ],
  };

  return (
    <div className="bg-green-950 text-cyan-300">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-300">Dr. Serena Blake</h3>
            <p className="text-cyan-300">
              Providing compassionate, evidence-based therapy to help you achieve emotional well-being and personal growth.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="size-6 text-cyan-300 hover:text-cyan-100 transition-colors" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <div className="shrink-0">
                  <svg className="size-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+13235550192" className="flex items-center space-x-3 text-cyan-300 hover:text-cyan-100">
                  (415) 555-1234
                </a>
              </li>
              <li className="flex items-start">
                <div className="shrink-0">
                  <svg className="size-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:serena@blakepsychology.com" className="flex items-center space-x-3 text-cyan-300 hover:text-cyan-100">
                  serena@blakepsychology.com
                </a>
              </li>
              <li className="flex items-start">
                <div className="shrink-0">
                  <svg className="size-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="ml-3 text-base text-cyan-300">
                  1287 Maplewood Drive<br />
                  Los Angeles, CA 90026
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Office Hours</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-base text-cyan-300">
                <span className="font-medium">In-person:</span> Tue & Thu, 10 AM–6 PM
              </li>
              <li className="text-base text-cyan-300">
                <span className="font-medium">Virtual via Zoom:</span> Mon, Wed & Fri, 1 PM–5 PM
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-green-900 hover:bg-green-100 transition-colors duration-200"
              >
                Book a Session
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-green-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-cyan-300 text-center md:text-left">
            &copy; {currentYear} Dr. Serena Blake, LMFT. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-cyan-300 hover:text-cyan-100">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
