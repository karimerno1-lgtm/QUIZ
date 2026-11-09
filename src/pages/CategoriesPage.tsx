import React, { useEffect } from 'react';
import { CATEGORIES } from '../data/categories';
import { CategoryCard } from '../components/CategoryCard';
import { Breadcrumb } from '../components/Breadcrumb';
import { setPageSeo } from '../lib/router';
import { AdUnit } from '../components/AdUnit';

export const CategoriesPage: React.FC = () => {
  useEffect(() => {
    setPageSeo(
      'Quiz Categories – Personality, Knowledge, Sports & More | Quizora',
      'Browse all seven quiz categories on Quizora: Personality, Love & Relationships, General Knowledge, Brain & Intelligence, Entertainment, Sports, and Friends.',
      '/categories'
    );
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: 'Categories' }]} />

      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Browse All 7 Categories
        </h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Select a category to explore in-depth assessments, verified knowledge tests, and psychology frameworks designed for self-discovery and competitive challenge.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>

      <AdUnit unitType="relaxed" />
    </div>
  );
};
