import { QaCv, SwCv } from '../../../assets';

export const opportunities = [
  {
    id: 'fullstack',
    title: 'Full-Stack Developer',
    stack: 'React · TypeScript · .NET · Next.js',
    description:
      'Connecting responsive interfaces, backend services, and application data.',
    evidence:
      'Production development at Kafana Tech, with frontend features, GraphQL integration, and backend services.',
    cv: SwCv,
    cvLabel: 'Software CV',
  },
  {
    id: 'backend',
    title: 'Software / Backend Engineer',
    stack: 'Java · Spring Boot · REST APIs · SQL',
    description:
      'Building application logic, APIs, and database-driven systems.',
    evidence:
      'JoMap and Salon Hub demonstrate domain modeling, service development, and database integration.',
    cv: SwCv,
    cvLabel: 'Software CV',
  },
  {
    id: 'qa',
    title: 'QA Automation Engineer',
    stack: 'Selenium · Java · TestNG · Postman',
    description:
      'Bringing a developer’s perspective to testing and software reliability.',
    evidence:
      'Hands-on QA training and an automation framework with page objects, API testing, CI, and Allure reporting.',
    cv: QaCv,
    cvLabel: 'QA CV',
  },
] as const;
