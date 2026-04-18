# Portfolio — Monorepo

Personal portfolio with a React frontend and an Express API, both deployed on Vercel.

**Live:** [my-portfolio-7598c.web.app](https://my-portfolio-7598c.web.app/)

```
Portfolio/
├── frontend/   React + Vite + TypeScript → Vercel
└── server/     Express + TypeScript      → Vercel Serverless
```

## Quick Start

```bash
# Install deps for both
npm run install:all

# Run frontend + backend concurrently
npm run dev
```

| Script | Description |
|---|---|
| `npm run dev` | Run FE + BE concurrently |
| `npm run dev:frontend` | Frontend only (Vite, port 5173) |
| `npm run dev:server` | Backend only (Express, port 5000) |
| `npm run build:frontend` | Production build |
| `npm run install:all` | Install deps in both packages |

## Environment Variables

**`frontend/.env`** (copy from `.env.example`)
```
VITE_API_URL=http://localhost:5000
```

**`server/.env`** (copy from `.env.example`)
```
RESEND_API_KEY=
FROM_EMAIL=
TOOEMAIL=
PORT=5000
```

## CI/CD

Both pipelines trigger only when their respective directory changes.

| Workflow | Trigger | Deploy target |
|---|---|---|
| `frontend.yml` | push to `frontend/**` | Vercel |
| `server.yml` | push to `server/**` | Vercel |

### Required GitHub Secrets

| Secret | Where |
|---|---|
| `VITE_API_URL` | Your Vercel server URL |
| `VERCEL_TOKEN` | vercel.com/account/tokens |
| `VERCEL_ORG_ID` | Vercel account settings |
| `VERCEL_FE_PROJECT_ID` | Vercel frontend project settings |
| `VERCEL_PROJECT_ID` | Vercel server project settings |

> Set all secrets at: **GitHub repo → Settings → Secrets and variables → Actions**

## Tech Stack

**Frontend** — React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui  
**Backend** — Express 4, TypeScript, Resend (email), Vercel serverless
