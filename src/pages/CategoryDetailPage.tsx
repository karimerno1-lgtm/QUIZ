import React, { useEffect } from 'react';
import { getCategoryBySlug } from '../data/categories';
import { getQuizzesByCategory } from '../data/quizzes';
import { QuizCard } from '../components/QuizCard';
import { Breadcrumb } from '../components/Breadcrumb';
import { setPageSeo } from '../lib/router';
import { AdUnit } from '../components/AdUnit';
import { HelpCircle } from 'lucide-react';

interface CategoryDetailPageProps {
  slug: string;
}

export const CategoryDetailPage: React.FC<CategoryDetailPageProps> = ({ slug }) => {
  const category = getCategoryBySlug(slug);
  const quizzes = getQuizzesByCategory(slug);

  useEffect(() => {
    if (category) {
      setPageSeo(
        `${category.name} Quizzes – Free Interactive Tests | Quizora`,
        category.description,
        `/category/${category.slug}`
      );

      // Inject Schema.org FAQPage structured data
      if (category.faqs && category.faqs.length > 0) {
        const faqSchema = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': category.faqs.map((faq) => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer
            }
          }))
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'category-faq-schema';
        script.text = JSON.stringify(faqSchema);
        document.head.appendChild(script);

        return () => {
          const el = document.getElementById('category-faq-schema');
          if (el) el.remove();
        };
      }
    }
  }, [category]);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Category Not Found</h1>
        <p className="text-sm text-slate-500 mt-2">
          The requested category could not be located.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: 'Categories', href: '/categories' },
          { label: category.name }
        ]}
      />

      {/* Category Hero Banner */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-block text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 font-mono">
          Category Hub &middot; {quizzes.length} Quizzes
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {category.name}
        </h1>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Quizzes List */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Available {category.name} Quizzes
          </h2>
          <span className="text-xs text-slate-500 font-mono">
            {quizzes.length} total tests
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </div>

      {/* AdSense Unit */}
      <AdUnit unitType="relaxed" />

      {/* AEO / Answer Engine Optimization FAQ Section */}
      {category.faqs && category.faqs.length > 0 && (
        <section className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Understanding {category.name} Assessments
          </h2>

          <div className="space-y-4">
            {category.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
