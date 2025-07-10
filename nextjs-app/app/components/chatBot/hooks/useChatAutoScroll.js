// File: app/components/layout/ChatBot/hooks/useChatAutoScroll.js
import { useEffect } from 'react';

export const useChatAutoScroll = (chatMessages, isTyping, chatEndRef, chatScrollRef) => {
  useEffect(() => {
    if (chatEndRef.current && chatScrollRef.current) {
      setTimeout(() => {
        chatEndRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'end'
        });
      }, 100);
    }
  }, [chatMessages, isTyping, chatEndRef, chatScrollRef]);
};