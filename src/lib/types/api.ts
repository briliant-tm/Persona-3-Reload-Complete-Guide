/**
 * API and Data Types
 * 
 * NOTE: Persona data is now static and sourced from src/lib/data/personas.ts
 * This file contains generic API types that can be used for other features
 * that may need external API integration (e.g., news, updates, community data).
 * 
 * Personas are NOT fetched from API - they are static game data.
 */

// Generic API response types for future use (not for personas)
export interface GenericApiResponse<T> {
  id: number;
  title: string;
  description: string;
  data?: T;
  images?: string[];
  tags?: string[];
}

export interface DummyJsonResponse<T> {
  items: T[];
  total: number;
  skip: number;
  limit: number;
}

// Generic fetch state for other API integrations (not for personas)
export interface FetchState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
  fromAPI: boolean;
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number; // Time to live in milliseconds
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  fromCache?: boolean;
}
