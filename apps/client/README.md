# Client

Next.js 16 (React 19) frontend for Currency. Runs on port 3000.

## Commands

```bash
npm run dev          # next dev + tsc --watch in parallel
npm run build        # production build
npm run lint         # ESLint
npm run format       # Prettier over src/**/*.{ts,tsx}
npm run typecheck    # TypeScript check without emitting
```

## Environment

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SERVER_URL` | Base URL of the server API (default `http://localhost:3001`) |

## Architecture

### Feature structure

The single feature is `features/converter/`. It owns its components and hook — nothing outside it needs to know how conversion works.

### API layer

A single Axios instance from `src/lib/api.ts` with `baseURL` from `NEXT_PUBLIC_SERVER_URL`. All server calls go through this instance.

### Path alias

`@/*` maps to `src/*` (configured in `tsconfig.json`).

### Next.js version note

This project uses Next.js 16, which has breaking changes from prior versions. Before modifying any Next.js-specific code, check `node_modules/next/dist/docs/` for current APIs and conventions.
