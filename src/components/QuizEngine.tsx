import React, { useState } from 'react';
import { Quiz, QuizResultData } from '../types/quiz';
import { calculateKnowledgeScore, calculatePersonalityOutcome, saveQuizResult } from '../lib/scoring';
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, AlertCircle, Sparkles } from 'lucide-react';

interface QuizEngineProps {
  quiz: Quiz;
  challengerName?: string;
  challengerScore?: number;
  onComplete: (result: QuizResultData) => void;
  onCancel: () => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({
  quiz,
  challengerName,
  challengerScore,
  onComplete,
  onCancel
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [validationError, setValidationError] = useState(false);

  const totalQuestions = quiz.questions.length;
  const currentQuestion = quiz.questions[currentIndex];
  const selectedOptionIndex = selectedAnswers[currentIndex];
  const isKnowledge = quiz.type === 'knowledge';
  const progressPercent = Math.round(((currentIndex) / totalQuestions) * 100);

  const handleSelectOption = (optionIndex: number) => {
    setValidationError(false);
    const updated = [...selectedAnswers];
    updated[currentIndex] = optionIndex;
    setSelectedAnswers(updated);

    // For knowledge quiz, reveal explanation after choice
    if (isKnowledge && currentQuestion.explanation) {
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    if (selectedOptionIndex === undefined) {
      setValidationError(true);
      return;
    }

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowExplanation(false);
      setValidationError(false);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    } else {
      finishQuiz();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowExplanation(false);
      setValidationError(false);
    }
  };

  const finishQuiz = () => {
    let resultData: QuizResultData;

    if (isKnowledge) {
      const scoring = calculateKnowledgeScore(quiz.questions, selectedAnswers, quiz.knowledgeTiers);
      resultData = {
        quizSlug: quiz.slug,
        quizTitle: quiz.title,
        type: 'knowledge',
        scorePercent: scoring.percentage,
        correctCount: scoring.score,
        totalQuestions: scoring.total,
        tier: scoring.tier,
        selectedAnswers,
        completedAt: new Date().toISOString(),
        challengerName,
        challengerScore
      };
    } else {
      const personality = calculatePersonalityOutcome(quiz.questions, selectedAnswers, quiz.outcomes);
      resultData = {
        quizSlug: quiz.slug,
        quizTitle: quiz.title,
        type: 'personality',
        totalQuestions,
        outcome: personality.matchedOutcome,
        selectedAnswers,
        completedAt: new Date().toISOString(),
        challengerName,
        challengerScore
      };
    }

    // Save lightweight local progress
    saveQuizResult(resultData);
    onComplete(resultData);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Quiz Engine Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-10">
        
        {/* Top Progress & Meta Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-slate-700 dark:text-slate-200">
                Question {currentIndex + 1} of {totalQuestions}
              </span>
              <span aria-hidden="true">&middot;</span>
              <span className="text-indigo-600 dark:text-indigo-400">{quiz.categoryName}</span>
            </div>
            <span className="font-mono">{progressPercent}% Completed</span>
          </div>

          {/* Progress Bar Track */}
          <div
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden"
          >
            <div
              className="h-full bg-indigo-600 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Text */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
            {currentQuestion.text}
          </h2>
          {currentQuestion.hint && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 italic">
              Hint: {currentQuestion.hint}
            </p>
          )}
        </div>

        {/* Options List */}
        <div className="space-y-3.5 mb-8" role="radiogroup" aria-label="Question choices">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOptionIndex === idx;
            const letter = String.fromCharCode(65 + idx); // A, B, C, D

            let buttonStyle = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-700';
            let badgeStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';

            if (isSelected) {
              if (isKnowledge && showExplanation) {
                const isCorrect = idx === currentQuestion.correctIndex;
                if (isCorrect) {
                  buttonStyle = 'border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-500';
                  badgeStyle = 'bg-emerald-600 text-white';
                } else {
                  buttonStyle = 'border-rose-500 bg-rose-50/60 dark:bg-rose-950/30 text-rose-950 dark:text-rose-100 ring-2 ring-rose-500';
                  badgeStyle = 'bg-rose-600 text-white';
                }
              } else {
                buttonStyle = 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/40 text-slate-900 dark:text-white ring-2 ring-indigo-500';
                badgeStyle = 'bg-indigo-600 text-white';
              }
            } else if (isKnowledge && showExplanation && idx === currentQuestion.correctIndex) {
              // Highlight the correct answer if user got it wrong
              buttonStyle = 'border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-200';
              badgeStyle = 'bg-emerald-600 text-white';
            }

            return (
              <button
                key={option.text}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-150 flex items-center justify-between gap-4 cursor-pointer ${buttonStyle}`}
              >
                <div className="flex items-center gap-3.5">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold font-mono transition-colors shrink-0 ${badgeStyle}`}>
                    {letter}
                  </span>
                  <span className="text-sm sm:text-base font-medium leading-relaxed">
                    {option.text}
                  </span>
                </div>

                {isKnowledge && showExplanation && (
                  <div className="shrink-0">
                    {idx === currentQuestion.correctIndex ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    ) : isSelected ? (
                      <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                    ) : null}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Validation Warning */}
        {validationError && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-medium mb-6">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Please select an answer to continue.</span>
          </div>
        )}

        {/* Knowledge Question Explanation Box */}
        {isKnowledge && showExplanation && currentQuestion.explanation && (
          <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 mb-8 animate-in fade-in">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider mb-1.5">
              <Sparkles className="w-4 h-4" />
              Explanation
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Navigation Bar */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={currentIndex === 0 ? onCancel : handlePrev}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{currentIndex === 0 ? 'Quit Quiz' : 'Previous'}</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md hover:shadow-indigo-500/25 transition-all"
          >
            <span>{currentIndex === totalQuestions - 1 ? 'View My Results' : 'Next Question'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
