// File: app/components/layout/ChatBot/hooks/useChatState.js
import { useState, useCallback } from 'react';
import { createFreshServiceContext } from '@/utils/context/serviceContextUtils';
import { createFreshConversationState } from '../utils/convo/conversationManager';

export const useChatState = (language) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [activeService, setActiveService] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  
  // Service context state
  const [serviceContext, setServiceContext] = useState(() => createFreshServiceContext());
  
  // Enhanced detection state
  const [detectionHistory, setDetectionHistory] = useState([]);
  const [currentDetectionResult, setCurrentDetectionResult] = useState({confidence:0});
  
  // Conversation analytics state
  const [conversationStats, setConversationStats] = useState({});
  const [conversationPatterns, setConversationPatterns] = useState({});
  const [maxMessages] = useState(50);
  const [suggestionAnalytics, setSuggestionAnalytics] = useState({
    totalGenerated: 0,
    smartSuggestionsUsed: 0,
    fallbackSuggestionsUsed: 0,
    userInteractionRate: 0
  });

  const resetChatState = useCallback((chatbotData) => {
    const freshState = createFreshConversationState(chatbotData, language);
    setChatMessages(freshState.messages);
    setServiceContext(freshState.serviceContext);
    setActiveService(null);
    setSuggestions(freshState.suggestions);
    setConversationStats({});
    setConversationPatterns({});
    setDetectionHistory([]);
    setCurrentDetectionResult(null);
  }, [language]);

  return {
    // Basic chat state
    isChatOpen, setIsChatOpen,
    message, setMessage,
    isTyping, setIsTyping,
    chatMessages, setChatMessages,
    suggestions, setSuggestions,
    activeService, setActiveService,
    isClosing, setIsClosing,
    
    // Service context state
    serviceContext, setServiceContext,
    
    // Detection state
    detectionHistory, setDetectionHistory,
    currentDetectionResult, setCurrentDetectionResult,
    
    // Analytics state
    conversationStats, setConversationStats,
    conversationPatterns, setConversationPatterns,
    maxMessages,
    suggestionAnalytics, setSuggestionAnalytics,
    
    // Actions
    resetChatState
  };
};