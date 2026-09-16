# Initial release checks — 16 September 2026

## Passed
- TypeScript validation after fixing typed form response handling.
- Production Worker build (Vinext).
- Seven Node tests: navigation/product destinations, documentation completeness, legal draft labels, evidence boundaries, atomic five/hour enquiry rate limit, rolling-window isolation, absent/expired investor grant denial.
- Reviewed generated D1 migration: two bounded tables, one index, no destructive migration or seeded private data.
- Chrome preview: homepage renders with supplied artwork; concept tabs switch; docs search finds a topic and shows empty results; roadmap filters; enquiry form stores synthetic test input and returns a reference.
- Desktop homepage visual inspection: brand artwork loads, navigation and hero remain readable.

## Not established
- Full automated accessibility scan, manual screen-reader testing, mobile browser/device inspection, visual regression baselines, Firefox/Safari/Edge testing.
- Lighthouse or real-world Core Web Vitals metrics; no score claimed.
- Production load testing, DAST, independent security audit, backup restore exercises.
- Real investor identity sign-in (requires user credentials); server grant predicates are tested. No grants or private materials are shipped.
- Genuine dashboard fidelity, platform API functionality, live trading, AWS deployment or model performance.

## Operational boundaries
Contact submissions persist in D1, but outbound email and dedicated monitored business/security contacts are not configured. All legal notices are drafts. Pricing is undecided. Owner review of stored enquiries and retention policies is required. Service health is explicitly unmonitored. Initial publication is owner-private.

## Final quality gate
Brand and multi-route information architecture are implemented. Product proof is blocked on genuine screenshots and repository evidence. Trading architecture, AI, AWS and security documentation are explicitly proposed. Investor, enterprise, developer, legal and roadmap surfaces exist; real API contracts, certifications, operational monitoring, production controls and corporate details remain pending. This release is a reviewable website foundation, not a claim that all institutional production-readiness gates have passed.

## Source-evidence update
Repository inventory and targeted runtime review completed at 626824752bae9e95516418b09189d0e2bee2f555. Added all ten newly supplied images, full-image modal, source-derived color/type tokens, a dual-runtime architecture diagram and revised technical copy. The former “no product evidence supplied” limitation is superseded. Full trading system build, current deployment, model metrics and production readiness remain unverified. Video retrieval and requested destination repository access remain blocked as documented in SOURCE-REVIEW.md.

Source-evidence release verification: nine automated tests passed; TypeScript noEmit passed; production build passed. Browser smoke check confirmed the evidence gallery, full-image dialog opening/closing and home rendering. No new cross-browser, mobile-device or Lighthouse score is claimed.

## Vercel and visual-system update
Native Next.js webpack build and its TypeScript gate passed. All 11 tests passed, including parameter binding, missing configuration and upstream error handling in the Vercel D1 adapter. Native production HTTP checks passed for home, product evidence, architecture, documentation and the closed investor room (including forged identity headers). Enquiries returned 503 without storage credentials and 403 for a foreign origin. MP4 range requests returned 206. No live Vercel deployment, real D1 REST transaction, cross-browser visual audit or new Lighthouse score is claimed.
