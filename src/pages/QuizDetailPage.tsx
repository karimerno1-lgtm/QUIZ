import React, { useState, useEffect } from 'react';
import { getQuizBySlug } from '../data/quizzes';
import { QuizEngine } from '../components/QuizEngine';
import { QuizResult } from '../components/QuizResult';
import { Breadcrumb } from '../components/Breadcrumb';
import { AdUnit } from '../components/AdUnit';
import { setPageSeo, useRouter } from '../lib/router';
import { decodeChallengeFromSearch } from '../lib/scoring';
import { QuizResultData } from '../types/quiz';
import {
  Clock,
  HelpCircle,
  Award,
  Play,
  Swords,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface QuizDetailPageProps {
  slug: string;
}

export const QuizDetailPage: React.FC<QuizDetailPageProps> = ({ slug }) => {
  const { search, navigate } = useRouter();
  const quiz = getQuizBySlug(slug);

  const [mode, setMode] = useState<'landing' | 'active' | 'result'>('landing');
  const [resultData, setResultData] = useState<QuizResultData | null>(null);

  // Decode challenger data from URL query params (e.g. ?challenger=Alex&score=85)
  const challenge = decodeChallengeFromSearch(search);

  useEffect(() => {
    if (quiz) {
      setPageSeo(
        `${quiz.title} – Free Online Quiz | Quizora`,
        quiz.description,
        `/quiz/${quiz.slug}`
      );
    }
  }, [quiz]);

  if (!quiz) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Quiz Not Found</h1>
        <p className="text-sm text-slate-500 mt-2">
          The requested quiz could not be located.
        </p>
        <button
          onClick={() => navigate('/quizzes')}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold"
        >
          Browse Quizzes
        </button>
      </div>
    );
  }

  const handleStartQuiz = () => {
    setMode('active');
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleCompleteQuiz = (result: QuizResultData) => {
    setResultData(result);
    setMode('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestartQuiz = () => {
    setResultData(null);
    setMode('active');
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: quiz.categoryName, href: `/category/${quiz.categorySlug}` },
          { label: quiz.title }
        ]}
      />

      {/* Mode 1: Landing Overview */}
      {mode === 'landing' && (
        <div className="max-w-3xl mx-auto">
          
          {/* Friend Challenge Alert Banner */}
          {challenge && (
            <div className="mb-8 p-5 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white shadow-xl animate-in fade-in flex items-start gap-4">
              <div className="p-3 bg-white/20 rounded-2xl shrink-0 mt-0.5">
                <Swords className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold">
                  Challenge Received from {challenge.challengerName}!
                </h3>
                <p className="text-xs sm:text-sm text-white/90 mt-1 leading-relaxed">
                  {challenge.challengerName} achieved a score of <strong>{challenge.challengerScore}%</strong> on this quiz. Can you beat them? Take the challenge and compare results at the end!
                </p>
              </div>
            </div>
          )}

          {/* Quiz Landing Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-10 text-center">
            
            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
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
                {quiz.questions.length} Questions
              </span>
              <span aria-hidden="true">&middot;</span>
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                {quiz.difficulty}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
              {quiz.title}
            </h1>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto mb-8">
              {quiz.description}
            </p>

            {/* Feature Highlights Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto mb-8 text-left text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  {quiz.type === 'knowledge' ? 'Verified Answers' : 'Weighted Outcome'}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-indigo-500 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">100% Free & Private</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
                <Swords className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">Challenge Ready</span>
              </div>
            </div>

            {/* Start CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleStartQuiz}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Start Quiz Now</span>
              </button>
            </div>

            <div className="mt-5 text-[11px] text-slate-400 font-mono">
              {quiz.playsCount.toLocaleString()} participants have taken this quiz
            </div>
          </div>

          {/* AdSense Unit on Quiz Landing (Safe distance before active engine) */}
          <AdUnit unitType="relaxed" />
        </div>
      )}

      {/* Mode 2: Active Quiz Engine (Strictly No Ads during active questions) */}
      {mode === 'active' && (
        <QuizEngine
          quiz={quiz}
          challengerName={challenge?.challengerName}
          challengerScore={challenge?.challengerScore}
          onComplete={handleCompleteQuiz}
          onCancel={() => setMode('landing')}
        />
      )}

      {/* Mode 3: Quiz Result */}
      {mode === 'result' && resultData && (
        <QuizResult
          quiz={quiz}
          result={resultData}
          onRestart={handleRestartQuiz}
        />
      )}

    </div>
  );
};
