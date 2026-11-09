import React, { useEffect, useRef } from 'react';

interface AdUnitProps {
  unitType: 'relaxed' | 'responsive';
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export const AdUnit: React.FC<AdUnitProps> = ({ unitType, className = '' }) => {
  const adRef = useRef<HTMLModElement | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    // Only initialize once per mounted ad unit
    if (initialized.current) return;
    initialized.current = true;

    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      // AdSense push may silently fail if ad-blocker is active or script still pending
      console.debug('AdSense unit safely initialized or blocked:', e);
    }
  }, []);

  const slotId = unitType === 'relaxed' ? '4040739123' : '2283795165';

  return (
    <aside
      aria-label="Advertisement"
      className={`my-8 mx-auto w-full max-w-4xl px-4 overflow-hidden text-center ${className}`}
    >
      <div className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1 font-mono">
        Advertisement
      </div>
      <div className="min-h-[100px] w-full flex items-center justify-center bg-slate-100/60 dark:bg-slate-900/60 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 p-2 overflow-hidden">
        {unitType === 'relaxed' ? (
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: 'block', width: '100%' }}
            data-ad-client="ca-pub-3618365568004987"
            data-ad-slot={slotId}
            data-ad-format="autorelaxed"
          />
        ) : (
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: 'block', width: '100%' }}
            data-ad-client="ca-pub-3618365568004987"
            data-ad-slot={slotId}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        )}
      </div>
    </aside>
  );
};
