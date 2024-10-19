"use client";
import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaLinkedin } from "react-icons/fa";
import dynamic from 'next/dynamic';


// Define the Slide type for TypeScript
type Slide = {
  id: number;
  title: string;
  description?: string;
  highlights?: { subtitle: string; text: string }[];
  testimonial?: { subtitle: string; quote: string; author: string; position: string }; // Testimonial is optional
  image?: string;
};

const ContactForm = dynamic(() => import('./ContactForm'), {ssr:false});
const ChatBubble = dynamic(() => import('./ChatBubble'), { ssr: false });

// Array of slide data
const slides: Slide[] = [
  {
    id: 1,
    title: "Welcome to My Page!",
    description: `
      Thanks for taking the time to visit my page!
      I'm Eric and have been a business-to-business consultant for almost 20 years. 
      For the last 8 years I have helped businesses with efficiency and maximization of their business equipment. 
      I'm a proud Hockey Dad and spend many hours at the rinks supporting my son's pursuit of their dreams. 
      Originally from Denver, Colorado, I was drawn to the beauty and friendly nature of the people on the North Shore and relocated my family here in 2013.
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
          There is no cost to get an audit and suggestions for improving the systems you have in place. 
          I believe it's priority #1 for an owner/executive to work on their business instead of working in their business. 
          Growth is a mindset... let me take some of the operational clutter off your plate.
        `,
      },
      {
        subtitle: "EO Johnson – Your Trusted Partner",
        text: `
          E.O. Johnson has been family owned and operated for the last 66 years. 
          Two years ago, EOJ acquired ShelDon Business Solutions. 
          We have been in the local Duluth market for nearly 25 years, 
          serving areas like Grand Marais, Duluth, Cloquet, Ashland, and Bayfield County. 
          We offer a wide range of solutions to help businesses save money, utilize scanning and document management, 
          and provide industry-leading IT security.
        `,
      },
    ],
    image: "/eric-nicholson.jpeg",
  },
  {
    id: 2,
    title: "EO Johnson Multifunction Printers",
    description: `
      EO Johnson’s multifunction printers are budget-friendly, easy to use, and secure. 
      We ensure our clients have access to modern and reliable devices.
    `,
    highlights: [
      {
        subtitle: "Budget-Friendly",
        text: "We help businesses find cost-effective solutions that fit any budget while maximizing print capabilities.",
      },
      {
        subtitle: "Easy-to-Use",
        text: "With advanced interfaces and controls, we provide training so your team can make the most out of the technology.",
      },
      {
        subtitle: "Secure Printing",
        text: "Our printers are configured with the latest security features to protect your company's data and prevent back-door access.",
      },
      {
        subtitle: "Exclusive Canon Dealers",
        text: "We are the Premier Canon Copier dealer of the North Shore.",
      },
    ],
    testimonial: {
      subtitle: "Here is what our customers have to say",
      quote: "I don’t worry about our printers working — I know they will work. It is ‘set-it-and-forget it’ printing, and I like that.",
      author: "KEN DOWNS",
      position: "Vice President IT — Marine Credit Union",
    },
    image: "/printer.jpg",
  },
  {
    id: 3,
    title: "Digital Transformation Solutions",
    description: `
      Leverage Technology to Manage your Documents and Data. 
      EO Johnson helps your business leverage technology to efficiently manage your information as it moves through your organization.
    `,
    highlights: [
      {
        subtitle: "Secure Document Management",
        text: "End-to-end solutions for workflow automation, archival, retention, security, and audit reporting/compliance.",
      },
      {
        subtitle: "Digital Mailroom Services",
        text: "Create a digital mailroom so employees can work from anywhere and still receive their inbound paper mail electronically.",
      },
      {
        subtitle: "Document Scanning Services",
        text: "Transform physical or virtual data into searchable and secure electronic documents for greater access and improved productivity.",
      },
      {
        subtitle: "Business Consulting & Process Improvement",
        text: "We help improve your business processes and workflows, reducing errors, waste, and enhancing performance.",
      },
    ],
    testimonial: {
      subtitle: "Here is what our customers have to say",
      quote: "They are business partners rather than a contracted vendor. Our data is now more usable, saving us time and effort…enabling us to effectively retain decades of information we would not have been able to manage on our own.",
      author: "CITY OF ROCHESTER",
      position: "Minnesota",
    },
    image: "/icon2.jpg",
  },
  {
    id: 4,
    title: "Canon Copiers – The Trusted Brand",
    description: `
      Canon copiers are known for their reliability, innovation, and efficiency. 
      They provide high-quality print solutions for businesses of all sizes.
    `,
    highlights: [
      {
        subtitle: "Exceptional Quality",
        text: "Canon copiers produce sharp, vibrant prints and copies, ensuring your business looks its best.",
      },
      {
        subtitle: "Energy Efficient",
        text: "Canon's copiers are designed to minimize energy consumption, helping your business stay green.",
      },
      {
        subtitle: "User-Friendly Interface",
        text: "Canon copiers feature easy-to-use interfaces, making them accessible for all users.",
      },
      {
        subtitle: "Award-Winning Service",
        text: "Canon has been recognized for its exceptional service and commitment to customer satisfaction.",
      },
    ],
    testimonial: {
      subtitle: "What Makes Canon Stand Out?",
      quote: "Canon copiers offer the best mix of performance, reliability, and innovation. It’s no surprise they are a leader in the industry.",
      author: "TECH INDUSTRY LEADERSHIP REVIEW",
      position: "Canon Review, 2024",
    },
    image: "/canon.jpg",
  },
  {
    id: 5,
    title: "Get in Touch with Eric",
  },
];


