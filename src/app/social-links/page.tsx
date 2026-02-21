import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Heart, MapPin, Clock, Unlock, Star, ChevronDown, ChevronUp } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { SOCIAL_LINKS } from "../../lib/data/social-links";
import { useTheme } from "../../components/ThemeProvider";

const ARCANA_COLORS: Record<string, string> = {
  Fool: "from-gray-400 to-gray-600",
  Magician: "from-red-400 to-red-600",
  Priestess: "from-indigo-400 to-indigo-600",
  Empress: "from-emerald-400 to-emerald-600",
  Emperor: "from-amber-400 to-amber-600",
  Hierophant: "from-yellow-500 to-yellow-700",
  Lovers: "from-pink-400 to-pink-600",
  Chariot: "from-orange-400 to-orange-600",
  Justice: "from-blue-400 to-blue-600",
  Hermit: "from-slate-400 to-slate-600",
  Fortune: "from-violet-400 to-violet-600",
  Strength: "from-rose-400 to-rose-600",
  "Hanged Man": "from-cyan-400 to-cyan-600",
  Death: "from-gray-600 to-gray-900",
  Temperance: "from-lime-400 to-lime-600",
  Devil: "from-purple-500 to-purple-800",
  Tower: "from-red-600 to-red-900",
  Star: "from-yellow-300 to-yellow-500",
  Moon: "from-blue-300 to-blue-500",
  Sun: "from-orange-300 to-orange-500",
  Judgement: "from-sky-400 to-sky-600",
};

function SocialLinkCard({ link, theme, index }: { link: typeof SOCIAL_LINKS[0]; theme: string; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const gradient = ARCANA_COLORS[link.arcana] || "from-gray-400 to-gray-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.04, 0.6), duration: 0.4 }}
      className={`rounded-lg overflow-hidden border transition-all ${
        theme === "dark"
          ? "bg-[#0f2438] border-[#1269cc]/30 hover:border-[#51eefc]/50"
          : "bg-white border-gray-200 hover:border-[#1269cc] shadow-sm hover:shadow-lg"
      }`}
    >
      {/* Header */}
      <div className={`relative h-16 bg-gradient-to-r ${gradient} flex items-center px-5 gap-4`}>
        <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center border border-white/20">
          <span className="text-white font-black text-sm">{link.arcanaNum}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold truncate">{link.arcana}</h3>
          <p className="text-white/70 text-xs truncate">{link.character}</p>
        </div>
        {link.auto && (
          <span className="text-xs font-bold uppercase px-2 py-0.5 rounded bg-white/20 text-white border border-white/30 shrink-0">
            Auto
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 space-y-3">
        <div className="flex items-start gap-2">
          <MapPin size={14} className={`mt-0.5 shrink-0 ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`} />
          <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{link.location}</span>
        </div>
        <div className="flex items-start gap-2">
          <Clock size={14} className={`mt-0.5 shrink-0 ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`} />
          <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{link.availability}</span>
        </div>

        {/* Expandable section */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center justify-between pt-2 border-t cursor-pointer transition-colors ${
            theme === "dark" ? "border-[#1269cc]/20 text-gray-400 hover:text-[#51eefc]" : "border-gray-100 text-gray-500 hover:text-[#1269cc]"
          }`}
        >
          <span className="text-xs uppercase tracking-wider font-bold">Details</span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="space-y-3 pt-1">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Unlock size={12} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
                    <span className={`text-xs uppercase font-bold tracking-wider ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                      How to Unlock
                    </span>
                  </div>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{link.unlockCondition}</p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Star size={12} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
                    <span className={`text-xs uppercase font-bold tracking-wider ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                      Benefits
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {link.keyBenefits.map((b, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${theme === "dark" ? "bg-[#51eefc]" : "bg-[#1269cc]"}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function SocialLinksPage() {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "manual" | "auto">("all");

  const filteredLinks = useMemo(() => {
    return SOCIAL_LINKS.filter((link) => {
      const matchesSearch =
        link.arcana.toLowerCase().includes(search.toLowerCase()) ||
        link.character.toLowerCase().includes(search.toLowerCase()) ||
        link.name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter =
        filter === "all" || (filter === "auto" && link.auto) || (filter === "manual" && !link.auto);
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors ${theme === "dark" ? "bg-[#0a1929]" : "bg-gray-50"}`}>
      {/* Background */}
      <div className={`absolute top-0 right-0 w-1/2 h-screen pointer-events-none transition-opacity ${theme === "dark" ? "opacity-10" : "opacity-5"}`}>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1603734178639-de75ab63b2d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHNocmluZSUyMHdhcm0lMjBzdW5saWdodHxlbnwxfHx8fDE3NzE2NDc1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Social Links"
          className="w-full h-full object-cover grayscale"
        />
        <div className={`absolute inset-0 bg-gradient-to-l to-transparent ${theme === "dark" ? "from-[#0a1929]" : "from-gray-50"}`} />
      </div>

      <SectionTitle title="Social Links" subtitle="Forge bonds to unlock powerful Personas and experience unforgettable stories." />

      {/* Controls */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by arcana, character..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full border rounded-lg py-2.5 pl-10 pr-4 focus:outline-none transition-colors ${
              theme === "dark"
                ? "bg-[#0f2438] border-[#1269cc]/50 text-white focus:border-[#51eefc]"
                : "bg-white border-gray-300 text-gray-900 focus:border-[#1269cc]"
            }`}
          />
        </div>

        <div className="flex gap-2">
          {(["all", "manual", "auto"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === f
                  ? theme === "dark"
                    ? "bg-[#1269cc] text-white"
                    : "bg-[#1269cc] text-white"
                  : theme === "dark"
                  ? "bg-[#0f2438] text-gray-400 border border-[#1269cc]/20 hover:border-[#1269cc]/40"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300"
              }`}
            >
              {f === "all" ? "All" : f === "manual" ? "Manual" : "Auto"}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className={`text-sm mb-4 relative z-10 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
        Showing {filteredLinks.length} of {SOCIAL_LINKS.length} Social Links
      </p>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLinks.map((link, idx) => (
          <SocialLinkCard key={link.arcana} link={link} theme={theme} index={idx} />
        ))}
      </div>

      {filteredLinks.length === 0 && (
        <div className={`relative z-10 text-center py-20 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
          <Heart size={48} className="mx-auto mb-4 opacity-30" />
          <p className="text-lg">No Social Links found matching your search.</p>
          <button
            onClick={() => { setSearch(""); setFilter("all"); }}
            className={`mt-4 px-4 py-2 rounded cursor-pointer transition-colors ${
              theme === "dark" ? "bg-[#1269cc]/20 text-[#51eefc] hover:bg-[#1269cc]/30" : "bg-blue-50 text-[#1269cc] hover:bg-blue-100"
            }`}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
