# Thollerz House (Next.js 14)

Modernized storefront rebuilt with:

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Radix UI primitives + `clsx` + `tailwind-merge` + `cva`
- Zustand (`persist`) for cart state
- Zod validation for checkout flow
- ESLint using `eslint-config-next`

## Project Structure

```text
src/
+-- app/
+-- components/
¦   +-- layout/
¦   +-- home/
¦   +-- products/
¦   +-- cart/
¦   +-- checkout/
¦   +-- orders/
¦   +-- ui/
+-- lib/
¦   +-- data/
¦   +-- types.ts
¦   +-- constants.ts
¦   +-- utils.ts
+-- store/
+-- hooks/
+-- actions/
```

## Run

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```