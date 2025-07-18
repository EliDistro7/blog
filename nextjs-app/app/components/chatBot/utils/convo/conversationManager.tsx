// File: app/components/layout/ChatBot/utils/conversationManager.ts

import { createFreshServiceContext, validateServiceContext } from '@/utils/context/serviceContextUtils';

// Type definitions
export interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
  timestamp: string;
  language: string;
  id?: string;
  responseType?: string;
  detectedService?: string;
  serviceContext?: ServiceContext;
}

import { ServiceContext } from '@/utils/context/serviceContextUtils';

interface ConversationState {
  messages: ChatMessage[];
  serviceContext: ServiceContext;
  activeService: string | null;
  timestamp: string;
  language: string;
  version: string;
  suggestions?: string[];
}

interface ChatbotData {
  welcome: Record<string, string>;
  prompts: Record<string, string[]>;
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
 // insights: string[];
}

interface ConversationPatterns {
  isRepetitive: boolean;
  hasLongMessages: boolean;
  hasShortMessages: boolean;
  switchesLanguages: boolean;
  asksMultipleQuestions: boolean;
  showsDeepEngagement: boolean;
}

interface ExportOptions {
  includeMessages?: boolean;
  includeContext?: boolean;
  anonymize?: boolean;
}

interface ExportData {
  exportedAt: string;
  conversationId: string;
  stats: ConversationStats;
  patterns: ConversationPatterns;
  messages: ChatMessage[] | null;
  serviceContext: ServiceContext | null;
}

interface MessageOptions {
  [key: string]: any;
}

// In-memory storage for conversation state
let conversationMemoryStore: ConversationState | null = null;

/**
 * Save conversation state to memory
 * @param messages - Chat messages
 * @param serviceContext - Service context
 * @param activeService - Currently active service
 * @param language - Current language
 * @returns Success status
 */
export function saveConversationState(
  messages: ChatMessage[], 
  serviceContext: ServiceContext, 
  activeService: string | null, 
  language: string
): boolean {
  try {
    if (!messages || messages.length <= 1) {
      return false; // Don't save empty conversations
    }
    
    const conversationState: ConversationState = {
      messages: messages,
      serviceContext: serviceContext,
      activeService: activeService,
      timestamp: new Date().toISOString(),
      language: language,
      version: '1.0' // For future compatibility
    };
    
    // Store in memory instead of sessionStorage
    conversationMemoryStore = conversationState;
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Conversation saved successfully to memory');
    }
    
    return true;
  } catch (error) {
    console.warn('Failed to save conversation state:', error);
    return false;
  }
}




/**
 * Restore conversation state from memory
 * @param language - Current language
 * @returns Restored conversation state or null
 */
export function restoreConversationState(language: string): ConversationState | null {
  try {
    if (!conversationMemoryStore) {
      return null;
    }
    
    const conversationState = conversationMemoryStore;
    
    // Validate the restored data
    if (!conversationState.messages || !Array.isArray(conversationState.messages)) {
      console.warn('Invalid conversation state: missing or invalid messages');
      return null;
    }
    
    // Check if conversation is recent (within last hour)
    const savedTime = new Date(conversationState.timestamp);
    const currentTime = new Date();
    const timeDiff = currentTime.getTime() - savedTime.getTime();
    const oneHour = 60 * 60 * 1000;
    
    if (timeDiff > oneHour) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Conversation too old, not restoring');
      }
      return null;
    }
    
    // Validate service context
    const serviceContext = conversationState.serviceContext || createFreshServiceContext();
    if (!validateServiceContext(serviceContext)) {
      console.warn('Invalid service context in saved conversation, creating fresh context');
      conversationState.serviceContext = createFreshServiceContext();
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Conversation restored successfully from memory');
    }
    
    return conversationState;
  } catch (error) {
    console.warn('Failed to restore conversation state:', error);
    return null;
  }
}

/**
 * Clear saved conversation state
 */
export function clearConversationState(): void {
  try {
    conversationMemoryStore = null;
    if (process.env.NODE_ENV === 'development') {
      console.log('Conversation state cleared from memory');
    }
  } catch (error) {
    console.warn('Failed to clear conversation state:', error);
  }
}

/**
 * Create a fresh conversation state
 * @param chatbotData - Chatbot configuration data
 * @param language - Current language
 * @returns Fresh conversation state
 */
export function createFreshConversationState(
  chatbotData: ChatbotData, 
  language: string
): ConversationState {
  return {
    messages: [{ 
      role: 'bot', 
      content: chatbotData.welcome[language],
      timestamp: new Date().toISOString(),
      language: language
    }],
    serviceContext: createFreshServiceContext(),
    activeService: null,
    suggestions: chatbotData.prompts[language] || [],
    language: language,
    timestamp: new Date().toISOString(),
    version: '1.0'
  };
}

/**
 * Add message to conversation with metadata
 * @param currentMessages - Current message array
 * @param newMessage - New message to add
 * @param options - Additional options
 * @returns Updated messages array
 */
export function addMessageToConversation(
  currentMessages: ChatMessage[], 
  newMessage: ChatMessage, 
  options: MessageOptions = {}
): ChatMessage[] {
  const messageWithMetadata: ChatMessage = {
    ...newMessage,
    id: generateMessageId(),
    timestamp: newMessage.timestamp || new Date().toISOString(),
    ...options
  };
  
  return [...currentMessages, messageWithMetadata];
}

/**
 * Generate unique message ID
 * @returns Unique message ID
 */
function generateMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Get conversation statistics
 * @param messages - Chat messages
 * @param serviceContext - Service context
 * @returns Conversation statistics
 */
