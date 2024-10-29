import React, { useState } from 'react';
import ChatModal from './ChatModal';
import { FaCommentDots } from "react-icons/fa";

const ChatBubble: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <>
      <div
        className="fixed bottom-10 right-10 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 ease-in duration-200"
        onClick={openModal}
      >
        <FaCommentDots size={38} />
      </div>
      {isModalOpen && <ChatModal onClose={closeModal} />}
    </>
  );
};

export default ChatBubble;


