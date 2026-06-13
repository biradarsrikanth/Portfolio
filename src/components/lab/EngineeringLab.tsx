'use client';

import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import GlassPanel from '@/components/ui/GlassPanel';
import SectionHeader from '@/components/ui/SectionHeader';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fadeInUp, staggerContainer, noMotion } from '@/animations/variants';
import type { LabCard } from '@/types';

const labCards: LabCard[] = [
  {
    id: 'incident-simulator',
    title: 'PagerDuty Incident Simulator',
    description:
      'Simulate real-world incident response scenarios with configurable severity levels and escalation paths.',
    locked: true,
  },
  {
    id: 'event-streaming',
    title: 'Real-Time Event Streaming',
    description:
      'Live streaming dashboard for monitoring system events, alert distributions, and on-call patterns.',
    locked: true,
  },
  {
    id: 'architecture-playground',
    title: 'Interactive Architecture Playground',
    description:
      'Drag-and-drop system design canvas for exploring microservice architectures and data flow patterns.',
    locked: true,
  },
];

export default function EngineeringLab() {
  const reduced = useReducedMotion();
  const variant = reduced ? noMotion : fadeInUp;
  const container = reduced ? noMotion : staggerContainer;

  return (
    <section id="lab" className="py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          id="lab-heading"
          title="Engineering Lab"
          subtitle="Experimental features — coming soon"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {labCards.map((card) => (
            <motion.div key={card.id} variants={variant}>
              <GlassPanel className="p-6 h-full opacity-60 relative overflow-hidden">
                {/* Lock overlay */}
                <div className="absolute top-3 right-3">
                  <Lock size={16} className="text-text-dim" />
                </div>

                <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center mb-4">
                  <Lock size={20} className="text-text-dim" />
                </div>

                <h3 className="text-sm font-bold font-heading text-text-muted mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-text-dim leading-relaxed">
                  {card.description}
                </p>

                <span className="inline-block mt-4 text-xs px-2.5 py-0.5 rounded-full bg-bg-secondary text-text-dim border border-glass-border">
                  Coming Soon
                </span>
              </GlassPanel>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
