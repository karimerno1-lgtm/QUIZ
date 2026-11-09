import React, { useEffect } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { setPageSeo } from '../lib/router';

export const DisclaimerPage: React.FC = () => {
  useEffect(() => {
    setPageSeo(
      'Disclaimer – Quizora (quiz.wdbloog.com)',
      'Educational and entertainment disclaimer regarding personality tests and trivia on Quizora.',
      '/disclaimer'
    );
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: 'Disclaimer' }]} />

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
          Disclaimer
        </h1>
        <p className="text-xs text-slate-400 font-mono mb-8">
          Last Updated: March 2026 &middot; Platform: quiz.wdbloog.com
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              1. Entertainment & Educational Purpose Only
            </h2>
            <p>
              The quizzes, assessments, personality archetypes, relationship tests, and scoring results provided on Quizora (<code>quiz.wdbloog.com</code>) are designed strictly for educational, introspective, and entertainment purposes.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              2. Not Professional Psychological or Clinical Advice
            </h2>
            <p>
              Quizora tests do not constitute medical, psychological, psychiatric, relationship therapy, or licensed diagnostic evaluations. They should never be used as a substitute for professional clinical advice, diagnosis, or treatment. If you are experiencing emotional distress or mental health challenges, please consult a certified healthcare professional.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              3. Factual Trivia Accuracy
            </h2>
            <p>
              While our editorial staff takes diligent measures to verify the accuracy of trivia questions across world history, geography, and pop culture, historical records and scientific classifications can evolve. Quizora assumes no liability for minor typographical or interpretive differences.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              4. External Links & Advertisements
            </h2>
            <p>
              Quizora displays third-party advertisements served via Google AdSense. We do not endorse or take responsibility for external websites, products, or services advertised through third-party ad networks.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
