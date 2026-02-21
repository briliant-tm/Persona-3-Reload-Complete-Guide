/**
 * Zustand Store for Persona Data Management
 * Handles state management for static persona data.
 * Removed API integration as per user request to use local static data.
 */

import { create } from 'zustand';
import { Persona, PERSONAS as STATIC_PERSONAS } from '../data/personas';
// Removed: import { fetchPersonasFromAPI } from '../services/api';
// Removed: import { getCache, setCache, isCacheValid } from '../utils/cache';

interface PersonaStoreState {
  // Data
  personas: Persona[];
  fromAPI: boolean; // Will always be false now

  // UI State
  loading: boolean;
  error: string | null;

  // Actions
  loadPersonas: () => void; // Renamed from fetchPersonas
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;

  // Selectors
  getPersonasByArcana: (arcana: string) => Persona[];
  searchPersonas: (query: string) => Persona[];
  getPersonaTotal: () => number;
}

export const usePersonaStore = create<PersonaStoreState>((set, get) => ({
  // Initial state
  personas: STATIC_PERSONAS, // Directly use static data
  fromAPI: false, // Always false
  loading: false,
  error: null,

  // Actions
  loadPersonas: () => {
    // For static data, we just set it once. No fetching or caching needed here.
    set({
      personas: STATIC_PERSONAS,
      fromAPI: false,
      loading: false,
      error: null,
    });
  },

  setLoading: (loading: boolean) => {
    set({ loading });
  },

  setError: (error: string | null) => {
    set({ error });
  },

  reset: () => {
    set({
      personas: STATIC_PERSONAS, // Reset to static data
      fromAPI: false,
      loading: false,
      error: null,
    });
  },

  // Selectors
  getPersonasByArcana: (arcana: string) => {
    const { personas } = get();
    if (!arcana || arcana === 'all') return personas;
    // Changed filter condition as persona.name is not the arcana
    return personas.filter(
      p => p.arcana?.toLowerCase() === arcana.toLowerCase()
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