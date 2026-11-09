import React from 'react';
import { RouterProvider, useRouter, matchRoute } from './lib/router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AllQuizzesPage } from './pages/AllQuizzesPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { CategoryDetailPage } from './pages/CategoryDetailPage';
import { QuizDetailPage } from './pages/QuizDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Route matching
  let pageComponent: React.ReactNode = null;

  if (currentPath === '/') {
    pageComponent = <HomePage />;
  } else if (currentPath === '/quizzes') {
    pageComponent = <AllQuizzesPage />;
  } else if (currentPath === '/categories') {
    pageComponent = <CategoriesPage />;
  } else if (currentPath === '/about') {
    pageComponent = <AboutPage />;
  } else if (currentPath === '/contact') {
    pageComponent = <ContactPage />;
  } else if (currentPath === '/privacy-policy') {
    pageComponent = <PrivacyPolicyPage />;
  } else if (currentPath === '/terms') {
    pageComponent = <TermsPage />;
  } else if (currentPath === '/disclaimer') {
    pageComponent = <DisclaimerPage />;
  } else {
    // Check dynamic routes
    const categoryMatch = matchRoute('/category/:slug', currentPath);
    const categoryMatchAlt = matchRoute('/categories/:slug', currentPath);
    const quizMatch = matchRoute('/quiz/:slug', currentPath);
    const quizMatchAlt = matchRoute('/quizzes/:slug', currentPath);

    if (categoryMatch.isMatch) {
      pageComponent = <CategoryDetailPage slug={categoryMatch.params.slug} />;
    } else if (categoryMatchAlt.isMatch) {
      pageComponent = <CategoryDetailPage slug={categoryMatchAlt.params.slug} />;
    } else if (quizMatch.isMatch) {
      pageComponent = <QuizDetailPage slug={quizMatch.params.slug} />;
    } else if (quizMatchAlt.isMatch) {
      pageComponent = <QuizDetailPage slug={quizMatchAlt.params.slug} />;
    } else {
      pageComponent = <NotFoundPage />;
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Header />
      <main className="flex-1 w-full">
        {pageComponent}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
