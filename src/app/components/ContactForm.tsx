import React, { FC } from 'react';

const ContactForm: FC = () => {
  return (
    <form className="bg-gray-700 p-8 rounded-lg shadow-md space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A651]"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A651]"
          required
        />
      </div>
      <textarea
        placeholder="Your Message"
        rows={4}
        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A651]"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full bg-[#00A651] text-white p-3 rounded-md hover:bg-orange-500 transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
