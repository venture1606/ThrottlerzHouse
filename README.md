# Thollerz House

Production-grade e-commerce application built with Next.js 14 App Router, TypeScript (strict), Tailwind CSS, Zustand, Stripe Checkout/Webhooks, NextAuth, Prisma, and Resend.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Zustand (cart state)
- NextAuth v5
- Stripe (Checkout + Webhooks)
- Prisma + PostgreSQL
- Resend (order confirmation email)

## Project Structure
```text
src/
  app/
  components/
    layout/
    home/
    products/
    cart/
    checkout/
    orders/
    ui/
  lib/
    data/
  store/
  hooks/
  actions/
  emails/
prisma/
  schema.prisma
```

## Prerequisites
- Node.js 18+
- npm 9+
- PostgreSQL database
- Stripe account
- Resend account
- Google OAuth app (for NextAuth Google provider)

## Environment Setup
1. Copy `.env.example` to `.env.local`
2. Fill all values

```bash
cp .env.example .env.local
```

## Install
```bash
npm install
```

## Prisma
Generate client and run migrations:

```bash
npx prisma generate
npx prisma migrate dev
```

## Run Dev Server
```bash
npm run dev
```

Open `http://localhost:3000`.

## Quality Commands
```bash
npm run typecheck
npm run lint
npm run build
```

## Stripe Webhook (Local)
Use Stripe CLI and forward events:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Set `STRIPE_WEBHOOK_SECRET` from Stripe CLI output.

## Auth-Protected Routes
- `/orders`
- `/orders/[id]`
- `/account`

## Notes
- Keep all secrets server-side only.
- Never commit `.env.local`.
- Product pricing is calculated server-side in checkout route.
