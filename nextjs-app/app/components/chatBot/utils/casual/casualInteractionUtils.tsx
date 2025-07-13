// Expanded conversation patterns
import { conversationPatterns } from './casualPatterns';

// Type definitions
interface ConversationPatterns {
  greetingPatterns: { [language: string]: RegExp[] };
  goodbyePatterns: { [language: string]: RegExp[] };
  appreciationPatterns: { [language: string]: RegExp[] };
  questionPatterns: { [language: string]: RegExp[] };
  affirmationPatterns: { [language: string]: RegExp[] };
  confusionPatterns: { [language: string]: RegExp[] };
}

export interface CasualInteractionAnalysis {
  isCasualInteraction: boolean;
  interactionType: string | null;
  isGreeting: boolean;
  isGoodbye: boolean;
  isAppreciation: boolean;
  isQuestion: boolean;
  isAffirmation: boolean;
  isConfusion: boolean;
}

interface ServiceContext {
  conversationDepth: number;
  serviceHistory: string[];
}

interface CasualResponseMetadata {
  conversationDepth: number;
  servicesDiscussed: string[];
  casualInteraction: boolean;
}

export interface CasualResponse {
  text: string;
  type: string;
  interactionType: string;
  metadata: CasualResponseMetadata;
}

/**
 * Analyze if message is a casual interaction (greeting, goodbye, etc.)
 * @param message - User message
 * @param language - Current language
 * @returns Casual interaction analysis
 */
export function analyzeCasualInteraction(message: string, language: string): CasualInteractionAnalysis {
  const messageText: string = message.toLowerCase().trim();
  
  const patterns = conversationPatterns as ConversationPatterns;
  
  const langGreetings: RegExp[] = patterns.greetingPatterns[language] || patterns.greetingPatterns['en'];
  const langGoodbyes: RegExp[] = patterns.goodbyePatterns[language] || patterns.goodbyePatterns['en'];
  const langAppreciation: RegExp[] = patterns.appreciationPatterns[language] || patterns.appreciationPatterns['en'];
  const langQuestions: RegExp[] = patterns.questionPatterns[language] || patterns.questionPatterns['en'];
  const langAffirmations: RegExp[] = patterns.affirmationPatterns[language] || patterns.affirmationPatterns['en'];
  const langConfusion: RegExp[] = patterns.confusionPatterns[language] || patterns.confusionPatterns['en'];
  
  const isGreeting: boolean = langGreetings.some((pattern: RegExp) => pattern.test(messageText));
  const isGoodbye: boolean = langGoodbyes.some((pattern: RegExp) => pattern.test(messageText));
  const isAppreciation: boolean = langAppreciation.some((pattern: RegExp) => pattern.test(messageText));
  const isQuestion: boolean = langQuestions.some((pattern: RegExp) => pattern.test(messageText));
  const isAffirmation: boolean = langAffirmations.some((pattern: RegExp) => pattern.test(messageText));
  const isConfusion: boolean = langConfusion.some((pattern: RegExp) => pattern.test(messageText));
  
  const isCasualInteraction: boolean = isGreeting || isGoodbye || isAppreciation || isAffirmation || isConfusion;
  
  let interactionType: string | null = null;
  if (isGreeting) interactionType = 'greeting';
  else if (isGoodbye) interactionType = 'goodbye';
  else if (isAppreciation) interactionType = 'appreciation';
  else if (isAffirmation) interactionType = 'affirmation';
  else if (isConfusion) interactionType = 'confusion';
  
  return {
    isCasualInteraction,
    interactionType,
    isGreeting,
    isGoodbye,
    isAppreciation,
    isQuestion,
    isAffirmation,
    isConfusion
  };
}

/**
 * Generate casual interaction response
 * @param interactionAnalysis - Casual interaction analysis
 * @param serviceContext - Service context
 * @param language - Current language
 * @returns Casual response
 */
export function generateCasualResponse(
  interactionAnalysis: CasualInteractionAnalysis,
  serviceContext: ServiceContext,
  language: string
): CasualResponse {
  const { interactionType } = interactionAnalysis;
  
  let responseText: string = '';
  
  switch (interactionType) {
    case 'greeting':
      responseText = language === 'sw' ? 
        '👋 Hujambo! Karibu! Ninahitajika kukusaidia namna gani leo?' :
        '👋 Hello! Welcome! How can I help you today?';
      
      // Add context if returning user
      if (serviceContext.conversationDepth > 0) {
        const returningNote: string = language === 'sw' ? 
          '\n\nNinaona tumeongea hapo awali. Je, una swali lingine?' :
          '\n\nI see we\'ve chatted before. Do you have another question?';
        responseText += returningNote;
      }
      break;
      
    case 'goodbye':
      responseText = language === 'sw' ? 
        '👋 Kwaheri! Asante kwa mazungumzo. Karibu tena wakati wowote!' :
        '👋 Goodbye! Thanks for chatting. Feel free to come back anytime!';
      
      // Add summary if services were discussed
      if (serviceContext.serviceHistory.length > 0) {
        const summaryNote: string = language === 'sw' ? 
          `\n\n📋 Tumeongea kuhusu: ${serviceContext.serviceHistory.join(', ')}. Wasiliana nasi kwa maelezo zaidi!` :
          `\n\n📋 We discussed: ${serviceContext.serviceHistory.join(', ')}. Contact us for more details!`;
        responseText += summaryNote;
      }
      break;
      
    case 'appreciation':
      responseText = language === 'sw' ? 
        '😊 Karibu sana! Nimefurahi kukusaidia. Je, kuna kitu kingine?' :
        '😊 You\'re very welcome! I\'m glad I could help. Is there anything else?';
      
      // Encourage further engagement
      const encouragementNote: string = language === 'sw' ? 
        '\n\n💡 Kumbuka, unaweza kuniuliza chochote kuhusu huduma zetu wakati wowote.' :
        '\n\n💡 Remember, you can ask me anything about our services anytime.';
      responseText += encouragementNote;
      break;

    case 'affirmation':
      responseText = language === 'sw' ? 
        '✅ Vizuri! Tuendelee. Je, kuna kitu kingine unachohitaji?' :
        '✅ Great! Let\'s continue. Is there anything else you need?';
      break;

    case 'confusion':
      responseText = language === 'sw' ? 
        '🤔 Samahani kwa kukuchanganya. Nitajaribu kueleza vizuri zaidi. Ni sehemu gani hasa unayohitaji kufafanuliwa?' :
        '🤔 Sorry for the confusion. Let me try to explain better. Which part specifically would you like me to clarify?';
      
      // Offer to restart or simplify
      const clarificationOffer: string = language === 'sw' ? 
        '\n\n💡 Au ungependa tuanze upya kwa njia rahisi zaidi?' :
        '\n\n💡 Or would you like me to start over with a simpler explanation?';
      responseText += clarificationOffer;
      break;
  }
  
  return {
    text: responseText,
    type: 'casual',
    interactionType: interactionType || 'unknown',
    metadata: {
      conversationDepth: serviceContext.conversationDepth,
      servicesDiscussed: serviceContext.serviceHistory,
      casualInteraction: true
    }
  };
}