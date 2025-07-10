// File: app/components/layout/ChatBot/hooks/useChatCloseHandler.js
import { useCallback } from 'react';
import { saveConversationState } from '../utils/convo/conversationManager';

export const useChatCloseHandler = (
  chatMessages,
  serviceContext,
  activeService,
  language,
  setIsClosing,
  setIsTyping,
  setMessage,
  setIsChatOpen
) => {
  const handleCloseChat = useCallback((shouldSave = false) => {
    setIsClosing(true);
    
    // Save conversation state using utility function
    if (shouldSave && chatMessages.length > 1) {
      const saveSuccess = saveConversationState(
        chatMessages, 
        serviceContext, 
        activeService, 
        language
      );
      
      if (saveSuccess) {
        console.log('Conversation saved successfully');
      }
    }
    
    // Clear typing state and reset message input
    setIsTyping(false);
    setMessage('');
    
    // Close chat with animation delay
    setTimeout(() => {
      setIsChatOpen(false);
      setIsClosing(false);
    }, 200);
    
  }, [chatMessages, serviceContext, activeService, language, setIsClosing, setIsTyping, setMessage, setIsChatOpen]);

  return { handleCloseChat };
};