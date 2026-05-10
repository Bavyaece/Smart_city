"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Bell, 
  Search, 
  AlertTriangle, 
  User, 
  Activity,
  Cpu
} from "lucide-react";

export default function TopNavbar() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + " / " + now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).toUpperCase());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full h-20 bg-bg-card/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex items-center justify-between px-6">
      
      {/* Left side: Search & Status */}
      <div className="flex items-center gap-8 flex-1">
        <div className="relative group w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-neon-blue/50 group-hover:text-neon-cyan transition-colors" />
          </div>
          <input 
            type="text" 
            className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-full focus:ring-1 focus:ring-neon-cyan focus:border-neon-cyan block pl-11 p-2.5 transition-all duration-300 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] placeholder-gray-500 font-mono tracking-wider" 
            placeholder="SEARCH SECTOR DIRECTORIES..." 
          />
          {/* Glowing border effect on focus */}
          <div className="absolute inset-0 rounded-full opacity-0 group-focus-within:opacity-100 shadow-[0_0_15px_rgba(0,245,212,0.3)] pointer-events-none transition-opacity duration-500" />
        </div>

        {/* AI Status Indicator */}
        <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-neon-cyan/5 border border-neon-cyan/20 rounded-full">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan shadow-[0_0_10px_#00F5D4]"></span>
          </div>
          <span className="text-neon-cyan text-xs font-mono tracking-widest">SYSTEM ONLINE</span>
          <Activity size={16} className="text-neon-cyan animate-pulse" />
        </div>
      </div>

      {/* Right side: Clock, Actions, Profile */}
      <div className="flex items-center justify-end gap-6 flex-1">
        
        {/* Real-time Clock */}
        <div className="hidden md:flex flex-col items-end">
          <span className="text-neon-blue font-mono text-sm tracking-widest neon-text-blue">{time}</span>
          <span className="text-gray-500 text-[10px] uppercase tracking-widest">Global Sync</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-neon-blue hover:bg-neon-blue/10 transition-all shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-danger-red rounded-full shadow-[0_0_8px_#FF4D6D] border-2 border-bg-secondary" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,77,109,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-full bg-danger-red/10 border border-danger-red/50 text-danger-red hover:bg-danger-red/20 transition-all flex items-center justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-danger-red/20 w-full h-full animate-ping opacity-0 group-hover:opacity-100 rounded-full" />
            <AlertTriangle size={20} className="relative z-10" />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-white/10" />

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">Admin Prime</p>
            <p className="text-[10px] text-neon-blue/70 font-mono">Lvl 9 Access</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-neon-blue/50 flex items-center justify-center bg-bg-secondary relative overflow-hidden group-hover:border-neon-cyan transition-colors">
            <Cpu size={20} className="text-neon-blue group-hover:text-neon-cyan transition-colors" />
            {/* Inner glow */}
            <div className="absolute inset-0 bg-linear-to-tr from-neon-blue/20 to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </header>
  );
}
