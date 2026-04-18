# Portfolio — Monorepo

Personal portfolio with a React frontend on Firebase Hosting and an Express API on Vercel.

**Live:** <a href="https://my-portfolio-7598c.web.app/" target="_blank">my-portfolio-7598c.web.app</a>

```
Portfolio/
├── frontend/   React + Vite + TypeScript → Firebase Hosting
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
| `frontend.yml` | push to `frontend/**` | Firebase Hosting |
| server | push to `server/**` | Vercel (direct GitHub integration) |

### Required GitHub Secrets

| Secret | Used by | Where to get it |
|---|---|---|
| `FIREBASE_SERVICE_ACCOUNT` | frontend | Firebase Console → Project Settings → Service Accounts → Generate key |
| `VITE_API_URL` | frontend build | `https://my-portfolio-server-11ub.vercel.app` |

> Server env vars (`RESEND_API_KEY`, `FROM_EMAIL`, etc.) are managed directly in Vercel dashboard → project → Settings → Environment Variables

> Add secrets at: **GitHub repo → Settings → Secrets and variables → Actions**

## Tech Stack

**Frontend** — React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui → Firebase Hosting  
**Backend** — Express 4, TypeScript, Resend (email) → Vercel Serverless
