# CELESTIALNEXUS — Corporate Website

The VESPER venture website: product evidence, JOAN, architecture, AWS technical brief, trust/security, investor access, enterprise information, roadmap and documentation.

This is the corporate website, not the EA or broker execution runtime. No trading credentials or market feed are required.

## Development
Use Node 22 and the package manager pinned in package.json.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
pnpm exec tsc --noEmit
node --experimental-strip-types --test tests/*.test.mjs
pnpm build
```

Inside managed Sites, use its supervised preview/build/publish workflow. Persistence requires the DB binding and committed Drizzle migrations. Copy .env.example for the public canonical origin; never add trading secrets.

## Guides
- docs/ENGINEERING.md — setup, stack, storage, security and deployment
- docs/DESIGN-AND-BUSINESS.md — visual/brand and business positioning
- docs/SOURCE-REVIEW.md — source evidence, limitations and requested GitHub handoff
- docs/TESTING.md and docs/RELEASE-CHECKS.md — validation
- docs/EVIDENCE-REGISTER.json — capability classifications

## Media
All ten supplied dashboard/MT5 images and the original four brand assets are included. Source images are preserved; previews are optimized. No video file was retrievable or attached. Historical images are not live-data or financial-performance claims.

## Repository handoff
Requested destination: https://github.com/CELESTIALNEXUSGROUP/CELESTIALNEXUS.git
Access is currently blocked (GitHub 404 through the connected account). Do not replace existing target history or include secrets when synchronizing. The .openai/hosting.json identity belongs to the existing Site and must remain unchanged for Site publication.
