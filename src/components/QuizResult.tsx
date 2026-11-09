import React, { useState } from 'react';
import { Quiz, QuizResultData } from '../types/quiz';
import { useRouter } from '../lib/router';
import { getRelatedQuizzes } from '../data/quizzes';
import { ShareButtons } from './ShareButtons';
import { ChallengeModal } from './ChallengeModal';
import { ResultImage } from './ResultImage';
import { QuizCard } from './QuizCard';
import { AdUnit } from './AdUnit';
import {
  RotateCcw,
  Sparkles,
  Award,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Swords,
  Compass
} from 'lucide-react';

interface QuizResultProps {
  quiz: Quiz;
  result: QuizResultData;
  onRestart: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({
  quiz,
  result,
  onRestart
}) => {
  const { navigate } = useRouter();
  const [showCanvasModal, setShowCanvasModal] = useState(false);
  const [showChallengeModal, setShowChallengeModal] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);

  const isKnowledge = quiz.type === 'knowledge';
  const relatedQuizzes = getRelatedQuizzes(quiz.slug, quiz.categorySlug, 3);

  // Result headline and details
  const headline = isKnowledge
    ? `${result.scorePercent}% Accuracy`
    : result.outcome?.name || 'Your Result';

  const subline = isKnowledge
    ? `${result.tier?.title || 'Performance Tier'} (${result.correctCount}/${result.totalQuestions} correct)`
    : result.outcome?.archetype || 'Personality Archetype';

  const description = isKnowledge
    ? result.tier?.description || ''
    : result.outcome?.description || '';

  const sharePayload = {
    quizTitle: quiz.title,
    quizSlug: quiz.slug,
    scoreOrOutcome: headline,
    summaryText: isKnowledge ? (result.tier?.advice || description) : (result.outcome?.summary || description),
    url: typeof window !== 'undefined' ? `${window.location.origin}/quiz/${quiz.slug}` : `https://quiz.wdbloog.com/quiz/${quiz.slug}`
  };

  // Head-to-Head Comparison with challenger if available
  const hasChallenger = result.challengerName && result.challengerScore !== undefined;
  const userScore = result.scorePercent !== undefined ? result.scorePercent : 100;
  const challengerScore = result.challengerScore || 0;
  const isWinner = userScore > challengerScore;
  const isTied = userScore === challengerScore;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">
      
