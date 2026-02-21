"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LayoutDashboard } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export const ProgressOverlay = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const progressData = [
    { label: "Story Progress", value: 65 },
    { label: "Social Links", value: 40 },
  ];

  return (
    <div 
      className="fixed bottom-10 right-10 z-[9999] flex flex-col items-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            className={`mb-4 p-4 w-64 shadow-2xl border-l-4 backdrop-blur-md ${
              theme === 'dark' 
                ? "bg-[#0a1929]/90 border-[#51eefc] text-white" 
                : "bg-white/90 border-[#1269cc] text-[#0a1929]"
            }`}
          >
            <p className="text-[10px] font-black italic uppercase mb-3 tracking-widest">System Status</p>
            <div className="space-y-4">
              {progressData.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-[9px] uppercase font-bold mb-1">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className={`h-[2px] w-full ${theme === 'dark' ? "bg-white/10" : "bg-gray-200"}`}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      className={`h-full ${theme === 'dark' ? "bg-[#51eefc]" : "bg-[#1269cc]"}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90 ${
          theme === 'dark' 
            ? "bg-[#1269cc] text-[#51eefc] hover:bg-[#51eefc] hover:text-[#0a1929]" 
            : "bg-[#0a1929] text-white hover:bg-[#1269cc]"
        }`}
      >
        <LayoutDashboard size={20} />
      </button>
    </div>
  );
};