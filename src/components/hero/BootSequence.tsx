'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const BOOT_LINES = [
  '> initializing portfolio.sys ...',
  '> loading modules: [spring-boot, fastapi, react]',
  '> connecting to backend services ...',
  '> authentication: JWT verified ✓',
  '> static analysis pipeline: online ✓',
  '> system ready.',
];

export default function BootSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [complete, setComplete] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      // Show all lines instantly if reduced motion
      setVisibleLines(BOOT_LINES);
      setComplete(true);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setComplete(true),
      });

      BOOT_LINES.forEach((line, i) => {
        tl.call(
          () => {
            setVisibleLines((prev) => [...prev, line]);
          },
          [],
          i * 0.4
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <div
      ref={containerRef}
      className={`inline-block text-left transition-opacity duration-1000 ${
        complete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="glass-panel p-4 font-mono text-xs text-accent-cyan/70 space-y-1 max-w-md">
        {visibleLines.map((line, i) => (
          <div key={i} className="flex items-center gap-1">
            <span>{line}</span>
            {i === visibleLines.length - 1 && !complete && (
              <span className="cursor-blink">▋</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
