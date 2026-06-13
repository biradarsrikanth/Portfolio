'use client';

import { Mail, Copy, FileText } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import GlassPanel from '@/components/ui/GlassPanel';
import SectionHeader from '@/components/ui/SectionHeader';
import { useState } from 'react';

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function TerminalContact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for browsers without clipboard API
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          id="contact-heading"
          title="Contact"
          subtitle="Available for internships and full-time opportunities"
        />

        <GlassPanel className="p-0 overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-bg-secondary/80 border-b border-glass-border">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="text-xs text-text-dim font-mono ml-2">
              contact@srikanth ~ %
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-6 md:p-8 font-mono text-sm space-y-4">
            <div>
              <span className="text-accent-cyan">$</span>{' '}
              <span className="text-text-muted">echo</span>{' '}
              <span className="text-text-primary">
                &quot;Available for opportunities...&quot;
              </span>
              <span className="cursor-blink ml-0.5">▋</span>
            </div>

            <div className="text-text-muted leading-relaxed">
              <p>
                I&apos;m a final year B.Tech student currently building enterprise
                systems with Spring Boot and microservices. I&apos;m looking for
                software engineering internships and full-time roles where I can
                contribute to real backend and cloud infrastructure projects.
              </p>
            </div>

            <div className="border-t border-glass-border pt-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-accent-cyan">→</span>
                <span className="text-text-dim w-16">Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="text-text-primary hover:text-accent-cyan transition-colors flex items-center gap-2 min-h-[44px]"
                  aria-label="Copy email address"
                >
                  {personalInfo.email}
                  <Copy size={14} className="text-text-dim" />
                  {copied && (
                    <span className="text-xs text-green-400">Copied!</span>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-accent-cyan">→</span>
                <span className="text-text-dim w-16">GitHub</span>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent-cyan transition-colors flex items-center gap-2 min-h-[44px]"
                  aria-label="GitHub profile"
                >
                  <GithubIcon size={14} />
                  biradarsrikanth
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-accent-cyan">→</span>
                <span className="text-text-dim w-16">LinkedIn</span>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent-cyan transition-colors flex items-center gap-2 min-h-[44px]"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinIcon size={14} />
                  biradarsrikanth
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-accent-cyan">→</span>
                <span className="text-text-dim w-16">Resume</span>
                <a
                  href={`${process.env.__NEXT_ROUTER_BASEPATH || ''}/resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent-cyan transition-colors flex items-center gap-2 min-h-[44px]"
                  aria-label="Download resume PDF"
                >
                  <FileText size={14} />
                  Download PDF
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-bg-primary bg-gradient-to-r from-accent-cyan to-accent-blue hover:opacity-90 transition-opacity font-sans text-sm min-h-[44px]"
              >
                <Mail size={16} />
                Send Email
              </a>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
