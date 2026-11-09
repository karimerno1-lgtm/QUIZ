import React, { useState, useMemo, useEffect } from 'react';
import { ALL_QUIZZES } from '../data/quizzes';
import { CATEGORIES } from '../data/categories';
import { QuizCard } from '../components/QuizCard';
import { SearchBar } from '../components/SearchBar';
import { Breadcrumb } from '../components/Breadcrumb';
import { setPageSeo } from '../lib/router';
import { AdUnit } from '../components/AdUnit';
import { SlidersHorizontal } from 'lucide-react';

export const AllQuizzesPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'questions' | 'alpha'>('popular');

  useEffect(() => {
    setPageSeo(
      'All 21 Interactive Quizzes – Quizora',
      'Browse our complete library of 21 interactive personality tests, trivia challenges, IQ riddles, and relationship quizzes.',
      '/quizzes'
    );
  }, []);

  const filteredQuizzes = useMemo(() => {
    let list = ALL_QUIZZES.filter((q) => {
      const matchCat = selectedCategory === 'all' || q.categorySlug === selectedCategory;
      if (!matchCat) return false;
      if (!query.trim()) return true;
      const lower = query.toLowerCase();
      return (
        q.title.toLowerCase().includes(lower) ||
        q.description.toLowerCase().includes(lower) ||
        q.categoryName.toLowerCase().includes(lower)
      );
    });

    if (sortBy === 'popular') {
      list = [...list].sort((a, b) => b.playsCount - a.playsCount);
    } else if (sortBy === 'questions') {
      list = [...list].sort((a, b) => b.questions.length - a.questions.length);
    } else if (sortBy === 'alpha') {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [query, selectedCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: 'All Quizzes' }]} />

      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Explore All 21 Quizzes
        </h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          Discover yourself through personality archetypes, challenge your intellect with world trivia, or test your friend group dynamics.
        </p>

        <div className="mt-6">
          <SearchBar query={query} onQueryChange={setQuery} placeholder="Filter all 21 quizzes by keyword..." />
        </div>
      </div>

      {/* Filter and Sorting Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        
        {/* Category Segmented Tabs (Functional filter buttons per frontend-design) */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All ({ALL_QUIZZES.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors ${
                selectedCategory === cat.slug
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
          <SlidersHorizontal className="w-4 h-4 text-slate-400" />
          <span className="text-xs text-slate-500 font-medium">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'popular' | 'questions' | 'alpha')}
            className="text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-1.5 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="popular">Most Popular</option>
            <option value="questions">Question Count</option>
            <option value="alpha">Alphabetical (A-Z)</option>
          </select>
        </div>

      </div>

      {/* Quizzes Grid */}
      {filteredQuizzes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            No quizzes matched your criteria
          </h3>
          <p className="text-xs text-slate-500 mt-2">
            Try resetting your search query or choosing another category filter.
          </p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedCategory('all');
            }}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* AdSense Unit */}
      <AdUnit unitType="responsive" />
    </div>
  );
};
