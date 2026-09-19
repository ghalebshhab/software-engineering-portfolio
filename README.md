# Ghaleb Shhab Portfolio

React 19, TypeScript and Vite portfolio. Requires Node.js 22.12+ and npm.

## Development

```sh
npm ci
npm run dev
```

## Quality and production

```sh
npm run check
npm run preview
```

`check` runs strict TypeScript validation, ESLint and the production build. Deploy the generated `dist/` directory to any static host. `preview` serves the built output locally. GitHub Actions runs the same checks on pushes and pull requests.

## Responsibilities

```text
src/
  app/                         Application composition
  assets/images/               Portfolio images
  features/portfolio/
    components/                Section views and typed project cards
    data/                      Project, skill and certification content
    hooks/                     Navigation, intro, and reveal lifecycles
    types.ts                   Portfolio domain contracts
  shared/components/           Theme toggle, cursor, error boundary, headings and links
  shared/hooks/                Persistent theme state
  styles/                      Component styles, themes and accessibility
  main.tsx                     React bootstrap
public/                        Resumes and favicon
```

Components own presentation, hooks own browser effects and their cleanup, and data modules own structured content. Project cards depend on a small typed contract and accept data through props. Add projects through `data/projects.ts`, certifications through `data/certifications.ts`, and skill groups through `data/skills.ts`. New project entries reuse the same card and filtering behavior.

This applies SOLID through focused responsibilities, composition and explicit contracts without unnecessary service classes. No backend or state library is needed for a static portfolio.

## Accessibility and behavior

The original terminal intro plays on page entry, with a Skip intro button and Escape shortcut. Reduced-motion users go directly to the portfolio. The page supports keyboard focus and a skip link. Navigation scrolls its own horizontal container without moving the page. Below-the-fold images load lazily. Certificate links open the supplied certificate image when no external credential URL exists; this does not claim independent credential verification. Public resume paths honor Vite's configured base URL. The software engineering download uses the latest supplied development CV; the separate QA CV is also available. PDFs are served without content edits.

The neon visual identity, terminal About panel, animated portrait, custom cursor, reveal effects, floating badges, and card interactions are preserved. The navigation includes a dark/light toggle persisted under `portfolio-theme`; the HTML bootstrap restores it before React renders. Theme storage failures fall back gracefully. Styles are consolidated by responsibility: foundation, navigation, intro, page sections, interactions, and themes. There is no contact form.

## Content and repository verification

`profile.ts` owns professional links and the current stack. `experience.ts` contains the supplied Kafana Tech and Orange School roles. The page presents Software Engineer / Full-Stack Developer as the primary identity, with testing as an engineering strength.

Project order is Salon Hub, JoMap, QA Automation Framework, then this portfolio. Older learning project files remain in the source assets but are not imported or included in the project gallery.

Salon Hub's backend README describes .NET/C#/PostgreSQL, but its actual default-branch `pom.xml` and Java controllers/services use Spring Boot and MySQL. Its frontend uses React and JavaScript. The card follows the implementation evidence rather than the contradictory README. JoMap's PostgreSQL driver and Spring Boot dependencies were verified in `pom.xml`; the automation framework's Maven dependencies confirm Selenium, TestNG, Rest Assured, and Allure.

The existing deployment URL is `https://portfolio1-pi-mauve.vercel.app/`. Local changes must still be deployed separately before that public website shows the redesign. The source repository link follows the supplied request; the local checkout's Git remote is left as configured.

## Recruiter presentation enhancements

The hero highlights current work, core technologies, and direct professional links. `data/opportunities.ts` owns evidence-based role summaries and their matching CVs; `OpportunityFit` lets visitors explore development, backend, and QA roles. `ReadingProgress` batches scroll updates and observes document height changes. `useSpotlight` updates card highlight coordinates without React renders. Presentation rules now live with their owning component stylesheet; reduced-motion and touch fallbacks are included.
