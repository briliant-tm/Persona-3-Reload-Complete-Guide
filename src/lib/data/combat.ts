import { Flame, Snowflake, Zap, Wind, Sun, Moon, Swords } from "lucide-react";

export const ELEMENTS = [
  {
    name: "Slash",
    color: "bg-gray-500",
    icon: Swords,
    desc: "Physical attacks using swords or blades.",
    weak: "None"
  },
  {
    name: "Fire",
    color: "bg-red-500",
    icon: Flame,
    desc: "Agi skills. Burns enemies.",
    weak: "Ice"
  },
  {
    name: "Ice",
    color: "bg-blue-400",
    icon: Snowflake,
    desc: "Bufu skills. Can freeze enemies.",
    weak: "Fire"
  },
  {
    name: "Elec",
    color: "bg-yellow-400",
    icon: Zap,
    desc: "Zio skills. Can shock enemies.",
    weak: "Wind"
  },
  {
    name: "Wind",
    color: "bg-green-500",
    icon: Wind,
    desc: "Garu skills. Blows enemies away.",
    weak: "Elec"
  },
  {
    name: "Light",
    color: "bg-yellow-100 text-yellow-600",
    icon: Sun,
    desc: "Hama skills. Instant kill on dark enemies.",
    weak: "Dark"
  },
  {
    name: "Dark",
    color: "bg-purple-900",
    icon: Moon,
    desc: "Mudo skills. Instant kill on light enemies.",
    weak: "Light"
  }
];
