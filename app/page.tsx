import React from 'react';
import Hero from '@/app/components/sections/Hero';
import About from '@/app/components/sections/About';
import Services from '@/app/components/sections/Services';
import Testimonials from '@/app/components/sections/Testimonials';
import FAQ from '@/app/components/sections/FAQ';
import Contact from '@/app/components/sections/Contact';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Services Section */}
      <Services />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Contact Section */}
      <Contact />

    </>
  );
}
