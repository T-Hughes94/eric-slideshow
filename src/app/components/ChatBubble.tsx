import React, { useState } from 'react';
import ChatModal from './ChatModal';

const ChatBubble: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="fixed bottom-10 right-10 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white cursor-pointer"
        onClick={openModal}
      >
        Chat
      </div>
      {isModalOpen && <ChatModal onClose={closeModal} />}
    </>
  );
};

export default ChatBubble;


