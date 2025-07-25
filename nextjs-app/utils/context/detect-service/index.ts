import { preprocessMessage } from '../helpers';
import { calculateKeywordScore } from '../helpers';
import { serviceDetectionPatterns } from '../patterns';

// Type definitions
interface KeywordAnalysis {
  relevanceScore: number;
  densityScore: number;
  totalMatches: number;
  exactMatches: number;
  matchedKeywords: string[];
}

interface ServiceLanguageData {
  keywords: string[];
  patterns: RegExp[];
  negativePatterns?: RegExp[];
}

interface ServiceData {
  [key: string]: ServiceLanguageData;
  en: ServiceLanguageData;
}

interface ServiceDetectionPatterns {
  [serviceName: string]: ServiceData;
}

interface DetectionDetails {
  method: string;
  reason?: string;
  keywordMatches?: number;
  exactMatches?: number;
  patternMatches?: number;
  densityScore?: number;
  confidence_level?: 'low' | 'medium' | 'high';
  suggestion?: string;
  processedMessage?: string;
}

export interface ServiceDetectionResult {
  service: string | null;
  confidence: number;
  matchedTerms: string[];
  patterns: string[];
  details: DetectionDetails;
}

interface ServiceMatch {
  service: string;
  confidence: number;
  matchedTerms: string[];
  patterns: string[];
  details: DetectionDetails;
}

// Type guard to ensure calculateKeywordScore returns the expected structure
function isKeywordAnalysis(analysis: any): analysis is KeywordAnalysis {
  return analysis && 
         typeof analysis.relevanceScore === 'number' &&
         typeof analysis.densityScore === 'number' &&
         typeof analysis.totalMatches === 'number' &&
         typeof analysis.exactMatches === 'number' &&
         Array.isArray(analysis.matchedKeywords);
}

/**
 * Enhanced service detection with improved accuracy and confidence scoring
 * @param userMessage - The user's message
 * @param language - Current language (en/sw)
 * @returns Detection result with service, confidence, and detailed match info
 */
export const detectServiceFromMessage = (
  userMessage: string, 
  language: string = 'en'
): ServiceDetectionResult => {
  if (!userMessage || typeof userMessage !== 'string') {
    return { 
      service: null, 
      confidence: 0, 
      matchedTerms: [], 
      patterns: [],
      details: { method: 'none', reason: 'Invalid input' }
    };
  }

  const originalMessage: string = userMessage.trim();
  const processedMessage: string = preprocessMessage(userMessage, language);
  const detectedServices: ServiceMatch[] = [];

  // Check each service for matches
  Object.entries(serviceDetectionPatterns as ServiceDetectionPatterns).forEach(([serviceName, serviceData]) => {
    const langData: ServiceLanguageData = serviceData[language] || serviceData.en;
    const { keywords, patterns, negativePatterns = [] } = langData;

    // Check for negative patterns first (exclusion logic)
    const hasNegativeMatch: boolean = negativePatterns.some((pattern: RegExp) => 
      pattern.test(originalMessage) || pattern.test(processedMessage)
    );
    
    if (hasNegativeMatch) {
      return; // Skip this service if negative pattern matches
    }

    // Calculate keyword matches with improved scoring
    const keywordAnalysis = calculateKeywordScore(processedMessage, keywords, language);
    
    // Type guard to ensure we have the expected structure
    if (!isKeywordAnalysis(keywordAnalysis)) {
      console.warn(`Invalid keyword analysis result for service: ${serviceName}`);
      return;
    }
    
    // Check pattern matches
    let patternMatches: number = 0;
    const matchedPatterns: string[] = [];
    
    patterns.forEach((pattern: RegExp) => {
      if (pattern.test(originalMessage) || pattern.test(processedMessage)) {
        patternMatches++;
        matchedPatterns.push(pattern.source);
      }
    });

    // Enhanced confidence calculation
    const baseConfidence: number = keywordAnalysis.relevanceScore + (patternMatches * 5);
    const densityBonus: number = Math.min(keywordAnalysis.densityScore * 0.1, 2);
    const exactMatchBonus: number = keywordAnalysis.exactMatches * 2;
    
    const finalConfidence: number = baseConfidence + densityBonus + exactMatchBonus;

    if (finalConfidence > 0) {
      detectedServices.push({
        service: serviceName,
        confidence: Math.round(finalConfidence * 100) / 100, // Round to 2 decimal places
        matchedTerms: keywordAnalysis.matchedKeywords,
        patterns: matchedPatterns,
        details: {
          keywordMatches: keywordAnalysis.totalMatches,
          exactMatches: keywordAnalysis.exactMatches,
          patternMatches,
          densityScore: Math.round(keywordAnalysis.densityScore * 100) / 100,
          method: patternMatches > 0 ? 'pattern+keyword' : 'keyword-only'
        }
      });
    }
  });

  // Sort by confidence score (highest first)
  detectedServices.sort((a: ServiceMatch, b: ServiceMatch) => b.confidence - a.confidence);

  // Return the best match or null result
  if (detectedServices.length > 0) {
    const bestMatch: ServiceMatch = detectedServices[0];
    
    // Add additional context if confidence is low
    if (bestMatch.confidence < 3) {
      bestMatch.details.confidence_level = 'low';
      bestMatch.details.suggestion = 'Consider asking for clarification';
    } else if (bestMatch.confidence < 7) {
      bestMatch.details.confidence_level = 'medium';
    } else {
      bestMatch.details.confidence_level = 'high';
    }
    
    return bestMatch;
  }

  return {
    service: null,
    confidence: 0,
    matchedTerms: [],
    patterns: [],
    details: { 
      method: 'no-match', 
      reason: 'No service patterns or keywords detected',
      processedMessage: processedMessage.substring(0, 100) + (processedMessage.length > 100 ? '...' : '')
    }
  };
};