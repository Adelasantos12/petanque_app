# MERCI Global Petanque Platform

This is a Monorepo for the **Global Petanque Platform**, designed with a Next.js (Web/PWA) frontend and a NestJS (API) backend, sharing a Prisma Database package.

## Architecture

-   **Frontend (`apps/web`):** Next.js (React), Tailwind CSS, PWA enabled.
-   **Backend (`apps/api`):** NestJS, Prisma Client, BullMQ (Redis).
-   **Database (`packages/database`):** Prisma ORM (PostgreSQL).
-   **Domain (`packages/domain`):** Core MERCI logic (TypeScript).

## Prerequisites

-   Node.js (v18+)
-   pnpm (recommended) or npm
-   PostgreSQL Database (Railway or Render)
-   Redis Instance (Railway or Render)

## Environment Variables (.env)

These variables must be set in your deployment environment (Railway/Render) or `.env` file locally.

### Backend (API)

| Variable | Description | Example |
| :--- | :--- | :--- |
| `DATABASE_URL` | Connection string for PostgreSQL | `postgresql://user:pass@host:5432/db` |
| `REDIS_URL` | Connection string for Redis | `redis://:pass@host:6379` |
| `PORT` | Port for the API server | `3000` (Railway sets this automatically) |
| `CORS_ORIGINS` | Allowed origins for CORS | `https://your-web-app.railway.app,http://localhost:3000` |
| `JWT_SECRET` | Secret key for JWT signing | `your-secure-random-string` |
| `STRIPE_SECRET_KEY` | Stripe Secret Key (Optional for MVP) | `sk_test_...` |

### Frontend (Web)

| Variable | Description | Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_API_URL` | Public URL of the deployed API | `https://your-api-app.railway.app` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe Public Key (Optional) | `pk_test_...` |

## Deployment on Railway

1.  **Fork/Clone this Repository:** Push this code to your GitHub account.
2.  **Create a New Project on Railway:**
    -   Select "Deploy from GitHub repo".
    -   Choose this repository.
3.  **Configure Services:**
    -   Railway will detect the Monorepo structure. You may need to add two services: one for `apps/api` and one for `apps/web`.
    -   **API Service:**
        -   **Root Directory:** `apps/api`
        -   **Build Command:** `pnpm build` (or `turbo run build --filter=api`)
        -   **Start Command:** `node dist/main`
        -   **Variables:** Add `DATABASE_URL`, `REDIS_URL`, `JWT_SECRET`.
    -   **Web Service:**
        -   **Root Directory:** `apps/web`
        -   **Build Command:** `pnpm build` (or `turbo run build --filter=web`)
        -   **Start Command:** `npm start`
        -   **Variables:** Add `NEXT_PUBLIC_API_URL` pointing to your API service domain.

4.  **Database Migration (Important):**
    -   In the **API Service**, add a custom **Deploy Command** or run manually via CLI:
        `npx prisma db push`
    -   Ensure the `DATABASE_URL` is set correctly before deployment.

## Infrastructure Notes

-   **PostgreSQL:** Create a Postgres service in Railway or use an external provider (e.g., Render, AWS RDS).
-   **Redis:** Create a Redis service in Railway or use an external provider (e.g., Upstash, Render).
