export interface SkillCategory {
  readonly title: string;
  readonly items: readonly string[];
}
export const skillCategories = [
  {
    title: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'jQuery',
    ],
  },
  {
    title: 'Backend & APIs',
    items: [
      '.NET',
      'Java Spring Boot',
      'Node.js',
      'Express.js',
      'REST APIs',
      'GraphQL',
      'Hasura',
    ],
  },
  { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL'] },
  {
    title: 'Tools & Engineering',
    items: [
      'Git',
      'GitHub',
      'Jira',
      'Agile/Scrum',
      'CI/CD',
      'UML',
      'Software Documentation',
      'Linux',
      'pgAdmin',
    ],
  },
  {
    title: 'Programming Languages',
    items: ['C#', 'Java', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    title: 'QA Engineering & Testing',
    items: [
      'Selenium WebDriver',
      'Manual Testing',
      'Test Case Design',
      'Bug Reporting',
      'TestNG',
      'Postman API Testing',
      'Test Automation',
      'Maven',
      'Page Object Model',
      'Jenkins',
      'Allure Reports',
      'ESLint',
    ],
  },
] satisfies readonly SkillCategory[];
