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

/** Item de linha do tempo (experiência, formação, premiações). */
export type TimelineItem = {
  period: string
  title: string
  subtitle?: string
  body?: string
  bullets?: { label?: string; text: string }[]
}
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
    'Desenvolvedor full stack com 7 anos de atuação na área técnica, onde idealizei e desenvolvi sozinho dois sistemas internos. Trabalho nas duas pontas: interfaces em React e TypeScript, APIs em Java e Python e banco de dados.',
  chips: ['React · TypeScript', 'Next.js', 'Java · Spring Boot', 'Python · FastAPI', 'PostgreSQL', 'Docker · CI/CD'],
  /** Painel ao lado do hero (perfil.ts). A hora local é calculada ao vivo pelo componente. */
  timeZone: 'America/Sao_Paulo',
  facts: [
    { label: 'foco', value: 'Full stack · Web e APIs' },
    { label: 'front', value: 'React, Next.js, TypeScript' },
    { label: 'back', value: 'Java, Python, PostgreSQL' },
    { label: 'experiência', value: '7 anos na área técnica' },
    { label: 'formação', value: 'Eng. de Software · Inatel (2027)' },
    { label: 'idiomas', value: 'Português, Inglês avançado' },
    { label: 'local', value: 'Santa Rita do Sapucaí, MG' },
  ],
}

export const GH = 'https://github.com'

/** Currículos em PDF (ficam em public/). */
export const CV_FILE = '/curriculo-leonardo-ferreira.pdf'
export const CV_FILE_EN = '/cv-leonardo-ferreira-en.pdf'

