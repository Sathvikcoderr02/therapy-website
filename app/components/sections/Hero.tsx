'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeartHandshake, Sparkle, Leaf } from 'lucide-react';

const rotatingQuotes = [
  {
    text: 'Greater Love in Your Relationships',
    icon: HeartHandshake,
    color: 'text-teal-500'
  },
  {
    text: 'Deeper Spiritual Connection',
    icon: Sparkle,
    color: 'text-teal-500'
  },
  {
    text: 'Lasting Inner Peace',
    icon: Leaf,
    color: 'text-teal-500'
  },
];

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % rotatingQuotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 size-full">
        <Image
          src="/images/image.webp"
          alt="Christian counseling session"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content overlay */}
      <div className="relative h-full flex items-center pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h1 className="text-white/80 text-sm mb-3">Christian Counseling Services in Richmond &amp; Central Virginia</h1>
          <h2 className="font-para font-extrabold text-3xl md:text-4xl text-white py-2 pb-1 md:py-4 md:gap-4 text-center">
            Professional Counseling for Christian Healing and Growth
          </h2>

          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto">
            Begin your journey today towards spiritual growth, deeper relationships, and lasting inner peace.
          </p>

          <div className="mb-12">
            <p className="text-xl md:text-2xl font-semibold text-white mb-4">I want to work with you for…</p>
            <div className="flex items-center justify-center gap-3 text-2xl font-medium">
              {React.createElement(rotatingQuotes[currentQuote].icon, {
                className: `size-7 ${rotatingQuotes[currentQuote].color} transition-all duration-500`
              })}
              <span className="min-h-8 inline-block text-teal-300">
                {rotatingQuotes[currentQuote].text}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm">
            {/* Top Rating - Keep this unchanged */}
            <a href="#testimonials" className="flex items-center text-white hover:text-blue-200 transition-colors">
              <span className="text-yellow-400 mr-1.5">★</span>
              <span>4.9/5 from 200+ reviews</span>
            </a>
            
            {/* Divider */}
            <span className="text-white/50">•</span>
            
            {/* Experience */}
            <a href="#about" className="text-white hover:text-gray-200 transition-colors whitespace-nowrap">
              <span className="font-semibold">8</span> Years Experience
            </a>
            
            {/* Divider */}
            <span className="text-white/50">•</span>
            
            {/* Testimonials */}
            <a href="#testimonials" className="text-white hover:text-gray-200 transition-colors whitespace-nowrap">
              <span className="font-semibold">500+</span> Testimonials
            </a>
            
            {/* Divider */}
            <span className="text-white/50">•</span>
            
            {/* Media Mentions */}
            <a href="#media" className="text-white hover:text-gray-200 transition-colors flex items-center gap-1 whitespace-nowrap">
              Media Mentions <span className="text-xs opacity-75">↗</span>
            </a>
          </div>

          <div className="mt-4 flex justify-center">
            <Link
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 px-8 py-3 text-lg font-medium text-blue-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-2 size-5 text-blue-900"
                aria-hidden="true"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
              Start Healing Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
