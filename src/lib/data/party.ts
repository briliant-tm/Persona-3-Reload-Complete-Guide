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
        effect: "Deals severe Wind damage to an enemy while ignoring their resistances.",
        element: "Wind",
      },
      {
        name: "Tranquility",
        effect: "Places a buff that ensures the next magic attack used by any party member will deal more than double damage.",
        element: "Support",
      },
    ],
    trigger: "Gauge increases after using a healing skill.",
    strengths: [
      "Best dedicated healer in the party",
      "Learns Diarahan and Mediarahan naturally",
      "Strong Wind magic as a secondary role",
    ],
    tips: "Keep Yukari healing — it charges her Theurgy. Use Tranquility to boost party magic damage.",
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
        name: "Hack n’ Blast",
        effect: "Deals severe Slash damage to an enemy while ignoring their resistances.",
        element: "Slash",
      },
      {
        name: "Blaze of Life",
        effect: "Deals massive Fire damage to an enemy while ignoring their resistances. Fully heals the user.",
        element: "Fire",
      },
    ],
    trigger: "Gauge increases after landing a critical hit.",
    strengths: [
      "Highest raw physical damage in the party",
      "Powerful Fire spells for weakness exploitation",
      "Critical hit rate boosts Theurgy quickly",
    ],
    tips: "Pair Junpei with Critical-boosting accessories. Blaze of Life is both offense and sustain.",
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
        effect: "Deals heavy Electric damage to all enemies while ignoring their resistances.",
        element: "Elec",
      },
      {
        name: "Electric Onslaught",
        effect: "Deals severe Electric damage to an enemy while ignoring their resistances. High chance of Shock.",
        element: "Elec",
      },
    ],
    trigger: "Gauge increases after using a buff skill on himself.",
    strengths: [
      "Excellent Elec damage dealer",
      "Natural access to buff skills (Tarukaja, Rakukaja)",
      "Good physical attack with Strike typing",
    ],
    tips: "Buff Akihiko early to charge Theurgy. Electric Onslaught is great for single-target burst.",
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
        effect: "Deals severe Ice damage to an enemy while ignoring their resistances.",
        element: "Ice",
      },
      {
        name: "Blade of Execution",
        effect: "Deals massive Almighty damage to an enemy while decreasing their stats.",
        element: "Almighty",
      },
    ],
    trigger: "Gauge increases after debuffing enemies or inflicting them with a status ailment.",
    strengths: [
      "Strongest Ice magic user in the party",
      "Access to instant-kill Mudo skills",
      "High Magic stat makes her spells devastating",
    ],
    tips: "Debuff or inflict ailments to charge Theurgy. Blade of Execution is a powerful finisher.",
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
        effect: "Places a random buff on all party members.",
        element: "Support",
      },
      {
        name: "Revelation",
        effect: "Places a random enhanced effect on all party members.",
        element: "Support",
      },
    ],
    trigger: "Gauge increases after analyzing an enemy.",
    strengths: [
      "Provides enemy analysis and weakness info",
      "Oracle can turn the tide of tough battles",
      "No SP cost — effects are free",
    ],
    tips: "Analyze enemies to charge Theurgy. Revelation grants powerful team buffs.",
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
        name: "Orgia Mode",
        effect: "Deals heavy Pierce damage to all enemies while ignoring their resistances. Aigis cannot be controlled for the next few turns.",
        element: "Pierce",
      },
      {
        name: "Maximum Firepower",
        effect: "Deals severe Pierce damage to an enemy while ignoring their resistances.",
        element: "Pierce",
      },
    ],
    trigger: "Gauge increases after using a Physical skill.",
    strengths: [
      "Extremely high Endurance — great tank",
      "Multi-hit physical skills for critical fishing",
      "No elemental weakness in evolved form",
    ],
    tips: "Use Orgia Mode for AoE, Maximum Firepower for single-target burst.",
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
        effect: "Deals severe Light damage to an enemy while ignoring their resistances.",
        element: "Light",
      },
      {
        name: "Divine Intervention",
        effect: "Revives all party members and fully heals them. The next attack used against any teammate will be reflected.",
        element: "Support",
      },
    ],
    trigger: "Gauge increases after his SP drops below half.",
    strengths: [
      "Only party member with strong Hama (Light) skills",
      "Can serve as backup healer with Mediarama",
      "Light instant-kill is useful in Tartarus farming",
    ],
    tips: "Use Divine Intervention for emergency team revival and protection.",
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
        name: "Hound of Hades",
        effect: "Deals severe Dark damage to an enemy while ignoring their resistances.",
        element: "Dark",
      },
      {
        name: "Power Howling",
        effect: "Places a buff that ensures the next physical attack used by any party member will deal double damage.",
        element: "Support",
      },
    ],
    trigger: "Gauge increases after exploiting an enemy’s weakness.",
    strengths: [
      "Dual Fire/Dark coverage is unique",
      "High Agility — often acts first",
      "Mudo skills useful for instant-kill farming",
    ],
    tips: "Target weaknesses to charge Theurgy. Power Howling is a great team buff.",
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
        effect: "Deals severe Strike damage to an enemy while ignoring their resistances.",
        element: "Strike",
      }
    ],
    trigger: "Gauge increases after his HP drops below half.",
    strengths: [
      "Highest raw attack stat in the party",
      "Devastating physical damage output",
      "Access to powerful Dark (Mudo) skills",
    ],
    tips: "Let Shinjiro's HP drop to charge Theurgy. Bleeding Fury is a powerful finisher.",
    color: "text-gray-400",
  },
];