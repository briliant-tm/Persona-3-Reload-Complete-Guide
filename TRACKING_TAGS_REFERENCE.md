# Rendering Technique Tracking Tags Reference

This document provides a quick lookup guide for all rendering technique tracker tags embedded in the codebase. Each page has been tagged with a unique identifier to make tracking and auditing rendering patterns easy.

---

## Quick Index

| Tag | Location | Technique | Page | Purpose |
|-----|----------|-----------|------|---------|
| `[SSG-001-STORY]` | `src/app/story/page.tsx` | Static Site Generation | Story Walkthrough | Fixed story events and milestones |
| `[SSG-002-COMBAT]` | `src/app/combat/page.tsx` | Static Site Generation | Combat Guide | Element types and party Theurgies |
| `[SSG-003-CLASSROOM]` | `src/app/classroom/page.tsx` | Static Site Generation | School Questions | Deterministic QA pairs |
| `[SSG-004-FLOORS]` | `src/app/floors/page.tsx` | Static Site Generation | Tartarus Floors | 6 dungeon blocks with floor ranges |
| `[SSG-005-FUSION]` | `src/app/fusion/page.tsx` | Static Site Generation | Persona Fusion | 65-entry Persona compendium |
| `[SSG-006-ELIZABETH]` | `src/app/elizabeth/page.tsx` | Static Site Generation | Elizabeth Requests | 36 requests across 5 categories |
| `[SSG-007-SOCIAL-LINKS]` | `src/app/social-links/page.tsx` | Static Site Generation | Social Links Index | 21 Social Links with priority tiers |
| `[ISR-001-SOCIAL-LINKS-DETAIL]` | `src/app/social-links/detail/page.tsx` | Incremental Static Regen | Social Link Detail | 21 dynamic route pages (60s revalidation) |
| `[SSR-001-CALCULATOR]` | `src/app/calculator/page.tsx` | Server-Side Rendering | Fusion Calculator | Per-request computation |

---

## Rendering Technique Overview

### 🔵 Static Site Generation (SSG) — 7 Pages
**What it means:** Pages are pre-built once at deploy time and served from the CDN edge. Fastest, cheapest, lowest latency.

**Configuration:** `export const dynamic = 'force-static'`

**Production traits:**
- ✅ Instant page loads (CDN served)
- ✅ Zero server cost per request
- ✅ Perfect Lighthouse scores possible
- ❌ Can't reflect real-time database changes
- ❌ Rebuilds entire site on any content change

**Tagged pages:**
1. `[SSG-001-STORY]` — Story Walkthrough
2. `[SSG-002-COMBAT]` — Combat Guide  
3. `[SSG-003-CLASSROOM]` — School Questions
4. `[SSG-004-FLOORS]` — Tartarus Floors
5. `[SSG-005-FUSION]` — Persona Compendium
6. `[SSG-006-ELIZABETH]` — Elizabeth Quests
7. `[SSG-007-SOCIAL-LINKS]` — Social Links Index

**Why these pages are SSG:**
All content is **static game data** that doesn't change between deployments:
- Story events (15 fixed milestones)
- Combat mechanics (9 elements, party Theurgies)
- School questions (deterministic, never change)
- Tartarus structure (6 blocks, fixed floor ranges)
- Persona stats (65 entries with fixed stats/skills)
- Elizabeth requests (36 quests with fixed rewards)
- Social Links (21 arcanas with fixed schedules)

---

### 🟠 Incremental Static Regeneration (ISR) — 1 Page
**What it means:** Pages are pre-built at deploy time (like SSG) but automatically regenerate in the background after a time window. The "stale-while-revalidate" pattern.

**Configuration:** `export const revalidate = 60` (seconds)

**Production traits:**
- ✅ Fast initial load (served from CDN)
- ✅ Fresh content after revalidation window
- ✅ Zero server cost for cached requests
- ✅ Handles 1-many dynamic routes efficiently
- ❌ Content can be stale for up to N seconds
- ❌ Requires `generateStaticParams()` for pre-rendering

**Tagged page:**
1. `[ISR-001-SOCIAL-LINKS-DETAIL]` — Social Link Detail Pages

**Why this page is ISR:**
The Social Link detail page (e.g., `/social-links/magician`) is a single page template rendered for 21 different arcanas. ISR is ideal because:
- Base data (game info) changes rarely → leverage caching
- Community tips/corrections could update → needs refresh window
- 21 dynamic routes would be expensive to regenerate on every change → pre-build once at deploy
- Perfect balance between freshness and performance

---

### 🔴 Server-Side Rendering (SSR) — 1 Page
**What it means:** Pages are rendered fresh on **every** incoming request. No caching, no pre-building. Always current.

**Configuration:** `export const dynamic = 'force-dynamic'`

**Production traits:**
- ✅ Always fresh data (no stale content risk)
- ✅ Personalization-ready (can leverage cookies, headers, location)
- ✅ Great for user-specific content
- ❌ Slower Time-to-First-Byte (TTFB)
- ❌ Higher server cost (no CDN caching)
- ❌ More complex error handling needed

**Tagged page:**
1. `[SSR-001-CALCULATOR]` — Fusion Calculator

