'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personal';
import GlassPanel from '@/components/ui/GlassPanel';
import SectionHeader from '@/components/ui/SectionHeader';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fadeInUp, staggerContainer, noMotion } from '@/animations/variants';

export default function MissionSection() {
  const reduced = useReducedMotion();
  const variant = reduced ? noMotion : fadeInUp;
  const container = reduced ? noMotion : staggerContainer;

  return (
    <section id="mission" className="py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          id="mission-heading"
          title="Mission"
          subtitle="What drives my engineering journey"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Mission statement */}
          <motion.div variants={variant}>
            <GlassPanel className="p-6 md:p-10 mb-10 max-w-3xl mx-auto">
              <p className="text-text-muted text-base md:text-lg leading-relaxed text-center italic">
                &ldquo;{personalInfo.missionStatement}&rdquo;
              </p>
            </GlassPanel>
          </motion.div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            {personalInfo.stats.map((stat) => (
              <motion.div key={stat.label} variants={variant}>
                <GlassPanel
                  hover
                  className="p-6 text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold font-heading text-accent-cyan mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
