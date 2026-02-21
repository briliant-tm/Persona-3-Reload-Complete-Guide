/**
 * Cache Utilities
 * Provides localStorage caching with TTL (time-to-live) support
 * Handles serialization and expiration automatically
 */

import { CacheEntry } from '../types/api';

const CACHE_PREFIX = 'p3r_cache_';
const DEFAULT_TTL = 1000 * 60 * 60; // 1 hour in milliseconds

/**
 * Set a value in localStorage with TTL
 */
export function setCache<T>(key: string, data: T, ttl: number = DEFAULT_TTL): void {
  try {
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      ttl,
    };
    const fullKey = `${CACHE_PREFIX}${key}`;
    localStorage.setItem(fullKey, JSON.stringify(entry));
  } catch (error) {
    console.warn(`Failed to cache ${key}:`, error);
  }
}

/**
 * Get a value from localStorage, respecting TTL
 */
export function getCache<T>(key: string): T | null {
  try {
    const fullKey = `${CACHE_PREFIX}${key}`;
    const item = localStorage.getItem(fullKey);

    if (!item) return null;

    const entry: CacheEntry<T> = JSON.parse(item);
    const age = Date.now() - entry.timestamp;

    // Check if cache has expired
    if (age > entry.ttl) {
      localStorage.removeItem(fullKey);
      return null;
    }

    return entry.data;
  } catch (error) {
    console.warn(`Failed to retrieve cache for ${key}:`, error);
    return null;
  }
}

/**
 * Clear a specific cache entry
 */
export function clearCache(key: string): void {
  try {
    const fullKey = `${CACHE_PREFIX}${key}`;
    localStorage.removeItem(fullKey);
  } catch (error) {
    console.warn(`Failed to clear cache for ${key}:`, error);
  }
}

/**
 * Clear all P3R cache entries
 */
export function clearAllCache(): void {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(CACHE_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.warn('Failed to clear all cache:', error);
  }
}

/**
 * Check if cache exists and is still valid
 */
export function isCacheValid(key: string): boolean {
  try {
    const fullKey = `${CACHE_PREFIX}${key}`;
    const item = localStorage.getItem(fullKey);

    if (!item) return false;

    const entry: CacheEntry<any> = JSON.parse(item);
    const age = Date.now() - entry.timestamp;

    return age <= entry.ttl;
  } catch (error) {
    return false;
  }
}
