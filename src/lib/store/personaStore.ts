/**
 * Zustand Store for Persona Data Management
 * Handles fetching, caching, and state management for persona data
 * Integrates with API service and localStorage cache
 */

import { create } from 'zustand';
import { Persona } from '../data/personas';
import { fetchPersonasFromAPI } from '../services/api';
import { getCache, setCache, isCacheValid } from '../utils/cache';

interface PersonaStoreState {
  // Data
  personas: Persona[];
  fromAPI: boolean;

  // UI State
  loading: boolean;
  error: string | null;
  lastFetched: number | null;

  // Actions
  fetchPersonas: () => Promise<void>;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;

  // Selectors
  getPersonasByArcana: (arcana: string) => Persona[];
  searchPersonas: (query: string) => Persona[];
  getPersonaTotal: () => number;
}

const CACHE_KEY = 'personas';
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

export const usePersonaStore = create<PersonaStoreState>((set, get) => ({
  // Initial state
  personas: [],
  fromAPI: false,
  loading: false,
  error: null,
  lastFetched: null,

  // Actions
  fetchPersonas: async () => {
    const state = get();

    // Check if we have valid cache
    if (isCacheValid(CACHE_KEY)) {
      const cachedData = getCache<{ personas: Persona[]; timestamp: number }>(
        CACHE_KEY
      );
      if (cachedData) {
        set({
          personas: cachedData.personas,
          fromAPI: false,
          loading: false,
          error: null,
          lastFetched: cachedData.timestamp,
        });
        return;
      }
    }

    set({ loading: true, error: null });

    try {
      const apiPersonas = await fetchPersonasFromAPI();

      const cacheData = {
        personas: apiPersonas,
        timestamp: Date.now(),
      };

      setCache(CACHE_KEY, cacheData, CACHE_TTL);

      set({
        personas: apiPersonas,
        fromAPI: true,
        loading: false,
        error: null,
        lastFetched: Date.now(),
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to fetch personas';

      console.error('Persona fetch error:', error);

      set({
        loading: false,
        error: errorMessage,
        fromAPI: false,
      });

      // Note: personas array remains unchanged (keeps last known good state)
    }
  },

  setLoading: (loading: boolean) => {
    set({ loading });
  },

  setError: (error: string | null) => {
    set({ error });
  },

  reset: () => {
    set({
      personas: [],
      fromAPI: false,
      loading: false,
      error: null,
      lastFetched: null,
    });
  },

  // Selectors
  getPersonasByArcana: (arcana: string) => {
    const { personas } = get();
    if (!arcana || arcana === 'all') return personas;
    return personas.filter(
      p => p.name?.toLowerCase() === arcana.toLowerCase()
    );
  },

  searchPersonas: (query: string) => {
    const { personas } = get();
    if (!query) return personas;

    const lowerQuery = query.toLowerCase();
    return personas.filter(
      p =>
        p.name?.toLowerCase().includes(lowerQuery) ||
        p.arcana?.toLowerCase().includes(lowerQuery)
    );
  },

  getPersonaTotal: () => {
    return get().personas.length;
  },
}));