const projects: Project[] = [
  {
    kind: 'Backend · Produção',
    status: 'Behive Tecnologia · v1.2',
    title: 'BHV Transfer',
    summary:
      'API que centraliza o recebimento de pacotes de vistoria técnica. O técnico escolhe site e responsável em menus e arrasta o arquivo (.zip/.rar); o envio é feito em blocos de 10 MB, o servidor remonta e organiza os arquivos e devolve um link de download.',
    flow: ['Dropzone (blocos de 10 MB)', 'POST /api/uploads', 'UploadService remonta os blocos', 'Storage + PostgreSQL', 'Link de download'],
    outcome:
      'Envio de arquivos acima de 1 GB, com até 3 novas tentativas por bloco se a conexão falhar. Fim da digitação manual de identificadores; lógica de upload e geração de links coberta por testes com JUnit 5 e Mockito.',
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
  {
    kind: 'Desktop · Automação',
    status: 'Java · 2026',
    title: 'GPS Report Generator',
    summary:
      'Aplicação desktop que gera o mapa padronizado dos relatórios técnicos de campo. A partir das coordenadas (decimais ou em graus, minutos e segundos), busca imagem de satélite, endereço e altitude no Google Maps e entrega a imagem pronta para o PDF, com rodapé de dados.',
    flow: ['Coordenadas (JavaFX)', 'CoordinateParser', 'Google Maps: Static, Geocoding, Elevation', 'ImageProcessingService', 'Imagem 640×380 + rodapé'],
    outcome:
      'Empacotado como instalador Windows (.exe) com jpackage e WiX: roda sem Java instalado na máquina de quem usa. A chave da API fica em variável de ambiente, fora do código.',
    stack: ['Java 17', 'Spring Boot', 'JavaFX', 'Maven', 'jpackage'],
    repo: `${GH}/LeonardoFerreira23/gps-report-generator`,
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
    kind: 'Banco NoSQL · CLI',
    status: 'Acadêmico · BD2 · 2024',
    title: 'MigaoVault',
    summary:
      'Biblioteca pessoal de jogos e softwares, em linha de comando. Cada usuário guarda a própria coleção em um documento MongoDB, com CRUD completo e relatórios gerados por consultas de agregação.',
    flow: ['CLI (Python)', 'UsuarioDAO', 'MongoDB', 'Aggregation pipeline', 'Relatórios em JSON'],
    outcome:
      'Consultas com $unwind, $group, $match e $sort: jogos por gênero, softwares com mais de uma versão, jogos mais recentes e mais antigos — exportadas para JSON.',
    stack: ['Python', 'MongoDB', 'PyMongo'],
    repo: `${GH}/LeonardoFerreira23/Projeto-BD2`,
  },
  {
    kind: 'Backend · Banco relacional',
    status: 'Acadêmico · POO + BD',
    title: 'Sistema de Vendas',
    summary:
      'Sistema de vendas de uma loja em Java com MySQL: vendedores, clientes, produtos, operações de venda e notas fiscais. Modelagem no MySQL Workbench e acesso a dados pelo padrão DAO.',
    flow: ['Menu (console)', 'DAOs', 'JDBC', 'MySQL (6 tabelas)'],
    outcome:
      'Modelo relacional com tabela associativa entre vendas e produtos (N:N) e operações de inserção, consulta, atualização e exclusão para cada entidade.',
    stack: ['Java', 'MySQL', 'JDBC', 'Maven'],
    repo: `${GH}/LeonardoFerreira23/PROJETO-POO_BD`,
  },
  {
    kind: 'Mobile · Front-end',
    status: 'Protótipo · 2023',
    title: 'Aluga Fácil',
    summary:
      'App mobile de aluguel de imóveis: boas-vindas, login, busca com categorias (casa, kitnet, apartamento), página do imóvel e formulário de cadastro do inquilino.',
    flow: ['Boas-vindas', 'Login', 'Busca + categorias', 'Página do imóvel', 'Cadastro do inquilino'],
    outcome: 'Navegação em pilha com React Navigation e interface estilizada com NativeWind (Tailwind para React Native).',
    stack: ['React Native', 'JavaScript', 'NativeWind', 'React Navigation'],
    repo: `${GH}/LeonardoFerreira23/Aluga-Facil`,
  },
]

/** Aba "Currículo": resumo do CV. O telefone fica de fora de propósito (site é público). */
const resume = {
  /** PDF em public/. Ao atualizar o CV, substitua o arquivo mantendo o mesmo nome. */
  cv: {
    href: CV_FILE,
    downloadName: 'Curriculo-Leonardo-Ferreira.pdf',
    /** Link discreto para a versão no outro idioma */
    alt: { href: CV_FILE_EN, downloadName: 'CV-Leonardo-Ferreira-EN.pdf', label: 'English version (PDF)', lang: 'en' },
  },
  summary:
    'Sete anos de atuação na área técnica, em que idealizei e desenvolvi sozinho dois sistemas internos para resolver gargalos da operação. Curso Engenharia de Software no Inatel e trabalho nas duas pontas: interfaces em React e TypeScript e serviços em Java e Python, com modelagem de banco relacional e integração via API REST. Meu diferencial é enxergar o gargalo do processo antes de escrever a primeira linha de código.',
  facts: [
    { label: 'disponibilidade', value: 'imediata' },
    { label: 'modalidade', value: 'remoto ou presencial · Sul de Minas' },
    { label: 'idiomas', value: 'português · inglês avançado' },
  ],
  skills: [
    { title: 'Front-end', items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vite', 'Consumo de APIs REST'] },
    { title: 'Back-end', items: ['Java · Spring Boot', 'Python · FastAPI', 'APIs REST', 'Arquitetura em camadas', 'Orientação a objetos'] },
    { title: 'Dados', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Modelagem relacional', 'Consultas SQL'] },
    { title: 'Ferramentas e práticas', items: ['Git · GitHub', 'Docker', 'Vercel', 'Testes automatizados e manuais', 'Scrum · Kanban', 'CI/CD'] },
  ],
  experience: [
    {
      period: 'jan 2019 — ago 2026',
      title: 'Analista & Desenvolvedor de Soluções Internas',
      subtitle: 'Behive Tecnologia · Santa Rita do Sapucaí, MG',
      bullets: [
        {
          label: 'Desenvolvimento',
          text: 'idealizei e desenvolvi dois sistemas internos (BHV Transfer e GPS Report Generator), atuando sozinho do levantamento do problema à entrega da solução.',
        },
        {
          label: 'Levantamento de requisitos',
          text: 'interlocução direta com clientes e com a operação para entender a necessidade, alinhar expectativas e traduzir regra de negócio em solução técnica.',
        },
        {
          label: 'Qualidade e dados',
          text: 'validação técnica de relatórios operacionais, conformidade com padrões internos e estruturação de dados para envio a sistemas externos.',
        },
      ],
    },
  ] satisfies TimelineItem[],
  education: [
    {
      period: 'até dez 2027',
      title: 'Engenharia de Software',
      subtitle: 'Inatel — Instituto Nacional de Telecomunicações · cursando',
    },
    {
      period: 'concluído',
      title: 'Técnico em Eletrônica · Automação Industrial',
      subtitle: 'ETE FMC — Escola Técnica de Eletrônica',
    },
  ] satisfies TimelineItem[],
  awards: [
    {
      period: '2025',
      title: '1º lugar — Hackathon Construtech',
      body: 'Solução com inteligência artificial para otimização de processos, desenvolvida em equipe.',
    },
    {
      period: '2024',
      title: '1º lugar — Hackathon Construtech',
      body: 'Projeto integrando hardware e software para resolver um problema complexo do setor.',
    },
  ] satisfies TimelineItem[],
}

const achievement = {
  highlight: '2×',
  title: 'Campeão do Hackathon Construtech',
  detail: '1º lugar em 2024 · 1º lugar em 2025',
}

const contact = {
  title: 'Vamos conversar.',
  body: 'Aberto a vagas full stack, back-end e front-end — remoto ou presencial no Sul de Minas. Respondo em português ou inglês.',
  links: [
    { label: 'e-mail', text: 'leonardo.fer201@gmail.com', href: 'mailto:leonardo.fer201@gmail.com' },
    { label: 'github', text: 'github.com/LeonardoFerreira23', href: 'https://github.com/LeonardoFerreira23' },
    { label: 'linkedin', text: 'linkedin.com/in/leonardo-ferreira-43925b277', href: 'https://www.linkedin.com/in/leonardo-ferreira-43925b277/' },
    { label: 'currículo', text: 'baixar PDF', href: CV_FILE },
  ] satisfies ContactLink[],
}

/** Páginas do site — alimentam a sidebar e a paleta de comandos (Ctrl K). */
const pages = [
  { path: '/', label: 'Início', index: '01' },
  { path: '/projetos', label: 'Projetos', index: '02' },
  { path: '/curriculo', label: 'Currículo', index: '03' },
  { path: '/contato', label: 'Contato', index: '04' },
]

/** Textos de interface (botões, rótulos, menus). */
const ui = {
  locale: 'pt-BR',
  metaDescription:
    'Leonardo Ferreira — Desenvolvedor Full Stack. 7 anos de atuação na área técnica; React, TypeScript, Java, Python e PostgreSQL.',
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
    ctaResume: 'Ver currículo',
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
  resumePage: {
    index: '03 / currículo',
    title: 'Currículo',
    factsLabel: 'Resumo rápido',
    download: 'Baixar CV',
    downloadHint: 'PDF · 1 página',
    skillsIndex: 'competências',
    skillsTitle: 'Competências técnicas',
    experienceIndex: 'experiência',
    experienceTitle: 'Experiência profissional',
    educationIndex: 'formação',
    educationTitle: 'Formação',
    awardsIndex: 'premiações',
    awardsTitle: 'Premiações',
    ctaText: 'Quer conversar sobre uma vaga?',
    ctaContact: 'Entrar em contato',
    ctaProjects: 'Ver projetos',
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

export const pt = { profile, projects, resume, achievement, contact, pages, ui }

/** Formato que as duas versões (pt e en) precisam seguir. */
export type SiteContent = typeof pt
