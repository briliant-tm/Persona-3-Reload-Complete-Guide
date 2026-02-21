/**
 * LazyPersonaCard Component
 * Loads persona cards only when they come into view
 * Uses Intersection Observer for efficient viewport detection
 */

import React, { useEffect, useRef, useState } from 'react';
import { Persona } from '@/lib/data/personas';

interface LazyPersonaCardProps {
  persona: Persona;
  children: (persona: Persona, isVisible: boolean) => React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
}

export const LazyPersonaCard: React.FC<LazyPersonaCardProps> = ({
  persona,
  children,
  fallback = null,
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stop observing once visible
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div ref={ref}>
      {isVisible ? children(persona, isVisible) : fallback}
    </div>
  );
};

/**
 * LazyPersonaList Component
 * Renders a list of personas with lazy loading
 */

interface LazyPersonaListProps {
  personas: Persona[];
  renderCard: (persona: Persona) => React.ReactNode;
  loadingFallback?: React.ReactNode;
  gridClassName?: string;
}

export const LazyPersonaList: React.FC<LazyPersonaListProps> = ({
  personas,
  renderCard,
  loadingFallback,
  gridClassName = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
}) => {
  return (
    <div className={gridClassName}>
      {personas.map(persona => (
        <LazyPersonaCard
          key={persona.id || persona.name}
          persona={persona}
          fallback={loadingFallback}
        >
          {persona => renderCard(persona)}
        </LazyPersonaCard>
      ))}
    </div>
  );
};