**Why this page is SSR:**
The Fusion Calculator takes arbitrary user input (arcana pair selection) and computes fusion results. In production:
- User selects two arcanas → server looks up fusion table (potentially from database)
- Fusion algorithm runs server-side for accuracy
- Results sent back immediately
- Future enhancement: Community-maintained fusion table with corrections and DLC additions would require SSR to always query latest

---

## How to Use These Tags

### Finding a Specific Page's Rendering Pattern
1. Look up the page name in the **Quick Index** table above
2. Note its tag (e.g., `[SSG-007-SOCIAL-LINKS]`)
3. Go to the file and search for the tag in the header comment
4. Read the detailed explanation of why that technique was chosen

### Auditing Your Codebase
Run this search in VS Code to find all tracker tags:
```
Find in Files: \[SSG-\|ISR-\|SSR-\]
Regex: enabled
```

Or individually:
- **Find all SSG pages:** `\[SSG-`
- **Find all ISR pages:** `\[ISR-`
- **Find all SSR pages:** `\[SSR-`

### Adding a New Page
When you create a new page:

1. **Determine the rendering technique** based on your content:
   - Is the data static game info? → **SSG** (`force-static`)
   - Is some data rare-changing + has dynamic routes? → **ISR** (`revalidate = N`)
   - Must data be fresh every request? → **SSR** (`force-dynamic`)

2. **Pick the next available tag:**
   - Next SSG: `[SSG-008-YOUR_PAGE_NAME]`
   - Next ISR: `[ISR-002-YOUR_PAGE_NAME]`
   - Next SSR: `[SSR-002-YOUR_PAGE_NAME]`

3. **Add to the comment header** at the top of your page.tsx:
   ```tsx
   /**
    * ============================================================
    * RENDERING TECHNIQUE: Static Site Generation (SSG)
    * TRACKER TAG: [SSG-008-YOUR_PAGE_NAME]
    * INTERACTIVE: Client-Side Rendering (CSR) for [feature]
    * ============================================================
    * ... rest of documentation ...
    */
   ```

4. **Update this reference guide** with the new entry in the Quick Index

---

## Performance Characteristics

| Metric | SSG | ISR | SSR |
|--------|-----|-----|-----|
| **TTFB** | ~50ms (CDN) | ~50ms initially, then full TTFB | ~200-500ms |
| **Throughput** | Unlimited | Revalidate cost only | Per-request cost |
| **Data Freshness** | Deploy-time only | Configurable window | Always fresh |
| **Cost** | Storage only | Storage + regen compute | High compute |
| **Best For** | Static reference content | Rare-changing + dynamic routes | Real-time data |

---

## Configuration Reference

### SSG Pattern
```tsx
export const dynamic = 'force-static';

/**
 * RENDERING TECHNIQUE: Static Site Generation (SSG)
 * TRACKER TAG: [SSG-00X-NAME]
 */
export default function Page() {
  return <div>Pre-built at deploy time</div>;
}
```

### ISR Pattern
```tsx
export const revalidate = 60; // seconds

export async function generateStaticParams() {
  const items = await fetch('/api/items').then(r => r.json());
  return items.map(item => ({ slug: item.slug }));
}

/**
 * RENDERING TECHNIQUE: Incremental Static Regeneration (ISR)
 * TRACKER TAG: [ISR-00X-NAME]
 */
export default function Page({ params }) {
  return <div>Pre-built but auto-regenerates</div>;
}
```

### SSR Pattern
```tsx
export const dynamic = 'force-dynamic';

/**
 * RENDERING TECHNIQUE: Server-Side Rendering (SSR)
 * TRACKER TAG: [SSR-00X-NAME]
 */
export default function Page() {
  return <div>Rendered fresh every request</div>;
}
```

---

## Common Pitfalls & Solutions

| Problem | Cause | Solution |
|---------|-------|----------|
| "Unexpected static behavior" on dynamic page | Used `force-static` when data changes | Switch to ISR with `revalidate = N` or SSR with `force-dynamic` |
| Stale content served | ISR revalidation window too long | Reduce `revalidate` value |
| Build takes too long | Too many dynamic routes pre-rendering | Switch to ISR and let on-demand generation handle spikes |
| Search page breaking | Dynamic search requires SSR but marked SSG | Ensure `force-dynamic` for user-input-driven pages |
| SEO issues | User-interactive content marked SSR | Add `headers: { Cache-Control: 'public, max-age=60' }` for partial caching |

---

## Next Steps

1. ✅ All 9 pages now have tracker tags
2. ✅ Each tag is unique and searchable
3. ✅ Rendering technique is documented in-code
4. 🔄 **Monitor performance** — Use Web Vitals to verify SSG/ISR/SSR choices
5. 🔄 **Plan migrations** — If requirements change, update tags and techniques
6. 🔄 **Audit new pages** — Ensure every new page has a tracker tag with documentation

---

## Search Quick Index

To quickly find a page by search:
- File: `src/app/[name]/page.tsx`
- Header comment: Look for `TRACKER TAG: [TECHNIQUE-NUMBER-NAME]`
- Example search in VS Code: `\[SSG-`
