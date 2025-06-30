'use client';

import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.'
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes—all virtual sessions via Zoom.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: '24-hour notice required.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-sky-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-12 text-4xl font-bold text-green-900 md:text-5xl font-sans">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b-2 border-green-900/20 pb-8 mb-8 last:border-b-0 last:pb-0 last:mb-0">
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <span className="text-xl font-bold text-green-900">{faq.question}</span>
                  <span className="ml-4">
                    {openIndex === index ? (
                      <ChevronUp className="size-6 text-green-800" />
                    ) : (
                      <ChevronUp className="size-6 -rotate-180 text-green-800" />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pb-6 pt-2">
                    <p className="mt-2 text-lg text-green-900">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="mb-6 text-lg text-gray-600">
              Have more questions? Don&apos;t hesitate to reach out.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-teal-600 px-8 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-teal-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
