import React, { useState } from 'react';
import { Send, Copy, Check, MessageCircle, X, Trophy } from 'lucide-react';
import { encodeChallengeUrl } from '../lib/scoring';
import { copyToClipboard } from '../lib/sharing';

interface ChallengeModalProps {
  quizSlug: string;
  quizTitle: string;
  scoreOrOutcome: string;
  scorePercent?: number;
  onClose: () => void;
}

export const ChallengeModal: React.FC<ChallengeModalProps> = ({
  quizSlug,
  quizTitle,
  scoreOrOutcome,
  scorePercent,
  onClose
}) => {
  const [challengerName, setChallengerName] = useState('');
  const [copied, setCopied] = useState(false);

  const finalScore = scorePercent !== undefined ? scorePercent : 100;
  const challengeUrl = encodeChallengeUrl(
    quizSlug,
    challengerName || 'Your Friend',
    finalScore,
    scoreOrOutcome
  );

  const handleCopy = async () => {
    const success = await copyToClipboard(challengeUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsApp = () => {
    const nameStr = challengerName.trim() ? challengerName.trim() : 'I';
    const msg = `⚔️ ${nameStr} just scored "${scoreOrOutcome}" on "${quizTitle}" on Quizora!\n\nCan you beat my score? Take the head-to-head challenge here:\n${challengeUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
    >
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Challenge a Friend
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Generate a personalized challenge link with your score embedded.
            </p>
          </div>
        </div>

        <div className="space-y-4 my-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Your Name or Nickname
            </label>
            <input
              type="text"
              placeholder="e.g. Alex, Sam, Captain"
              value={challengerName}
              onChange={(e) => setChallengerName(e.target.value)}
              maxLength={30}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-1">
              How the challenge works:
            </span>
            When your friend opens this link, Quizora greets them with a challenge banner showing your result (<span className="font-semibold text-indigo-600 dark:text-indigo-400">{scoreOrOutcome}</span>). When they finish, they will see a direct head-to-head comparison!
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Personalized Challenge Link
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={challengeUrl}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-mono truncate"
              />
              <button
                onClick={handleCopy}
                className="shrink-0 flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Send to Friend via WhatsApp</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
