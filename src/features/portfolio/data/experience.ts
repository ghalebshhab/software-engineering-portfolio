import type { ExperienceEntry } from '../types';
export const experiences = [
  {
    id: 'kafana-tech',
    role: 'Full-Stack Software Developer',
    company: 'Kafana Tech',
    date: 'July 2026 – Present',
    current: true,
    responsibilities: [
      'Develop and maintain production web applications using React.js, Next.js, TypeScript, and .NET, delivering reusable components and user-facing functionality.',
      'Build and integrate backend services using .NET, Hasura GraphQL, and PostgreSQL to support application data and business functionality.',
      'Develop UI functionality with jQuery and integrate frontend features with GraphQL and backend APIs across the application stack.',
      'Investigate frontend and backend issues and contribute to code quality through ESLint enforcement, code reviews, and Agile sprints.',
    ],
    technologies: [
      '.NET',
      'TypeScript',
      'React',
      'Next.js',
      'GraphQL',
      'Hasura',
      'PostgreSQL',
      'jQuery',
    ],
  },
  {
    id: 'orange-school',
    role: 'Software Development Trainee',
    company: 'Orange Digital Center – Orange School',
    date: 'June 2026 – July 2026',
    current: false,
    responsibilities: [
      'Completed intensive software development training focused on communication, teamwork, critical thinking, and workplace readiness.',
      'Applied UI/UX principles and strengthened HTML5, CSS3, and JavaScript (ES6+) through hands-on project assignments.',
    ],
    technologies: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'UI/UX',
      'Teamwork',
      'Problem Solving',
    ],
  },
] satisfies readonly ExperienceEntry[];
