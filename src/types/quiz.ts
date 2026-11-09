export type QuizType = 'knowledge' | 'personality';
export type QuizDifficulty = 'Easy' | 'Medium' | 'Hard';

export interface QuizOption {
  text: string;
  trait?: string; // For personality scoring (e.g. 'analyst', 'diplomat')
  points?: number; // Optional point value
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: QuizOption[];
  correctIndex?: number; // For knowledge quizzes
  explanation?: string; // Explanation shown after answering or on review
  hint?: string;
}

export interface PersonalityOutcome {
  id: string;
  name: string;
  archetype: string;
  badgeColor: string;
  summary: string;
  description: string;
  strengths: string[];
  insights: string[];
  recommendations: string[];
}

export interface KnowledgeTier {
  minPercent: number;
  maxPercent: number;
  title: string;
  badgeColor: string;
  description: string;
  advice: string;
}

export interface Quiz {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  categorySlug: string;
  categoryName: string;
  type: QuizType;
  estimatedTime: string;
  difficulty: QuizDifficulty;
  gradient: string;
  accentColor: string;
  iconName: string;
  playsCount: number;
  featured?: boolean;
  trending?: boolean;
  questions: QuizQuestion[];
  outcomes?: PersonalityOutcome[];
  knowledgeTiers?: KnowledgeTier[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  iconName: string;
  gradient: string;
  accentColor: string;
  quizCount: number;
  faqs: { question: string; answer: string }[];
}

export interface QuizResultData {
  quizSlug: string;
  quizTitle: string;
  type: QuizType;
  scorePercent?: number;
  correctCount?: number;
  totalQuestions: number;
  outcome?: PersonalityOutcome;
  tier?: KnowledgeTier;
  selectedAnswers: number[];
  completedAt: string;
  challengerName?: string;
  challengerScore?: number;
}

export interface ChallengeData {
  quizSlug: string;
  challengerName: string;
  challengerScore: number;
  outcomeName?: string;
}
