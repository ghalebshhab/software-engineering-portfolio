import {
  Image,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from '../../../assets';
import type { Certification } from '../types';
export const portfolioData = {
  certifications: [
    {
      id: 1,
      title: 'Web QA Automation Testing',
      issuer: 'Training Program',
      date: '2025',
      desc: 'Completed a 40-hour hands-on course in Web QA Automation Testing using Java, Selenium WebDriver, TestNG, and Maven, focusing on building automated tests and executing test suites for web applications.',
      image: Image6,
      credential: undefined,
    },
    {
      id: 2,
      title: 'Selenium Automation Course',
      issuer: 'Training Program',
      date: '2025',
      desc: 'Gained comprehensive knowledge of Selenium Automation using Java, Maven, TestNG, Git, Jenkins, and the Page Object Model for building maintainable test frameworks.',
      image: Image4,
      credential: undefined,
    },
    {
      id: 3,
      title: 'Selenium Automation Project',
      issuer: 'Practical Project',
      date: '2025',
      desc: 'Built an end-to-end UI test automation project using Selenium WebDriver, Java, Maven, TestNG, Git, Page Object Model, GitHub Actions for CI/CD, and Allure for reporting.',
      image: Image5,
      credential: undefined,
    },
    {
      id: 4,
      title: 'QA Manual Testing',
      issuer: 'Training Program',
      date: '2025',
      desc: 'Developed a strong foundation in manual testing practices, test case design, bug reporting, and core software testing methodologies.',
      image: Image,
      credential: undefined,
    },
    {
      id: 5,
      title: 'Postman API Testing Course',
      issuer: 'Training Program',
      date: '2025',
      desc: 'Learned API testing fundamentals using Postman, including sending requests, validating responses, and testing RESTful endpoints.',
      image: Image2,
      credential: undefined,
    },
    {
      id: 6,
      title: 'Postman API Automation Project',
      issuer: 'Practical Project',
      date: '2025',
      desc: 'Implemented automated API testing workflows using Postman collections, environments, and scripting for validating REST APIs.',
      image: Image3,
      credential: undefined,
    },
    {
      id: 7,
      title: 'Master Spring Boot 4, Spring 7 & Hibernate 7',
      issuer: 'Udemy',
      date: '2026',
      desc: 'Mastered enterprise Java development using Spring Boot 4, Spring 7, and Hibernate 7. Gained hands-on experience in building secure REST APIs, implementing Spring Security, developing MVC applications, managing databases with JPA/Hibernate, applying AOP concepts, and creating full-stack CRUD applications following industry best practices.',
      image: Image7,
      credential: undefined,
    },
  ],
} satisfies { certifications: readonly Certification[] };

const certificationOrder = [7, 1, 5, 3, 4, 6, 2];
export const certifications = [...portfolioData.certifications].sort(
  (a, b) => certificationOrder.indexOf(a.id) - certificationOrder.indexOf(b.id),
);
