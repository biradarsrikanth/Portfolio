import { PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Biradar Srikanth',
  title: 'Backend Engineer',
  specialization: 'Building Cloud-Backed Enterprise Systems',
  email: 'srikanth.work.at@gmail.com',
  phone: '+91-9491969133',
  githubUrl: 'https://github.com/biradarsrikanth',
  linkedinUrl: 'https://www.linkedin.com/in/biradarsrikanth',
  location: 'Hyderabad, India',
  education: {
    institution: 'MLR Institute of Technology (MLRIT), Hyderabad',
    degree: 'B.Tech in Computer Science & Information Technology',
    duration: 'Sep 2023 – Jun 2027',
    cgpa: '8.63',
  },
  missionStatement:
    'I started in data analytics, developed strong problem-solving skills through DSA and SQL, expanded into machine learning, and am now building cloud-backed enterprise systems using Spring Boot, PostgreSQL, microservices, and CI/CD pipelines. I think like an engineer — breaking complex problems into modular, testable, and maintainable solutions.',
  stats: [
    { label: 'Projects Built', value: '5+' },
    { label: 'CGPA', value: '8.63' },
    { label: 'Technologies', value: '15+' },
  ],
};
