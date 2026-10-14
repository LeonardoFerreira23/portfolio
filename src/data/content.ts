// Conteúdo do site em PORTUGUÊS. A versão em inglês fica em content.en.ts.
// Ao mudar algo aqui (ex.: adicionar um projeto), faça o mesmo em content.en.ts.

export type Project = {
  kind: string
  status: string
  title: string
  summary: string
  /** Etapas do fluxo da arquitetura, ex.: ['Cliente', 'API', 'Fila', 'Worker', 'Banco'] */
  flow: string[]
  outcome: string
  stack: string[]
  repo?: string
  live?: string
}

export type Area = { title: string; body: string; keywords: string }
export type TimelineItem = { period: string; title: string; body: string }
export type ContactLink = { label: string; text: string; href: string }

const profile = {
  name: 'Leonardo Ferreira',
  initials: 'LF',
  role: 'Desenvolvedor Full Stack',
  location: 'Santa Rita do Sapucaí, MG · UTC−3',
  available: true,
  /** Frases que o topo do site digita e apaga em sequência (depois de "// "). */
  taglines: [
    'construo APIs REST',
    'crio interfaces em React',
    'modelo bancos de dados',
    'automatizo deploys com CI/CD',
    'entrego do banco à interface',
  ],
  statement:
    'Desenvolvedor full stack com 7 anos de experiência no mercado. Construo produtos de ponta a ponta — interfaces em React e TypeScript, APIs em Java e Python, banco de dados e entrega automatizada.',
  chips: ['React · TypeScript', 'Next.js', 'Java · Spring Boot', 'Python · FastAPI', 'PostgreSQL', 'Docker · CI/CD'],
  /** Painel ao lado do hero (perfil.ts). A hora local é calculada ao vivo pelo componente. */
  timeZone: 'America/Sao_Paulo',
  facts: [
    { label: 'foco', value: 'Full stack · Web e APIs' },
    { label: 'front', value: 'React, Next.js, TypeScript' },
    { label: 'back', value: 'Java, Python, PostgreSQL' },
    { label: 'experiência', value: '7 anos no mercado' },
    { label: 'formação', value: 'Eng. de Software · Inatel (2027)' },
    { label: 'idiomas', value: 'Português, Inglês avançado' },
    { label: 'local', value: 'Santa Rita do Sapucaí, MG' },
  ],
}

export const GH = 'https://github.com'

