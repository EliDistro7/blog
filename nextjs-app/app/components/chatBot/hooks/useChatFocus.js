/ File: app/components/layout/ChatBot/hooks/useChatFocus.js
import { useEffect } from 'react';

export const useChatFocus = (isChatOpen, inputRef) => {
  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 300);
    }
  }, [isChatOpen, inputRef]);
};