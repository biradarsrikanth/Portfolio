'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Star } from 'lucide-react';
import { projects } from '@/data/projects';
import GlassPanel from '@/components/ui/GlassPanel';
import Tag from '@/components/ui/Tag';
import SectionHeader from '@/components/ui/SectionHeader';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fadeInUp, staggerContainer, noMotion } from '@/animations/variants';
import type { Project } from '@/types';
import ArchitectureDiagram from '@/components/architecture/ArchitectureDiagram';

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="glass-panel max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${project.id}`}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-xs text-accent-cyan mb-2">
                <Star size={12} /> Featured Project
              </span>
            )}
            <h3
              id={`modal-title-${project.id}`}
              className="text-2xl font-bold font-heading text-text-primary"
            >
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-text-muted hover:text-text-primary min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <h4 className="text-sm font-semibold text-accent-cyan mb-1">
              Problem
            </h4>
            <p className="text-sm text-text-muted leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent-cyan mb-1">
              Solution
            </h4>
            <p className="text-sm text-text-muted leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent-cyan mb-1">
              Architecture
            </h4>
            <p className="text-xs font-mono text-text-dim bg-bg-primary/50 p-3 rounded-lg border border-glass-border leading-relaxed">
              {project.architecture}
            </p>
            {project.id === 'fairness-checker' && <ArchitectureDiagram />}
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent-cyan mb-1">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Tag key={tech} label={tech} />
              ))}
            </div>
          </div>

          {project.challenges.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-accent-cyan mb-1">
                Challenges
              </h4>
              <ul className="space-y-1">
                {project.challenges.map((c, i) => (
                  <li key={i} className="text-sm text-text-muted flex gap-2">
                    <span className="text-accent-cyan mt-1 flex-shrink-0">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="text-sm font-semibold text-accent-cyan mb-1">
              Outcomes
            </h4>
            <ul className="space-y-1">
              {project.outcomes.map((o, i) => (
                <li key={i} className="text-sm text-text-muted flex gap-2">
                  <span className="text-accent-cyan mt-1 flex-shrink-0">✓</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-accent-cyan border border-accent-cyan/30 hover:bg-accent-cyan/10 transition-colors min-h-[44px]"
          >
            <ExternalLink size={14} />
            View on GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reduced = useReducedMotion();
  const variant = reduced ? noMotion : fadeInUp;
  const container = reduced ? noMotion : staggerContainer;

  return (
    <section id="projects" className="py-20 md:py-28 px-4 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          id="projects-heading"
          title="Projects"
          subtitle="Real problems, real solutions, real outcomes"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={variant}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full text-left"
                aria-label={`View details for ${project.title}`}
              >
                <GlassPanel
                  hover
                  className={`p-6 h-full cursor-pointer group ${
                    project.featured
                      ? 'border-accent-cyan/30 md:flex md:gap-8'
                      : ''
                  }`}
                >
                  <div className={project.featured ? 'md:flex-1' : ''}>
                    <div className="flex items-center gap-2 mb-3">
                      {project.featured && (
                        <Star
                          size={14}
                          className="text-accent-cyan fill-accent-cyan"
                        />
                      )}
                      <h3 className="text-lg font-bold font-heading text-text-primary group-hover:text-accent-cyan transition-colors">
                        {project.title}
                      </h3>
                      {project.status === 'in-progress' && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-accent-blue/15 text-accent-blue border border-accent-blue/30">
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text-muted mb-4 line-clamp-2">
                      {project.problem}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <Tag key={tech} label={tech} />
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-xs text-text-dim px-2 py-1">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {project.featured && (
                    <div className="hidden md:flex md:flex-1 items-center justify-center">
                      <div className="text-xs font-mono text-text-dim bg-bg-primary/50 p-4 rounded-lg border border-glass-border w-full">
                        <p className="text-accent-cyan mb-1">
                          # Architecture
                        </p>
                        <p className="leading-relaxed">
                          {project.architecture}
                        </p>
                      </div>
                    </div>
                  )}
                </GlassPanel>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
