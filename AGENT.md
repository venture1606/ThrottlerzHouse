# AGENT.md — STRICT FRONTEND ARCHITECTURE RULEBOOK

## 🚨 MANDATORY EXECUTION RULE

Before writing ANY code:

* Read this file fully
* Follow ALL rules strictly
* If the repo violates the framework requirement → STOP and output migration plan

NO EXCEPTIONS.

---

# 0. FRAMEWORK COMPATIBILITY GATE (CRITICAL)

This project MUST use:

* Next.js 14+ (App Router ONLY)
* TypeScript (strict mode ON)
* Tailwind CSS
* shadcn/ui
* Zustand (NOT Redux)

❌ If project uses:

* CRA / Vite (without Next)
* JavaScript (no TypeScript)
* Redux
* Bootstrap / Chakra mixed UI

👉 THEN:
DO NOT WRITE CODE
👉 FIRST output: **"PROJECT REQUIRES MIGRATION"** + full migration steps

---

# 1. FILE SIZE RULE (STRICT)

* Max 200 lines per file (ALL files: .ts, .tsx, .js, .jsx)
* Preferred:

  * Components: < 120 lines
  * Pages: < 80 lines

If exceeded:
👉 MUST split into smaller components

---

# 2. PAGE ARCHITECTURE RULE (THIN PAGES)

Pages MUST:

* Only compose components
* NO business logic
* NO large JSX blocks
* NO data transformation

❌ BAD:

* useState heavy logic
* inline mapping of complex UI
* API logic

✅ GOOD:

* Import → Compose → Return

---

# 3. FOLDER STRUCTURE (MANDATORY)

Must match EXACTLY:

src/
├── app/
├── components/
│    ├── layout/
│    ├── home/
│    ├── products/
│    ├── cart/
│    ├── checkout/
│    ├── orders/
│    └── ui/
├── lib/
│    ├── data/
│    ├── types.ts
│    ├── constants.ts
│    ├── utils.ts
├── store/
├── hooks/
├── actions/
├── emails/
└── prisma/

---

# 4. CODE PLACEMENT RULE (CRITICAL)

❌ FORBIDDEN:

* API logic inside components/
* Store inside components/
* Hardcoded data inside JSX

✅ REQUIRED:

* API → src/lib/api/
* Store → src/store/
* Static data → src/lib/data/
* Types → src/lib/types.ts

---

# 5. DATA HANDLING RULE

ALL data must come from:

* props
* lib/data
* API layer (if exists)

❌ NEVER:

* Hardcode prices
* Hardcode product names
* Hardcode arrays inside components

---

# 6. TYPESCRIPT RULE (STRICT MODE)

* strict: true REQUIRED
* NO `any` (0 tolerance)

EVERYTHING must be typed:

* Props
* Functions
* API responses
* State

---

# 7. STATE MANAGEMENT RULE

ONLY use:

* Zustand

❌ DO NOT USE:

* Redux
* Context for global state

Store location:
src/store/*.store.ts

---

# 8. UI SYSTEM RULE

ONLY use:

* Tailwind CSS
* shadcn/ui components

❌ DO NOT USE:

* Bootstrap
* Chakra UI
* Mixed UI libraries

---

# 9. IMAGE RULE

ONLY:

* next/image

❌ NEVER:

* <img>

---

# 10. ENVIRONMENT & CONFIG RULE

ALL configs MUST be centralized:

src/lib/constants.ts
src/lib/env.ts (if needed)

❌ FORBIDDEN:

* Hardcoded API URLs
* Inline config strings

---

# 11. STRIPE SECURITY RULE (IF PAYMENTS EXIST)

MUST HAVE:

src/lib/stripe.ts (server)
src/lib/stripe-client.ts (client)
src/app/api/stripe/create-checkout/route.ts
src/app/api/stripe/webhook/route.ts

RULES:

* Secret key NEVER in client
* Price calculated server-side
* Webhook signature verified

---

# 12. AUTH RULE (IF AUTH EXISTS)

ONLY:

* NextAuth

MUST HAVE:
src/lib/auth.ts
src/app/api/auth/[...nextauth]/route.ts

Protected routes:

* /orders
* /account

---

# 13. RESPONSIVENESS RULE

Mobile-first ONLY

Required pattern:

* grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4

Container:
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

---

# 14. NAMING CONVENTION RULE

* assets (NOT assests ❌)
* products (plural)
* components grouped by domain

---

# 15. COMPONENT DESIGN RULE

Each component must:

* Be reusable
* Accept typed props
* Be under 120 lines
* Have single responsibility

---

# 16. UI BEHAVIOR RULE

* No inline styles
* No magic numbers
* Use Tailwind utility classes ONLY

---

# 17. ERROR HANDLING RULE

* All async logic must have try/catch
* UI must handle loading + empty states

---

# 18. PERFORMANCE RULE

* Use next/image optimization
* Avoid unnecessary re-renders
* Split large components

---

# 19. PRE-COMMIT CHECKLIST (MANDATORY)

Before writing ANY file:

✔ File < 200 lines
✔ No hardcoded data
✔ Fully typed
✔ Correct folder placement
✔ Uses Tailwind + shadcn
✔ Uses next/image
✔ No Redux
✔ No API inside components

---

# 20. MIGRATION RULE (VERY IMPORTANT)

If repo is NOT compliant:

YOU MUST:

1. STOP coding
2. Output:

   * Migration plan
   * Folder restructure
   * Tech stack upgrade steps

ONLY after that → proceed with development

---

# 21. FINAL PRINCIPLE

This is NOT a flexible guideline.

👉 This is a STRICT SYSTEM.

If rules conflict:
👉 FOLLOW THIS FILE OVER EVERYTHING ELSE

---

END OF AGENT.md
