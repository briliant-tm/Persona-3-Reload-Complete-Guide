import { Persona } from '../data/personas';
import { ApiPersona, DummyJsonResponse } from '../types/api';

const API_BASE = 'https://dummyjson.com';
const TIMEOUT = 10000; // 10 seconds
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

/**
 * Fetch with timeout
 */
function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout = TIMEOUT
): Promise<Response> {
  return Promise.race([
    fetch(url, options),
    new Promise<Response>((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), timeout)
    ),
  ]);
}

/**
 * Retry logic with exponential backoff
 */
async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retries = MAX_RETRIES
): Promise<Response> {
  try {
    return await fetchWithTimeout(url, options);
  } catch (error) {
    if (retries === 0) throw error;

    const delay = RETRY_DELAY * (MAX_RETRIES - retries + 1);
    await new Promise(resolve => setTimeout(resolve, delay));

    return fetchWithRetry(url, options, retries - 1);
  }
}

/**
 * Map API Persona to local Persona type
 */
function mapApiPersonaToLocal(apiPersona: ApiPersona): Persona {
  return {
    id: apiPersona.id,
    name: apiPersona.title || apiPersona.description || 'Unknown',
    arcana: apiPersona.category && arcanaMap[apiPersona.category] 
      ? arcanaMap[apiPersona.category] 
      : 'Unknown',
    level: Math.min(Math.floor(apiPersona.rating * 10), 99) || 1,
    type: arcanaMap[apiPersona.category] || 'Physical',
    weak: generateWeaknesses(apiPersona.category),
    skills: generateSkills(apiPersona.category),
  };
}

/**
 * Map API categories to Arcana
 */
const arcanaMap: Record<string, string> = {
  'electronics': 'Magician',
  'groceries': 'Fool',
  'home-decoration': 'Hermit',
  'furniture': 'Chariot',
  'sports': 'Strength',
  'automotive': 'Tower',
  'motorcycle': 'Death',
  'lighting': 'Moon',
  'fragrances': 'Priestess',
  'skincare': 'Temperance',
  'beauty': 'Star',
  'womens-dresses': 'Empress',
  'womens-shoes': 'Justice',
  'mens-shirts': 'Emperor',
  'mens-shoes': 'Hierophant',
  'mens-watches': 'Lovers',
};

/**
 * Generate weaknesses based on category
 */
function generateWeaknesses(category: string): string[] {
  const weaknessMap: Record<string, string[]> = {
    'electronics': ['Fire', 'Dark'],
    'groceries': ['Fire'],
    'home-decoration': ['Light'],
    'furniture': ['Elec'],
    'sports': ['Wind'],
    'automotive': ['Ice'],
    'motorcycle': ['Light'],
    'lighting': ['Dark'],
    'fragrances': ['Wind'],
    'skincare': ['Elec'],
    'beauty': ['Light'],
    'womens-dresses': ['Dark'],
    'womens-shoes': ['Ice'],
    'mens-shirts': ['Fire'],
    'mens-shoes': ['Wind'],
    'mens-watches': ['Elec'],
  };
  return weaknessMap[category] || ['Fire'];
}

/**
 * Generate skills based on category
 */
function generateSkills(category: string): string[] {
  const skillMap: Record<string, string[]> = {
    'electronics': ['Dia', 'Agi', 'Zio'],
    'groceries': ['Agi', 'Maragion', 'Rebellion'],
    'home-decoration': ['Diarama', 'Lux', 'Pulinpa'],
    'furniture': ['Zio', 'Recarm', 'Electrify'],
    'sports': ['Garu', 'Mastery', 'Sukukaja'],
    'automotive': ['Bufu', 'Cold Trap', 'Glacial Blast'],
    'motorcycle': ['Lux', 'Flash', 'Holy Light'],
    'lighting': ['Mudo', 'Dark Whisper', 'Evil Touch'],
    'fragrances': ['Garu', 'Wind Break', 'Whirlwind'],
    'skincare': ['Zio', 'Gidyne', 'Static Curse'],
    'beauty': ['Lux', 'Diarama', 'Morning Star'],
    'womens-dresses': ['Mudo', 'Evil Touch', 'Dark Blessing'],
    'womens-shoes': ['Bufu', 'Glacial Blast', 'Ice Break'],
    'mens-shirts': ['Agi', 'Blazing Hell', 'Fire Boost'],
    'mens-shoes': ['Garu', 'Whirlwind', 'Wind Boost'],
    'mens-watches': ['Zio', 'Thunderstorm', 'Lightning Boost'],
  };
  return skillMap[category] || ['Bash', 'Dia'];
}

/**
 * Fetch personas from API with error handling
 */
export async function fetchPersonasFromAPI(): Promise<Persona[]> {
  try {
    const response = await fetchWithRetry(
      `${API_BASE}/products?limit=50`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data: DummyJsonResponse<ApiPersona> = await response.json();

    if (!data || typeof data !== 'object') {
      throw new Error('Invalid API response format');
    }

    // Handle dummyjson response format differently
    const products = (data as any).products || (data as any).items || [];

    if (!Array.isArray(products)) {
      throw new Error('Invalid API response format');
    }

    // Map API data to local Persona format
    const personas = products.map(mapApiPersonaToLocal);

    // Ensure minimum data
    if (personas.length === 0) {
      throw new Error('No personas received from API');
    }

    return personas;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('API fetch error:', message);
    throw new Error(`Failed to fetch personas: ${message}`);
  }
}

/**
 * Fetch a single persona by ID
 */
export async function fetchPersonaById(id: string): Promise<Persona | null> {
  try {
    const response = await fetchWithRetry(
      `${API_BASE}/products/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`API error: ${response.status}`);
    }

    const data: ApiPersona = await response.json();
    return mapApiPersonaToLocal(data);
  } catch (error) {
    console.error('Fetch persona error:', error);
    return null;
  }
}

/**
 * Search personas by query
 */
export async function searchPersonas(query: string): Promise<Persona[]> {
  try {
    const response = await fetchWithRetry(
      `${API_BASE}/products/search?q=${encodeURIComponent(query)}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: DummyJsonResponse<ApiPersona> = await response.json();

    const products = (data as any).products || (data as any).items || [];

    if (!Array.isArray(products)) {
      return [];
    }

    return products.map(mapApiPersonaToLocal);
  } catch (error) {
    console.error('Search error:', error);
    throw error;
  }
}

/**
 * Check API health
 */
export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetchWithTimeout(`${API_BASE}/products?limit=1`, {}, 5000);
    return response.ok;
  } catch {
    return false;
  }
}
