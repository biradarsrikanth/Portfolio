'use client';

import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';
import { certifications } from '@/data/certifications';
import SectionHeader from '@/components/ui/SectionHeader';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fadeInUp, staggerContainer, noMotion } from '@/animations/variants';

const issuerColors: Record<string, { accent: string; bg: string; border: string; icon: string }> = {
  IBM: {
    accent: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/25',
    icon: 'text-blue-400',
  },
  NPTEL: {
    accent: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/25',
    icon: 'text-amber-400',
  },
  'Cisco Networking Academy': {
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/25',
    icon: 'text-emerald-400',
  },
};

const defaultColor = {
  accent: 'text-accent-cyan',
  bg: 'bg-accent-cyan/10',
  border: 'border-accent-cyan/25',
  icon: 'text-accent-cyan',
};

export default function CertificationsSection() {
  const reduced = useReducedMotion();
  const variant = reduced ? noMotion : fadeInUp;
  const container = reduced ? noMotion : staggerContainer;

  return (
    <section
      id="certifications"
      className="py-20 md:py-28 px-4 bg-bg-secondary/30"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          id="certifications-heading"
          title="Certifications"
          subtitle="Verified credentials from industry leaders"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {certifications.map((cert) => {
            const colors = issuerColors[cert.issuer] ?? defaultColor;

            return (
              <motion.div key={cert.id} variants={variant}>
                <div
                  className={`relative group rounded-2xl border ${colors.border} backdrop-blur-sm bg-glass-bg p-6 h-full transition-all duration-300 hover:shadow-panel hover:border-opacity-50 hover:-translate-y-1`}
                >
                  {/* Top gradient line */}
                  <div
                    className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-current to-transparent ${colors.accent} opacity-40`}
                  />

                  {/* Issuer badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center`}
                    >
                      <Award size={22} className={colors.icon} />
                    </div>
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full ${colors.bg} ${colors.accent} border ${colors.border}`}
                    >
                      {cert.date}
                    </span>
                  </div>

                  {/* Cert name */}
                  <h3 className="text-base font-bold font-heading text-text-primary mb-2 leading-snug">
                    {cert.name}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-1.5">
                    <BadgeCheck size={14} className={colors.icon} />
                    <span className={`text-sm font-medium ${colors.accent}`}>
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    style={{
                      background:
                        'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6, 182, 212, 0.04), transparent 40%)',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
