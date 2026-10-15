// Site content in ENGLISH. Mirrors content.ts (Portuguese) — keep both in sync.
// Fields that don't change between languages (links, stack, name) are reused from the Portuguese version.
import { pt, CV_FILE, CV_FILE_EN, type SiteContent } from './content'

/** Busca o projeto em português pelo nome do repositório (a ordem da lista pode mudar). */
const base = (repoName: string) => {
  const project = pt.projects.find((p) => p.repo?.endsWith(`/${repoName}`))
  if (!project) throw new Error(`Projeto não encontrado em content.ts: ${repoName}`)
  return project
}

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
      'Full stack developer with 7 years in a technical role, where I designed and built two internal systems on my own. I work on both ends: React and TypeScript interfaces, Java and Python APIs, and databases.',
    facts: [
      { label: 'focus', value: 'Full stack · Web & APIs' },
      { label: 'front', value: 'React, Next.js, TypeScript' },
      { label: 'back', value: 'Java, Python, PostgreSQL' },
      { label: 'experience', value: '7 years in technical roles' },
      { label: 'education', value: 'Software Eng. · Inatel (2027)' },
      { label: 'languages', value: 'Portuguese, advanced English' },
      { label: 'location', value: 'Santa Rita do Sapucaí, Brazil' },
    ],
  },

  projects: [
    {
      ...base('bhv-transfer'),
      kind: 'Backend · Production',
      summary:
        'API that centralizes the intake of technical inspection packages. Technicians pick the site and owner from menus and drop the file (.zip/.rar); it uploads in 10 MB chunks, and the server reassembles and organizes the files and returns a download link.',
      flow: ['Dropzone (10 MB chunks)', 'POST /api/uploads', 'UploadService reassembles chunks', 'Storage + PostgreSQL', 'Download link'],
      outcome:
        'Uploads of files over 1 GB, with up to 3 retries per chunk if the connection drops. No more manual typing of identifiers; upload and link-generation logic covered by tests with JUnit 5 and Mockito.',
    },
    {
      ...base('construai'),
      kind: 'Applied AI · Hackathon',
      status: '1st place · 2025',
      summary:
        'Feasibility analysis for building projects in urban zones of Pouso Alegre, Brazil. Users drop a pin on the map, choose the project type and get an AI-generated zoning assessment.',
      flow: ['Map (Google Maps)', 'Pin + project type', 'Urban zone', 'Genkit + Gemini', 'Assessment'],
      outcome: 'Winner of the Construtech Hackathon 2025.',
    },
    {
      ...base('divide-ai-front'),
      kind: 'Web · CI/CD',
      status: 'Live · C14',
      summary:
        'Web app for splitting group expenses: create groups, log spending, see who owes whom and settle up. Layered architecture (data, domain, presentation).',
      flow: ['Push', 'Jenkins', 'Lint + build', 'Tests + coverage', 'Vercel deploy'],
      outcome: 'Full CI/CD pipeline with Jenkins on Docker and 22 test files with Vitest.',
    },
    {
      ...base('gps-report-generator'),
      kind: 'Desktop · Automation',
      summary:
        'Desktop app that generates the standard map image for technical field reports. From coordinates (decimal or degrees, minutes and seconds) it fetches the satellite image, address and elevation from Google Maps and returns an image ready for the PDF, with a data footer.',
      flow: ['Coordinates (JavaFX)', 'CoordinateParser', 'Google Maps: Static, Geocoding, Elevation', 'ImageProcessingService', '640×380 image + footer'],
      outcome:
        'Packaged as a Windows installer (.exe) with jpackage and WiX: runs without Java installed on the user machine. The API key lives in an environment variable, outside the code.',
    },
    {
      ...base('batalha'),
      kind: 'Backend · Architecture',
      status: 'Academic · S203',
      title: 'Battle System',
      summary:
        'Spring Boot service that runs turn-based Pokémon battles, with damage calculated by attack type. Consumes the PokéAPI and exposes battle history over REST.',
      outcome: 'Strategy (attacks), Factory (Pokémon creation) and Adapter (external data) patterns in an MVC/SOA architecture.',
    },
    {
      ...base('inatel-qs-restful-booker'),
      kind: 'QA · API Testing',
      status: 'Academic · Software Quality',
      title: 'Automated tests — Restful Booker',
      summary:
        'Test suite for the Restful Booker hotel-booking REST API, with its own test data per scenario so it never depends on the API state.',
      flow: ['Test data (JSON)', 'HTTP client', 'pytest', 'HTML report', 'GitHub Actions'],
      outcome: '20 test cases running in CI on every push. Documented defect: DELETE on a missing ID returns 405 instead of 404.',
    },
    {
      ...base('Projeto-BD2'),
      kind: 'NoSQL database · CLI',
      status: 'Academic · Databases II · 2024',
      summary:
        'Command-line personal library of games and software. Each user keeps their collection in a MongoDB document, with full CRUD and reports built from aggregation queries.',
      flow: ['CLI (Python)', 'UsuarioDAO', 'MongoDB', 'Aggregation pipeline', 'JSON reports'],
      outcome:
        'Queries with $unwind, $group, $match and $sort: games by genre, software with more than one version, newest and oldest games — exported to JSON.',
    },
    {
      ...base('PROJETO-POO_BD'),
      kind: 'Backend · Relational database',
      status: 'Academic · OOP + Databases',
      title: 'Sales System',
      summary:
        'Sales system for a store in Java with MySQL: sellers, customers, products, sales operations and invoices. Modeled in MySQL Workbench, with data access through the DAO pattern.',
      flow: ['Menu (console)', 'DAOs', 'JDBC', 'MySQL (6 tables)'],
      outcome:
        'Relational model with a junction table between sales and products (N:N) and create, read, update and delete operations for every entity.',
    },
    {
      ...base('Aluga-Facil'),
      kind: 'Mobile · Front-end',
      status: 'Prototype · 2023',
      summary:
        'Mobile app for renting homes: welcome, login, search with categories (house, studio, apartment), property page and tenant sign-up form.',
      flow: ['Welcome', 'Login', 'Search + categories', 'Property page', 'Tenant sign-up'],
      outcome: 'Stack navigation with React Navigation and UI styled with NativeWind (Tailwind for React Native).',
    },
  ],

  resume: {
    cv: {
      href: CV_FILE_EN,
      downloadName: 'CV-Leonardo-Ferreira-EN.pdf',
      alt: { href: CV_FILE, downloadName: 'Curriculo-Leonardo-Ferreira.pdf', label: 'Versão em português (PDF)', lang: 'pt-BR' },
    },
    summary:
      'Seven years in a technical role, where I designed and built two internal systems on my own to remove operational bottlenecks. I study Software Engineering at Inatel and work on both ends: React and TypeScript interfaces, and Java and Python services, with relational data modeling and REST API integration. My edge is spotting the process bottleneck before writing the first line of code.',
    facts: [
      { label: 'availability', value: 'immediate' },
      { label: 'work mode', value: 'remote, or on-site in southern Minas Gerais' },
      { label: 'languages', value: 'Portuguese · advanced English' },
    ],
    skills: [
      { title: 'Front-end', items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vite', 'Consuming REST APIs'] },
      { title: 'Back-end', items: ['Java · Spring Boot', 'Python · FastAPI', 'REST APIs', 'Layered architecture', 'Object-oriented programming'] },
      { title: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Relational modeling', 'SQL queries'] },
      { title: 'Tools & practices', items: ['Git · GitHub', 'Docker', 'Vercel', 'Automated and manual testing', 'Scrum · Kanban', 'CI/CD'] },
    ],
    experience: [
      {
        period: 'Jan 2019 — Aug 2026',
        title: 'Analyst & Internal Solutions Developer',
        subtitle: 'Behive Tecnologia · Santa Rita do Sapucaí, Brazil',
        bullets: [
          {
            label: 'Development',
            text: 'designed and built two internal systems (BHV Transfer and GPS Report Generator) on my own, from understanding the problem to delivering the solution.',
          },
          {
            label: 'Requirements',
            text: 'worked directly with clients and operations to understand needs, align expectations and turn business rules into technical solutions.',
          },
          {
            label: 'Quality & data',
            text: 'technical validation of operational reports, compliance with internal standards and data structuring for submission to external systems.',
          },
        ],
      },
    ],
    education: [
      {
        period: 'until Dec 2027',
        title: 'Software Engineering',
        subtitle: 'Inatel — National Institute of Telecommunications · in progress',
      },
      {
        period: 'completed',
        title: 'Electronics Technician · Industrial Automation',
        subtitle: 'ETE FMC — Technical School of Electronics',
      },
    ],
    awards: [
      {
        period: '2025',
        title: '1st place — Construtech Hackathon',
        body: 'AI-based solution for process optimization, built as a team.',
      },
      {
        period: '2024',
        title: '1st place — Construtech Hackathon',
        body: 'Project combining hardware and software to solve a complex industry problem.',
      },
    ],
  },

  achievement: {
    highlight: '2×',
    title: 'Construtech Hackathon Champion',
    detail: '1st place in 2024 · 1st place in 2025',
  },

  contact: {
    title: "Let's talk.",
    body: 'Open to full stack, back-end and front-end roles — remote, or on-site in southern Minas Gerais, Brazil. Happy to chat in English or Portuguese.',
    links: pt.contact.links.map((l) =>
      l.href === CV_FILE ? { label: 'résumé', text: 'download PDF', href: CV_FILE_EN } : l,
    ),
  },

  pages: [
    { path: '/', label: 'Home', index: '01' },
    { path: '/projetos', label: 'Projects', index: '02' },
    { path: '/curriculo', label: 'Résumé', index: '03' },
    { path: '/contato', label: 'Contact', index: '04' },
  ],

  ui: {
    locale: 'en-GB',
    metaDescription:
      'Leonardo Ferreira — Full Stack Developer. 7 years in technical roles; React, TypeScript, Java, Python and PostgreSQL.',
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
      ctaResume: 'View résumé',
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
    resumePage: {
      index: '03 / résumé',
      title: 'Résumé',
      factsLabel: 'At a glance',
      download: 'Download CV',
      downloadHint: 'PDF · 1 page',
      skillsIndex: 'skills',
      skillsTitle: 'Technical skills',
      experienceIndex: 'experience',
      experienceTitle: 'Work experience',
      educationIndex: 'education',
      educationTitle: 'Education',
      awardsIndex: 'awards',
      awardsTitle: 'Awards',
      ctaText: 'Want to talk about a role?',
      ctaContact: 'Get in touch',
      ctaProjects: 'See projects',
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
