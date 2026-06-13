'use client';

import { motion } from 'framer-motion';
import { Database, Server, Cloud, Wrench } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import GlassPanel from '@/components/ui/GlassPanel';
import SectionHeader from '@/components/ui/SectionHeader';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fadeInUp, staggerContainer, noMotion } from '@/animations/variants';
import type { Skill } from '@/types';

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database size={24} />,
  Server: <Server size={24} />,
  Cloud: <Cloud size={24} />,
  Wrench: <Wrench size={24} />,
};

const proficiencyClass: Record<Skill['proficiency'], string> = {
  Advanced: 'badge-advanced',
  Proficient: 'badge-proficient',
  Familiar: 'badge-familiar',
};

export default function SkillsSection() {
  const reduced = useReducedMotion();
  const variant = reduced ? noMotion : fadeInUp;
  const container = reduced ? noMotion : staggerContainer;

  return (
    <section id="skills" className="py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          id="skills-heading"
          title="Skills"
          subtitle="Honest proficiency levels — no fake percentages"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillCategories.map((cat) => (
            <motion.div key={cat.id} variants={variant}>
              <GlassPanel hover className="p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                    {iconMap[cat.icon] || <Wrench size={24} />}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-text-primary">
                    {cat.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-text-muted">
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${proficiencyClass[skill.proficiency]}`}
                      >
                        {skill.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
