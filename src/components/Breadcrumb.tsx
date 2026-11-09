import React, { useEffect } from 'react';
import { useRouter } from '../lib/router';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const { navigate } = useRouter();

  // Inject JSON-LD Schema BreadcrumbList
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://quiz.wdbloog.com'
        },
        ...items.map((item, idx) => ({
          '@type': 'ListItem',
          'position': idx + 2,
          'name': item.label,
          ...(item.href ? { 'item': `https://quiz.wdbloog.com${item.href}` } : {})
        }))
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'dynamic-breadcrumb-schema';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('dynamic-breadcrumb-schema');
      if (existing) existing.remove();
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
        <li>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
              {isLast || !item.href ? (
                <span className="font-semibold text-slate-900 dark:text-white line-clamp-1">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => navigate(item.href!)}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
