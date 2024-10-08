"use client";

import { FC, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Array of slide data
const slides = [
  {
    id: 1,
    title: "Welcome to My Page!",
    description: `
      Thanks for taking the time to visit my page!
      I'm Eric and have been a business-to-business consultant for almost 20 years. For the last 8 years I have helped businesses with efficiency and maximization of their business equipment. I'm a proud Hockey Dad and spend many hours at the rinks supporting my son's pursuit of their dreams. Originally from Denver, Colorado, I was drawn to the beauty and friendly nature of the people on the North Shore and relocated my family here in 2013.
    `,
    highlights: [
      {
        subtitle: "My Experience as a Business Owner",
        text: `
          As a former business owner, I've seen the cost, time, and effort it takes to deal with a subpar/mismatched copier. 
          If I had only known Managed Print Services existed and there were Consultants who could help me, I would have signed up immediately.
        `,
      },
      {
        subtitle: "Audit and Solutions at No Cost",
        text: `
          There is no cost to get an audit and suggestions for improving the systems you have in place. I believe it's priority #1 for an owner/executive to work on their business instead of working in their business. 
          Growth is a mindset... let me take some of the operational clutter off your plate.
        `,
      },
      {
        subtitle: "EO Johnson – Your Trusted Partner",
        text: `
          E.O. Johnson has been family owned and operated for the last 66 years. Two years ago, EOJ acquired ShelDon Business Solutions. 
          We have been in the local Duluth market for nearly 25 years, serving areas like Grand Marais, Duluth, Cloquet, Ashland, and Bayfield County. 
          We offer a wide range of solutions to help businesses save money, utilize scanning and document management, and provide industry-leading IT security.
        `,
      },
    ],
    image: "/eric-nicholson.jpeg",
  },
];

const Slides: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to change slides
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden px-4 sm:px-8">
      {/* Full-screen background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/eoj_logo.svg"
          alt="EO Johnson Background Logo"
          fill
          className="object-contain opacity-10"
          priority
          sizes="100vw"
        />
      </div>

      {/* Slide Container */}
      <div
        className="w-full max-w-4xl h-full mx-auto p-6 bg-gray-800 bg-opacity-90 shadow-lg rounded-lg relative overflow-hidden border-4"
        style={{ borderColor: '#00A651' }}
      >
        {/* Circular Image Positioned to Top-Left */}
        <div className="absolute top-4 left-4">
          <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-orange-500">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              width={128}
              height={128}
              className="object-cover"
              priority={currentSlide === 0}
              loading={currentSlide !== 0 ? "lazy" : undefined}
            />
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute top-4 right-4 flex space-x-4">
          <button onClick={prevSlide} className="p-2 rounded-full text-[#00A651] bg-white hover:bg-[#00A651] hover:text-white transition-all duration-300">
            <FaArrowLeft size={20} />
          </button>
          <button onClick={nextSlide} className="p-2 rounded-full text-[#00A651] bg-white hover:bg-[#00A651] hover:text-white transition-all duration-300">
            <FaArrowRight size={20} />
          </button>
        </div>

        {/* Content with Scrollable Container */}
        <div className="text-left px-4 sm:px-8 mt-8 ml-24 sm:ml-40 overflow-y-auto h-full pb-6">
          <h1 className="text-2xl sm:text-3xl font-bold underline text-blue-600 mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-gray-200 mb-6 text-sm sm:text-base">{slides[currentSlide].description}</p>

          {/* Highlights */}
          {slides[currentSlide].highlights.map((highlight, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-lg sm:text-xl font-semibold text-[#00A651] mb-2">{highlight.subtitle}</h2>
              <p className="text-gray-200 text-sm sm:text-base">{highlight.text}</p>
            </div>
          ))}

          {/* Closing Line */}
          <p className="text-green-400 font-bold mt-6 text-sm sm:text-base">
            I truly appreciate that you took the time to check out my Digital Business Card!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slides;


















