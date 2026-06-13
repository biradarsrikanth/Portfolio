'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  Puzzle,
  Brain,
  Cloud,
  Server,
  Building2,
} from 'lucide-react';
import { timeline } from '@/data/timeline';
import SectionHeader from '@/components/ui/SectionHeader';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fadeInUp, noMotion } from '@/animations/variants';
import type { TimelineStage } from '@/types';

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 size={20} />,
  Puzzle: <Puzzle size={20} />,
  Brain: <Brain size={20} />,
  Cloud: <Cloud size={20} />,
  Server: <Server size={20} />,
  Building2: <Building2 size={20} />,
};

function TimelineNode({
  stage,
  index,
}: {
  stage: TimelineStage;
  index: number;
}) {
  const reduced = useReducedMotion();
  const variant = reduced ? noMotion : fadeInUp;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`flex items-start gap-4 md:gap-8 relative ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content */}
      <div
        className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}
      >
        <div className="glass-panel-hover p-5 md:p-6">
          <span className="text-xs font-mono text-accent-cyan mb-2 block">
            Stage {stage.stage} · {stage.period}
          </span>
          <h3 className="text-lg font-bold font-heading text-text-primary mb-2">
            {stage.title}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            {stage.description}
          </p>
          <div
            className={`mt-3 flex flex-wrap gap-1.5 ${
              isLeft ? 'md:justify-end' : 'md:justify-start'
            }`}
          >
            {stage.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-2 py-0.5 rounded bg-bg-secondary text-text-dim border border-glass-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Icon node */}
      <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-bg-secondary border-2 border-accent-cyan/40 items-center justify-center text-accent-cyan z-10">
        {iconMap[stage.icon] || <Server size={20} />}
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export default function JourneySection() {
  return (
    <section id="journey" className="py-20 md:py-28 px-4 bg-bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          id="journey-heading"
          title="Journey"
          subtitle="From data analytics to enterprise systems engineering"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/40 via-accent-blue/20 to-transparent -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {timeline.map((stage, i) => (
              <TimelineNode key={stage.id} stage={stage} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
