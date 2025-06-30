import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-sky-100">
      {/* About Section */}
      <section className="relative p-4 py-12 md:py-20 lg:py-28 md:px-[10%]" id="about">
        <div className="pb-0 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Image Section */}
          <div className="mt-0 relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop.jpg"
              alt="Dr. Serena Blake"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute bottom-0 left-0 bg-gray-200/90 p-4 rounded-tr-lg shadow-md max-w-[280px]">
              <div className="flex items-center">
                <div className="grid grid-cols-1">
                  <span className="font-semibold text-gray-900">Dr. Serena Blake</span>
                  <span className="text-sm text-gray-800">Licensed Clinical Psychologist</span>
                  <div className="font-medium flex items-center mt-1 text-sm">
                    <Star className="size-4 text-yellow-500 mr-1 fill-yellow-500" />
                    <a href="#testimonials" className="text-gray-900 hover:text-gray-700 transition-colors">
                      Top Rated | <span className="font-semibold">25+ Years Experience</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="mt-6 flex flex-col gap-4 lg:gap-6">
            <h2 className="mx-auto md:mx-0 max-w-fit rounded-full bg-amber-100 px-4 py-1.5 text-xs font-medium text-gray-800 tracking-wider uppercase">
              EXPERIENCED CHRISTIAN THERAPIST IN RICHMOND, VA
            </h2>
            <h2 className="text-4xl font-bold text-teal-900/90 lg:text-5xl font-sans">
              Hi, Iam Dr. Serena Blake
            </h2>
            
            <p className="mt-6 leading-relaxed text-teal-900/90 text-lg md:text-xl lg:text-2xl font-normal font-sans">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with <strong>eight years of experience</strong> and over <strong>500 client sessions</strong>. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
            
            <p className="leading-relaxed text-teal-900/90 text-lg md:text-xl lg:text-2xl font-normal font-sans mt-6">
              Whether you meet in her <strong>Maplewood Drive office</strong> or connect virtually via <strong>Zoom</strong>, Dr. Blake is committed to creating a <strong>safe, supportive space</strong> for you to thrive.
            </p>
            
            
            
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;
