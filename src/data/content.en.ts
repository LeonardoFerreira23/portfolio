// Site content in ENGLISH. Mirrors content.ts (Portuguese) — keep both in sync.
// Fields that don't change between languages (links, stack, name) are reused from the Portuguese version.
import { pt, type SiteContent } from './content'

const [bhvTransfer, construai, battle, restfulBooker, divideAi] = pt.projects

export const en: SiteContent = {
  profile: {
    ...pt.profile,
    role: 'Full Stack Developer',
    location: 'Santa Rita do Sapucaí, Brazil · UTC−3',
    taglines: [
      'building REST APIs',
      'crafting React interfaces',
      'modeling databases',
      'automating deploys with CI/CD',
      'shipping from database to UI',
    ],
    statement:
      'Full stack developer with 7 years of industry experience. I build products end to end — React and TypeScript interfaces, Java and Python APIs, databases and automated delivery.',
    facts: [
      { label: 'focus', value: 'Full stack · Web & APIs' },
      { label: 'front', value: 'React, Next.js, TypeScript' },
      { label: 'back', value: 'Java, Python, PostgreSQL' },
      { label: 'experience', value: '7 years in the industry' },
      { label: 'education', value: 'Software Eng. · Inatel (2027)' },
      { label: 'languages', value: 'Portuguese, advanced English' },
      { label: 'location', value: 'Santa Rita do Sapucaí, Brazil' },
    ],
  },

  projects: [
    {
      ...bhvTransfer,
      kind: 'Backend · Production',
      summary:
        'API that centralizes the intake of technical inspection packages. Technicians pick the site and owner from menus, drop the package (.zip/.rar), and the system organizes the files on the server and returns a download link.',
      flow: ['Technician (Dropzone)', 'POST /api/uploads', 'UploadService', 'Storage + PostgreSQL', 'Download link'],
      outcome:
        'No more manual typing of identifiers, plus automatic organization per technician. Upload and link-generation logic covered by tests with JUnit 5 and Mockito.',
    },
    {
      ...construai,
      kind: 'Applied AI · Hackathon',
      status: '1st place · 2025',
      summary:
        'Feasibility analysis for building projects in urban zones of Pouso Alegre, Brazil. Users drop a pin on the map, choose the project type and get an AI-generated zoning assessment.',
      flow: ['Map (Google Maps)', 'Pin + project type', 'Urban zone', 'Genkit + Gemini', 'Assessment'],
      outcome: 'Winner of the Construtech Hackathon 2025.',
    },
    {
      ...battle,
      kind: 'Backend · Architecture',
      status: 'Academic · S203',
      title: 'Battle System',
      summary:
        'Spring Boot service that runs turn-based Pokémon battles, with damage calculated by attack type. Consumes the PokéAPI and exposes battle history over REST.',
      outcome: 'Strategy (attacks), Factory (Pokémon creation) and Adapter (external data) patterns in an MVC/SOA architecture.',
    },
    {
      ...restfulBooker,
      kind: 'QA · API Testing',
      status: 'Academic · Software Quality',
      title: 'Automated tests — Restful Booker',
      summary:
        'Test suite for the Restful Booker hotel-booking REST API, with its own test data per scenario so it never depends on the API state.',
      flow: ['Test data (JSON)', 'HTTP client', 'pytest', 'HTML report', 'GitHub Actions'],
      outcome: '20 test cases running in CI on every push. Documented defect: DELETE on a missing ID returns 405 instead of 404.',
    },
    {
      ...divideAi,
      kind: 'Web · CI/CD',
      status: 'Live · C14',
      summary:
        'Web app for splitting group expenses: create groups, log spending, see who owes whom and settle up. Layered architecture (data, domain, presentation).',
      flow: ['Push', 'Jenkins', 'Lint + build', 'Tests + coverage', 'Vercel deploy'],
      outcome: 'Full CI/CD pipeline with Jenkins on Docker and 22 test files with Vitest.',
    },
  ],

  areas: [
    { title: 'Front-end', body: 'Responsive web interfaces, reusable components and tests.', keywords: 'React · Next.js · TypeScript · Vitest' },
    { title: 'Backend & APIs', body: 'REST services, data modeling and integrations.', keywords: 'Spring Boot · FastAPI · PostgreSQL' },
    { title: 'Delivery & infrastructure', body: 'Containers and continuous integration pipelines.', keywords: 'Docker · Jenkins' },
    { title: 'Requirements & clients', body: 'Requirements gathering, expectation alignment and technical support.', keywords: 'Scope · Communication' },
  ],

  timeline: [
    {
      period: '2019 — 2026',
      title: 'Analyst · Behive Tecnologia',
      body: 'Requirements gathering with clients, expectation alignment and software development.',
    },
    { period: 'until Dec 2027', title: 'Software Engineering · Inatel', body: 'Final year of the degree.' },
    { period: 'completed', title: 'Electronics Technician · ETE FMC', body: 'Focus on Industrial Automation.' },
  ],

  achievement: {
    highlight: '2×',
    title: 'Construtech Hackathon Champion',
    detail: '1st place in 2024 · 1st place in 2025',
  },

  contact: {
    title: "Let's talk.",
    body: 'Open to full stack roles. Happy to chat in English or Portuguese.',
    links: pt.contact.links,
  },

  pages: [
    { path: '/', label: 'Home', index: '01' },
    { path: '/projetos', label: 'Projects', index: '02' },
    { path: '/experiencia', label: 'Experience', index: '03' },
    { path: '/contato', label: 'Contact', index: '04' },
  ],

  ui: {
    locale: 'en-GB',
    metaDescription:
      'Leonardo Ferreira — Full Stack Developer with 7 years of industry experience. React, TypeScript, Java, Python and PostgreSQL.',
    skipLink: 'Skip to content',
    nav: {
      pagesLabel: 'Pages',
      socialLabel: 'Social',
      menuOpen: 'Menu',
      menuClose: 'Close',
      search: 'Search',
      available: 'Open to work',
      languageLabel: 'Language',
    },
    hero: {
      stackLabel: 'Main stack',
      ctaProjects: 'View case studies',
      ctaContact: 'Résumé / Contact',
    },
    panel: {
      label: 'Profile summary',
      file: 'profile.ts',
      status: 'available',
      localTime: 'local time',
      prompt: 'ready for the next project',
    },
    project: {
      flowLabel: 'Architecture flow',
      stackLabel: 'Technologies',
      live: 'live demo',
      code: 'code',
    },
    home: {
      featuredIndex: 'featured',
      featuredTitle: 'Recent projects',
      featuredLede: (n: number) => `${n} case studies with problem, architecture and outcome.`,
      seeAll: 'See all projects',
      achievementLabel: 'Achievements',
    },
    projectsPage: {
      index: '02 / projects',
      title: 'Case studies',
      lede: 'Each project shows the problem, how the solution flows and what was delivered.',
    },
    experiencePage: {
      index: '03 / journey',
      title: 'Experience & education',
      lede: '7 years of industry experience, from gathering requirements with clients to code in production.',
      areasIndex: 'areas',
      areasTitle: 'What I work on',
    },
    contactPage: {
      index: '04 / contact',
    },
    notFound: {
      title: 'Page not found',
      lede: "This address doesn't exist or has moved.",
      back: 'Back to home',
    },
    palette: {
      label: 'Command palette',
      openLabel: 'Open command palette',
      placeholder: 'Where do you want to go?',
      page: 'page',
      project: 'project',
      open: 'open',
      empty: 'Nothing found.',
      navigate: '↑ ↓ navigate',
      select: 'Enter open',
      close: 'Esc close',
    },
  },
}
