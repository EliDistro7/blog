// File: app/components/layout/ChatBot/hooks/sender/useMessageSender.ts
import { useCallback } from 'react';
import { chatBotData as chatbotData, PricingData } from '@/data/chat/index';
import {
  detectLanguage,
  processUserMessage,
  isPricingQuery as isPricingInquiry,
  getServiceResponse,
  ChatbotData
} from '@/utils/ChatBotUtils';
import {
  detectServiceFromMessage,
  updateServiceContext,
  generatePricingResponse,
  getConversationInsights,
  createFreshServiceContext,
  ServiceContext  
} from '@/utils/context/serviceContextUtils';
import {
  generateContextualResponse,
  analyzeMessageIntent,

  ResponseObject as GeneratedResponse,
} from '../../utils/response/generator/responseGenerator';

import {

  validateResponse,

} from '../../utils/response/generator/utils';


import {
  detectServiceWithConfidence,
  validateServiceDetection,
  getDetectionSummary
} from '../../utils/detector/serviceDetector';
import {
  generateSmartSuggestions,
  generateFollowUpSuggestions
} from '../../utils/suggestion/suggestionEngine';
import {
  saveConversationState,
  addMessageToConversation,
  getConversationStats,
  detectConversationPatterns,
  pruneConversation
} from '../../utils/convo/conversationManager';
import { IntentAnalysisResult } from '../../utils/response/intent';



// Type definitions
interface PricingDataType {
  [service: string]: {
    price: number;
    currency: string;
    [key: string]: any;
  };
}

export type Language = 'en' | 'sw';

interface ServiceDetectionResult {
  service: string | null;
  confidence: number;
  matchedTerms: string[];
  alternativeServices: { service: string; confidence: number }[];
  detectionMethod: string;
  contextInfluence?: any;
}

export interface DetectionRecord {
  message: string;
  timestamp: string;
  detection: ServiceDetectionResult;
  language: string;
}

interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
  timestamp: string;
  language: string;
  [key: string]: any;
}



interface IntentAnalysis {
  intent: string;
  confidence: number;
  [key: string]: any;
}

export interface ConversationStats {
  totalMessages: number;
  userMessages: number;
  botMessages: number;
  conversationDepth: number;
  servicesDiscussed: number;
  currentService: string | null;
  duration: number;
  messageTypes: Record<string, number>;
  languages: Record<string, number>;
  //insights: string[];
}

interface ConversationPatterns {
  isRepetitive: boolean;
  hasLongMessages: boolean;
  hasShortMessages: boolean;
  switchesLanguages: boolean;
  asksMultipleQuestions: boolean;
  showsDeepEngagement: boolean;
}


interface UseMessageSenderProps {
  language: Language;
  message: string;
  setMessage: (msg: string) => void;
  isClosing: boolean;
  serviceContext: ServiceContext;
  setServiceContext: (ctx: ServiceContext) => void;
  chatMessages: ChatMessage[];
  setChatMessages: (msgs: ChatMessage[] | ((prev: ChatMessage[]) => ChatMessage[])) => void;
  setIsTyping: (typing: boolean) => void;
  setSuggestions: (sugs: string[]) => void;
  setActiveService: (service: string) => void;
  detectionHistory: DetectionRecord[];
  setDetectionHistory: (history: DetectionRecord[] | ((prev: DetectionRecord[]) => DetectionRecord[])) => void;
  setCurrentDetectionResult: (result: ServiceDetectionResult) => void;
  setConversationStats: (stats: ConversationStats) => void;
  setConversationPatterns: (patterns: ConversationPatterns) => void;
  maxMessages: number;
  chatEndRef: React.RefObject<HTMLDivElement>;
  pricingData: PricingData;
}

