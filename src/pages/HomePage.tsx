import React, { useState, useEffect } from 'react';
import { useRouter, setPageSeo } from '../lib/router';
import {
  getFeaturedQuizzes,
  getTrendingQuizzes,
  getPopularQuizzes,
  getRecentQuizzes,
  searchQuizzes
} from '../data/quizzes';
import { CATEGORIES } from '../data/categories';
import { QuizCard } from '../components/QuizCard';
import { CategoryCard } from '../components/CategoryCard';
import { SearchBar } from '../components/SearchBar';
import { AdUnit } from '../components/AdUnit';
import {
  Sparkles,
  TrendingUp,
  Flame,
  Clock,
  ArrowRight,
  Send,
  Zap,
  ShieldCheck,
  Share2
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setPageSeo(
      'Quizora – Discover Yourself. Challenge Your Mind.',
      'Explore 21+ free interactive personality tests, trivia challenges, brain teasers, and love compatibility quizzes on Quizora. Challenge friends and share results.',
      '/'
    );
  }, []);

  const featuredQuizzes = getFeaturedQuizzes();
  const trendingQuizzes = getTrendingQuizzes();
  const popularQuizzes = getPopularQuizzes();
  const recentQuizzes = getRecentQuizzes();

  const searchResults = searchQuery.trim() ? searchQuizzes(searchQuery) : [];

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-indigo-50/50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Brand Tagline Header */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover. Challenge. Share.</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-[1.15]">
            Discover Yourself. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Challenge Your Mind.
            </span>
          </h1>

          {/* Introductory Paragraph */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Take 21+ original personality assessments, trivia challenges, and brain puzzles. Compete with friends, generate shareable results, and uncover your hidden potential.
          </p>

          {/* Prominent Search Bar */}
          <div className="mt-8">
            <SearchBar
              query={searchQuery}
              onQueryChange={setSearchQuery}
              placeholder="Search 21 quizzes (e.g. personality, geography, love languages)..."
            />
          </div>

          {/* Popular Search Tags */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>Popular topics:</span>
            {['True Personality', 'World Geography', 'Love Language', 'Logic Test', 'Football'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Real-time Search Results overlay if typing */}
      {searchQuery.trim() && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Search Results for &ldquo;{searchQuery}&rdquo;
            </h2>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Clear Search
            </button>
          </div>

          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((quiz) => (
                <QuizCard key={quiz.id} quiz={quiz} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
              <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
                No quizzes matched your search.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for broader keywords like &quot;trivia&quot;, &quot;personality&quot;, or &quot;football&quot;.
              </p>
            </div>
          )}
        </section>
      )}

      {/* 2. Featured Quizzes Section */}
      {!searchQuery.trim() && (
        <>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
                  <Sparkles className="w-4 h-4" />
                  Editor&apos;s Picks
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Featured Quizzes
                </h2>
              </div>
              <button
                onClick={() => navigate('/quizzes')}
                className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:translate-x-0.5 transition-transform"
              >
                <span>View all quizzes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredQuizzes.slice(0, 6).map((quiz) => (
                <QuizCard key={quiz.id} quiz={quiz} />
              ))}
            </div>
          </section>

          {/* AdSense Unit 1 (Autorelaxed between content sections) */}
          <AdUnit unitType="relaxed" />

          {/* 3. Browse Categories Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Explore Categories
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
                Seven curated disciplines designed to evaluate psychology, relationship dynamics, world knowledge, and brain power.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map((cat) => (
                <CategoryCard key={cat.id} category={cat} />
              ))}
            </div>
          </section>

          {/* 4. Trending & Popular Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
              <TrendingUp className="w-4 h-4" />
              Trending Right Now
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
              Community Favorites
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingQuizzes.slice(0, 6).map((quiz) => (
                <QuizCard key={quiz.id} quiz={quiz} />
              ))}
            </div>
          </section>

          {/* 5. How It Works Section */}
          <section id="how-it-works" className="w-full bg-slate-900 text-white py-16 my-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">
                  Simple & Instant
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight mt-2 text-white">
                  How Quizora Works
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  No account setup. No subscription. 100% private in-browser experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-base mb-4 font-mono">
                    01
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Pick a Quiz
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Choose from 21 original quizzes spanning personality profiles, relationship compatibility, geography, history, and cognitive riddles.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-base mb-4 font-mono">
                    02
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Instant Scoring & Insights
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Receive your verified percentage tier or multi-dimensional personality archetype with strengths, insights, and answers review.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-base mb-4 font-mono">
                    03
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    Challenge Friends & Share
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Export high-resolution Instagram & TikTok story cards, share to WhatsApp, or generate head-to-head challenge links.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Popular & Recently Added Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1">
              <Clock className="w-4 h-4" />
              Fresh Content
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
              Recently Added Quizzes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentQuizzes.map((quiz) => (
                <QuizCard key={quiz.id} quiz={quiz} />
              ))}
            </div>
          </section>

          {/* AdSense Unit 2 (Responsive) */}
          <AdUnit unitType="responsive" />

          {/* 7. Social Sharing Encouragement & Challenge Callout */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl relative overflow-hidden">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">
                  Challenge the Group Chat
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-white">
                  Think Your Friends Can Beat You?
                </h2>
                <p className="text-sm sm:text-base text-indigo-100 mt-4 leading-relaxed">
                  Put your friends to the test! Complete any trivia or personality quiz, grab your unique challenge link, and compare scores head-to-head.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => navigate('/quizzes')}
                    className="px-6 py-3 rounded-xl bg-white text-indigo-600 hover:bg-slate-50 font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
                  >
                    Start a Challenge Now
                  </button>
                  <button
                    onClick={() => navigate('/category/general-knowledge')}
                    className="px-6 py-3 rounded-xl bg-indigo-900/40 hover:bg-indigo-900/60 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
                  >
                    Browse Trivia Challenges
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
