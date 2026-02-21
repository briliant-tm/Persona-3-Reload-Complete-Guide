# 🚀 Rendering Techniques Implementation Guide

## Overview
This project demonstrates **all 4 rendering techniques** in Next.js & React:
- **SSG** (Static Site Generation)
- **SSR** (Server-Side Rendering)
- **ISR** (Incremental Static Regeneration)
- **CSR** (Client-Side Rendering)

---

## 📊 Technique Breakdown

### 🟢 SSG (Static Site Generation) — 6 Pages
Pages that are **pre-rendered at build time** and cached on CDN. Perfect for content that doesn't change frequently.

| Page | Route | Why SSG | Revalidation |
|------|-------|---------|-------------|
| Story | `/story` | Fixed 15 story events, immutable game data | Never |
| Combat | `/combat` | Static combat mechanics (elements, affinity) | Never |
| Classroom | `/classroom` | Fixed exam questions & answers | Never |
| Floors | `/floors` | Static Tartarus floor data | Never |
| Fusion | `/fusion` | Fixed Persona compendium (65 entries) | Never |
| Elizabeth | `/elizabeth` | Static quest database (36 quests) | Never |
| Social Links | `/social-links` | Static social link data (21 links) | Never |

**Configuration:**
```typescript
export const dynamic = 'force-static';
```

**Benefits:**
- ✅ Instant page loads (CDN edge delivery)
- ✅ $0 server cost
- ✅ Perfect Lighthouse scores
- ✅ SEO-friendly (static HTML)

**Trade-offs:**
- ❌ Rebuild required for content updates

---

### 🟡 ISR (Incremental Static Regeneration) — 1 Page
Pages that are **statically pre-rendered but revalidate periodically**. Perfect for content that updates occasionally.

| Page | Route | Why ISR | Revalidation |
|------|-------|---------|-------------|
| Social Links Detail | `/social-links/:id` | Individual link guides may be updated with strategy tips | Every 3600s (1 hour) |

**Configuration:**
```typescript
export const revalidate = 3600; // Revalidate every hour
```

**How it works:**
1. User visits `/social-links/fool` → Static HTML served instantly
2. After 1 hour, next request triggers background regeneration
3. Old page served while new version is built
4. Fresh version cached for next 1 hour

**Benefits:**
- ✅ Fast initial load (static pre-render)
- ✅ Content can be updated without full rebuild
- ✅ Stale-while-revalidate SWR pattern
- ✅ Low server cost

**Trade-offs:**
- ❌ Content has revalidation delay (1 hour window)

---

### 🔵 SSR (Server-Side Rendering) — 1 Page
Pages that are **rendered fresh on every request**. Perfect for dynamic content based on request context.

| Page | Route | Why SSR | Fresh Per Request |
|------|-------|---------|------------------|
| Calculator | `/calculator` | User-driven input (arcana selection), potential database updates, personalization-ready | Yes |

**Configuration:**
```typescript
export const dynamic = 'force-dynamic';
```

**How it works:**
1. User navigates to `/calculator`
2. Next.js server renders component fresh on every request
3. Data fetched with `cache: 'no-store'`
4. Full HTML sent to client and hydrated
5. No cached version ever served

**Benefits:**
- ✅ Always fresh data (no stale content)
- ✅ Personalization-ready (cookies, headers, sessions)
- ✅ Real-time updates possible
- ✅ SEO-friendly (full HTML)

**Trade-offs:**
- ❌ Slower TTFB (server must render per request)
- ❌ Higher server cost (no CDN caching)
- ❌ Requires healthy server infrastructure

---

### 🟣 CSR (Client-Side Rendering) — In All Pages
**Every page includes client-side interactivity** via React hooks (`useState`, `useMemo`, etc).

| Interaction | Pages | Why CSR | Benefit |
|------------|-------|--------|---------|
| Theme switching (Dark/Light) | All | User preference, instant toggle | No page reload needed |
| Tab switching | Combat, Classroom, Elizabeth | Local state management | Smooth UX |
| Search/Filter | Fusion, Social Links, Elizabeth | Real-time filtering | Responsive interaction |
| Spoiler toggle | Story | Content visibility preference | User control |
| Expandable cards | Social Links, Elizabeth | Content organization | Progressive disclosure |
| Calculator computation | Calculator | Complex calculations | Instant results |

**Pattern:**
```typescript
'use client'; // Enable client-side rendering
export const dynamic = 'force-static'; // OR 'force-dynamic' or 'use-revalidate'

export default function Page() {
  const [state, setState] = useState(initialValue);
  // Client-side interactivity here
}
```

**Benefits:**
- ✅ Instant, responsive interactions
- ✅ No server round-trip needed
- ✅ Smooth animations & transitions
- ✅ Progressive enhancement (works without JavaScript)

---

## 🎯 Implementation Patterns

