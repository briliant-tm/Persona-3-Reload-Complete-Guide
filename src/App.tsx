import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Navigation } from "./src/components/Navigation";
import { Footer } from "./src/components/Footer";
import { Hero } from "./src/components/Hero";
import { FusionGuide } from "./src/components/FusionGuide";
import { CombatGuide } from "./src/components/CombatGuide";
import { FloorGuide } from "./src/components/FloorGuide";
import { StoryGuide } from "./src/components/StoryGuide";
import { ClassroomGuide } from "./src/components/ClassroomGuide";

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "home": return <Hero setActiveTab={setActiveTab} theme={theme} />;
      case "fusion": return <FusionGuide theme={theme} />;
      case "combat": return <CombatGuide theme={theme} />;
      case "floors": return <FloorGuide theme={theme} />;
      case "story": return <StoryGuide theme={theme} />;
      case "classroom": return <ClassroomGuide theme={theme} />;
      default: return <Hero setActiveTab={setActiveTab} theme={theme} />;
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      theme === 'dark' 
        ? "bg-[#0a1929] text-gray-200 selection:bg-[#51eefc] selection:text-[#0a1929]" 
        : "bg-gray-50 text-gray-900 selection:bg-[#1269cc] selection:text-white"
    }`}>
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main className="min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-grow"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer theme={theme} />
    </div>
  );
}
