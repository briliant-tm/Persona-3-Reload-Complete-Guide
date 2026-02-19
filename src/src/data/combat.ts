import { Sword, Hand, Crosshair, Flame, Snowflake, Zap, Wind, Star, Skull } from "lucide-react";

export const ELEMENTS = [
  { name: "Slash", icon: Sword, color: "bg-gray-500", weak: "None", desc: "Physical attack with swords/blades." },
  { name: "Strike", icon: Hand, color: "bg-gray-600", weak: "None", desc: "Physical attack with fists/blunt weapons." },
  { name: "Pierce", icon: Crosshair, color: "bg-gray-700", weak: "None", desc: "Physical attack with spears/guns/bows." },
  { name: "Fire", icon: Flame, color: "bg-red-500", weak: "Ice", desc: "Agi skills. Often burns enemies." },
  { name: "Ice", icon: Snowflake, color: "bg-blue-400", weak: "Fire", desc: "Bufu skills. Can freeze enemies." },
  { name: "Elec", icon: Zap, color: "bg-yellow-400", weak: "Wind", desc: "Zio skills. Can shock enemies." },
  { name: "Wind", icon: Wind, color: "bg-green-400", weak: "Elec", desc: "Garu skills. High accuracy." },
  { name: "Light", icon: Star, color: "bg-yellow-100", weak: "Dark", desc: "Hama/Kouha skills. Insta-kill potential." },
  { name: "Dark", icon: Skull, color: "bg-purple-600", weak: "Light", desc: "Mudo/Eiha skills. Insta-kill potential." },
];
