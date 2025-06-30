'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

// Add custom styles for the navigation
const navLinkStyles = {
  default: 'text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group',
  active: 'text-gray-900 font-medium',
  mobile: 'block py-2 px-4 hover:bg-gray-50 rounded',
  mobileActive: 'bg-gray-100 text-gray-900 font-medium',
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 10;
      
      // Update scrolled state for header style changes
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Show/hide top bar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setShowTopBar(false);
      } else {
        // Scrolling up
        setShowTopBar(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, lastScrollY]);

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 inset-x-0 z-50 bg-gray-50 border-b border-gray-200 transition-transform duration-300 ${!showTopBar ? '-translate-y-full' : ''}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-base text-gray-700">
            <div className="flex items-center">
              <Phone className="size-5 mr-2" />
              <a href="tel:+1234567890" className="hover:text-gray-900 transition-colors font-medium">
              (323) 555-0192
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="size-5 mr-2" />
              <span className="font-medium">1287 Maplewood Drive, Los Angeles, CA 90026</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className={`fixed ${showTopBar ? 'top-10' : 'top-0'} inset-x-0 z-50 bg-white/85 backdrop-blur-sm shadow-sm transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'} border-t border-black/10`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 sm:space-x-4 hover:opacity-90 transition-opacity">
              {/* Logo Image */}
              <div className="relative shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/output-onlinepngtools.png"
                  alt="Dr. Serena Blake"
                  className="h-16 w-auto object-contain"
                  width={64}
                  height={64}
                />
              </div>
              
              {/* Name and Title */}
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-teal-700 leading-tight">Dr. Serena Blake</div>
                <div className="text-sm sm:text-base text-teal-600">Licensed Psychologist</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveLink(item.name)}
                className={`relative px-2 py-2 text-base font-medium ${
                  activeLink === item.name 
                    ? navLinkStyles.active 
                    : navLinkStyles.default
                }`}
              >
                <span className="relative z-10">
                  {item.name}
                </span>
                <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-gray-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side - Empty space where the button was */}
          <div className="hidden md:block">
            {/* This empty div maintains the flex layout balance */}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-gray-900 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white ${
          isOpen ? 'max-h-96 py-2' : 'max-h-0 py-0'
        }`}
      >
        <div className="space-y-1 px-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${navLinkStyles.mobile} ${
                activeLink === item.name ? navLinkStyles.mobileActive : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => {
                setActiveLink(item.name);
                setIsOpen(false);
              }}
            >
              {item.name}
            </Link>
          ))}
          <div className="border-t border-gray-100 mt-2 pt-2">
            <div className="flex items-center px-4 py-2">
              <Phone className="size-5 text-gray-600 mr-2" />
              <a 
                href="tel:+1234567890" 
                className="text-base font-medium text-gray-700 hover:text-orange-600 transition-colors"
              >
                (123) 456-7890
              </a>
            </div>
            <div className="flex items-center px-4 py-2">
              <MapPin className="size-5 text-gray-600 mr-2" />
              <span className="text-base text-gray-700">123 Therapy St, Richmond, VA</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
