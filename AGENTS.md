# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Layout

Currency is a currency converter web app. The repo uses npm workspaces — cross-package scripts can be run from the root.

| Directory | Role | Port | Docs |
|-----------|------|------|------|
| `apps/client/` | Next.js 16 frontend (React 19) | 3000 | [README](apps/client/README.md) |
| `apps/server/` | NestJS 11 backend | 3001 | [README](apps/server/README.md) |

Both apps use **tabs** for indentation, `tabWidth: 4`, and `printWidth: 120` (Prettier).

## Root Commands

```bash
npm run dev:client   # start client in watch mode
npm run dev:server   # start server in watch mode
npm run build    # build all workspaces
npm run tsc      # type-check all workspaces
npm run lint     # lint all workspaces
npm run test     # run all tests
```

## Architecture & Key Design Decisions

### Client feature structure

All converter logic lives under `apps/client/src/features/converter/`. The `useConverter` hook owns all state and API calls; components are purely presentational. The single Axios instance at `src/lib/api.ts` is the only place the server URL is configured.

### Server: exchange rate caching

`CurrencyService` fetches rates from `open.er-api.com/v6/latest/USD` on first request and caches them in memory for 3 hours. Conversion between any two currencies uses USD as the intermediate: `amount / rates[from] * rates[to]`.

### Server: ESM imports

The server uses `.js` extensions in all internal imports (e.g. `import { Foo } from './foo.js'`). This is required by the `"module": "Node16"` TypeScript config — do not remove the extensions.

### Next.js version

The client uses Next.js 16, which has breaking changes. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`.

## Environment

- **`apps/client`** — `NEXT_PUBLIC_SERVER_URL` (defaults to `http://localhost:3001`)
- **`apps/server`** — `PORT` (defaults to `3001`)

## CI

Pipeline (`.github/workflows/ci.yml`) runs on push to `main` and on all PRs: **build → typecheck → lint → test**.