### Pattern 1: SSG with Client-Side Interactivity
```typescript
/**
 * ============================================================
 * RENDERING TECHNIQUE: Static Site Generation (SSG)
 * INTERACTIVE: Client-Side Rendering (CSR) for search/filter
 * TRACKER TAG: [SSG-001-SOCIAL-LINKS]
 * ============================================================
 */
'use client';
export const dynamic = 'force-static';

export default function SocialLinksPage() {
  const [search, setSearch] = useState('');
  const filteredLinks = useMemo(() => {
    return data.filter(link => link.name.includes(search));
  }, [search]);
  
  return <>...</>;
}
```

### Pattern 2: ISR with Revalidation
```typescript
/**
 * ============================================================
 * RENDERING TECHNIQUE: Incremental Static Regeneration (ISR)
 * REVALIDATION: Every 3600 seconds (1 hour)
 * TRACKER TAG: [ISR-001-SOCIAL-LINKS-DETAIL]
 * ============================================================
 */
export const revalidate = 3600;

export default function SocialLinkDetailPage({ params }) {
  return <>...</>;
}
```

### Pattern 3: SSR with Fresh Data
```typescript
/**
 * ============================================================
 * RENDERING TECHNIQUE: Server-Side Rendering (SSR)
 * FRESH: Every request (no caching)
 * TRACKER TAG: [SSR-001-CALCULATOR]
 * ============================================================
 */
'use client';
export const dynamic = 'force-dynamic';

export default function CalculatorPage() {
  const [result, setResult] = useState('');
  
  return <>...</>;
}
```

---

## 📈 Performance Comparison

### TTFB (Time to First Byte)
```
🟢 SSG:  <100ms  (CDN edge)
🟡 ISR:  <150ms  (CDN + possible revalidation)
🔵 SSR:  >500ms  (Server computation)
🟣 CSR:  ~200ms  (HTML + JS bundle)
```

### Cost
```
SSG:  $0  (CDN only, no server)
ISR:  $5/month  (minimal server for revalidation)
SSR:  $50+/month (server per request)
CSR:  $0  (but requires SSG/ISR/SSR foundation)
```

### Cache Strategy
```
SSG ──→ Served from CDN (Vercel Edge)
ISR ──→ CDN until revalidation, then rebuild
SSR ──→ No cache (always fresh)
CSR ──→ Browser cache for JS bundle
```

---

## 🏷️ Tracking Tags

Each page has a unique **TRACKER TAG** for easy identification:

### SSG Pages
- `[SSG-001-STORY]` — Story walkthrough
- `[SSG-002-COMBAT]` — Combat mechanics
- `[SSG-003-CLASSROOM]` — Classroom Q&A
- `[SSG-004-FLOORS]` — Tartarus floors
- `[SSG-005-FUSION]` — Persona fusion
- `[SSG-006-ELIZABETH]` — Elizabeth quests
- `[SSG-007-SOCIAL-LINKS]` — Social links list

### ISR Pages
- `[ISR-001-SOCIAL-LINKS-DETAIL]` — Individual social link (revalidate: 3600s)

### SSR Pages
- `[SSR-001-CALCULATOR]` — Dynamic calculator

### CSR Everywhere
- `[CSR-INTERACTIVE]` — All pages have client-side interactivity

---

## ✅ Checklist for Adding New Pages

When adding a new page, decide which technique:

- [ ] **Is content static and unchanged?** → Use **SSG**
  - Example: Game reference guides, walkthrough content
  
- [ ] **Does content update occasionally (hours/days)?** → Use **ISR**
  - Example: Community-updated content, tips/strategies
  
- [ ] **Does it need fresh data every request?** → Use **SSR**
  - Example: User-input dependent, personalized content
  
- [ ] **Does it need client interactivity?** → Add **CSR** with `'use client'`
  - Example: Search, filter, theme toggle, animations

---

## 🧪 Testing Rendering Techniques

### Build & Test SSG
```bash
npm run build
npm run preview
# All SSG pages should load instantly from http://localhost:5000
```

### Test ISR Revalidation
```bash
# In vercel.json, set revalidate to shorter duration (e.g., 10 seconds)
# Monitor console logs during revalidation
```

### Test SSR Fresh Data
```bash
# Hard refresh calculator page (Ctrl+Shift+R or Cmd+Shift+R)
# Server should render fresh HTML each time
```

### Test CSR Interactivity
```bash
# Disable JavaScript in DevTools (F12 → ⋯ → More tools → Rendering)
# Page should degrade gracefully (static content visible, but no interactivity)
```

---

## 🔗 Further Reading

- [Next.js Rendering Documentation](https://nextjs.org/docs/app/building-your-application/rendering)
- [ISR Revalidation Guide](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)
- [SSR vs SSG Comparison](https://www.smashingmagazine.com/2020/11/static-site-generation-deployment-nextjs/)

---

## 📝 Summary

| Technique | Use Case | Speed | Cost | Updates |
|-----------|----------|-------|------|---------|
| **SSG** | Static reference content | ⚡⚡⚡ | $0 | Rebuild only |
| **ISR** | Occasionally-updated content | ⚡⚡ | $5/mo | Periodic revalidation |
| **SSR** | Dynamic/personalized content | ⚡ | $50+/mo | Fresh per request |
| **CSR** | User interactions & state | ⚡⚡ | $0 | Instant (browser) |

**This project uses all four** to demonstrate best practices! 🎉
