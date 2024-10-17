

import { FC, useState, useRef, useEffect } from "react";
import { FaCommentDots } from "react-icons/fa";

const ChatBubble: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  // Close the modal when clicking outside of the form
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Chat bubble icon */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleForm}
          className="p-4 bg-[#00A651] text-white rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300"
        >
          <FaCommentDots size={40} />
        </button>
      </div>

      {/* Contact Form Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={formRef} // Reference to the form container
            className="bg-gray-800 p-6 rounded-lg shadow-md w-96 max-w-full relative"
          >
            <h2 className="text-2xl text-white mb-4">Contact Eric</h2>

            <form className="space-y-4">
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
                className="w-full bg-[#00A651] text-white p-3 rounded-md hover:bg-opacity-80 transition-all duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Close button */}
            <button
              onClick={toggleForm}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-all duration-300"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubble;

