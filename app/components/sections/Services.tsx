import React from 'react';
import Image from 'next/image';

const services = [
  {
    name: 'Individual Therapy',
    description: 'One-on-one sessions tailored to your unique needs, focusing on personal growth and overcoming challenges.',
    image: '/images/psychiatry-ann-arbor-counseling-associates-service-page-1024x682.webp',
    location: 'Los Angeles, CA',
    tagline: 'Discover peace and personal growth in Los Angeles.'
  },
  {
    name: 'Couples Counseling',
    description: 'Strengthen your relationship through improved communication and conflict resolution strategies.',
    image: '/images/images (26).jpeg',
    location: 'Los Angeles, CA',
    tagline: 'Heal your relationship and grow closer together.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 pl-4 md:pl-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-left tracking-tight">
            How I Help
          </h2>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
          {services.map((service, index) => (
            <div key={index} className="flex">
              <a 
                href={`/therapy/${service.name.toLowerCase().replace(/\s+/g, '-')}/los-angeles`}
                className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-md p-5 border border-sky-100 justify-between flex flex-col space-y-5 bg-sky-100 z-[2] lg:p-6 w-full hover:bg-sky-300"
              >
                <div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col justify-between h-full">
                  <div className="h-[240px] relative rounded-lg overflow-hidden mb-6">
                    <Image
                      src={service.image}
                      alt={`${service.name} in ${service.location}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="font-bold mb-2 text-2xl flex justify-between items-center text-teal-900/90">
                    {service.name} in {service.location}
                  </h3>
                  <p className="font-normal text-teal-900/80 text-base mb-4">
                    {service.tagline}
                  </p>
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-11 px-5 py-2 text-sm bg-transparent text-teal-900/90 border-2 border-teal-900/90 w-full hover:bg-teal-50">
                  Learn More
                </button>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which service is right for you? Let&apos;s discuss your needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-teal-600 px-8 py-3 text-base font-medium text-white hover:bg-teal-700 transition-colors duration-200"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