const Slides: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to change to the next slide automatically
  useEffect(() => {
    // Stop the interval when on the last slide
    if (currentSlide === slides.length - 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // 7 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount or when slide changes
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);


  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden px-4 sm:px-8">
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

      <div
        className="w-full max-w-4xl h-full mx-auto p-6 bg-gray-800 bg-opacity-90 shadow-lg rounded-lg relative overflow-hidden border-4"
        style={{ borderColor: '#00A651' }}
      >
        <div className="absolute top-4 right-4 flex space-x-4">
          <button onClick={prevSlide} className="p-2 rounded-full text-[#00A651] bg-white hover:bg-[#00A651] transition-all duration-300">
            <FaArrowLeft size={20} />
          </button>
          <button onClick={nextSlide} className="p-2 rounded-full text-[#00A651] bg-white hover:bg-[#00A651] transition-all duration-300">
            <FaArrowRight size={20} />
          </button>
        </div>

        {slides[currentSlide]?.image && currentSlide !== 4 && (
          <div className="absolute top-4 left-4">
            <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-orange-500">
              <Image
                src={slides[currentSlide].image ?? "/fallback-image.png"} 
                alt={slides[currentSlide].title}
                width={128}
                height={128}
                className="object-cover"
                priority={currentSlide === 0} // Prioritize loading the first slide image only
                loading={currentSlide !== 0 ? "lazy" : "eager"} // Lazy load for other slides
             />
            </div>
          </div>
        )}

        {currentSlide === 4 ? (
          <div className="text-center px-8 sm:px-16 mt-8">
            <h1 className="text-2xl sm:text-3xl font-bold underline text-blue-600 mb-4">
              Get in Touch with Eric
            </h1>
            <p className="text-gray-300 mb-4">Feel free to reach out to me on LinkedIn or send an email directly.</p>

            <div className="flex justify-center space-x-6 mb-6">
              <Link href="https://www.linkedin.com/in/eric-n-121126114/" passHref>
                <FaLinkedin className="text-[#00A651] hover:text-orange-500 transition-all duration-300" size={40} />
              </Link>
              <Link href="mailto:enicholson@eojohnson.com " passHref>
                <p className="text-lg text-[#00A651] hover:text-orange-500 transition-all duration-300">enicholson@eojohnson.com</p>
              </Link>
            </div>

            {/* Use the ContactForm component */}
            <ContactForm />
          </div>
        ) : (
          <div className="text-left px-4 sm:px-8 mt-8 ml-24 sm:ml-40 overflow-y-auto h-full pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold underline text-blue-600 mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-gray-200 mb-6 text-sm sm:text-base">
              {slides[currentSlide].description}
            </p>

            {slides[currentSlide].highlights?.map((highlight, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-[#00A651] mb-2">
                  {highlight.subtitle}
                </h2>
                <p className="text-gray-200 text-sm sm:text-base">{highlight.text}</p>
              </div>
            ))}

            {slides[currentSlide]?.testimonial && (
              <div className="bg-gray-700 p-4 rounded-lg mt-6 text-white">
                <p className="text-lg sm:text-xl font-semibold text-[#00A651] mb-2">
                  {slides[currentSlide]?.testimonial?.subtitle}
                </p>
                <p className="italic text-lg">“{slides[currentSlide]?.testimonial?.quote}”</p>
                <p className="mt-2 font-bold">{slides[currentSlide]?.testimonial?.author}</p>
                <p className="text-sm text-gray-300">{slides[currentSlide]?.testimonial?.position}</p>
              </div>
            )}
              <p className="text-green-400 font-bold mt-6 text-sm sm:text-base">
                 &copy; {new Date().getFullYear()} Eric Nicholson. All rights reserved.
              </p>

          </div>
        )}
      </div>
      <ChatBubble />
    </div>
    
  );
};

export default Slides;





















