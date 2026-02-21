/**
 * ============================================================
 * RENDERING TECHNIQUE: Static Site Generation (SSG) + Client-Side Interactivity
 * FRAMEWORK: Next.js App Router
 * ============================================================
 *
 * This page uses Static Site Generation (SSG) with client-side interactivity.
 * Persona data is sourced from static files - NO API calls are made for persona data.
 *
 * 1.  **Build Time (SSG):** At `next build`, this Server Component
 *     pre-renders the initial HTML with the statically imported
 *     `PERSONAS` data from `src/lib/data/personas.ts`. The `SectionTitle` 
 *     is also rendered here. This provides a fast initial load.
 * 2.  **Deployment:** The generated HTML, CSS, and JavaScript are
 *     deployed and served from a CDN.
 * 3.  **Browser (CSR):** The browser receives the pre-rendered HTML.
 *     The `FusionClient` component then "hydrates" and takes over.
 *     It uses client-side state (`useState`, `useMemo`) for search/filtering
 *     and interactive features. All persona data comes from static props.
 *
 * Why Static Data?
 *   - **Reliability:** Persona data is game-specific and doesn't change.
 *     Using static data ensures consistency and accuracy.
 *   - **Performance:** No network requests needed - instant data access.
 *   - **Offline Support:** Works without internet connection.
 *   - **SEO:** Fully pre-rendered content is great for search engines.
 *   - **Cost:** No API costs or rate limits.
 * ============================================================
 */

import FusionClient from "./FusionClient";
import { PERSONAS } from "../../lib/data/personas";
import { SectionTitle } from "../../components/SectionTitle";

export default function FusionPage() {
    return (
        <>
            <div className="relative z-10">
                <SectionTitle
                    title="Fusion Guide"
                    subtitle="Search and filter Personas to find the perfect fusion combination."
                />
            </div>
            <FusionClient staticPersonas={PERSONAS} />
        </>
    );
}