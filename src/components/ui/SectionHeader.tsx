'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fadeInUp, noMotion } from '@/animations/variants';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id: string;
}

export default function SectionHeader({
  title,
  subtitle,
  id,
}: SectionHeaderProps) {
  const reduced = useReducedMotion();
  const variant = reduced ? noMotion : fadeInUp;

  return (
    <motion.div
      className="text-center mb-12 md:mb-16"
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <h2
        id={id}
        className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-3"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full" />
    </motion.div>
  );
}
