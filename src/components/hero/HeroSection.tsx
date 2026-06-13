'use client';

import dynamic from 'next/dynamic';
import { personalInfo } from '@/data/personal';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ArrowDown, FileText } from 'lucide-react';
import HeroFallback from './HeroFallback';
import BootSequence from './BootSequence';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), {
  ssr: false,
  loading: () => <HeroFallback />,
});

export default function HeroSection() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.08)_0%,_transparent_70%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Three.js canvas (desktop) or SVG fallback (mobile) */}
      {isMobile ? <HeroFallback /> : <HeroCanvas />}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Boot sequence */}
        <div className="mb-6">
          <BootSequence />
        </div>

        {/* Terminal-style greeting */}
        <div className="inline-block mb-6">
          <span className="font-mono text-sm text-accent-cyan bg-accent-cyan/5 px-4 py-2 rounded-full border border-accent-cyan/20">
            ~/portfolio <span className="cursor-blink">▋</span>
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading mb-4 text-text-primary">
          {personalInfo.name.split(' ')[0]}{' '}
          <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">
            {personalInfo.name.split(' ')[1]}
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-text-muted mb-2 font-heading">
          {personalInfo.title}
        </p>

        {/* Specialization */}
        <p className="text-base md:text-lg text-text-dim mb-8 max-w-2xl mx-auto">
          {personalInfo.specialization}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-medium text-bg-primary bg-gradient-to-r from-accent-cyan to-accent-blue hover:opacity-90 transition-opacity min-h-[44px] flex items-center gap-2"
          >
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href={`${process.env.__NEXT_ROUTER_BASEPATH || ''}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-medium text-text-primary border border-glass-border hover:border-accent-cyan/40 hover:bg-glass-bg transition-all min-h-[44px] flex items-center gap-2"
          >
            <FileText size={16} />
            Download Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-5 h-8 rounded-full border-2 border-text-dim flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-accent-cyan animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
