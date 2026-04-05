<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the DevEvent Next.js App Router application. PostHog is initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), with a reverse proxy configured in `next.config.ts` to route analytics traffic through `/ingest`, improving reliability and reducing tracking-blocker interference. Two client components now capture key user engagement events, and automatic exception tracking is enabled globally.

| Event | Description | File |
|---|---|---|
| `explore_button_clicked` | User clicks the "Explore events" CTA button on the homepage | `components/explore-btn.tsx` |
| `event_card_clicked` | User clicks an event card to view details (title, slug, location, date captured as properties) | `components/event-card.tsx` |

### Files created or modified

- **`instrumentation-client.ts`** *(created)* — PostHog client initialization with EU host, reverse proxy, and exception capture enabled
- **`next.config.ts`** *(modified)* — Added `/ingest` reverse proxy rewrites pointing to EU PostHog endpoints
- **`components/explore-btn.tsx`** *(modified)* — Added `explore_button_clicked` capture
- **`components/event-card.tsx`** *(modified)* — Added `'use client'` directive and `event_card_clicked` capture with event metadata properties
- **`.env.local`** *(created)* — `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` set

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://eu.posthog.com/project/153594/dashboard/604637
- **Explore & Event Card Clicks Over Time**: https://eu.posthog.com/project/153594/insights/UEjAIgYa
- **Daily Active Users — Event Card Clicks**: https://eu.posthog.com/project/153594/insights/ZlZP6Ozw
- **Event Discovery Funnel** (explore button → event card click conversion): https://eu.posthog.com/project/153594/insights/eTLDMDg0

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
