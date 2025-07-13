import { questionPatterns } from './patterns';

// Type definitions
interface QuestionPatterns {
  [questionType: string]: {
    [language: string]: RegExp[];
  };
}

export interface QuestionMatch {
  type: string;
  confidence: number;
  matches: number;
}



export interface QuestionTypeAnalysis {
  type: string | null;
  confidence: number;
  matches?: QuestionMatch[]; // Change to array of match objects instead of just number
}

/**
 * Detect question type from user message
 * @param message - User's message
 * @param language - Language code
 * @returns Question type and confidence
 */

// And update your detectQuestionType function to return the full results:
export const detectQuestionType = (message: string, language: string = 'en'): QuestionTypeAnalysis => {
  if (!message) return { type: null, confidence: 0, matches: [] };

  const messageLower: string = message.toLowerCase();
  const results: QuestionMatch[] = [];

  const patterns = questionPatterns as QuestionPatterns;

  Object.entries(patterns).forEach(([questionType, langPatterns]) => {
    const questionTypePatterns: RegExp[] = langPatterns[language] || langPatterns.en;
    let matchCount: number = 0;
    
    questionTypePatterns.forEach((pattern: RegExp) => {
      if (pattern.test(messageLower)) {
        matchCount++;
      }
    });

    if (matchCount > 0) {
      results.push({
        type: questionType,
        confidence: matchCount * 100,
        matches: matchCount
      });
    }
  });

  // Sort by confidence and return best match
  results.sort((a: QuestionMatch, b: QuestionMatch) => b.confidence - a.confidence);
  
  if (results.length > 0) {
    const bestMatch = results[0];
    return {
      type: bestMatch.type,
      confidence: bestMatch.confidence,
      matches: results // Return all matches for metadata
    };
  }
  
  return { type: null, confidence: 0, matches: [] };
};