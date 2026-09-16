# CELESTIALNEXUS website engineering guide

## Scope and actual stack
This repository is the corporate information website, not the trading engine. React 19 / TypeScript, Next.js App Router APIs through the Sites Vinext build, Tailwind 4 and Radix UI components, Lucide icons, and Cloudflare Worker hosting. D1 stores enquiries and explicit investor grants. FastAPI, PostgreSQL, Redis and AWS are proposed platform choices and are not running in this site.

## Setup
Use the pinned package manager in package.json. Run dependency setup with the Sites workflow. Run `pnpm dev` outside the managed preview environment; use supervised Sites preview inside it. Build with `pnpm build`. Generate schema changes with `pnpm db:generate`. Sites applies committed Drizzle migrations on publication. For local previews, apply each pending SQL file with Wrangler using dist/server/wrangler.json and `.wrangler/state`.

## Environment
See .env.example. NEXT_PUBLIC_SITE_URL must be the canonical production origin. It is public, never a secret. DB is a platform-managed D1 binding. No broker credentials, financial API secrets or model keys are required. Environments must use separate bindings, credentials and access grants. Do not copy production enquiry records into tests.

## Structure and content
`lib/content.ts` holds typed route entries, products and navigation. Add reviewed entries there to expand docs, articles, research, job and product content; supply evidence and dates before publishing claims. The catch-all route provides metadata and semantic sections. Dedicated routes implement home, investor authorization, API, sitemap and robots. `components/site.tsx` contains reusable navigation, footer, concept tabs, roadmap filters, cards and contact form. `app/globals.css` owns tokens and responsive styling.

## Data model
Enquiries: UUID, name, email, organization, category, message, timestamp and a SHA-256 abuse-control key. Grant table: authenticated user ID with expiry. Prepared statements prevent query injection. A single conditional insert limits each hashed source to five submissions/hour atomically. No public read API exposes enquiries. Hosting administrators may inspect records with native Sites database tooling. Define a verified data controller and retention/deletion process before public launch. Raw IP is not stored; IP hashes can still be personal data.

## Investor authorization
SIWC identifies a user. The server checks investor_grants for that user ID and a future expiry before showing even the empty authorized room. There are no documents and no grants by default. Grants must be issued by a trusted operator after identity verification. Never put private documents in public/. Any future document endpoint must repeat the authorization check. No self-approval, email-only identity trust or client-controlled role fields.

## Security
Origin validation, bounded request bodies, Zod input validation, prepared SQL, durable atomic rate limiting, no public data read endpoint and fail-closed investor checks are implemented. Security headers are configured in next.config.ts; verify delivered values after hosting. CSP currently permits inline scripts/styles for framework hydration; nonce hardening is a future task. Dependency audit, SAST, DAST and production penetration testing are not claimed as completed. CI runs type validation, content tests and dependency audit; configure external scanners before commercial deployment. Keep credentials out of source, logs and analytics.

## Deployment and portability
This release publishes through Sites to a Cloudflare Worker with CDN-served assets and managed D1. It is NOT an AWS deployment. Site identity is in .openai/hosting.json; preserve it on edits. Push the exact source revision, package the successful build, save a version and deploy. Restore a previously validated version for code rollback; additive database migrations require forward fixes. Platform database backups and restore capabilities must be verified with the host; no RPO/RTO is promised. Domain and DNS changes require an owner-controlled domain; none is supplied.

A future AWS port needs a confirmed compute target, PostgreSQL migration, durable rate-limit store, identity provider, storage authorization, secret manager and monitored deployment pipeline. The public architecture is a reference design, not deployable Terraform.

## Performance and SEO
WebP artwork has explicit dimensions. Below-fold images use lazy loading. System fonts eliminate external font requests. No continuous effects, Three.js, external tracking or data feed polling. Metadata, Open Graph, Twitter summary, canonical URLs, WebSite schema, sitemap and robots are included. Private data-room paths are noindex. Core Web Vitals require real traffic; no fabricated scores. Update metadataBase and sitemap origin for a custom domain.

## Accessibility and localization
Semantic landmarks, labels, focus rings, skip link, native form validation, Radix keyboard tabs/navigation, chart description and reduced motion styles are present. WCAG 2.2 AA is a target, not a certification. Manual screen-reader and multi-browser reviews remain required. English text is centralized in the content model; future locale routes should select typed dictionaries, use Intl for dates/currency, and add hreflang without duplicating canonical URLs. Full translations are not included.

## Contribution workflow
Change a bounded capability, include its evidence status, update documentation, run type/build and affected tests, inspect mobile and desktop views, and review wording for unsupported claims. Never relabel ROADMAP as LIVE without an implementation reference and reproducible validation. Keep schema migrations immutable after deployment.

## Source-grounded website update
`components/product-evidence.tsx` adds full-image dialog, source-grounded runtime architecture and capability table. `lib/media.json` registers all ten supplied captures; originals and previews live in public/product. `lib/content.ts` ends with reviewed replacements for the initial planning copy. This content override is deliberate; a future editorial refactor may move the reviewed entries into their original definitions. Source review scope and limits are documented in docs/SOURCE-REVIEW.md. Keep historical source findings distinct from current verified deployment.
