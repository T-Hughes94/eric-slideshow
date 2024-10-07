// "use client" is required for client-side state and interactivity
"use client";

import { FC, useState } from 'react';
import Image from 'next/image';
import styles from './Slides.module.css';

// Array of slide data for better organization
const slides = [
  {
    id: 1,
    title: "Welcome to My Page!",
    description: `
      Thanks for taking the time to visit my page! I'm Eric and have been a business-to-business consultant for almost 20 years. 
      For the last 8 years, I have helped businesses with efficiency and maximization of their business equipment. 
      I'm a proud Hockey Dad and spend many hours at the rinks supporting my son's pursuit of their dreams. 
      Originally from Denver, Colorado, I was drawn to the beauty and friendly nature of the people on the North Shore and relocated my family here in 2013.
    `,
    image: "/eric-nicholson.jpeg", // Replace with correct path
  },
  {
    id: 2,
    title: "My Business Experience",
    description: `
      As a former business owner, I've seen the cost, time, and effort it takes to deal with a subpar/mismatched copier. 
      If I had only known Managed Print Services existed and there were consultants who could help me, I would have signed up immediately. 
      There is no cost to get an audit and suggestions for improving the systems you have in place. 
      I believe it's priority #1 for an owner/executive to work on their business instead of working in their business. Growth is a mindset... 
      let me take some of the operational clutter off of your plate.
    `,
    image: "/eoj_logo.svg", // EO Johnson logo
  },
  {
    id: 3,
    title: "EO Johnson – Your Premier Partner",
    description: `
      E.O. Johnson has been family owned and operated for the last 66 years. Two years ago, EOJ acquired ShelDon Business Solutions. 
      We have been in the local Duluth market for nearly 25 years. EOJ is the premier Canon Copier dealer in the area. 
      We service the areas between Grand Marias, Duluth, Cloquet, Ashland, and Bayfield County. 
      We offer a wide range of solutions to help businesses of all sizes save money, utilize scanning and document management to modernize, 
      and provide industry-leading IT security solutions.
    `,
    image: "/eoj_office.jpg", // Replace with relevant office photo
  },
  {
    id: 4,
    title: "Benefits of EO Johnson's Services",
    description: `
      • Budget-Friendly: EO Johnson can show you the latest in printing and device technologies and features, 
      help you understand the cost benefits of upgrading or replacing your multifunction copier or printer, and determine the right print solution to fit your budget.
      
      • Easy-to-Use: The latest multifunction copiers and printers feature intuitive interfaces and advanced controls. 
      We won’t leave until your team is totally prepared to use it, training beyond the basics so you can make the most of your technology.
      
      • Secure: Hackers can gain back-door access to a company’s entire network through printers that aren’t properly configured and secured. 
      Rely on our exclusive ImageGuard to provide the highest level of protection for your entire fleet of devices.
    `,
    image: "/eoj_security.jpg", // Replace with a photo of secure systems or copiers
  },
  {
    id: 5,
    title: "Thank You for Visiting",
    description: `
      My passion is working with businesses to address the needs of the organization. No environment is the same and we pride ourselves on building specific plans 
      to address the unique structure of the clients we work with. I truly appreciate that you took the time to check out my Digital Business Card!
      Please reach out to me with your questions, and I wish you continued success and prosperity.
    `,
    image: "/eric-nicholson.jpeg", // Can reuse Eric's headshot for personal touch
  },
];

const Slides: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to change slides
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {/* Slide Container */}
      <div className="w-full max-w-4xl mx-auto p-6 bg-gray-400 shadow-lg rounded-lg relative overflow-hidden">
        {/* Slide Navigation */}
        <div className="absolute top-4 right-4 flex space-x-4">
          <button onClick={prevSlide} className="bg-white text-black p-2 rounded-full">Prev</button>
          <button onClick={nextSlide} className="bg-white text-black p-2 rounded-full">Next</button>
        </div>

        {/* Image for each slide */}
        <div className="w-full flex justify-center my-6">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            width={150}
            height={150}
            className="rounded-full border-4 border-orange-500"
          />
        </div>

        {/* Content */}
        <div className="text-left px-8">
          <h1 className="text-3xl font-bold underline text-blue-600 mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-gray-200 mb-4">{slides[currentSlide].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Slides;








