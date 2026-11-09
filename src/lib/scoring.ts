import { QuizQuestion, PersonalityOutcome, KnowledgeTier, QuizResultData, ChallengeData } from '../types/quiz';

export interface KnowledgeScoreResult {
  score: number;
  total: number;
  percentage: number;
  correctAnswers: number[];
  incorrectAnswers: number[];
  tier: KnowledgeTier;
}

export interface PersonalityScoreResult {
  matchedOutcome: PersonalityOutcome;
  traitScores: Record<string, number>;
  topTrait: string;
}

const fallbackTier: KnowledgeTier = {
  minPercent: 0,
  maxPercent: 100,
  title: 'Quiz Participant',
  badgeColor: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
  description: 'Great job completing this challenge!',
  advice: 'Review your results to continue expanding your knowledge.'
};

/**
 * Calculates knowledge quiz score, percentage, correct/incorrect indexes, and performance tier.
 */
export function calculateKnowledgeScore(
  questions: QuizQuestion[],
  selectedAnswers: number[],
  tiers?: KnowledgeTier[]
): KnowledgeScoreResult {
  const total = questions.length;
  if (total === 0) {
    return {
      score: 0,
      total: 0,
      percentage: 0,
      correctAnswers: [],
      incorrectAnswers: [],
      tier: fallbackTier
    };
  }

  let score = 0;
  const correctAnswers: number[] = [];
  const incorrectAnswers: number[] = [];

  questions.forEach((q, idx) => {
    const selected = selectedAnswers[idx];
    if (q.correctIndex !== undefined && selected === q.correctIndex) {
      score++;
      correctAnswers.push(idx);
    } else {
      incorrectAnswers.push(idx);
    }
  });

  const percentage = Math.round((score / total) * 100);
  const tier = getKnowledgeTier(percentage, tiers);

  return {
    score,
    total,
    percentage,
    correctAnswers,
    incorrectAnswers,
    tier
  };
}

/**
 * Selects the appropriate knowledge tier based on percentage.
 */
export function getKnowledgeTier(percentage: number, tiers?: KnowledgeTier[]): KnowledgeTier {
  if (!tiers || tiers.length === 0) return fallbackTier;
  const found = tiers.find(t => percentage >= t.minPercent && percentage <= t.maxPercent);
  return found || tiers[tiers.length - 1] || fallbackTier;
}

/**
 * Calculates dominant personality archetype from weighted trait selections.
 */
export function calculatePersonalityOutcome(
  questions: QuizQuestion[],
  selectedAnswers: number[],
  outcomes?: PersonalityOutcome[]
): PersonalityScoreResult {
  const traitScores: Record<string, number> = {};

  questions.forEach((q, idx) => {
    const selectedIdx = selectedAnswers[idx];
    if (selectedIdx !== undefined && q.options[selectedIdx]) {
      const option = q.options[selectedIdx];
      const trait = option.trait || 'general';
      const points = option.points || 1;
      traitScores[trait] = (traitScores[trait] || 0) + points;
    }
  });

  // Find trait with maximum score
  let topTrait = '';
  let highestScore = -1;

  for (const [trait, count] of Object.entries(traitScores)) {
    if (count > highestScore) {
      highestScore = count;
      topTrait = trait;
    }
  }

  let matchedOutcome: PersonalityOutcome;
  if (outcomes && outcomes.length > 0) {
    matchedOutcome = outcomes.find(o => o.id === topTrait) || outcomes[0];
  } else {
    matchedOutcome = {
      id: topTrait || 'unique',
      name: 'Dynamic Individual',
      archetype: 'Multi-faceted',
      badgeColor: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
      summary: 'You display a unique blend of traits across multiple dimensions.',
      description: 'Your responses show nuanced adaptability depending on the situation.',
      strengths: ['Versatility', 'Adaptability', 'Broad perspective'],
      insights: ['Notice which environments activate your most confident self.'],
      recommendations: ['Continue cultivating your diverse interests and social connections.']
    };
  }

  return {
    matchedOutcome,
    traitScores,
    topTrait
  };
}

/**
 * Challenge URL helpers
 */
export function encodeChallengeUrl(
  quizSlug: string,
  challengerName: string,
  score: number,
  outcomeName?: string
): string {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://quiz.wdbloog.com';
  const params = new URLSearchParams();
  params.set('challenger', challengerName.trim() || 'A Friend');
  params.set('score', score.toString());
  if (outcomeName) {
    params.set('outcome', outcomeName);
  }
  return `${origin}/quiz/${quizSlug}?${params.toString()}`;
}

export function decodeChallengeFromSearch(search: string): ChallengeData | null {
  if (!search) return null;
  const params = new URLSearchParams(search);
  const challengerName = params.get('challenger');
  const scoreStr = params.get('score');
  const outcomeName = params.get('outcome') || undefined;

  if (challengerName && scoreStr !== null) {
    const challengerScore = parseInt(scoreStr, 10);
    return {
      quizSlug: '',
      challengerName: decodeURIComponent(challengerName),
      challengerScore: isNaN(challengerScore) ? 0 : challengerScore,
      outcomeName: outcomeName ? decodeURIComponent(outcomeName) : undefined
    };
  }
  return null;
}

/**
 * LocalStorage Persistence for Quiz History and Completed Quizzes
 */
const STORAGE_KEY = 'quizora_completed_quizzes_v1';

export function saveQuizResult(result: QuizResultData): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = getQuizResults();
    // Filter out previous result for the same quiz to update with newest
    const updated = [result, ...existing.filter(r => r.quizSlug !== result.quizSlug)].slice(0, 30);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn('Failed to save quiz result to localStorage:', e);
  }
}

export function getQuizResults(): QuizResultData[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.warn('Failed to read quiz results from localStorage:', e);
    return [];
  }
}

export function getQuizResultForSlug(slug: string): QuizResultData | undefined {
  const results = getQuizResults();
  return results.find(r => r.quizSlug === slug);
}
