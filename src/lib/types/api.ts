/**
 * API and Data Types
 * Defines types for Persona data fetched from dummyjson API
 * with fallback to static data
 */

export interface ApiPersona {
  id: number;
  title: string; // Maps to Persona name
  description: string; // Maps to Persona effect/description
  price: number; // Maps to Persona level (scaled)
  stock: number; // Maps to availability
  rating: number; // Maps to power/effectiveness
  category: string; // Maps to Arcana
  thumbnail: string; // Maps to icon/image
  images?: string[];
  tags?: string[];
}

export interface DummyJsonResponse<T> {
  items: T[];
  total: number;
  skip: number;
  limit: number;
}

export interface FetchState {
  personas: ApiPersona[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
  fromAPI: boolean; // indicates if data came from API or static
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
