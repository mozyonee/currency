# Server

NestJS 11 backend for Currency. Runs on port 3001 (or `$PORT`).

## Commands

```bash
npm run dev          # nest start --watch
npm run build        # nest build → dist/
npm run start        # node dist/main (production)
npm run lint         # ESLint --fix over src & test
npm run format       # Prettier over src & test
npm run typecheck    # TypeScript check without emitting
npm run test         # Jest unit tests (*.spec.ts in src/)
npm run test:watch   # Jest in watch mode
npm run test:cov     # Jest with coverage report
npm run test:e2e     # Jest with test/jest-e2e.json config
```

## Architecture

### Module structure

| Module | Responsibility |
|--------|----------------|
| `currency` | Exchange rate fetching, in-memory caching, and conversion logic |

### Exchange rate caching

`CurrencyService` fetches all rates from `open.er-api.com/v6/latest/USD` and caches them in memory for 3 hours. All rates are USD-based — conversion between two non-USD currencies uses USD as the intermediate: `amount / rates[from] * rates[to]`.

### Validation

`ValidationPipe` with `whitelist: true` is applied globally. Request bodies are validated via `class-validator` decorators on DTO classes.

### Path aliases

Bare `src/…` imports use `.js` extensions (ESM-style). Resolved by the NestJS CLI at build time and by `tsconfig-paths` at test time.
