import React, { useEffect } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { setPageSeo } from '../lib/router';

export const TermsPage: React.FC = () => {
  useEffect(() => {
    setPageSeo(
      'Terms and Conditions – Quizora (quiz.wdbloog.com)',
      'Review the terms of use, intellectual property, and community guidelines for Quizora.',
      '/terms'
    );
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: 'Terms and Conditions' }]} />

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
          Terms and Conditions
        </h1>
        <p className="text-xs text-slate-400 font-mono mb-8">
          Effective Date: March 2026 &middot; Platform: quiz.wdbloog.com
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing and using Quizora at <code>quiz.wdbloog.com</code>, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please discontinue using the website.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              2. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise indicated, the website design, original quiz questions, curated explanations, scoring algorithms, logos, and graphics are the exclusive intellectual property of Quizora. You are permitted to share your personal results, challenge links, and social result cards for personal, non-commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              3. User Conduct
            </h2>
            <p>
              You agree not to scrape, reverse engineer, or disrupt the operation of Quizora through automated bots, scrapers, or malicious scripts.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              4. Disclaimer of Warranties
            </h2>
            <p>
              The website and all quiz content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              5. Contact Information
            </h2>
            <p>
              For any questions regarding these Terms, please contact us at: <a href="mailto:support@wdbloog.com" className="text-indigo-600 dark:text-indigo-400 underline font-mono">support@wdbloog.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
