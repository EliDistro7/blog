// File: app/components/layout/ChatBot/hooks/useChatOutsideClick.js
import { useEffect } from 'react';

export const useChatOutsideClick = (containerRef, isChatOpen, isClosing, handleCloseChat) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && 
          !containerRef.current.contains(event.target) && 
          isChatOpen && 
          !isClosing) {
        
        // Add a small delay to prevent accidental closes
        setTimeout(() => {
          if (isChatOpen && !isClosing) {
            handleCloseChat(true); // Save conversation when closing via outside click
          }
        }, 100);
      }
    };

    if (isChatOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef, isChatOpen, isClosing, handleCloseChat]);
};
