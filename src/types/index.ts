export interface Project {
  id: string;
  title: string;
  featured: boolean;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  challenges: string[];
  outcomes: string[];
  githubUrl: string;
  status: 'completed' | 'in-progress';
}

export interface TimelineStage {
  id: string;
  stage: number;
  title: string;
  period: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface Skill {
  name: string;
  proficiency: 'Familiar' | 'Proficient' | 'Advanced';
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface Challenge {
  id: string;
  title: string;
  context: string;
  whatFailed: string;
  resolution: string;
  lessonLearned: string;
  project: string;
}

export interface LabCard {
  id: string;
  title: string;
  description: string;
  locked: true;
}

export interface PersonalInfo {
  name: string;
  title: string;
  specialization: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  location: string;
  education: {
    institution: string;
    degree: string;
    duration: string;
    cgpa: string;
  };
  missionStatement: string;
  stats: {
    label: string;
    value: string;
  }[];
}
