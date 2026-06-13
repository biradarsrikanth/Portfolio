'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const pathVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeInOut' as const },
  },
};

const nodeVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const noMotionVariant = {
  hidden: { opacity: 1, scale: 1, pathLength: 1 },
  visible: { opacity: 1, scale: 1, pathLength: 1 },
};

interface NodeBoxProps {
  x: number;
  y: number;
  label: string;
  sublabel?: string;
  color: string;
  delay: number;
  reduced: boolean;
}

function NodeBox({ x, y, label, sublabel, color, delay, reduced }: NodeBoxProps) {
  const variant = reduced ? noMotionVariant : nodeVariant;

  return (
    <motion.g
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <rect
        x={x}
        y={y}
        width="130"
        height={sublabel ? '50' : '40'}
        rx="8"
        fill={color}
        fillOpacity="0.1"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <text
        x={x + 65}
        y={y + (sublabel ? 20 : 24)}
        textAnchor="middle"
        fill={color}
        fontSize="11"
        fontFamily="var(--font-mono)"
        fontWeight="600"
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={x + 65}
          y={y + 38}
          textAnchor="middle"
          fill={color}
          fontSize="8"
          fontFamily="var(--font-mono)"
          opacity="0.6"
        >
          {sublabel}
        </text>
      )}
    </motion.g>
  );
}

export default function ArchitectureDiagram() {
  const reduced = useReducedMotion();
  const pVariant = reduced ? noMotionVariant : pathVariant;

  return (
    <div className="mt-8" role="img" aria-describedby="arch-desc">
      <p id="arch-desc" className="sr-only">
        Architecture diagram of the Fairness-Checker system showing FastAPI ML
        Microservice connecting to Spring Boot Backend via REST, which connects
        to MySQL database and Spring Security JWT authentication. JavaParser and
        Tree-sitter feed into the CI/CD Static Analysis Pipeline.
      </p>

      <svg
        viewBox="0 0 700 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-2xl mx-auto"
      >
        {/* Row 1: FastAPI → Spring Boot → MySQL */}
        <NodeBox
          x={10}
          y={20}
          label="FastAPI ML"
          sublabel="Microservice"
          color="#06b6d4"
          delay={0}
          reduced={reduced}
        />
        <NodeBox
          x={280}
          y={20}
          label="Spring Boot"
          sublabel="REST Backend"
          color="#3b82f6"
          delay={0.2}
          reduced={reduced}
        />
        <NodeBox
          x={550}
          y={20}
          label="MySQL"
          sublabel="Database"
          color="#06b6d4"
          delay={0.4}
          reduced={reduced}
        />

        {/* Row 2: Spring Security → JWT */}
        <NodeBox
          x={200}
          y={120}
          label="Spring Security"
          sublabel="Filter Chain"
          color="#3b82f6"
          delay={0.6}
          reduced={reduced}
        />
        <NodeBox
          x={420}
          y={120}
          label="JWT Auth"
          sublabel="Stateless"
          color="#06b6d4"
          delay={0.8}
          reduced={reduced}
        />

        {/* Row 3: Static Analysis Pipeline */}
        <NodeBox
          x={80}
          y={230}
          label="JavaParser"
          sublabel="AST Analysis"
          color="#06b6d4"
          delay={1}
          reduced={reduced}
        />
        <NodeBox
          x={300}
          y={230}
          label="Tree-sitter"
          sublabel="CST Analysis"
          color="#06b6d4"
          delay={1.2}
          reduced={reduced}
        />
        <NodeBox
          x={520}
          y={230}
          label="CI/CD Pipeline"
          sublabel="Static Analysis"
          color="#3b82f6"
          delay={1.4}
          reduced={reduced}
        />

        {/* Animated connection paths */}
        {/* FastAPI → Spring Boot */}
        <motion.path
          d="M140 45 L280 45"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          variants={pVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
        />
        <motion.polygon
          points="275,41 283,45 275,49"
          fill="#06b6d4"
          variants={reduced ? noMotionVariant : nodeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        />

        {/* Spring Boot → MySQL */}
        <motion.path
          d="M410 45 L550 45"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          variants={pVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.polygon
          points="545,41 553,45 545,49"
          fill="#3b82f6"
          variants={reduced ? noMotionVariant : nodeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        />

        {/* Spring Boot → Spring Security */}
        <motion.path
          d="M345 70 L300 120"
          stroke="#3b82f6"
          strokeWidth="1.5"
          variants={pVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        {/* Spring Security → JWT */}
        <motion.path
          d="M330 145 L420 145"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          variants={pVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
        <motion.polygon
          points="415,141 423,145 415,149"
          fill="#06b6d4"
          variants={reduced ? noMotionVariant : nodeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
        />

        {/* JavaParser → CI/CD */}
        <motion.path
          d="M210 255 L520 255"
          stroke="#06b6d4"
          strokeWidth="1"
          strokeDasharray="3 3"
          variants={pVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 1 }}
        />

        {/* Tree-sitter → CI/CD */}
        <motion.path
          d="M430 255 L520 255"
          stroke="#06b6d4"
          strokeWidth="1"
          strokeDasharray="3 3"
          variants={pVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1.3, duration: 0.6 }}
        />

        {/* Label: REST */}
        <text
          x="210"
          y="38"
          fill="#06b6d4"
          fontSize="8"
          fontFamily="var(--font-mono)"
          opacity="0.5"
        >
          REST
        </text>

        {/* Label: Role-Based Access */}
        <text
          x="365"
          y="138"
          fill="#06b6d4"
          fontSize="7"
          fontFamily="var(--font-mono)"
          opacity="0.5"
        >
          →
        </text>
      </svg>
    </div>
  );
}
