// File: app/components/layout/ChatBot/hooks/useChatKeyboardShortcuts.js
import { useEffect } from 'react';

export const useChatKeyboardShortcuts = (isChatOpen, isClosing, handleCloseChat) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isChatOpen && !isClosing) {
        event.preventDefault();
        handleCloseChat(true);
      }
    };

    if (isChatOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isChatOpen, isClosing, handleCloseChat]);
};