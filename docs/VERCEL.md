# Deploy CELESTIALNEXUS on Vercel

The repository includes a native Next.js build alongside the existing Sites/Vinext build. Vercel reads vercel.json and runs `pnpm run build:vercel` using webpack. The existing Sites commands remain available.

## Import and deploy
1. In Vercel, choose Add New → Project and import `bonaventuresimeon/CELESTIALNEXUS`.
2. Select the Next.js framework and repository root directory. Use Node.js 22.x. Keep the install/build/output settings from vercel.json.
3. Set NEXT_PUBLIC_SITE_URL to the final HTTPS website origin (no trailing slash), then deploy. Add your custom domain in project Settings → Domains and follow Vercel's DNS instructions. Redeploy after changing the origin.
4. Review the preview before promoting. The source contains owner-supplied account screenshots and a screen recording; deployment visibility is controlled in your Vercel project.

## Enquiry storage
Vercel cannot access the managed Sites D1 binding directly. This build provides a server-only D1 REST adapter; provision a D1 database in your own Cloudflare account and apply `drizzle/0000_happy_the_leader.sql` with Wrangler or the D1 console. Set these Vercel server environment variables:
- CLOUDFLARE_ACCOUNT_ID
- CLOUDFLARE_D1_DATABASE_ID
- CLOUDFLARE_D1_API_TOKEN (account-scoped D1 Edit permission)

Never prefix these with NEXT_PUBLIC or commit their values. Use separate preview and production databases. The adapter preserves parameterized SQL, atomic enquiry throttling, a 10-second timeout and explicit failures. Missing credentials return HTTP 503; the form preserves input. No email service is configured. Backup/export the D1 database before migrations. Roll back the Vercel deployment to revert application changes; database changes require a separately reviewed recovery plan.

## Investor access
The Sites gateway authenticates its own user headers. Vercel must not trust headers supplied by a visitor. On the native Node/Vercel runtime the investor room remains closed, with a contact pathway. Configure and verify a suitable identity provider and server-side access grants before serving any private documents. Do not enable authentication by forwarding arbitrary identity headers.

## Verification
Run `pnpm test`, `pnpm exec tsc --noEmit` and `pnpm run build:vercel`. Then run `pnpm run start:vercel` to inspect the native production build. Test home, gallery/video, docs, status, form validation, database-unavailable responses and the closed investor room. The REST adapter needs valid environment credentials for an end-to-end storage test; a successful build does not establish operational storage or authentication.

## Design
`app/premium.css` applies the shared visual layer to navigation, hero, cards, tables, tabs, forms, dialogs, media and footer. Gradients remain restrained; hover motion is restricted to fine pointers, entrance animations are finite, and reduced-motion preferences disable transformations/animation. Original media resolution is retained; no invented detail or upscaling is claimed.

References: https://vercel.com/docs/frameworks/full-stack/nextjs and https://developers.cloudflare.com/api/resources/d1/subresources/database/methods/query/
