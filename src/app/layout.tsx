"use client";

import "../index.css";
import "../styles/globals.css";
import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
// 1. TAMBAHKAN useTheme DI SINI
import { ThemeProvider, useTheme } from "../components/ThemeProvider"; 
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ProgressOverlay } from "../components/ProgressOverlay";

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme(); // Ini sekarang aman karena di dalam LayoutContent
  const pathname = usePathname();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      theme === 'dark' 
        ? "bg-[#0a1929] text-gray-200" 
        : "bg-gray-50 text-gray-900"
    }`}>
      <Navigation />
      
      <main className="min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-grow"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ProgressOverlay harus di sini agar mendapatkan konteks tema */}
      <ProgressOverlay /> 
      <Footer />
    </div>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {/* 2. CUKUP PANGGIL LayoutContent SAJA */}
          <LayoutContent>
            {children}
          </LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}