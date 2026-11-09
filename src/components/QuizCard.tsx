import React from 'react';
import { Quiz } from '../types/quiz';
import { useRouter } from '../lib/router';
import { Clock, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getQuizResultForSlug } from '../lib/scoring';

interface QuizCardProps {
  quiz: Quiz;
  priority?: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  const { navigate } = useRouter();
  const pastResult = getQuizResultForSlug(quiz.slug);
  const isCompleted = !!pastResult;

  return (
    <article
      onClick={() => navigate(`/quiz/${quiz.slug}`)}
      className="group relative flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 cursor-pointer"
    >
      <div>
        {/* Anti-Pill Clean Unboxed Metadata Header */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
            {quiz.categoryName}
          </span>
          <span aria-hidden="true">&middot;</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {quiz.estimatedTime}
          </span>
          <span aria-hidden="true">&middot;</span>
          <span className="flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" />
            {quiz.questions.length} questions
          </span>
          <span aria-hidden="true">&middot;</span>
          <span>{quiz.difficulty}</span>
        </div>

        {/* Card Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
          {quiz.title}
        </h3>

        {/* Short Tagline / Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
          {quiz.tagline || quiz.description}
        </p>
      </div>

      {/* Footer Strip */}
      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
          {quiz.playsCount.toLocaleString()} plays
        </div>

        {isCompleted ? (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>Completed</span>
          </div>
        ) : (
          <div className="flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform">
            <span>Start Quiz</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        )}
      </div>
    </article>
  );
};
