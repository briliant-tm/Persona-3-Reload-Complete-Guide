import React from "react";
import { createBrowserRouter } from "react-router";
import Layout from "./app/layout";
import Home from "./app/page";
import CombatPage from "./app/combat/page";
import FusionPage from "./app/fusion/page";
import FloorsPage from "./app/floors/page";
import StoryPage from "./app/story/page";
import ClassroomPage from "./app/classroom/page";
import SocialLinksPage from "./app/social-links/page";
import SocialLinkDetailPage from "./app/social-links/detail/page";
import ElizabethPage from "./app/elizabeth/page";
import CalculatorPage from "./app/calculator/page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "combat", Component: CombatPage },
      { path: "fusion", Component: FusionPage },
      { path: "floors", Component: FloorsPage },
      { path: "story", Component: StoryPage },
      { path: "classroom", Component: ClassroomPage },
      { path: "social-links", Component: SocialLinksPage },
      /**
       * ISR Detail Route — /social-links/:arcana
       *
       * In Next.js App Router, this would be:
       *   app/social-links/[arcana]/page.tsx
       *
       * The [arcana] segment is a dynamic route parameter.
       * generateStaticParams() in the page file pre-renders
       * all 21 arcana slugs at build time, and ISR regenerates
       * them every 60 seconds after the first stale request.
       */
      { path: "social-links/:arcana", Component: SocialLinkDetailPage },
      { path: "elizabeth", Component: ElizabethPage },
      { path: "calculator", Component: CalculatorPage },
    ],
  },
]);
