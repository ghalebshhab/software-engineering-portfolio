import { JoMapImage, AutomationImage } from '../../../assets';
import { profile } from './profile';
import type { Project } from '../types';
export const projects: readonly Project[] = [
  {
    id: 'salon-hub',
    category: 'fullstack',
    visual: 'salon',
    label: 'Full-Stack Platform',
    status: 'In Progress',
    title: 'Salon Hub',
    subtitle: 'Salon Management & Booking Platform',
    description:
      'A full-stack platform supporting salon discovery, services, bookings, hiring posts, user profiles, media sharing, and owner-user interactions.',
    detail:
      'Designed and implemented backend domain entities, business logic, database operations, and application APIs supporting end-to-end workflows.',
    features: [],
    technologies: [
      'React',
      'JavaScript',
      'Java',
      'Spring Boot',
      'MySQL',
      'REST APIs',
    ],
    links: [
      {
        href: 'https://github.com/ghalebshhab/salon-hub-frontend',
        label: 'Frontend Repository',
      },
      {
        href: 'https://github.com/ghalebshhab/salon-hub-backend',
        label: 'Backend Repository',
      },
    ],
  },
  {
    id: 'jomap',
    category: 'fullstack',
    image: JoMapImage,
    alt: 'JoMap application sign-in interface',
    label: 'Graduation Project',
    status: 'Completed',
    title: 'JoMap',
    subtitle: 'Location & Community Platform',
    description:
      'A location-based platform for discovering tourist attractions, restaurants, hotels, markets, and other places across Jordan.',
    detail:
      'Built Java Spring Boot services and REST APIs for accounts, favorites, reviews, ratings, locations, owner-managed listings, and moderation, with PostgreSQL and map-based functionality.',
    features: [],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
    links: [
      {
        href: 'https://github.com/ghalebshhab/Jomap-backend',
        label: 'Backend Repository',
      },
    ],
  },
  {
    id: 'qa-framework',
    category: 'qa',
    image: AutomationImage,
    alt: 'QA automation framework project banner',
    label: 'Software Quality',
    status: 'Completed',
    title: 'QA Automation Framework',
    subtitle: 'Web & API Test Automation Framework',
    description:
      'A structured automation framework demonstrating software quality engineering through UI testing, API-based authentication, reusable page objects, and regression coverage.',
    detail:
      'Integrates automated reports, screenshots on failure, and continuous integration to support maintainable test workflows.',
    features: [],
    technologies: [
      'Java',
      'Selenium WebDriver',
      'TestNG',
      'Maven',
      'Rest Assured',
      'Allure',
      'CI/CD',
    ],
    links: [
      {
        href: 'https://github.com/ghalebshhab/qa-automation-framework',
        label: 'View Repository',
      },
    ],
  },
  {
    id: 'portfolio',
    category: 'frontend',
    visual: 'portfolio',
    label: 'Personal Website',
    status: 'Live',
    title: 'Software Engineering Portfolio',
    subtitle: 'React & TypeScript Portfolio',
    description:
      'My personal software engineering portfolio showcasing professional experience, technical skills, projects, education, and software development work.',
    detail:
      'Built with focused React components, strict TypeScript, accessible navigation, and responsive layouts.',
    features: [],
    technologies: ['React', 'TypeScript', 'Vite', 'CSS', 'ESLint'],
    links: [
      {
        href: 'https://github.com/ghalebshhab/software-engineering-portfolio',
        label: 'Source Code',
      },
      { href: profile.website, label: 'Live Demo' },
    ],
  },
];