const projects: Project[] = [
  {
    kind: 'Backend · Produção',
    status: 'Behive Tecnologia · v1.2',
    title: 'BHV Transfer',
    summary:
      'API para centralizar o recebimento de vistorias técnicas. O técnico escolhe site e responsável em menus, arrasta o pacote (.zip/.rar) e o sistema organiza os arquivos no servidor e devolve um link de download.',
    flow: ['Técnico (Dropzone)', 'POST /api/uploads', 'UploadService', 'Storage + PostgreSQL', 'Link de download'],
    outcome:
      'Fim da digitação manual de identificadores e organização automática por técnico. Lógica de upload e geração de links coberta por testes com JUnit 5 e Mockito.',
    stack: ['Java 21', 'Spring Boot 3', 'Spring Data JPA', 'PostgreSQL', 'Docker'],
    repo: `${GH}/LeonardoFerreira23/bhv-transfer`,
  },
  {
    kind: 'IA aplicada · Hackathon',
    status: '1º lugar · 2025',
    title: 'ConstruAI',
    summary:
      'Análise de viabilidade de empreendimentos em zonas urbanas de Pouso Alegre (MG). O usuário marca um ponto no mapa, escolhe o tipo de projeto e recebe um parecer gerado por IA sobre o zoneamento.',
    flow: ['Mapa (Google Maps)', 'Ponto + tipo de projeto', 'Zona urbana', 'Genkit + Gemini', 'Parecer'],
    outcome: 'Vencedor do Hackathon Construtech 2025.',
    stack: ['Next.js', 'TypeScript', 'Genkit', 'Gemini', 'Turf.js'],
    repo: `${GH}/LeonardoFerreira23/construai`,
  },
  {
    kind: 'Backend · Arquitetura',
    status: 'Acadêmico · S203',
    title: 'Sistema de Batalha',
    summary:
      'Serviço em Spring Boot que conduz batalhas por turnos entre Pokémons, com dano calculado pelo tipo de ataque. Consome a PokéAPI e expõe o histórico de batalhas via REST.',
    flow: ['POST /batalha/iniciar', 'BatalhaService', 'PokeApiClient', 'PokemonAdapter', 'GET /batalha/historico'],
    outcome: 'Padrões Strategy (ataques), Factory (criação de Pokémons) e Adapter (dados externos) em arquitetura MVC/SOA.',
    stack: ['Java 17', 'Spring Boot', 'Maven', 'JUnit'],
    repo: `${GH}/InatelS203-2025-1/batalha`,
  },
  {
    kind: 'QA · Testes de API',
    status: 'Acadêmico · Qualidade de Software',
    title: 'Testes automatizados — Restful Booker',
    summary:
      'Suíte de testes da API REST de reservas Restful Booker, com massa de dados própria por cenário para não depender do estado da API.',
    flow: ['Massa (JSON)', 'Cliente HTTP', 'pytest', 'Relatório HTML', 'GitHub Actions'],
    outcome: '20 casos de teste rodando no CI a cada push. Defeito documentado: DELETE de ID inexistente retorna 405 em vez de 404.',
    stack: ['Python', 'pytest', 'requests', 'GitHub Actions'],
    repo: `${GH}/LeonardoFerreira23/inatel-qs-restful-booker`,
  },
  {
    kind: 'Web · CI/CD',
    status: 'No ar · C14',
    title: 'DivideAi',
    summary:
      'Aplicação web para dividir despesas em grupo: criação de grupos, registro de gastos, quem deve para quem e acertos. Arquitetura em camadas (data, domain, presentation).',
    flow: ['Push', 'Jenkins', 'Lint + build', 'Testes + cobertura', 'Deploy Vercel'],
    outcome: 'Pipeline completo de CI/CD com Jenkins em Docker e 22 arquivos de teste com Vitest.',
    stack: ['React', 'TypeScript', 'Zustand', 'Vitest', 'Jenkins'],
    repo: `${GH}/C14-INATEL/divide-ai-front`,
    live: 'https://divide-ai-front.vercel.app',
  },
]

const areas: Area[] = [
  { title: 'Front-end', body: 'Interfaces web responsivas, componentes reutilizáveis e testes.', keywords: 'React · Next.js · TypeScript · Vitest' },
  { title: 'Backend e APIs', body: 'Serviços REST, modelagem de dados e integração.', keywords: 'Spring Boot · FastAPI · PostgreSQL' },
  { title: 'Entrega e infraestrutura', body: 'Containers e pipelines de integração contínua.', keywords: 'Docker · Jenkins' },
  { title: 'Requisitos e cliente', body: 'Levantamento, alinhamento de expectativas e suporte técnico.', keywords: 'Escopo · Comunicação' },
]

const timeline: TimelineItem[] = [
  {
    period: '2019 — 2026',
    title: 'Analista · Behive Tecnologia',
    body: 'Levantamento de requisitos com clientes, alinhamento de expectativas e desenvolvimento de software.',
  },
  { period: 'até dez 2027', title: 'Engenharia de Software · Inatel', body: 'Último ano da graduação.' },
  { period: 'concluído', title: 'Técnico em Eletrônica · ETE FMC', body: 'Ênfase em Automação Industrial.' },
]

const achievement = {
  highlight: '2×',
  title: 'Campeão do Hackathon Construtech',
  detail: '1º lugar em 2024 · 1º lugar em 2025',
}

