# Portfólio — Leo

Site pessoal em React + Vite + TypeScript. Sem dependências além do React.

## Rodando

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # gera dist/
npm run preview   # serve o build localmente
```

## Onde mexer

| O que | Arquivo |
| --- | --- |
| Textos, projetos, links (português) | `src/data/content.ts` |
| Textos em inglês | `src/data/content.en.ts` |
| Cores, fontes, espaçamentos | `src/styles/tokens.css` |
| Estilos base e utilitários (`.btn`, `.chip`, `.section`) | `src/styles/global.css` |
| Páginas (Início, Projetos, Currículo, Contato) | `src/pages/*.tsx` |
| Rotas | `src/App.tsx` |
| Sidebar e menu do celular | `src/components/Sidebar.tsx` |
| Blocos reutilizáveis (cards, linha do tempo…) | `src/components/*.tsx` |
| Atalho Ctrl K | `src/components/CommandPalette.tsx` + `src/hooks/useHotkey.ts` |

Para criar uma página nova: crie o arquivo em `src/pages/`, registre a rota em `src/App.tsx` e adicione o item em `pages` dentro de `content.ts` (é isso que faz ela aparecer na sidebar e no Ctrl K).

Tudo que está entre `[colchetes]` em `content.ts` é placeholder.

## Estrutura

```
src/
├─ data/content.ts          conteúdo em português + lista de páginas
├─ data/content.en.ts       conteúdo em inglês
├─ i18n/                    idioma atual (PT/EN) e troca de idioma
├─ styles/                  tokens + estilos globais
├─ hooks/                   useHotkey (Ctrl K), usePageTitle (título da aba)
├─ layouts/AppLayout.tsx    sidebar + área de conteúdo + rodapé
├─ pages/                   Home, ProjectsPage, ResumePage (currículo), ContactPage, NotFound
└─ components/              Sidebar, Hero, ProjectCard, Timeline, Contact, LangToggle, CommandPalette…
```

## Dois idiomas (PT / EN)

O botão PT/EN fica na sidebar (no celular, ao lado do Menu). Na primeira visita o site usa o idioma do navegador; depois lembra a escolha da pessoa.

- **Português:** `src/data/content.ts`
- **Inglês:** `src/data/content.en.ts`

Ao adicionar ou mudar algo (ex.: um projeto novo), faça nos dois arquivos. Em `content.en.ts`, os projetos reaproveitam da versão em português o que não muda (links, stack), então só é preciso traduzir os textos. Se esquecer um campo, o TypeScript avisa no `npm run build`.

## Aba Currículo

Fica em `resume`, dentro de `content.ts` (e `content.en.ts`): resumo, fatos rápidos, competências, experiência, formação e premiações. O telefone ficou de fora de propósito, porque o site é público.

**CV em PDF:** português em `public/curriculo-leonardo-ferreira.pdf` e inglês em `public/cv-leonardo-ferreira-en.pdf`. Cada idioma do site baixa a sua versão e mostra um link para a outra. Para atualizar, exporte o Word como PDF e substitua o arquivo **com o mesmo nome**; não precisa mexer no código.

## Escrevendo os estudos de caso

Cada projeto em `projects` tem:

- `flow`: as etapas da arquitetura, ex. `['Cliente', 'API Gateway', 'Spring Boot', 'PostgreSQL']`
- `outcome`: um resultado concreto (tempo, volume, usuários, prêmio). Se não houver número, descreva o que foi entregue.
- `stack` e `repo`

Três projetos bons valem mais do que dez rasos.

## Próximos passos

- [ ] Página de detalhe por projeto (`/projetos/:slug`), com diagrama e decisões técnicas
- [ ] Imagem de preview para redes sociais (`og:image`)
- [ ] Deploy: Vercel ou Netlify (importar o repositório, comando `npm run build`, pasta `dist`). O `vercel.json` e o `public/_redirects` já fazem os links diretos (ex.: `/projetos`) funcionarem.
