"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CarFront,
  Zap,
  ShieldAlert,
  Wind,
  Ambulance,
  HeartPulse,
  CloudLightning,
  Train,
  Droplets,
  Radio,
  Bot,
  FileBarChart,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const MENU_ITEMS = [
  { name: "AI Command Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "AI Traffic Intelligence", icon: CarFront, path: "/traffic" },
  { name: "Environmental AI", icon: Wind, path: "/environment" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ width: 280 }}
      animate={{ width: collapsed ? 80 : 280 }}
      transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
      className="h-screen sticky top-0 left-0 z-50 flex flex-col bg-bg-card backdrop-blur-2xl border-r border-white/5 shadow-[5px_0_30px_rgba(0,0,0,0.5)]"
    >
      {/* Brand Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/10 relative overflow-hidden">
        {/* Animated Glow Behind Logo */}
        <div className="absolute top-0 left-0 w-full h-full bg-neon-blue/10 blur-xl z-0 pointer-events-none" />
        
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col z-10"
          >
            <h1 className="text-2xl font-bold font-display text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-neon-cyan neon-text-cyan tracking-wider">
              NEUROGRID
            </h1>
            <span className="text-[10px] text-neon-blue/70 uppercase tracking-[0.2em] mt-1">
              SYSTEM
            </span>
          </motion.div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="z-10 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neon-blue border border-white/5 transition-all"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-3 flex flex-col gap-1 custom-scrollbar">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link key={item.name} href={item.path}>
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-300 group cursor-pointer ${
                  isActive
                    ? "bg-neon-blue/10 border border-neon-blue/30 shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                    : "hover:bg-white/5 border border-transparent"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-neon-cyan rounded-r-full shadow-[0_0_10px_rgba(0,245,212,0.8)]"
                  />
                )}
                <Icon
                  size={20}
                  className={`shrink-0 transition-colors duration-300 ${
                    isActive ? "text-neon-cyan neon-text-cyan" : "text-gray-400 group-hover:text-neon-blue"
                  }`}
                />
                {!collapsed && (
                  <span
                    className={`font-medium tracking-wide whitespace-nowrap transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                    }`}
                  >
                    {item.name}
                  </span>
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Logout Footer */}
      <div className="p-4 border-t border-white/10">
        <button className="w-full flex items-center gap-4 px-3 py-3 rounded-xl text-danger-red hover:bg-danger-red/10 border border-transparent hover:border-danger-red/30 transition-all duration-300 group">
          <LogOut size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(255,77,109,0.8)]" />
          {!collapsed && <span className="font-medium tracking-wide">Logout</span>}
        </button>
      </div>
    </motion.aside>
  );
}