      {/* Head-to-Head Challenge Comparison Banner (if triggered via challenge link) */}
      {hasChallenger && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-900/90 via-purple-900/90 to-slate-900 text-white border border-indigo-500/30 shadow-xl">
          <div className="flex items-center gap-3 mb-2">
            <Swords className="w-6 h-6 text-amber-400" />
            <h3 className="text-base sm:text-lg font-bold">
              Head-to-Head Challenge Comparison
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mb-5">
            You completed the challenge initiated by <strong className="text-white">{result.challengerName}</strong>!
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto bg-slate-950/60 p-4 rounded-2xl border border-indigo-500/20 text-center">
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-mono">You</div>
              <div className="text-2xl font-extrabold text-indigo-400 mt-0.5">{userScore}%</div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-mono">{result.challengerName}</div>
              <div className="text-2xl font-extrabold text-amber-400 mt-0.5">{challengerScore}%</div>
            </div>
          </div>

          <div className="text-center mt-4 text-xs font-semibold">
            {isWinner ? (
              <span className="text-emerald-400">🎉 Congratulations! You beat {result.challengerName}&apos;s score!</span>
            ) : isTied ? (
              <span className="text-amber-400">🤝 Incredible! You and {result.challengerName} achieved an exact tie!</span>
            ) : (
              <span className="text-slate-300">👏 Great try! {result.challengerName} holds the lead. Retake the quiz to beat them!</span>
            )}
          </div>
        </div>
      )}

      {/* Main Result Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-10 text-center">
        
        {/* Anti-pill category kicker */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
          <span>{quiz.categoryName}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{quiz.title}</span>
        </div>

        {/* Badge / Score Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 shadow-inner mb-4">
          {isKnowledge ? <Award className="w-10 h-10" /> : <Sparkles className="w-10 h-10" />}
        </div>

        {/* Result Headline */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
          {headline}
        </h1>

        {/* Subline */}
        <p className="text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
          {subline}
        </p>

        {/* Description Body */}
        <div className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          {description}
        </div>

        {/* Personality Archetype Specific Blocks */}
        {!isKnowledge && result.outcome && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left mb-8">
            {/* Strengths */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
                Core Strengths
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {result.outcome.strengths.map((str) => (
                  <li key={str} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personalized Recommendations */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
                Growth Recommendation
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {result.outcome.recommendations.map((rec) => (
                  <li key={rec} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Knowledge Specific Advice */}
        {isKnowledge && result.tier?.advice && (
          <div className="max-w-xl mx-auto p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 mb-8">
            <span className="font-semibold block mb-1">Expert Advice:</span>
            {result.tier.advice}
          </div>
        )}

        {/* Social Sharing Section */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
            Share Your Result & Challenge Friends
          </h3>
          <ShareButtons
            payload={sharePayload}
            onOpenCanvasModal={() => setShowCanvasModal(true)}
            onOpenChallengeModal={() => setShowChallengeModal(true)}
          />
        </div>

        {/* Retake & Explore Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>

          <button
            onClick={() => navigate('/quizzes')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Explore More Quizzes</span>
          </button>
        </div>

      </div>

      {/* Correct-Answer Review (for knowledge quizzes) */}
      {isKnowledge && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md p-6 sm:p-8">
          <button
            onClick={() => setReviewOpen(!reviewOpen)}
            className="w-full flex items-center justify-between text-left"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Detailed Answer Review
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Check all {quiz.questions.length} questions, correct answers, and explanations.
              </p>
            </div>
            <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {reviewOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {reviewOpen && (
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-6">
              {quiz.questions.map((q, idx) => {
                const userChoiceIdx = result.selectedAnswers[idx];
                const isCorrect = userChoiceIdx === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-left"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="text-xs font-mono font-bold text-slate-500">
                        Question {idx + 1}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold">
                        {isCorrect ? (
                          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="w-4 h-4" /> Correct
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-rose-600 dark:text-rose-400">
                            <XCircle className="w-4 h-4" /> Missed
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white mb-3">
                      {q.text}
                    </h4>

                    {/* Options list showing user selection and correct answer */}
                    <div className="space-y-1.5 mb-3 text-xs">
                      {q.options.map((opt, optIdx) => {
                        const isUserSelected = userChoiceIdx === optIdx;
                        const isCorrectOption = q.correctIndex === optIdx;

                        let style = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400';
                        if (isCorrectOption) {
                          style = 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 text-emerald-900 dark:text-emerald-200 font-semibold';
                        } else if (isUserSelected && !isCorrectOption) {
                          style = 'bg-rose-50 dark:bg-rose-950/30 border-rose-400 text-rose-900 dark:text-rose-200';
                        }

                        return (
                          <div
                            key={opt.text}
                            className={`p-2.5 rounded-xl border flex items-center justify-between ${style}`}
                          >
                            <span>{opt.text}</span>
                            {isCorrectOption && (
                              <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                                Correct Answer
                              </span>
                            )}
                            {isUserSelected && !isCorrectOption && (
                              <span className="text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400 font-mono">
                                Your Pick
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {q.explanation && (
                      <div className="text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800/80">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">Explanation: </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Strategic Google AdSense Placement on Result Page */}
      <AdUnit unitType="responsive" />

      {/* Related Quizzes Section */}
      <div className="pt-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Recommended Quizzes For You
          </h2>
          <button
            onClick={() => navigate('/quizzes')}
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            View all 21 quizzes &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedQuizzes.map((rel) => (
            <QuizCard key={rel.id} quiz={rel} />
          ))}
        </div>
      </div>

      {/* Social Canvas Image Modal */}
      {showCanvasModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
        >
          <div className="max-w-2xl w-full">
            <ResultImage
              quizTitle={quiz.title}
              categoryName={quiz.categoryName}
              scoreOrOutcome={headline}
              subtitle={subline}
              summary={isKnowledge ? (result.tier?.description || '') : (result.outcome?.summary || '')}
              isKnowledge={isKnowledge}
              scorePercent={result.scorePercent}
            />
            <div className="text-center mt-3">
              <button
                onClick={() => setShowCanvasModal(false)}
                className="px-6 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
              >
                Close Generator
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Friend Challenge Modal */}
      {showChallengeModal && (
        <ChallengeModal
          quizSlug={quiz.slug}
          quizTitle={quiz.title}
          scoreOrOutcome={headline}
          scorePercent={result.scorePercent}
          onClose={() => setShowChallengeModal(false)}
        />
      )}

    </div>
  );
};
