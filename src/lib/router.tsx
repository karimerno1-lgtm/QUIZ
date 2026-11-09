import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export interface RouteState {
  path: string;
  search: string;
  params: Record<string, string>;
}

interface RouterContextType {
  currentPath: string;
  search: string;
  navigate: (to: string) => void;
  goBack: () => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  search: '',
  navigate: () => {},
  goBack: () => {}
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [search, setSearch] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.search || '';
    }
    return '';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      setSearch(window.location.search || '');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (typeof window === 'undefined') return;

    // Handle full URLs or hash/relative paths
    const [pathPart, searchPart] = to.split('?');
    const newPath = pathPart || '/';
    const newSearch = searchPart ? `?${searchPart}` : '';

    if (window.location.pathname !== newPath || window.location.search !== newSearch) {
      window.history.pushState({}, '', to);
      setCurrentPath(newPath);
      setSearch(newSearch);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, search, navigate, goBack }}>
      {children}
    </RouterContext.Provider>
  );
};

/**
 * Route Matcher Helper
 */
export function matchRoute(
  pattern: string,
  pathname: string
): { isMatch: boolean; params: Record<string, string> } {
  const patternSegments = pattern.split('/').filter(Boolean);
  const pathSegments = pathname.split('/').filter(Boolean);

  if (patternSegments.length !== pathSegments.length) {
    return { isMatch: false, params: {} };
  }

  const params: Record<string, string> = {};
  for (let i = 0; i < patternSegments.length; i++) {
    const pSeg = patternSegments[i];
    const pathSeg = pathSegments[i];

    if (pSeg.startsWith(':')) {
      const paramName = pSeg.slice(1);
      params[paramName] = pathSeg;
    } else if (pSeg !== pathSeg) {
      return { isMatch: false, params: {} };
    }
  }

  return { isMatch: true, params };
}

/**
 * Sets document title and meta description dynamically for technical SEO.
 */
export function setPageSeo(title: string, description: string, canonicalPath = '/') {
  if (typeof document === 'undefined') return;

  document.title = title;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', `https://quiz.wdbloog.com${canonicalPath}`);
}