const contact = {
  title: 'Vamos conversar.',
  body: 'Aberto a vagas full stack. Respondo em português ou inglês.',
  links: [
    { label: 'e-mail', text: 'leonardo.fer201@gmail.com', href: 'mailto:leonardo.fer201@gmail.com' },
    { label: 'github', text: 'github.com/LeonardoFerreira23', href: 'https://github.com/LeonardoFerreira23' },
    { label: 'linkedin', text: 'linkedin.com/in/leonardo-ferreira-43925b277', href: 'https://www.linkedin.com/in/leonardo-ferreira-43925b277/' },
    // Quando tiver o PDF em public/curriculo.pdf, descomente:
    // { label: 'currículo', text: 'baixar PDF', href: '/curriculo.pdf' },
  ] satisfies ContactLink[],
}

/** Páginas do site — alimentam a sidebar e a paleta de comandos (Ctrl K). */
const pages = [
  { path: '/', label: 'Início', index: '01' },
  { path: '/projetos', label: 'Projetos', index: '02' },
  { path: '/experiencia', label: 'Experiência', index: '03' },
  { path: '/contato', label: 'Contato', index: '04' },
]

/** Textos de interface (botões, rótulos, menus). */
const ui = {
  locale: 'pt-BR',
  metaDescription:
    'Leonardo Ferreira — Desenvolvedor Full Stack com 7 anos de experiência no mercado. React, TypeScript, Java, Python e PostgreSQL.',
  skipLink: 'Pular para o conteúdo',
  nav: {
    pagesLabel: 'Páginas',
    socialLabel: 'Redes',
    menuOpen: 'Menu',
    menuClose: 'Fechar',
    search: 'Buscar',
    available: 'Disponível para vagas',
    languageLabel: 'Idioma',
  },
  hero: {
    stackLabel: 'Stack principal',
    ctaProjects: 'Ver estudos de caso',
    ctaContact: 'Currículo / Contato',
  },
  panel: {
    label: 'Resumo do perfil',
    file: 'perfil.ts',
    status: 'disponível',
    localTime: 'hora local',
    prompt: 'aberto ao próximo projeto',
  },
  project: {
    flowLabel: 'Fluxo da arquitetura',
    stackLabel: 'Tecnologias',
    live: 'ver online',
    code: 'código',
  },
  home: {
    featuredIndex: 'em destaque',
    featuredTitle: 'Projetos recentes',
    featuredLede: (n: number) => `${n} estudos de caso com problema, arquitetura e resultado.`,
    seeAll: 'Ver todos os projetos',
    achievementLabel: 'Conquistas',
  },
  projectsPage: {
    index: '02 / projetos',
    title: 'Estudos de caso',
    lede: 'Cada projeto mostra o problema, o fluxo da solução e o que foi entregue.',
  },
  experiencePage: {
    index: '03 / trajetória',
    title: 'Experiência e formação',
    lede: '7 anos de experiência no mercado, do levantamento de requisitos com o cliente ao código em produção.',
    areasIndex: 'áreas',
    areasTitle: 'Onde eu atuo',
  },
  contactPage: {
    index: '04 / contato',
  },
  notFound: {
    title: 'Página não encontrada',
    lede: 'O endereço não existe ou mudou de lugar.',
    back: 'Voltar ao início',
  },
  palette: {
    label: 'Paleta de comandos',
    openLabel: 'Abrir paleta de comandos',
    placeholder: 'Para onde você quer ir?',
    page: 'página',
    project: 'projeto',
    open: 'abrir',
    empty: 'Nada encontrado.',
    navigate: '↑ ↓ navegar',
    select: 'Enter abrir',
    close: 'Esc fechar',
  },
}

export const pt = { profile, projects, areas, timeline, achievement, contact, pages, ui }

/** Formato que as duas versões (pt e en) precisam seguir. */
export type SiteContent = typeof pt
