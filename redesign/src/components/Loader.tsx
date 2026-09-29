import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onDone: () => void;
}

const MIN_MS = 2000;
const MAX_MS = 6000;

// Real loader: waits for web fonts, the logo image and the hero video to be
// playable (never shorter than MIN_MS, never longer than MAX_MS), then wipes away.
export const Loader: React.FC<LoaderProps> = ({ onDone }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const done = { fonts: false, logo: false, video: false };
    const ready = () => Object.values(done).filter(Boolean).length / 3;

    document.fonts?.ready.then(() => (done.fonts = true)).catch(() => (done.fonts = true));
    if (!document.fonts) done.fonts = true;

    const img = new Image();
    img.onload = img.onerror = () => (done.logo = true);
    img.src = '/ventura-logo-dark.png';

    const video = document.querySelector('video');
    if (!video || video.readyState >= 3) {
      done.video = true;
    } else {
      const mark = () => (done.video = true);
      video.addEventListener('canplay', mark, { once: true });
      video.addEventListener('error', mark, { once: true });
    }

    const start = performance.now();
    let shown = 0;
    let timer = 0;
    let finished = false;

    const tick = () => {
      const elapsed = performance.now() - start;
      const target = elapsed >= MAX_MS ? 1 : Math.min(ready(), elapsed / MIN_MS);
      shown = Math.min(target, shown + 0.03 + (target - shown) * 0.08);
      setProgress(shown);
      if (shown >= 0.999 && !finished) {
        finished = true;
        window.clearInterval(timer);
        window.setTimeout(onDone, 250);
      }
    };
    // a timer (not rAF) so loading still completes when the tab starts in the background
    timer = window.setInterval(tick, 32);

    return () => {
      window.clearInterval(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
      initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      role="status"
      aria-label="Loading Ventura Custom Homes"
    >
      <motion.img
        src="/ventura-logo-dark.png"
        alt="Ventura Custom Homes"
        className="w-[min(78vw,440px)] h-auto select-none"
        initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0.4 }}
        animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="mt-12 w-[min(60vw,260px)]">
        <div className="h-px w-full bg-black/10 overflow-hidden">
          <div className="h-full bg-[#0A0A0A] origin-left" style={{ transform: `scaleX(${progress})` }} />
        </div>
        <div className="mt-3 flex items-center justify-between text-[#6B6B6B]" style={{ fontFamily: 'var(--font-data)' }}>
          <span className="italic text-[17px]">Dallas &middot; Frisco</span>
          <span className="text-[17px] tabular-nums">{Math.round(progress * 100)}%</span>
        </div>
      </div>
    </motion.div>
  );
};
