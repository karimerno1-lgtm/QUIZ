import { Quiz } from '../../types/quiz';
import { personalityQuizzes } from './personalityQuizzes';
import { loveQuizzes } from './loveQuizzes';
import { generalKnowledgeQuizzes } from './generalKnowledgeQuizzes';
import { brainQuizzes } from './brainQuizzes';
import { entertainmentQuizzes } from './entertainmentQuizzes';
import { sportsQuizzes } from './sportsQuizzes';
import { socialQuizzes } from './socialQuizzes';

export const ALL_QUIZZES: Quiz[] = [
  ...personalityQuizzes,
  ...loveQuizzes,
  ...generalKnowledgeQuizzes,
  ...brainQuizzes,
  ...entertainmentQuizzes,
  ...sportsQuizzes,
  ...socialQuizzes
];

export function getAllQuizzes(): Quiz[] {
  return ALL_QUIZZES;
}

export function getQuizBySlug(slug: string): Quiz | undefined {
  return ALL_QUIZZES.find(q => q.slug === slug);
}

export function getQuizzesByCategory(categorySlug: string): Quiz[] {
  return ALL_QUIZZES.filter(q => q.categorySlug === categorySlug);
}

export function getFeaturedQuizzes(): Quiz[] {
  return ALL_QUIZZES.filter(q => q.featured);
}

export function getTrendingQuizzes(): Quiz[] {
  return ALL_QUIZZES.filter(q => q.trending);
}

export function getPopularQuizzes(): Quiz[] {
  return [...ALL_QUIZZES].sort((a, b) => b.playsCount - a.playsCount).slice(0, 6);
}

export function getRecentQuizzes(): Quiz[] {
  // Return the last 6 quizzes added across the categories
  return [...ALL_QUIZZES].reverse().slice(0, 6);
}

export function getRelatedQuizzes(currentSlug: string, categorySlug: string, limit = 3): Quiz[] {
  const sameCategory = ALL_QUIZZES.filter(q => q.slug !== currentSlug && q.categorySlug === categorySlug);
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const others = ALL_QUIZZES.filter(q => q.slug !== currentSlug && q.categorySlug !== categorySlug);
  return [...sameCategory, ...others].slice(0, limit);
}

export function searchQuizzes(query: string, categorySlug?: string): Quiz[] {
  const q = query.trim().toLowerCase();
  return ALL_QUIZZES.filter(quiz => {
    const matchesCategory = !categorySlug || categorySlug === 'all' || quiz.categorySlug === categorySlug;
    if (!matchesCategory) return false;
    if (!q) return true;
    return (
      quiz.title.toLowerCase().includes(q) ||
      quiz.description.toLowerCase().includes(q) ||
      quiz.categoryName.toLowerCase().includes(q) ||
      quiz.tagline.toLowerCase().includes(q)
    );
  });
}
