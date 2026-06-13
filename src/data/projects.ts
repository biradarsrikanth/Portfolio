import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'fairness-checker',
    title: 'Fairness-Checker',
    featured: true,
    problem:
      'SRE teams face uneven on-call alert distribution, leading to burnout. Code quality violations slip through manual reviews, increasing technical debt.',
    solution:
      'Built a DevSecOps platform using Spring Boot + Spring MVC with REST controllers and layered service architecture following OOP/SOLID principles. Integrated AST/CST static analysis (JavaParser, Tree-sitter) into CI/CD pipelines to flag code-quality violations at commit time.',
    architecture:
      'FastAPI ML Microservice ↔ Spring Boot Backend (REST) → MySQL | Spring Security (JWT) → Role-Based Access (Engineer / Manager / Admin) | JavaParser + Tree-sitter → CI/CD Static Analysis Pipeline',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'FastAPI',
      'REST APIs',
      'MySQL',
      'Spring Security',
      'JWT',
      'JavaParser',
      'Tree-sitter',
      'Git',
    ],
    challenges: [
      'Designing a role-based access model with stateless JWT authentication across Engineer, Manager, and Admin views',
      'Integrating Python-native ML scoring via FastAPI with the Java Spring Boot backend over REST',
      'Building AST/CST static analysis pipelines that run at commit time without blocking developer velocity',
    ],
    outcomes: [
      'Tracks on-call fairness via Gini coefficients',
      'Reduced manual code review overhead through automated static analysis',
      'Services independently deployable and version-controlled on Git',
      'Role-based access enforced via Spring Security filter chain',
    ],
    githubUrl: 'https://github.com/biradarsrikanth/Fairness-Checker',
    status: 'in-progress',
  },
  {
    id: 'transaction-reconciliation',
    title: 'Transaction Reconciliation Engine',
    featured: false,
    problem:
      'Financial auditors spent hours manually reconciling 5K+ transactions per run, identifying mismatches, duplicates, and missing entries across counterparties.',
    solution:
      'Designed a normalised MySQL schema detecting 3 discrepancy types (amount mismatch, duplicate, missing entry). Built modular Java components using OOP and the Strategy pattern, enabling plug-in rule extensions without modifying core logic.',
    architecture:
      'Transaction Parser → Validator → Resolver (Strategy Pattern) → MySQL (Normalised Schema) → Audit Trail Reports',
    technologies: ['Java', 'SQL', 'MySQL', 'OOP', 'Strategy Pattern'],
    challenges: [
      'Designing a normalised schema that efficiently detects three distinct discrepancy types',
      'Implementing the Strategy pattern to allow plug-in rule extensions without modifying core reconciliation logic',
    ],
    outcomes: [
      '5,000+ transactions processed per run',
      '95% automated resolution rate via configurable tolerance thresholds',
      'Manual auditor workload reduced from hours to minutes',
      'Parameterised SQL aggregation queries for audit-trail reports',
    ],
    githubUrl: 'https://github.com/biradarsrikanth/reconsile',
    status: 'completed',
  },
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction System',
    featured: false,
    problem:
      'Businesses lacked visibility into which customers were likely to churn, making proactive retention impossible across 10K+ customer records.',
    solution:
      'Built an end-to-end ML pipeline covering ingestion, feature engineering, model training, and evaluation using Scikit-learn. Exposed predictions via a FastAPI endpoint for CRM dashboard integration.',
    architecture:
      'Data Ingestion → SQL Feature Extraction → SMOTE Oversampling → Random Forest Model → FastAPI Endpoint → CRM Dashboard',
    technologies: [
      'Python',
      'SQL',
      'Scikit-learn',
      'FastAPI',
      'Random Forest',
      'SMOTE',
    ],
    challenges: [
      'Optimising SQL aggregation queries for feature extraction to reduce preprocessing time',
      'Addressing class imbalance with SMOTE oversampling and threshold tuning to reduce false-negatives',
    ],
    outcomes: [
      '10,000 customer records processed',
      '82% model accuracy (Random Forest, cross-validated)',
      '40% preprocessing time reduction via optimised SQL queries',
      '15% false-negative rate reduction via SMOTE and threshold tuning',
    ],
    githubUrl:
      'https://github.com/biradarsrikanth/Customer_Churn_Prediction',
    status: 'completed',
  },
  {
    id: 'edurisk',
    title: 'EduRisk Student Dropout Prediction',
    featured: false,
    problem:
      'Educational institutions struggle to identify at-risk students early enough for intervention, leading to preventable dropouts.',
    solution:
      'Built a frontend interface for a student dropout prediction system, enabling institutions to visualize risk scores and identify at-risk students for early intervention.',
    architecture:
      'Frontend Dashboard → Risk Scoring API → Student Data Pipeline',
    technologies: ['JavaScript', 'React', 'Frontend Development'],
    challenges: [
      'Designing an intuitive dashboard that surfaces complex risk metrics to non-technical education staff',
    ],
    outcomes: [
      'Interactive frontend for visualizing student risk scores',
      'Enables early intervention for at-risk students',
    ],
    githubUrl: 'https://github.com/biradarsrikanth/edurisk-frontend',
    status: 'completed',
  },
  {
    id: 'handwritten-recognition',
    title: 'Handwritten Digit Recognition',
    featured: false,
    problem:
      'Manual digit classification is slow and error-prone, requiring automated pattern recognition from handwritten input.',
    solution:
      'Built a neural network-based handwritten digit recognition system using deep learning techniques for automated classification.',
    architecture: 'Image Input → Preprocessing → Neural Network → Digit Classification',
    technologies: ['Python', 'Jupyter Notebook', 'Deep Learning', 'PyTorch'],
    challenges: [
      'Handling variations in handwriting styles and image quality for robust classification',
    ],
    outcomes: [
      'Automated digit classification from handwritten input',
      'End-to-end pipeline from image preprocessing to prediction',
    ],
    githubUrl:
      'https://github.com/biradarsrikanth/handwritten-recognition',
    status: 'completed',
  },
];
