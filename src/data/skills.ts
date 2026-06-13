import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'data',
    title: 'Data & Analytics',
    icon: 'Database',
    skills: [
      { name: 'SQL', proficiency: 'Advanced' },
      { name: 'Python', proficiency: 'Proficient' },
      { name: 'Pandas / NumPy', proficiency: 'Proficient' },
      { name: 'Scikit-learn', proficiency: 'Proficient' },
      { name: 'PyTorch', proficiency: 'Familiar' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: 'Server',
    skills: [
      { name: 'Java', proficiency: 'Advanced' },
      { name: 'Spring Boot', proficiency: 'Proficient' },
      { name: 'REST APIs', proficiency: 'Proficient' },
      { name: 'Spring MVC', proficiency: 'Proficient' },
      { name: 'FastAPI', proficiency: 'Proficient' },
      { name: 'Microservices', proficiency: 'Familiar' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: 'Cloud',
    skills: [
      { name: 'Git / GitHub', proficiency: 'Advanced' },
      { name: 'Maven', proficiency: 'Proficient' },
      { name: 'AWS Fundamentals', proficiency: 'Familiar' },
      { name: 'Azure Fundamentals', proficiency: 'Familiar' },
      { name: 'CI/CD Pipelines', proficiency: 'Familiar' },
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering & Design',
    icon: 'Wrench',
    skills: [
      { name: 'OOP / SOLID', proficiency: 'Proficient' },
      { name: 'Design Patterns', proficiency: 'Proficient' },
      { name: 'MySQL / MongoDB', proficiency: 'Proficient' },
      { name: 'C++', proficiency: 'Familiar' },
      { name: 'ReactJS / NodeJS', proficiency: 'Familiar' },
      { name: 'JavaScript', proficiency: 'Familiar' },
    ],
  },
];
