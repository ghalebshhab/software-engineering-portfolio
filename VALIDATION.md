# Original design restoration — 16 September 2026

## CSS consolidation — 19 September 2026

The layered legacy styles were consolidated into 13 responsibility-based files plus `accessibility.css`. The cleanup removed 300 unused selectors and 247 overridden declarations, reducing the authored portfolio CSS from approximately 115 KB to 80 KB before formatting. Desktop and mobile computed styles were compared in both themes, with intentional animation-state differences excluded. TypeScript, ESLint, formatting, production build, navigation, theme switching, section reveals, and responsive overflow were checked after consolidation.

Current checks at `http://localhost:3000/`: TypeScript, ESLint, and production build passed. Browser checks confirmed dark/light switching, persistence after reload, automatic intro completion, no overflow at 390px and 1440px, and frontend project filtering. No browser console errors were observed. Intro, cursor, and reveal effects respect reduced motion. The older redesign report below is historical and does not describe the current visual appearance or bundle size.

---

# Redesign validation — 16 September 2026

Validated the production output served by Vite preview at `http://127.0.0.1:4173/`.

## Automated checks

- `npm run check`: strict TypeScript, ESLint, and production build passed.
- `npm run format:check`: passed.
- No test script or automated test suite is configured in this project.
- Stylesheet output decreased from approximately 47 KB to 23 KB before compression.
- Unused learning-project image imports were removed, saving approximately 2.4 MB of emitted assets. Source images remain preserved.

## Browser checks

| Viewport    | Horizontal overflow | Clipped cards |
| ----------- | ------------------- | ------------- |
| 320 × 780   | None                | None          |
| 390 × 844   | None                | None          |
| 768 × 1024  | None                | None          |
| 1024 × 768  | None                | None          |
| 1440 × 900  | None                | None          |
| 1920 × 1080 | None                | None          |

Mobile hero, project cards, and contact layout were visually reviewed. Desktop hero, experience timeline, and project grid were visually reviewed.

- All eight navigation fragment targets exist. Active section behavior was verified for Home, Experience, Projects, and Contact after scrolling settled.
- Corrected doubled navigation offsets so the section indicator selects the destination.
- Keyboard activation of the skip link moves focus to `main`.
- The document has one `h1` and semantic section headings.
- Filters return two full-stack projects, one frontend project, one software-quality project, and four total projects in the requested order.
- The production CV link generated a successful browser download event for `Ghaleb_Shhab_CV_Final.pdf`.
- No broken loaded images or browser console errors were observed.
- Every external new-tab link includes `noopener noreferrer`.
- Reduced-motion CSS disables animations and transitions; the navigation hook uses instant scrolling for that preference.
- The existing app has one dark theme and no contact form. No extra theme or form was introduced.

## External destinations and content evidence

The connected GitHub account successfully resolved all five supplied project repositories as public repositories. The GitHub profile URL also resolved. The existing deployed portfolio returned HTTP 200 to a read-only HEAD request. The supplied LinkedIn URL returned HTTP 999, which blocks automated verification; the exact supplied URL is retained.

Salon Hub's README is inconsistent with its implementation. [Its Maven configuration](https://github.com/ghalebshhab/Salon-hub-backend/blob/master/pom.xml) uses Java, Spring Boot, JPA, and MySQL, and its source contains Java controllers and services. [Its frontend package](https://github.com/ghalebshhab/Salon-hub-frontend/blob/main/package.json) and JSX files confirm React and JavaScript. Those are the technologies displayed on its project card, without inventing a .NET implementation.

[JoMap's Maven configuration](https://github.com/ghalebshhab/Jomap-backend/blob/main/pom.xml) confirms Spring Boot and the PostgreSQL driver. [The automation framework configuration](https://github.com/ghalebshhab/qa-automation-framework/blob/main/pom.xml) confirms Selenium, TestNG, Rest Assured, Maven, and Allure.

Professional experience, education, GPA, and skills follow the supplied request. CV PDFs were not edited. No live Salon Hub or JoMap deployment was invented. Publishing the redesign is a separate action; the existing public website is not changed by the local edits.
