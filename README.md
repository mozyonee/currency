# Currency converter

Currency converter web app. npm workspaces monorepo.

| Directory | Role | Port | Docs |
|-----------|------|------|------|
| `apps/client/` | Next.js 16 frontend (React 19) | 3000 | [README](apps/client) |
| `apps/server/` | NestJS 11 backend | 3001 | [README](apps/server) |

Both apps use **tabs** for indentation, `tabWidth: 4`, and `printWidth: 120` (Prettier).

## Root Commands

```bash
npm run dev:client   # start client in watch mode
npm run dev:server   # start server in watch mode
npm run build        # build all workspaces
npm run tsc          # type-check all workspaces
npm run lint         # lint all workspaces
npm run test         # run all tests
```
