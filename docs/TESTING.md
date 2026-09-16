# Testing strategy and release report

## Automated checks
Run `node --experimental-strip-types --test tests/content.test.mjs` for information architecture and claim guardrails. Run TypeScript validation and the framework production build. API tests must cover invalid origin, malformed/oversized input, absent consent, valid persistence, storage failure and the sixth request in an hour. D1 grants must deny anonymous/ungranted/expired access. Private-document authorization must be repeated when documents are added.

## Browser checks
Home, keyboard navigation, desktop dropdowns, mobile navigation, concept tabs, documentation search/no-results, roadmap filters, contact validation, request persistence/failure, empty data-room and 404. Inspect layouts at 390, 768, 1440 and 1920 CSS pixels and at 200% text zoom. Chrome, Firefox, Safari and Edge are required before a broad public launch. Automated tests are not a substitute for screen-reader checks (NVDA/VoiceOver) and manual focus review.

## Security and resilience
Dependency audit and secret scan per change; SAST on application changes; DAST against a test deployment; container scan when containers actually exist. Test broker timeout, duplicate intent and loss of connectivity in the separate trading platform. This website cannot establish trading safety.

## Performance
Measure mobile Lighthouse and production Core Web Vitals; record date, device, network profile and URL. No score is claimed without measurement. Load testing must target an isolated environment and protect owner data. Test error states during D1 failure and slow network conditions.

## Current limits
Cross-browser, screen-reader, production load, DAST and infrastructure recovery testing are not completed in this build. Final validation outcomes are recorded in RELEASE-CHECKS.md. No claim of WCAG conformance, 100/100 scores, production uptime or disaster-recovery readiness is made.
