import React from 'react';
import { useRouter } from '../lib/router';
import { CATEGORIES } from '../data/categories';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-extrabold text-lg">
                Q
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Quizora</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Discover yourself and challenge your mind. 21+ original personality, relationship, knowledge, and brain challenges designed for curious minds worldwide.
            </p>
            <div className="text-xs text-slate-500 font-mono">
              Website domain: <span className="text-slate-300">quiz.wdbloog.com</span>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => navigate(`/category/${cat.slug}`)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => navigate('/quizzes')} className="hover:text-white transition-colors">
                  All 21 Quizzes
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/categories')} className="hover:text-white transition-colors">
                  Browse Categories
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/#how-it-works')} className="hover:text-white transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-white transition-colors">
                  About Quizora
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">
                  Contact Support
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Policy Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Legal & Privacy
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => navigate('/privacy-policy')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/terms')} className="hover:text-white transition-colors">
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/disclaimer')} className="hover:text-white transition-colors">
                  Disclaimer
                </button>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  XML Sitemap
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Robots.txt
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* AdSense Notice & Zero-Storage Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} Quizora (quiz.wdbloog.com). All rights reserved. Monitored and monetized with Google AdSense.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Client-side calculations</span>
            <span aria-hidden="true">&middot;</span>
            <span>No account required</span>
            <span aria-hidden="true">&middot;</span>
            <span>Private & secure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