export function getConversationStats(
  messages: ChatMessage[], 
  serviceContext: ServiceContext
): ConversationStats {
  const userMessages = messages.filter(msg => msg.role === 'user');
  const botMessages = messages.filter(msg => msg.role === 'bot');
  
  // Calculate conversation duration
  const firstMessage = messages[0];
  const lastMessage = messages[messages.length - 1];
  const duration = firstMessage && lastMessage ? 
    new Date(lastMessage.timestamp).getTime() - new Date(firstMessage.timestamp).getTime() : 0;
  
  // Analyze message types
  const messageTypes = botMessages.reduce((acc: Record<string, number>, msg) => {
    const type = msg.responseType || 'general';
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});
  
  // Analyze languages used
  const languages = messages.reduce((acc: Record<string, number>, msg) => {
    if (msg.language) {
      acc[msg.language] = (acc[msg.language] || 0) + 1;
    }
    return acc;
  }, {});
  
  return {
    totalMessages: messages.length,
    userMessages: userMessages.length,
    botMessages: botMessages.length,
    conversationDepth: serviceContext.conversationDepth,
    servicesDiscussed: serviceContext.serviceHistory.length,
    currentService: serviceContext.currentService,
    duration: duration,
    messageTypes: messageTypes,
    languages: languages,
    //insights: serviceContext.insights || []
  };
}

/**
 * Detect conversation patterns
 * @param messages - Chat messages
 * @returns Detected patterns
 */
export function detectConversationPatterns(messages: ChatMessage[]): ConversationPatterns {
  const userMessages = messages.filter(msg => msg.role === 'user');
  const patterns: ConversationPatterns = {
    isRepetitive: false,
    hasLongMessages: false,
    hasShortMessages: false,
    switchesLanguages: false,
    asksMultipleQuestions: false,
    showsDeepEngagement: false
  };
  
  if (userMessages.length < 2) {
    return patterns;
  }
  
  // Check for repetitive messages
  const messageSimilarity = userMessages.slice(1).some((msg, index) => {
    const prevMsg = userMessages[index];
    return calculateStringSimilarity(msg.content.toLowerCase(), prevMsg.content.toLowerCase()) > 0.8;
  });
  patterns.isRepetitive = messageSimilarity;
  
  // Check message lengths
  const avgLength = userMessages.reduce((sum, msg) => sum + msg.content.length, 0) / userMessages.length;
  patterns.hasLongMessages = userMessages.some(msg => msg.content.length > avgLength * 2);
  patterns.hasShortMessages = userMessages.some(msg => msg.content.length < avgLength * 0.5);
  
  // Check for language switching
  const languages = new Set(userMessages.map(msg => msg.language).filter(Boolean));
  patterns.switchesLanguages = languages.size > 1;
  
  // Check for multiple questions
  patterns.asksMultipleQuestions = userMessages.some(msg => 
    (msg.content.match(/\?/g) || []).length > 1
  );
  
  // Check for deep engagement (multiple follow-up questions)
  patterns.showsDeepEngagement = userMessages.length > 5 && 
    userMessages.slice(-3).every(msg => msg.detectedService);
  
  return patterns;
}

/**
 * Calculate string similarity (simple implementation)
 * @param str1 - First string
 * @param str2 - Second string
 * @returns Similarity score (0-1)
 */
function calculateStringSimilarity(str1: string, str2: string): number {
  if (str1 === str2) return 1;
  if (str1.length === 0 || str2.length === 0) return 0;
  
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) return 1;
  
  const distance = levenshteinDistance(longer, shorter);
  return (longer.length - distance) / longer.length;
}

/**
 * Calculate Levenshtein distance between two strings
 * @param str1 - First string
 * @param str2 - Second string
 * @returns Edit distance
 */
function levenshteinDistance(str1: string, str2: string): number {
  const matrix: number[][] = [];
  
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[str2.length][str1.length];
}

/**
 * Prune old conversation data to prevent memory issues
 * @param messages - Current messages
 * @param maxMessages - Maximum messages to keep
 * @returns Pruned messages
 */
export function pruneConversation(
  messages: ChatMessage[], 
  maxMessages: number = 50
): ChatMessage[] {
  if (messages.length <= maxMessages) {
    return messages;
  }
  
  // Always keep the first message (welcome message)
  const welcomeMessage = messages[0];
  const recentMessages = messages.slice(-(maxMessages - 1));
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`Pruned conversation from ${messages.length} to ${maxMessages} messages`);
  }
  
  return [welcomeMessage, ...recentMessages];
}

/**
 * Export conversation for analysis or support
 * @param messages - Chat messages
 * @param serviceContext - Service context
 * @param options - Export options
 * @returns Exportable conversation data
 */
export function exportConversation(
  messages: ChatMessage[], 
  serviceContext: ServiceContext, 
  options: ExportOptions = {}
): ExportData {
  const stats = getConversationStats(messages, serviceContext);
  const patterns = detectConversationPatterns(messages);
  
  const exportData: ExportData = {
    exportedAt: new Date().toISOString(),
    conversationId: generateMessageId(),
    stats: stats,
    patterns: patterns,
    messages: options.includeMessages ? messages.map(msg => ({
      role: msg.role,
      content: options.anonymize ? anonymizeContent(msg.content) : msg.content,
      timestamp: msg.timestamp,
      language: msg.language,
      serviceContext: msg.serviceContext
    })) : null,
    serviceContext: options.includeContext ? serviceContext : null
  };
  
  return exportData;
}

/**
 * Anonymize sensitive content for export
 * @param content - Original content
 * @returns Anonymized content
 */
function anonymizeContent(content: string): string {
  return content
    .replace(/\b[\w._%+-]+@[\w.-]+\.[A-Z|a-z]{2,}\b/g, '[EMAIL]')
    .replace(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g, '[PHONE]')
    .replace(/\b\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\b/g, '[CARD_NUMBER]');
}