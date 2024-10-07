// src/app/components/Slides.tsx

import Image from 'next/image';
import { FC } from 'react';
import styles from './Slides.module.css'; // Assuming you'll use CSS modules for styling

const Slides: FC = () => {
  return (
    <section className={`${styles.slide} flex items-start p-10`}>
      {/* Headshot in top-left corner */}
      <div className="w-32 h-32 mr-6">
        <Image
          src="/eric-headshot.jpeg" // Update with the correct path to Eric's headshot image
          alt="Eric's Headshot"
          width={128}
          height={128}
          className="rounded-full object-cover"
        />
      </div>

      {/* Pitch content */}
      <div className="flex-1 text-left">
        <p className="text-lg mb-4">
          Thanks for taking the time to visit my page! I'm Eric and have been a business-to-business consultant for almost 20 years. For the last 8 years, I have helped businesses with efficiency and maximization of their business equipment. I'm a proud Hockey Dad and spend many hours at the rinks supporting my son's pursuit of their dreams. Originally from Denver, Colorado, I was drawn to the beauty and friendly nature of the people on the North Shore and relocated my family here in 2013.
        </p>

        <p className="text-lg mb-4">
          As a former business owner, I've seen the cost, time, and effort it takes to deal with a subpar/mismatched copier. If I had only known Managed Print Services existed and there were Consultants who could help me, I would have signed up immediately.
        </p>

        <p className="text-lg mb-4">
          There is no cost to get an audit and suggestions for improving the systems you have in place. I believe it's priority #1 for an owner/executive to work on their business instead of working in their business. Growth is a mindset... let me take some of the operational clutter off of your plate.
        </p>

        <p className="text-lg mb-4">
          E.O. Johnson has been family-owned and operated for the last 66 years. Two years ago, EOJ acquired ShelDon Business Solutions. We have been in the local Duluth market for nearly 25 years. EOJ is the premier Canon Copier dealer in the area. We service the areas between Grand Marais, Duluth, Cloquet, Ashland, and Bayfield County. We offer a wide range of solutions to help businesses of all sizes save money, utilize scanning and document management to modernize and provide industry-leading IT security solutions.
        </p>

        <p className="text-lg">
          My passion is working with businesses to address the needs of the organization. No environment is the same, and we pride ourselves on building specific plans to address the unique structure of the clients we work with. I truly appreciate that you took the time to check out my Digital Business Card! Please reach out to me with your questions, and I wish you continued success and prosperity.
        </p>
      </div>
    </section>
  );
};

export default Slides;
