// ============================================================
// PERSONA 3 RELOAD — ARCANA FUSION TABLE
// When fusing two Personas of different arcanas, the result
// arcana is determined by this lookup table.
// ============================================================

export const ARCANA_LIST = [
  "Fool", "Magician", "Priestess", "Empress", "Emperor",
  "Hierophant", "Lovers", "Chariot", "Justice", "Hermit",
  "Fortune", "Strength", "Hanged Man", "Death", "Temperance",
  "Devil", "Tower", "Star", "Moon", "Sun", "Judgement"
] as const;

export type Arcana = typeof ARCANA_LIST[number];

// Key: "ArcanaA+ArcanaB" (alphabetical order) → Result Arcana
// This is a simplified but representative fusion table for P3R.
const FUSION_TABLE: Record<string, Arcana> = {
  "Fool+Magician": "Fortune",
  "Fool+Priestess": "Lovers",
  "Fool+Empress": "Hierophant",
  "Fool+Emperor": "Justice",
  "Fool+Hierophant": "Emperor",
  "Fool+Lovers": "Chariot",
  "Fool+Chariot": "Moon",
  "Fool+Justice": "Hermit",
  "Fool+Hermit": "Priestess",
  "Fool+Fortune": "Strength",
  "Fool+Strength": "Death",
  "Fool+Hanged Man": "Empress",
  "Fool+Death": "Tower",
  "Fool+Temperance": "Sun",
  "Fool+Devil": "Magician",
  "Fool+Tower": "Star",
  "Fool+Star": "Temperance",
  "Fool+Moon": "Devil",
  "Fool+Sun": "Judgement",

  "Magician+Priestess": "Temperance",
  "Magician+Empress": "Justice",
  "Magician+Emperor": "Hierophant",
  "Magician+Hierophant": "Lovers",
  "Magician+Lovers": "Devil",
  "Magician+Chariot": "Priestess",
  "Magician+Justice": "Emperor",
  "Magician+Hermit": "Strength",
  "Magician+Fortune": "Chariot",
  "Magician+Strength": "Fortune",
  "Magician+Hanged Man": "Hermit",
  "Magician+Death": "Moon",
  "Magician+Temperance": "Hanged Man",
  "Magician+Devil": "Tower",
  "Magician+Tower": "Death",
  "Magician+Star": "Sun",
  "Magician+Moon": "Star",
  "Magician+Sun": "Empress",

  "Priestess+Empress": "Lovers",
  "Priestess+Emperor": "Fortune",
  "Priestess+Hierophant": "Justice",
  "Priestess+Lovers": "Hermit",
  "Priestess+Chariot": "Emperor",
  "Priestess+Justice": "Strength",
  "Priestess+Hermit": "Magician",
  "Priestess+Fortune": "Moon",
  "Priestess+Strength": "Hanged Man",
  "Priestess+Hanged Man": "Death",
  "Priestess+Death": "Hierophant",
  "Priestess+Temperance": "Devil",
  "Priestess+Devil": "Empress",
  "Priestess+Tower": "Chariot",
  "Priestess+Star": "Tower",
  "Priestess+Moon": "Temperance",
  "Priestess+Sun": "Star",

  "Empress+Emperor": "Chariot",
  "Empress+Hierophant": "Strength",
  "Empress+Lovers": "Magician",
  "Empress+Chariot": "Hierophant",
  "Empress+Justice": "Lovers",
  "Empress+Hermit": "Hanged Man",
  "Empress+Fortune": "Temperance",
  "Empress+Strength": "Sun",
  "Empress+Hanged Man": "Fortune",
  "Empress+Death": "Devil",
  "Empress+Temperance": "Moon",
  "Empress+Devil": "Tower",
  "Empress+Tower": "Star",
  "Empress+Star": "Death",
  "Empress+Moon": "Priestess",
  "Empress+Sun": "Emperor",

  "Emperor+Hierophant": "Magician",
  "Emperor+Lovers": "Strength",
  "Emperor+Chariot": "Justice",
  "Emperor+Justice": "Chariot",
  "Emperor+Hermit": "Fortune",
  "Emperor+Fortune": "Empress",
  "Emperor+Strength": "Priestess",
  "Emperor+Hanged Man": "Moon",
  "Emperor+Death": "Temperance",
  "Emperor+Temperance": "Hermit",
  "Emperor+Devil": "Star",
  "Emperor+Tower": "Hierophant",
  "Emperor+Star": "Lovers",
  "Emperor+Moon": "Devil",
  "Emperor+Sun": "Tower",

  "Hierophant+Lovers": "Empress",
  "Hierophant+Chariot": "Fortune",
  "Hierophant+Justice": "Magician",
  "Hierophant+Hermit": "Chariot",
  "Hierophant+Fortune": "Death",
  "Hierophant+Strength": "Emperor",
  "Hierophant+Hanged Man": "Priestess",
  "Hierophant+Death": "Hermit",
  "Hierophant+Temperance": "Strength",
  "Hierophant+Devil": "Moon",
  "Hierophant+Tower": "Devil",
  "Hierophant+Star": "Temperance",
  "Hierophant+Moon": "Tower",
  "Hierophant+Sun": "Hanged Man",

  "Lovers+Chariot": "Fool",
  "Lovers+Justice": "Fortune",
  "Lovers+Hermit": "Empress",
  "Lovers+Fortune": "Emperor",
  "Lovers+Strength": "Chariot",
  "Lovers+Hanged Man": "Star",
  "Lovers+Death": "Sun",
  "Lovers+Temperance": "Hierophant",
  "Lovers+Devil": "Moon",
  "Lovers+Tower": "Priestess",
  "Lovers+Star": "Hermit",
  "Lovers+Moon": "Magician",
  "Lovers+Sun": "Strength",

  "Chariot+Justice": "Lovers",
  "Chariot+Hermit": "Star",
  "Chariot+Fortune": "Hierophant",
  "Chariot+Strength": "Magician",
  "Chariot+Hanged Man": "Sun",
  "Chariot+Death": "Empress",
  "Chariot+Temperance": "Emperor",
  "Chariot+Devil": "Strength",
  "Chariot+Tower": "Hermit",
  "Chariot+Star": "Fortune",
  "Chariot+Moon": "Hanged Man",
  "Chariot+Sun": "Devil",

  "Justice+Hermit": "Tower",
  "Justice+Fortune": "Priestess",
  "Justice+Strength": "Hierophant",
  "Justice+Hanged Man": "Temperance",
  "Justice+Death": "Star",
  "Justice+Temperance": "Moon",
  "Justice+Devil": "Hermit",
  "Justice+Tower": "Fortune",
  "Justice+Star": "Emperor",
  "Justice+Moon": "Empress",
  "Justice+Sun": "Chariot",

  "Hermit+Fortune": "Lovers",
  "Hermit+Strength": "Devil",
  "Hermit+Hanged Man": "Tower",
  "Hermit+Death": "Empress",
  "Hermit+Temperance": "Emperor",
  "Hermit+Devil": "Fortune",
  "Hermit+Tower": "Priestess",
  "Hermit+Star": "Chariot",
  "Hermit+Moon": "Justice",
  "Hermit+Sun": "Moon",

  "Fortune+Strength": "Star",
  "Fortune+Hanged Man": "Magician",
  "Fortune+Death": "Lovers",
  "Fortune+Temperance": "Chariot",
  "Fortune+Devil": "Justice",
  "Fortune+Tower": "Empress",
  "Fortune+Star": "Hermit",
  "Fortune+Moon": "Emperor",
  "Fortune+Sun": "Priestess",

  "Strength+Hanged Man": "Hermit",
  "Strength+Death": "Chariot",
  "Strength+Temperance": "Justice",
  "Strength+Devil": "Empress",
  "Strength+Tower": "Moon",
  "Strength+Star": "Magician",
  "Strength+Moon": "Hierophant",
  "Strength+Sun": "Fortune",

  "Hanged Man+Death": "Devil",
  "Hanged Man+Temperance": "Chariot",
  "Hanged Man+Devil": "Hierophant",
  "Hanged Man+Tower": "Magician",
  "Hanged Man+Star": "Justice",
  "Hanged Man+Moon": "Fortune",
  "Hanged Man+Sun": "Tower",

  "Death+Temperance": "Magician",
  "Death+Devil": "Strength",
  "Death+Tower": "Hierophant",
  "Death+Star": "Chariot",
  "Death+Moon": "Priestess",
  "Death+Sun": "Fortune",

  "Temperance+Devil": "Fortune",
  "Temperance+Tower": "Priestess",
  "Temperance+Star": "Lovers",
  "Temperance+Moon": "Hermit",
  "Temperance+Sun": "Magician",

  "Devil+Tower": "Hanged Man",
  "Devil+Star": "Death",
  "Devil+Moon": "Temperance",
  "Devil+Sun": "Hermit",

  "Tower+Star": "Empress",
  "Tower+Moon": "Strength",
  "Tower+Sun": "Emperor",

  "Star+Moon": "Priestess",
  "Star+Sun": "Devil",

  "Moon+Sun": "Magician",
};

/**
 * Look up the result arcana of fusing two different arcanas.
 * Returns null if same arcana or combination not found.
 */
export function getFusionResult(a: Arcana, b: Arcana): Arcana | null {
  if (a === b) return null;

  // Alphabetical key
  const sorted = [a, b].sort();
  const key = `${sorted[0]}+${sorted[1]}`;
  return FUSION_TABLE[key] ?? null;
}

/**
 * Given a target arcana, find all pairs of arcanas that produce it.
 */
export function findFusionPairs(target: Arcana): [Arcana, Arcana][] {
  const pairs: [Arcana, Arcana][] = [];
  for (const [key, result] of Object.entries(FUSION_TABLE)) {
    if (result === target) {
      const [a, b] = key.split("+") as [Arcana, Arcana];
      pairs.push([a, b]);
    }
  }
  return pairs;
}
