\# TCC - Restaurante Lorem & Ipsum (React + Next.js)

Este repositorio contem duas implementacoes da mesma aplicacao (Restaurante Lorem & Ipsum) para meu TCC

- **React + React Router (Vite)**: controle explicito do desenvolvedor.
- **Next.js App Router**: controle do framework via rotas baseadas em arquivos.

O objetivo do TCC e mostrar como a estrutura e a responsabilidade de roteamento mudam entre as abordagens, mantendo o mesmo dominio e dados.

\#\# Estrutura do repositorio

```
./
├── next/   -> App Next.js (App Router)
└── react/  -> App React (Vite + React Router)
```

\#\# Como executar

Pre-requisitos:

- Node.js instalado
- pnpm instalado

### Next.js

```bash
cd next
pnpm install
pnpm dev
```

Servidor: http://localhost:3000

### React (Vite)

```bash
cd react
pnpm install
pnpm dev
```

Servidor: http://localhost:5173 (porta padrao do Vite)

\#\# Onde ler o codigo (roteiro rapido)

### Next.js (App Router)

- Layout e navegacao global: `next/app/layout.tsx`
- Home: `next/app/page.tsx`
- Cardapio (usa API interna): `next/app/cardapio/page.tsx`
- Detalhe do prato (usa API interna): `next/app/prato/[id]/page.tsx`
- API de cardapio: `next/app/api/daily-menus/route.ts`
- API de prato: `next/app/api/dishes/[id]/route.ts`
- Dados locais: `next/data/restaurant-data.ts`
- Metricas do painel: `next/data/metrics.ts`
- Controle de acesso (middleware): `next/proxy.ts`

### React (Vite + Biblioteca React Router)

- Rotas declaradas manualmente: `react/src/router/index.tsx`
- Layout e navegacao: `react/src/components/Layout.tsx`
- Paginas: `react/src/pages/*`
- Dados locais via JSON estatico: `react/public/daily-menus.json` e `react/public/dishes.json`
- Metricas do painel: `react/src/data/metrics.ts`
- Controle de acesso (client-side): `react/src/proxy/useProxy.ts`

### Next.js

- Dados do restaurante ficam em `next/data/restaurant-data.ts`.
- API interna exposta em:
  - `/api/daily-menus` (lista de cardapio)
  - `/api/dishes/[id]` (detalhe do prato)
- As paginas buscam dados via `fetch` para essas rotas.

### React

- Dados sao consumidos a partir de JSON estatico em `react/public/`.
- `react/src/pages/Cardapio.tsx` combina `daily-menus.json` + `dishes.json`.
- `react/src/pages/PratoDetalhe.tsx` carrega `dishes.json` e filtra pelo `id`.

\#\# Painel Operacional (controle de acesso)

O painel so permite acesso quando o parametro `funcionario=1` e enviado.

- Next.js: middleware em `next/proxy.ts` redireciona para `/sobre?acesso=negado`.
- React: `useProxy` em `react/src/proxy/useProxy.ts` controla o redirecionamento.

Exemplo de acesso:

```
/painel-operacional?funcionario=1
```

\#\# Tratamento de erros e carregamento

### Next.js

- `next/app/not-found.tsx` trata pagina nao encontrada.
- `next/app/prato/[id]/loading.tsx` mostra carregamento do detalhe.
- `next/app/prato/[id]/error.tsx` trata falhas no detalhe.

### React

- Rota `/erro` para falhas de dados.
- Rota `/nao-encontrado` para item inexistente.
- Redirecionamentos sao feitos dentro das paginas.

\#\# Logs de execucao (apoio ao TCC)

Ambas as versoes registram etapas no console para demonstrar o ciclo de execucao:

- Next: `next/lib/execution-cycle-log.ts`
- React: `react/src/lib/execution-cycle-log.ts`

\#\# Scripts disponiveis

### Next.js (`next/package.json`)

- `pnpm dev` - desenvolvimento
- `pnpm build` - build de producao
- `pnpm start` - executar build

### React (`react/package.json`)

- `pnpm dev` - desenvolvimento
- `pnpm build` - build de producao
- `pnpm preview` - visualizar build
- `pnpm lint` - lint

\#\# Observacoes finais

- O projeto é didatico e usa dados mockados.
- Nao ha backend externo;
- As duas apps compartilham o mesmo dominio e layout para facilitar a comparação.
