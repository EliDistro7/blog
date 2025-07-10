// File: app/components/layout/ChatBot/hooks/useChatInitialization.js
import { useEffect } from 'react';
import {
  restoreConversationState,
  createFreshConversationState,
  getConversationStats,
  detectConversationPatterns
} from '../utils/convo/conversationManager';

export const useChatInitialization = (
  language,
  chatbotData,
  setChatMessages,
  setServiceContext,
  setActiveService,
  setSuggestions,
  setConversationStats,
  setConversationPatterns
) => {
  useEffect(() => {
    // Try to restore conversation first
    const restoredState = restoreConversationState(language);
    
    if (restoredState) {
      setChatMessages(restoredState.messages);
      setServiceContext(restoredState.serviceContext);
      setActiveService(restoredState.activeService);
      setSuggestions(restoredState.suggestions || chatbotData.prompts[language]);
      
      // Update stats and patterns from restored conversation
      setConversationStats(getConversationStats(restoredState.messages, restoredState.serviceContext));
      setConversationPatterns(detectConversationPatterns(restoredState.messages));
      
      console.log('Conversation restored from storage');
    } else {
      // Create fresh conversation state
      const freshState = createFreshConversationState(chatbotData, language);
      setChatMessages(freshState.messages);
      setServiceContext(freshState.serviceContext);
      setActiveService(freshState.activeService);
      setSuggestions(freshState.suggestions);
      
      // Initialize stats for fresh conversation
      setConversationStats(getConversationStats(freshState.messages, freshState.serviceContext));
      setConversationPatterns({});
    }
  }, [language, chatbotData, setChatMessages, setServiceContext, setActiveService, setSuggestions, setConversationStats, setConversationPatterns]);
};