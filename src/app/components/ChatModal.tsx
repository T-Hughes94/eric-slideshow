import React from 'react';

interface ModalProps {
  onClose: () => void;
}

const ChatModal: React.FC<ModalProps> = ({ onClose }) => {
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClickOutside}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-xl font-bold mb-4">Contact Eric</h2>
        <form>
          {/* Contact form fields */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatModal;
