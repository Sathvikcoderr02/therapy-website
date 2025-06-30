'use client';

import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Executive',
    content: 'Working with Dr. Blake has been transformative. Her empathetic approach and professional expertise helped me navigate through a difficult period in my life. I highly recommend her services.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    content: 'The tools and strategies I learned in therapy have been invaluable. Dr. Blake creates a safe and non-judgmental space that made it easy to open up and work through my challenges.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Teacher',
    content: 'I was hesitant about starting therapy, but Dr. Blake made me feel comfortable from day one. Her guidance has helped me develop better coping mechanisms and improved my relationships.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 text-center max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Hear from individuals who have worked with Dr. Blake
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex flex-col p-8 bg-white rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl h-full"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`size-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <blockquote className="mb-6 text-lg text-gray-700 grow">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-gray-600">
            Ready to start your journey to better mental health?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-colors duration-200 bg-teal-600 rounded-md hover:bg-teal-700"
          >
            Book Your First Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
