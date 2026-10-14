// Todo o conteúdo do site fica aqui; os componentes só renderizam o que estiver neste arquivo.
// Troque tudo que está entre [colchetes] pelos seus dados reais.

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

export const profile = {
  name: 'Leonardo Ferreira',
  initials: 'LF',
  role: 'Engenheiro de Software',
  location: 'Santa Rita do Sapucaí, MG · UTC−3',
  available: true,
  kicker: '// engenharia de software · backend',
  statement:
    'Engenheiro de software com foco em backend. 7 anos de experiência no mercado, transformando requisitos em sistemas que funcionam — de APIs REST a pipelines de CI/CD.',
  chips: ['Java · Spring Boot', 'Python · FastAPI', 'PostgreSQL', 'Docker · Jenkins CI/CD'],
  /** Painel ao lado do hero (perfil.ts). A hora local é calculada ao vivo pelo componente. */
  timeZone: 'America/Sao_Paulo',
  facts: [
    { label: 'foco', value: 'Backend · APIs REST' },
    { label: 'stack', value: 'Java, Python, PostgreSQL, Docker' },
    { label: 'experiência', value: '7 anos no mercado' },
    { label: 'formação', value: 'Eng. de Software · Inatel (2027)' },
    { label: 'idiomas', value: 'Português, Inglês avançado' },
    { label: 'local', value: 'Santa Rita do Sapucaí, MG' },
  ],
}

const GH = 'https://github.com'

export const projects: Project[] = [
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

export const areas: Area[] = [
  { title: 'Backend e APIs', body: 'Serviços REST, modelagem de dados e integração.', keywords: 'Spring Boot · FastAPI · PostgreSQL' },
  { title: 'Entrega e infraestrutura', body: 'Containers e pipelines de integração contínua.', keywords: 'Docker · Jenkins' },
  { title: 'Requisitos e cliente', body: 'Levantamento, alinhamento de expectativas e suporte técnico.', keywords: 'Escopo · Comunicação' },
]

export const timeline: TimelineItem[] = [
  {
    period: '2019 — 2026',
    title: 'Analista · Behive Tecnologia',
    body: 'Levantamento de requisitos com clientes, alinhamento de expectativas e desenvolvimento backend.',
  },
  { period: 'até dez 2027', title: 'Engenharia de Software · Inatel', body: 'Último ano da graduação.' },
  { period: 'concluído', title: 'Técnico em Eletrônica · ETE FMC', body: 'Ênfase em Automação Industrial.' },
]

export const achievement = {
  highlight: '2×',
  title: 'Campeão do Hackathon Construtech',
  detail: '1º lugar em 2024 · 1º lugar em 2025',
}

export const contact = {
  title: 'Vamos conversar.',
  body: 'Aberto a vagas de backend. Respondo em português ou inglês.',
  links: [
    { label: 'e-mail', text: 'leonardo.fer201@gmail.com', href: 'mailto:leonardo.fer201@gmail.com' },
    { label: 'github', text: 'github.com/LeonardoFerreira23', href: 'https://github.com/LeonardoFerreira23' },
    { label: 'linkedin', text: 'linkedin.com/in/leonardo-ferreira-43925b277', href: 'https://www.linkedin.com/in/leonardo-ferreira-43925b277/' },
    // Quando tiver o PDF em public/curriculo.pdf, descomente:
    // { label: 'currículo', text: 'baixar PDF', href: '/curriculo.pdf' },
  ] satisfies ContactLink[],
}

/** Páginas do site — alimentam a sidebar e a paleta de comandos (Ctrl K). */
export const pages = [
  { path: '/', label: 'Início', index: '01' },
  { path: '/projetos', label: 'Projetos', index: '02' },
  { path: '/experiencia', label: 'Experiência', index: '03' },
  { path: '/contato', label: 'Contato', index: '04' },
]
