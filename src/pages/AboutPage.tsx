import React, { useEffect } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { setPageSeo, useRouter } from '../lib/router';
import { Sparkles, Shield, Cpu, Users, Award, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    setPageSeo(
      'About Quizora – Our Mission, Editorial Standards & Tech | Quizora',
      'Discover Quizora’s mission to provide engaging, private, and high-quality personality and knowledge quizzes without external AI or tracking dependencies.',
      '/about'
    );
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: 'About Us' }]} />

      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 font-mono">
          <Sparkles className="w-4 h-4" />
          Our Story
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          About Quizora
        </h1>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Quizora was founded on a simple principle: people love discovering more about themselves, testing their mental agility, and laughing with friends over unexpected scores.
        </p>
      </div>

      <div className="space-y-12 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        {/* Mission Card */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <Heart className="w-6 h-6 text-rose-500" />
            Our Mission: Discover. Challenge. Share.
          </h2>
          <p className="mb-4">
            In an era of cluttered, spam-ridden quiz websites overloaded with misleading popups and artificial walls, Quizora provides a clean, lightning-fast, and deeply engaging home for trivia lovers and self-discovery seekers.
          </p>
          <p>
            Whether you want to understand your primary psychological archetype, discover your love language, or test your World Cup football memory, every quiz is engineered for intellectual delight.
          </p>
        </section>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <Shield className="w-8 h-8 text-indigo-500 mb-4" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              100% Private by Design
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We do not track your answers on centralized servers or require personal logins. All scoring calculations run 100% locally in your browser.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <Award className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Curated Original Quizzes
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every question, multiple-choice option, and explanation is fact-checked and thoughtfully balanced across 7 key categories.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <Users className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Social Challenge System
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Generate custom challenge links with your score embedded, export beautiful 1080p Instagram & TikTok story cards, and compete in group chats.
            </p>
          </div>
        </div>

        {/* Editorial Standards */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Editorial Integrity & Scoring Standards
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Our knowledge tests rely on verified historical encyclopedias, peer-reviewed geography atlases, and official sports governing bodies. Our personality frameworks are inspired by established psychological paradigms, including Carl Jung&apos;s archetypes, Dr. John Gottman&apos;s relationship research, and contemporary cognitive science.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => navigate('/quizzes')}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors"
            >
              Explore Quizzes
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Contact Editorial Team
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
