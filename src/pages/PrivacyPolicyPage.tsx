import React, { useEffect } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { setPageSeo } from '../lib/router';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    setPageSeo(
      'Privacy Policy – Quizora (quiz.wdbloog.com)',
      'Learn how Quizora respects your privacy, handles browser cookies, complies with Google AdSense policies, and safeguards user data.',
      '/privacy-policy'
    );
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm prose dark:prose-invert max-w-none">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400 font-mono mb-8">
          Last Updated: March 2026 &middot; Applicable to quiz.wdbloog.com
        </p>

        <section className="space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            At <strong>Quizora</strong> (accessible via <code>quiz.wdbloog.com</code>), the privacy of our visitors is of paramount importance. This Privacy Policy document outlines the types of information collected and recorded by Quizora and how we utilize it.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-2">
            1. Zero Personal Data Collection Guarantee
          </h2>
          <p>
            Quizora does not require user accounts, logins, passwords, or credit card information. All quiz scoring calculations, personality evaluations, and result card generation run locally in your web browser. We do not store your individual quiz answers on external database servers.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-2">
            2. Local Browser Storage
          </h2>
          <p>
            Quizora utilizes your browser’s standard <code>localStorage</code> feature to store your recent quiz completion history and theme preference (light or dark mode). This information never leaves your personal device and can be deleted at any time by clearing your browser cache.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-2">
            3. Google AdSense & Third-Party Advertising Cookies
          </h2>
          <p>
            Google is a third-party advertising vendor on Quizora. Google uses cookies, specifically the DoubleClick DART cookie, to serve ads to our site visitors based on their visit to <code>quiz.wdbloog.com</code> and other sites on the internet.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li>
              Third-party vendors, including Google, use cookies to serve ads based on a user’s prior visits to your website or other websites.
            </li>
            <li>
              Google’s use of advertising cookies enables it and its partners to serve ads to users based on their visit to your sites and/or other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting Google Ad Settings at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline">https://adssettings.google.com</a> or via <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline">aboutads.info</a>.
            </li>
          </ul>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-2">
            4. Log Files & Server Metrics
          </h2>
          <p>
            Like most standard website servers, our hosting infrastructure may log non-personally identifiable requests, including internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and number of clicks for hosting security and performance optimization.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-2">
            5. GDPR & CCPA Privacy Rights
          </h2>
          <p>
            Under the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), users have rights to data portability, rectification, and erasure. Because Quizora does not collect personal identifiers or maintain private user databases, we hold no personal dossiers on individual visitors.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-2">
            6. Children&apos;s Information
          </h2>
          <p>
            Quizora does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe your child provided personal information on our website, please contact us immediately at <code>support@wdbloog.com</code> and we will promptly remove such information.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-2">
            7. Contact Us
          </h2>
          <p>
            If you have questions about our Privacy Policy or cookie practices, please contact us at: <a href="mailto:support@wdbloog.com" className="text-indigo-600 dark:text-indigo-400 underline font-mono">support@wdbloog.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};
