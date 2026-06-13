'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Lightbulb, XCircle } from 'lucide-react';
import { challenges } from '@/data/challenges';
import GlassPanel from '@/components/ui/GlassPanel';
import SectionHeader from '@/components/ui/SectionHeader';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fadeInUp, staggerContainer, noMotion } from '@/animations/variants';

export default function ChallengesSection() {
  const reduced = useReducedMotion();
  const variant = reduced ? noMotion : fadeInUp;
  const container = reduced ? noMotion : staggerContainer;

  return (
    <section id="challenges" className="py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          id="challenges-heading"
          title="Engineering Challenges"
          subtitle="Real problems I encountered and how I solved them"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {challenges.map((challenge) => (
            <motion.div key={challenge.id} variants={variant}>
              <GlassPanel className="p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle size={16} className="text-accent-cyan" />
                  <h3 className="text-base font-bold font-heading text-text-primary">
                    {challenge.title}
                  </h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <span className="text-text-dim mt-0.5 flex-shrink-0">📍</span>
                    <div>
                      <span className="text-text-dim text-xs uppercase tracking-wider">
                        Context
                      </span>
                      <p className="text-text-muted">{challenge.context}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <XCircle size={14} className="text-red-400/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-text-dim text-xs uppercase tracking-wider">
                        What Failed
                      </span>
                      <p className="text-text-muted">{challenge.whatFailed}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <CheckCircle
                      size={14}
                      className="text-green-400/70 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <span className="text-text-dim text-xs uppercase tracking-wider">
                        Resolution
                      </span>
                      <p className="text-text-muted">{challenge.resolution}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Lightbulb
                      size={14}
                      className="text-yellow-400/70 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <span className="text-text-dim text-xs uppercase tracking-wider">
                        Lesson Learned
                      </span>
                      <p className="text-text-muted italic">
                        {challenge.lessonLearned}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-glass-border">
                  <span className="text-xs text-text-dim font-mono">
                    Project: {challenge.project}
                  </span>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
