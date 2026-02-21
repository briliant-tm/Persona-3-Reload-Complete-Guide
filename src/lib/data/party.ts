export interface Theurgy {
  name: string;
  effect: string;
  element: string;
}

export interface PartyMember {
  name: string;
  persona: string;
  evolvedPersona: string;
  arcana: string;
  role: string;
  weaponType: string;
  primaryElement: string;
  theurgies: Theurgy[];
  trigger: string;
  strengths: string[];
  tips: string;
  color: string;
}

export const PARTY_MEMBERS: PartyMember[] = [
  {
    name: "Protagonist",
    persona: "Orpheus",
    evolvedPersona: "Orpheus Telos",
    arcana: "Fool / Wild Card",
    role: "Flexible — Adapts to any role",
    weaponType: "One-Handed Sword",
    primaryElement: "All (Wild Card)",
    theurgies: [
      {
        name: "Cadenza",
        effect: "Restores moderate HP to party and greatly increases evasion for 3 turns.",
        element: "Recovery",
      },
      {
        name: "Jack Brothers",
        effect: "Medium Almighty damage to all foes.",
        element: "Almighty",
      },
      {
        name: "Best Friends",
        effect: "Severe Almighty damage to all foes.",
        element: "Almighty",
      },
      {
        name: "Armageddon",
        effect: "Deals 9,999 Almighty damage to all foes. Requires Satan + Helel equipped.",
        element: "Almighty",
      },
      {
        name: "Infinity",
        effect: "Makes all party members invincible for 1 turn. Requires Norn equipped.",
        element: "Support",
      },
    ],
    trigger: "Performing actions that match the equipped Persona's strengths (varies by Persona). Some Theurgies require specific Personas equipped.",
    strengths: [
      "Only party member who can switch Personas",
      "Can fill any elemental or support gap",
      "Has the most Theurgy options in the game",
    ],
    tips: "Equip Personas that cover your party's elemental weaknesses. Save Cadenza for boss fights — the evasion boost is incredibly powerful.",
    color: "text-[#51eefc]",
  },
  {
    name: "Yukari Takeba",
    persona: "Io",
    evolvedPersona: "Isis",
    arcana: "Lovers",
    role: "Healer / Wind DPS",
    weaponType: "Bow (Pierce)",
    primaryElement: "Wind",
    theurgies: [
      {
        name: "Cyclone Arrow",
        effect: "Severe Wind damage to all foes.",
        element: "Wind",
      },
      {
        name: "Tranquility",
        effect: "Fully restores party HP and cures all ailments.",
        element: "Recovery",
      },
      {
        name: "Winds of Refreshment",
        effect: "Moderate party HP recovery and removes stat debuffs.",
        element: "Recovery / Wind",
      },
    ],
    trigger: "Using healing skills on allies. Charges faster with multi-target heals.",
    strengths: [
      "Best dedicated healer in the party",
      "Learns Diarahan and Mediarahan naturally",
      "Strong Wind magic as a secondary role",
    ],
    tips: "Keep Yukari healing — it charges her Theurgy. Save Tranquility for emergencies since it's a full party heal + ailment cure.",
    color: "text-pink-400",
  },
  {
    name: "Junpei Iori",
    persona: "Hermes",
    evolvedPersona: "Trismegistus",
    arcana: "Magician",
    role: "Fire DPS / Physical",
    weaponType: "Two-Handed Sword (Slash)",
    primaryElement: "Fire",
    theurgies: [
      {
        name: "Hack n' Blast",
        effect: "Severe Fire + Slash damage to one foe.",
        element: "Fire / Slash",
      },
      {
        name: "Firestorm Blast",
        effect: "Severe Fire damage to all foes.",
        element: "Fire",
      },
      {
        name: "Blazing Slash",
        effect: "Colossal Fire + Slash damage to one foe. Higher crit rate than Hack n' Blast.",
        element: "Fire / Slash",
      },
    ],
    trigger: "Landing Critical Hits. Charges very fast when using physical skills with high crit rate.",
    strengths: [
      "Highest raw physical damage in the party",
      "Powerful Fire spells for weakness exploitation",
      "Critical hit rate boosts Theurgy quickly",
    ],
    tips: "Pair Junpei with Critical-boosting accessories. His Theurgy charges fast when he crits, making him a DPS machine in longer fights.",
    color: "text-blue-400",
  },
  {
    name: "Akihiko Sanada",
    persona: "Polydeuces",
    evolvedPersona: "Caesar",
    arcana: "Emperor",
    role: "Electric DPS / Buffer",
    weaponType: "Gloves (Strike)",
    primaryElement: "Elec",
    theurgies: [
      {
        name: "Lightning Spike",
        effect: "Severe Elec damage to all foes.",
        element: "Elec",
      },
      {
        name: "Thunderfist",
        effect: "Severe Elec + Strike damage to one foe.",
        element: "Elec / Strike",
      },
      {
        name: "Deus Ex Machina",
        effect: "Severe Elec damage to one foe and applies Charge effect on Akihiko for next physical attack.",
        element: "Elec / Support",
      },
    ],
    trigger: "Applying buffs to the party or debuffs to enemies. Multi-target buffs charge faster.",
    strengths: [
      "Excellent Elec damage dealer",
      "Natural access to buff skills (Tarukaja, Rakukaja)",
      "Good physical attack with Strike typing",
    ],
    tips: "Have Akihiko buff the party at the start of boss fights — it charges his Theurgy while boosting everyone's stats. Then unleash Lightning Spike.",
    color: "text-yellow-300",
  },
  {
    name: "Mitsuru Kirijo",
    persona: "Penthesilea",
    evolvedPersona: "Artemisia",
    arcana: "Empress",
    role: "Ice DPS / Instant Kill",
    weaponType: "Rapier (Pierce)",
    primaryElement: "Ice",
    theurgies: [
      {
        name: "Blizzard Edge",
        effect: "Severe Ice + Slash damage to one foe.",
        element: "Ice / Slash",
      },
      {
        name: "Cocytus",
        effect: "Severe Ice damage to all foes.",
        element: "Ice",
      },
      {
        name: "Glacial Blast",
        effect: "Colossal Ice damage to one foe with high Freeze chance.",
        element: "Ice",
      },
    ],
    trigger: "Inflicting status ailments (Freeze, Charm, etc.) on enemies. Freezing enemies charges fastest.",
    strengths: [
      "Strongest Ice magic user in the party",
      "Access to instant-kill Mudo skills",
      "High Magic stat makes her spells devastating",
    ],
    tips: "Mitsuru's Theurgy charges when she freezes enemies with Bufu skills — a natural combo. Her single-target Ice damage is unmatched.",
    color: "text-red-400",
  },
  {
    name: "Fuuka Yamagishi",
    persona: "Lucia",
    evolvedPersona: "Juno",
    arcana: "Priestess",
    role: "Navigator / Support",
    weaponType: "None (Non-combatant)",
    primaryElement: "Support",
    theurgies: [
      {
        name: "Oracle",
        effect: "Random powerful support effect (full heal, buffs, debuffs, etc.).",
        element: "Support",
      },
      {
        name: "Escape Route",
        effect: "Guarantees escape from any non-boss battle.",
        element: "Support",
      },
      {
        name: "Active Support",
        effect: "Passively restores a small amount of HP and SP to the active party each turn for 3 turns.",
        element: "Support",
      },
    ],
    trigger: "Charges automatically over time during battle. No specific action needed.",
    strengths: [
      "Provides enemy analysis and weakness info",
      "Oracle can turn the tide of tough battles",
      "No SP cost — effects are free",
    ],
    tips: "Oracle is RNG-based but always helpful. In longer Tartarus runs, Fuuka's passive support saves significant SP for the whole party.",
    color: "text-teal-400",
  },
  {
    name: "Aigis",
    persona: "Palladion",
    evolvedPersona: "Athena",
    arcana: "Chariot",
    role: "Physical DPS / Tank",
    weaponType: "Firearms (Pierce)",
    primaryElement: "Physical",
    theurgies: [
      {
        name: "Heritage Liberator",
        effect: "Severe Physical damage to all foes (multiple hits).",
        element: "Physical",
      },
      {
        name: "Pandemonium",
        effect: "Colossal Physical damage to one foe.",
        element: "Physical",
      },
      {
        name: "Multi-Mounted",
        effect: "Severe Pierce damage to all foes — machine gun barrage with high hit count.",
        element: "Pierce",
      },
    ],
    trigger: "Using Physical attack skills. Multi-hit skills charge gauge faster.",
    strengths: [
      "Extremely high Endurance — great tank",
      "Multi-hit physical skills for critical fishing",
      "No elemental weakness in evolved form",
    ],
    tips: "Aigis is your physical powerhouse. Her multi-hit attacks have high crit rates, and her Theurgy charges from using them. Perfect synergy.",
    color: "text-sky-300",
  },
  {
    name: "Ken Amada",
    persona: "Nemesis",
    evolvedPersona: "Kala-Nemi",
    arcana: "Justice",
    role: "Light Magic / Sub-Healer",
    weaponType: "Spear (Pierce)",
    primaryElement: "Light",
    theurgies: [
      {
        name: "Divine Retribution",
        effect: "Severe Light damage to all foes.",
        element: "Light",
      },
      {
        name: "Seraphic Radiance",
        effect: "Moderate party heal and raises attack for 3 turns.",
        element: "Recovery / Support",
      },
      {
        name: "Heaven's Blade",
        effect: "Severe Light + Pierce damage to one foe.",
        element: "Light / Pierce",
      },
    ],
    trigger: "Receiving healing or healing others. Both giving and receiving heals contribute.",
    strengths: [
      "Only party member with strong Hama (Light) skills",
      "Can serve as backup healer with Mediarama",
      "Light instant-kill is useful in Tartarus farming",
    ],
    tips: "Ken is great for Tartarus grinding — Hama skills instantly kill Dark-weak Shadows for fast clears. His backup healing also extends long runs.",
    color: "text-amber-300",
  },
  {
    name: "Koromaru",
    persona: "Cerberus",
    evolvedPersona: "Cerberus",
    arcana: "Strength",
    role: "Fire & Dark DPS",
    weaponType: "Knife (Slash)",
    primaryElement: "Fire / Dark",
    theurgies: [
      {
        name: "Hound of Darkness",
        effect: "Severe Dark damage to all foes.",
        element: "Dark",
      },
      {
        name: "Infernal Howl",
        effect: "Severe Fire damage to all foes with chance to inflict Fear.",
        element: "Fire",
      },
      {
        name: "Cerberus Strike",
        effect: "Colossal Fire + Dark damage to one foe.",
        element: "Fire / Dark",
      },
    ],
    trigger: "Exploiting enemy weaknesses. Hitting multiple weaknesses in one turn charges faster.",
    strengths: [
      "Dual Fire/Dark coverage is unique",
      "High Agility — often acts first",
      "Mudo skills useful for instant-kill farming",
    ],
    tips: "Koromaru's dual element coverage makes him versatile. He charges Theurgy by hitting weaknesses, so keep him targeting vulnerable enemies.",
    color: "text-gray-300",
  },
  {
    name: "Shinjiro Aragaki",
    persona: "Castor",
    evolvedPersona: "Castor",
    arcana: "Moon",
    role: "Physical Powerhouse",
    weaponType: "Battle Axe (Strike)",
    primaryElement: "Physical / Dark",
    theurgies: [
      {
        name: "Bleeding Fury",
        effect: "Colossal Physical damage to all foes.",
        element: "Physical",
      },
      {
        name: "Fatal End Rush",
        effect: "Colossal Physical damage to one foe. High critical rate.",
        element: "Physical",
      },
      {
        name: "Retaliating Rage",
        effect: "Colossal Physical damage to one foe. Damage scales with HP lost in battle.",
        element: "Physical",
      },
    ],
    trigger: "Taking damage from enemies. More damage taken = faster charge. Synergizes with his high HP pool.",
    strengths: [
      "Highest raw attack stat in the party",
      "Devastating physical damage output",
      "Access to powerful Dark (Mudo) skills",
    ],
    tips: "Shinjiro is a glass cannon who charges Theurgy by getting hit. Keep a healer ready and let him absorb hits — then unleash Bleeding Fury for massive damage. He's only available for a limited time.",
    color: "text-gray-400",
  },
];