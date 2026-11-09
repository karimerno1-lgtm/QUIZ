import React, { useEffect } from 'react';
import { useRouter, setPageSeo } from '../lib/router';
import { Compass, Home, HelpCircle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    setPageSeo(
      'Page Not Found (404) – Quizora',
      'The requested page or quiz could not be found. Explore our 21 interactive quizzes on Quizora.',
      '/404'
    );
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="w-20 h-20 rounded-3xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-6">
        <HelpCircle className="w-10 h-10" />
      </div>

      <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
        Error 404
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2 mb-4">
        Page Not Found
      </h1>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
        The quiz or page you are looking for may have been moved, renamed, or doesn&apos;t exist. Let&apos;s get you back on track!
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </button>

        <button
          onClick={() => navigate('/quizzes')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm transition-colors"
        >
          <Compass className="w-4 h-4" />
          <span>Browse 21 Quizzes</span>
        </button>
      </div>
    </div>
  );
};
