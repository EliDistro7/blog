// ===== UPDATED CHATBOT COMPONENT (index.jsx) =====
'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChatbotData, chatBotData  } from '@/data/chat/index';

// Hooks
import { useChatState } from './hooks/useChatState';
import useChatEffects from './hooks/useChatEffects';
import { useChatActions } from './hooks/useChatActions';
import { useMessageSender } from './hooks/sender/useMessageSender';
import { useConversationRestore } from './hooks/useConversationRestore';
import { useChatCloseHandler } from './hooks/useCloseChatHandler';
import { useScreenSize } from './hooks/useScreenSize';

// Components
import ChatContainer from './components/ChatContainer';
import FloatingButton from './FloatingButton';
import ChatHeader from './components/ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import QuickPrompts from './QuickPrompts';
import ServiceIndicator from './components/ServiceIndicator';
import { Language } from '@/utils/ChatBotUtils';

// Types
interface DetectionRecord {
  message: string;
  timestamp: string;
  detection: ServiceDetectionResult;
  language: string;
}

interface ServiceDetectionResult {
  service?: string;
  confidence?: number;
  [key: string]: any;
}

// Define a type for detection result
type DetectionResult = {
  service?: string;
  confidence?: number;
  [key: string]: any;
};

export default function ChatBot() {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatScrollRef = useRef(null);

  // Custom hooks for state management
  const {
    isChatOpen,
    setIsChatOpen,
    message,
    setMessage,
    isTyping,
    setIsTyping,
    chatMessages,
    setChatMessages,
    suggestions,
    setSuggestions,
    activeService,
    setActiveService,
    isClosing,
    setIsClosing,
    serviceContext,
    setServiceContext,
    detectionHistory,
    setDetectionHistory,
    currentDetectionResult,
    setCurrentDetectionResult,
    conversationStats,
    setConversationStats,
    conversationPatterns,
    setConversationPatterns,
    suggestionAnalytics,
    setSuggestionAnalytics,
    maxMessages,
    resetChatState
  } = useChatState(language) as ReturnType<typeof useChatState> & {
    currentDetectionResult: DetectionResult;
    detectionHistory: DetectionRecord[];
    setDetectionHistory: React.Dispatch<React.SetStateAction<DetectionRecord[]>>;
    activeService: string | null;
    setActiveService: React.Dispatch<React.SetStateAction<string | null>>;
  };

  // Screen size detection
  const { isSmallScreen } = useScreenSize();

  // Chat close handler
  const { handleCloseChat } = useChatCloseHandler(
    chatMessages,
    serviceContext,
    activeService,
    language,
    setIsClosing,
    setIsTyping,
    setMessage,
    setIsChatOpen
  );

  // Restore previous conversation state
  const { restorePreviousConversation } = useConversationRestore(
    language,
    chatBotData,
    setChatMessages,
    setServiceContext,
    setActiveService,
    setSuggestions,
    setConversationStats,
    setConversationPatterns
  );

  // Message sending logic - Fixed with all required properties
  const { handleMessageSend } = useMessageSender({
    language,
    message,
    setMessage,
    isClosing,
    serviceContext,
    setServiceContext,
    chatMessages,
    setChatMessages,
    setIsTyping,
    setSuggestions,
    setActiveService: (service: string) => setActiveService(service),
    detectionHistory,
    setDetectionHistory,
    setCurrentDetectionResult,
    setConversationStats,
    setConversationPatterns,
    maxMessages,
    chatEndRef,
    pricingData: chatBotData.pricing
  });

  // Chat actions and handlers
  const chatActions = useChatActions({
    language,
    chatMessages,
    serviceContext,
    activeService,
    isClosing,
    isChatOpen,
    setIsClosing,
    setIsChatOpen,
    currentDetectionResult,
    conversationStats,
    conversationPatterns,
    detectionHistory,
    setChatMessages,
    setServiceContext,
    setActiveService,
    setSuggestions,
    setConversationStats,
    setConversationPatterns,
    restorePreviousConversation,
    setDetectionHistory,
    setCurrentDetectionResult,
    setSuggestionAnalytics,
    handleMessageSend,
    setMessage,
  });

  // Side effects (initialization, auto-scroll, etc.)
  useChatEffects();

  return (
    <div className="fixed bottom-6 right-6 z-[9999]" ref={containerRef}>
      {!isChatOpen && (
        <FloatingButton onClick={chatActions.handleOpenChat} />
      )}
      
      {isChatOpen && (
        <ChatContainer 
          isSmallScreen={isSmallScreen}
          isClosing={isClosing}
        >
          <ChatHeader
            language={language}
            serviceContext={serviceContext}
            currentDetectionResult={currentDetectionResult}
            isSmallScreen={isSmallScreen}
            isClosing={isClosing}
            onClose={handleCloseChat}
          />
          
          {/* ChatMessages with expanded height - takes most of the viewport */}
          <div className="flex-1 overflow-hidden">
            <ChatMessages 
              messages={chatMessages}
              isTyping={isTyping}
              chatEndRef={chatEndRef}
              chatScrollRef={chatScrollRef}
              serviceContext={serviceContext}
              insights={chatActions.getInsights()}
              currentDetection={currentDetectionResult}
              detectionHistory={detectionHistory}
            />
          </div>
          
          {/* Bottom section with reduced height */}
          <div className="border-t border-gray-700 p-3 space-y-2 bg-gradient-to-t from-gray-800/98 to-gray-900/95 flex-shrink-0">
            <QuickPrompts 
              suggestions={suggestions} 
              onSelect={chatActions.handleQuickPrompt}
              serviceContext={serviceContext}
              conversationDepth={(serviceContext as any).conversationDepth}
              disabled={isClosing}
              insights={chatActions.getInsights()}
              currentDetection={currentDetectionResult}
              detectionConfidence={(currentDetectionResult as any).confidence || 0}
              onRegenerateSuggestions={chatActions.handleRegenerateSuggestions}
              onIndustrySuggestions={chatActions.handleIndustrySuggestions}
            />
            
            <ChatInput 
              message={message}
              setMessage={setMessage}
              currentDetection={currentDetectionResult}
              serviceContext={serviceContext}
              onSend={handleMessageSend}
              inputRef={inputRef}
              placeholder={chatBotData.ui.inputPlaceholder[language as 'en' | 'sw']}
              disabled={isClosing}
              detectionHint={(currentDetectionResult as any).service ? 
                (language === 'sw' ? 
                  `Kuhusu ${(currentDetectionResult as any).service} (${Math.round((currentDetectionResult as any).confidence * 100)}% uhakika)` :
                  `About ${(currentDetectionResult as any).service} (${Math.round((currentDetectionResult as any).confidence * 100)}% confidence)`
                ) : null}
            />
            
            <ServiceIndicator
              language={language}
              serviceContext={serviceContext}
              currentDetectionResult={currentDetectionResult}
              isSmallScreen={isSmallScreen}
              isClosing={isClosing}
              onContactRequest={chatActions.handleContactRequest}
            />
          </div>
        </ChatContainer>
      )}
    </div>
  );
}