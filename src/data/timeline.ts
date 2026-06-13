import { TimelineStage } from '@/types';

export const timeline: TimelineStage[] = [
  {
    id: 'data-analytics',
    stage: 1,
    title: 'Data Analytics',
    period: '2023',
    description:
      'Started with data analysis fundamentals — Excel, NumPy, Pandas. Built the foundation for understanding data patterns and deriving insights from raw datasets.',
    icon: 'BarChart3',
    skills: ['Excel', 'NumPy', 'Pandas'],
  },
  {
    id: 'problem-solving',
    stage: 2,
    title: 'Problem Solving',
    period: '2023 – 2024',
    description:
      'Sharpened algorithmic thinking through DSA and SQL. Earned HackerRank SQL 5-Star badge. Learned to break down complex problems into efficient, structured solutions.',
    icon: 'Puzzle',
    skills: ['DSA', 'SQL', 'HackerRank SQL 5-Star'],
  },
  {
    id: 'machine-learning',
    stage: 3,
    title: 'Machine Learning',
    period: '2024',
    description:
      'Applied ML to real problems — Customer Churn Analysis, Transaction Reconciliation, and EduRisk Student Dropout Prediction. Built end-to-end pipelines from data to deployment.',
    icon: 'Brain',
    skills: ['Scikit-learn', 'PyTorch', 'FastAPI', 'SMOTE'],
  },
  {
    id: 'cloud-fundamentals',
    stage: 4,
    title: 'Cloud Fundamentals',
    period: '2024',
    description:
      'Expanded into cloud computing with AWS and Azure fundamentals. Understanding infrastructure, deployment, and scalability principles for enterprise systems.',
    icon: 'Cloud',
    skills: ['AWS Fundamentals', 'Azure Fundamentals'],
  },
  {
    id: 'backend-engineering',
    stage: 5,
    title: 'Backend Engineering',
    period: '2024 – 2025',
    description:
      'Dived deep into backend development with Java, Spring Boot, REST APIs, and relational databases. Learning enterprise patterns like MVC, layered architecture, and SOLID principles.',
    icon: 'Server',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Spring MVC'],
  },
  {
    id: 'enterprise-systems',
    stage: 6,
    title: 'Enterprise Systems',
    period: '2025 – Present',
    description:
      'Building the Fairness-Checker — a DevSecOps platform using Spring Boot + FastAPI microservices, JWT auth, and CI/CD static analysis. Thinking at the systems level.',
    icon: 'Building2',
    skills: [
      'Microservices',
      'Spring Security',
      'JWT',
      'JavaParser',
      'Tree-sitter',
      'CI/CD',
    ],
  },
];