export const useMessageSender = ({
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
  setActiveService,
  detectionHistory,
  setDetectionHistory,
  setCurrentDetectionResult,
  setConversationStats,
  setConversationPatterns,
  maxMessages,
  chatEndRef,
  pricingData,
}: UseMessageSenderProps) => {
  const handleMessageSend = useCallback(() => {
    if (!message.trim() || isClosing) return;
    
    const userMessage = message.trim();
    
    // Use detectLanguage utility to detect language from user message
    const detectedLang: Language = detectLanguage(userMessage, undefined, language);
    
    // Enhanced service detection with confidence scoring
    const enhancedServiceDetection = detectServiceWithConfidence(
      userMessage, 
      detectedLang, 
      chatbotData.serviceKeywords,
      serviceContext
    ) as ServiceDetectionResult;

    // Validate the enhanced detection result
    if (!validateServiceDetection(enhancedServiceDetection)) {
      console.warn('Enhanced service detection failed, falling back to basic detection');
      
      const basicDetection = detectServiceFromMessage(userMessage, detectedLang) as {
        service: string | null;
        confidence?: number;
        matchedTerms?: string[];
      };
      // Reassign enhancedServiceDetection as a typed object to avoid property errors
    let b=  Object.assign(enhancedServiceDetection, {
        service: basicDetection.service,
        confidence: basicDetection.confidence || 0.5,
        matchedTerms: basicDetection.matchedTerms || [],
        alternativeServices: [],
        detectionMethod: 'fallback_basic'
      });

      console.log('assigned obj',b )
    }
    
    // Update detection history
    const detectionRecord: DetectionRecord = {
      message: userMessage,
      timestamp: new Date().toISOString(),
      detection: enhancedServiceDetection,
      language: detectedLang
    };
    
    setDetectionHistory((prev: DetectionRecord[]) => [...prev.slice(-9), detectionRecord]);
    setCurrentDetectionResult(enhancedServiceDetection);
    
    // Enhanced debug logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Enhanced Service Detection Result:', {
        summary: getDetectionSummary(enhancedServiceDetection),
        fullResult: enhancedServiceDetection,
        detectionHistory: detectionHistory.length
      });
    }
    
    // Analyze message intent
    const intentAnalysis: IntentAnalysisResult = analyzeMessageIntent(userMessage, detectedLang);
    
    // Enhanced service context update with confidence-based logic
    let updatedServiceContext: ServiceContext;
    if (enhancedServiceDetection.confidence > 0.7) {
      updatedServiceContext = updateServiceContext(
        serviceContext, 
        enhancedServiceDetection.service ?? '', 
        userMessage
      );
    } else if (enhancedServiceDetection.confidence > 0.4) {
      updatedServiceContext = updateServiceContext(
        serviceContext, 
        enhancedServiceDetection.service ?? '', 
        userMessage,
        { preservePrevious: true, confidenceThreshold: 0.4 }
      );
    } else {
      updatedServiceContext = updateServiceContext(
        serviceContext, 
        '', // fallback to empty string for null
        userMessage
      );
    }
    
    setServiceContext(updatedServiceContext);
    
    // Create user message object with comprehensive metadata
    const userMessageObj: ChatMessage = {
      role: 'user', 
      content: userMessage,
      timestamp: new Date().toISOString(),
      language: detectedLang,
      enhancedDetection: enhancedServiceDetection,
      detectedService: enhancedServiceDetection.service,
      detectionConfidence: enhancedServiceDetection.confidence,
      detectionMethod: enhancedServiceDetection.detectionMethod,
      matchedTerms: enhancedServiceDetection.matchedTerms,
      alternativeServices: enhancedServiceDetection.alternativeServices,
      contextInfluence: enhancedServiceDetection.contextInfluence,
      serviceContext: updatedServiceContext.currentService,
      confidence: enhancedServiceDetection.confidence,
      intentAnalysis: intentAnalysis
    };
    
    // Add message using conversation manager utility
    setChatMessages(prev => addMessageToConversation(prev, userMessageObj));
    
    // Prune conversation if it gets too long
    setChatMessages((prev: ChatMessage[]) => pruneConversation(prev, maxMessages));
    
    setMessage('');
    setIsTyping(true);
    
    // Update conversation stats and patterns after user message
    setTimeout(() => {
      setChatMessages(currentMessages => {
        const updatedStats = getConversationStats(currentMessages, updatedServiceContext);
        const updatedPatterns = detectConversationPatterns(currentMessages);
        
        setConversationStats(updatedStats);
        setConversationPatterns(updatedPatterns);
        
        return currentMessages;
      });
    }, 100);
    
    // Scroll to bottom immediately after sending message
    setTimeout(() => {
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
    
    // Enhanced response generation with confidence-aware processing
    setTimeout(() => {
      try {
        const generatedResponse: GeneratedResponse = generateContextualResponse({
          userMessage,
          serviceDetection: enhancedServiceDetection,
          intentAnalysis,
          chatbotData,
          language: detectedLang,
          serviceContext: updatedServiceContext,
          pricingData: pricingData
        });

        // Update service context with last response for contextual follow-ups
        const contextWithLastResponse: ServiceContext = {
          ...updatedServiceContext,
          lastResponse:generatedResponse.text,
        };

        setServiceContext(contextWithLastResponse);
        
        // Validate the generated response
        if (!validateResponse(generatedResponse)) {
          console.warn('Generated response validation failed, falling back to enhanced processing');
          throw new Error('Invalid response structure');
        }
        
        // Use the generated response
        let finalResponse = generatedResponse.text;
        let responseMetadata = generatedResponse.metadata || {};
        
        // Enhanced metadata with detection details
        responseMetadata.enhancedDetection = enhancedServiceDetection;
        responseMetadata.detectionSummary = getDetectionSummary(enhancedServiceDetection);
        
        // Add confidence-based response enhancement
        if (enhancedServiceDetection.confidence > 0.8 && enhancedServiceDetection.service) {
          const confidenceNote = detectedLang === 'sw' ? 
            `\n\n✨ Nina uhakika wa ${Math.round(enhancedServiceDetection.confidence * 100)}% kuwa unahitaji msaada wa ${enhancedServiceDetection.service}.` :
            `\n\n✨ I'm ${Math.round(enhancedServiceDetection.confidence * 100)}% confident you need help with ${enhancedServiceDetection.service}.`;
          
          finalResponse += confidenceNote;
        }
        
        // Add alternative services suggestion for medium confidence
        if (enhancedServiceDetection.confidence > 0.4 && 
            enhancedServiceDetection.confidence < 0.7 && 
            enhancedServiceDetection.alternativeServices.length > 0) {
          
          const alternatives = enhancedServiceDetection.alternativeServices
            .slice(0, 2)
            .map(alt => alt.service)
            .join(', ');
          
          const alternativeNote = detectedLang === 'sw' ? 
            `\n\n🤔 Au labda unahitaji msaada wa: ${alternatives}?` :
            `\n\n🤔 Or perhaps you need help with: ${alternatives}?`;
          
          finalResponse += alternativeNote;
        }
        
        // Create bot message object with comprehensive metadata
        const botMessageObj: ChatMessage = {
          role: 'bot', 
          content: finalResponse,
          timestamp: new Date().toISOString(),
          language: detectedLang,
          serviceContext: updatedServiceContext.currentService,
          conversationDepth: updatedServiceContext.conversationDepth,
          responseType: generatedResponse.type,
          responseMetadata: responseMetadata,
          insights: getConversationInsights(updatedServiceContext),
          enhancedDetection: enhancedServiceDetection,
          detectionSummary: getDetectionSummary(enhancedServiceDetection),
          confidenceLevel: enhancedServiceDetection.confidence > 0.8 ? 'high' : 
                          enhancedServiceDetection.confidence > 0.4 ? 'medium' : 'low'
        };
        
        // Add bot message using conversation manager and handle auto-save
        setChatMessages(prev => {
          const updatedMessages = addMessageToConversation(prev, botMessageObj);
          
          // Auto-save conversation after bot response
          saveConversationState(updatedMessages, updatedServiceContext, null, detectedLang);
          
          // Update stats after bot response
          const newStats = getConversationStats(updatedMessages, updatedServiceContext);
          const newPatterns = detectConversationPatterns(updatedMessages);
          
          setConversationStats(newStats);
          setConversationPatterns(newPatterns);
          
          return updatedMessages;
        });
        
        // Enhanced smart suggestion generation using the new suggestion engine
        const smartSuggestions = generateSmartSuggestions(
          updatedServiceContext,
          updatedServiceContext.conversationDepth,
          detectedLang,
          userMessage,
          chatMessages,
          
Object.keys(chatbotData.serviceKeywords?.[language] || chatbotData.serviceKeywords?.en || {})

        );

        // Generate follow-up suggestions based on bot response
        let followUpSuggestions: string[] = [];
        if (finalResponse) {
          followUpSuggestions = generateFollowUpSuggestions(
            finalResponse,
            updatedServiceContext.currentService,
            detectedLang,
            updatedServiceContext.conversationDepth
          );
        }

        // Combine smart suggestions with follow-up suggestions
        const contextualPrompts = [
          ...smartSuggestions,
          ...followUpSuggestions.slice(0, 2)
        ].slice(0, 4);

        // Fallback to default if no suggestions generated
        const finalSuggestions = contextualPrompts.length > 0 ? 
          contextualPrompts : 
          chatbotData.prompts[detectedLang];

        setSuggestions(finalSuggestions);
        
        // Enhanced active service setting based on confidence
        if (generatedResponse.service) {
          setActiveService(generatedResponse.service);
        } else if (enhancedServiceDetection.confidence > 0.6 && enhancedServiceDetection.service) {
          setActiveService(enhancedServiceDetection.service);
        } else if (updatedServiceContext.currentService) {
          setActiveService(updatedServiceContext.currentService);
        }
        
        console.log('Enhanced response generated successfully:', {
          type: generatedResponse.type,
          service: generatedResponse.service,
          confidence: enhancedServiceDetection.confidence,
          method: enhancedServiceDetection.detectionMethod,
          alternatives: enhancedServiceDetection.alternativeServices.length,
          metadata: responseMetadata,
          conversationLength: chatMessages.length + 2,
        });
        
      } catch (error) {
        console.error('Error in enhanced response generation, falling back to basic processing:', error);
        
        // Enhanced fallback processing with detection results
        let responseData = processUserMessage(userMessage, chatbotData, detectedLang);
        let finalResponse = responseData.text;
        
        // Enhanced response with service context and pricing information (fallback)
        if (enhancedServiceDetection.service && isPricingInquiry(userMessage, detectedLang)) {
          const pricingResponse = generatePricingResponse(enhancedServiceDetection.service ?? '', detectedLang, pricingData);
          finalResponse = pricingResponse;
        } else if (enhancedServiceDetection.service && !isPricingInquiry(userMessage, detectedLang)) {
          const serviceResponse = getServiceResponse(enhancedServiceDetection.service ?? '', chatbotData, detectedLang);
          if (serviceResponse && serviceResponse !== responseData.text) {
            finalResponse = serviceResponse;
          }
        }
        
        // Add conversation insights for high engagement (fallback)
        const insights = getConversationInsights(updatedServiceContext);
        if (insights.insights.includes('Deep engagement detected')) {
          const engagementNote = detectedLang === 'sw' ? 
            '\n\n💡 Ninaona una maswali mengi. Je, ungependa kuongea na mtaalamu wetu moja kwa moja?' :
            '\n\n💡 I can see you have many questions. Would you like to speak with our specialist directly?';
          finalResponse += engagementNote;
        }
        
        // Update service context with fallback response info
        const fallbackContextWithLastResponse: ServiceContext = {
          ...updatedServiceContext,
          lastResponse: finalResponse
        };

        setServiceContext(fallbackContextWithLastResponse);
        
        // Enhanced fallback message with detection info using conversation manager
        const fallbackBotMessageObj: ChatMessage = {
          role: 'bot', 
          content: finalResponse,
          timestamp: new Date().toISOString(),
          language: detectedLang,
          serviceContext: updatedServiceContext.currentService,
          conversationDepth: updatedServiceContext.conversationDepth,
          insights: insights,
          fallbackUsed: true,
          enhancedDetection: enhancedServiceDetection,
          detectionSummary: getDetectionSummary(enhancedServiceDetection)
        };
        
        // Add fallback message using conversation manager
        setChatMessages(prev => {
          const updatedMessages = addMessageToConversation(prev, fallbackBotMessageObj);
          
          // Auto-save even on fallback
          saveConversationState(updatedMessages, updatedServiceContext, null, detectedLang);
          
          // Update stats after fallback response
          const newStats = getConversationStats(updatedMessages, updatedServiceContext);
          const newPatterns = detectConversationPatterns(updatedMessages);
          
          setConversationStats(newStats);
          setConversationPatterns(newPatterns);
          
          return updatedMessages;
        });
        
        // Smart suggestions even in fallback mode
        const fallbackSuggestions = generateSmartSuggestions(
          updatedServiceContext,
          updatedServiceContext.conversationDepth,
          detectedLang,
          userMessage,
          chatMessages,
          Object.keys(chatbotData.serviceKeywords || {})
        );

        setSuggestions(fallbackSuggestions.length > 0 ? 
          fallbackSuggestions : 
          (responseData.suggestions || chatbotData.prompts[detectedLang])
        );
        setActiveService(enhancedServiceDetection.service || updatedServiceContext.currentService || '');
      }
      
      setIsTyping(false);
    }, 1500);
    
  }, [
    message, isClosing, language, serviceContext, chatMessages, detectionHistory,
    setMessage, setServiceContext, setChatMessages, setIsTyping, setSuggestions,
    setActiveService, setDetectionHistory, setCurrentDetectionResult,
    setConversationStats, setConversationPatterns, maxMessages, chatEndRef, pricingData
  ]);

  return { handleMessageSend };
};