/**
 * ============================================================
 * RENDERING TECHNIQUE: Static Site Generation (SSG)
 * ============================================================
 *
 * This page uses Static Rendering — the default and fastest
 * strategy in Next.js App Router. The HTML is generated once at
 * build time and served from the CDN on every request.
 *
 * Configuration:
 *   export const dynamic = 'force-static'
 *
 * Why SSG here?
 *   The Home / Hero page contains only static marketing content
 *   (title, tagline, navigation links). There is zero dynamic or
 *   user-specific data, so pre-rendering at build time gives the
 *   best Time-to-First-Byte (TTFB) and Core Web Vitals scores.
 *
 * How it works in Next.js:
 *   1. `next build` renders this component to HTML at build time.
 *   2. The resulting HTML + JS bundle is uploaded to the CDN.
 *   3. Every visitor receives the same cached HTML instantly.
 *   4. No server-side execution happens per request.
 * ============================================================
 */
'use client'; // Hero component uses Motion animations (client-side interactivity)

export const dynamic = 'force-static'; // Next.js Route Segment Config — forces static generation

import React from "react";
import { Hero } from "../components/Hero";

export default function Home() {
  return <Hero />;
}