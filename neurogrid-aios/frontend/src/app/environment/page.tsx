"use client";

import { motion } from "framer-motion";
import { Wind, Droplets, Leaf, Activity } from "lucide-react";
import dynamic from "next/dynamic";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Matrix Grid replaces the standard CityMap

const airQualityData = [
  { time: "00:00", value: 35 }, { time: "04:00", value: 30 },
  { time: "08:00", value: 45 }, { time: "12:00", value: 65 },
  { time: "16:00", value: 55 }, { time: "20:00", value: 42 },
  { time: "23:59", value: 38 }
];

export default function EnvironmentPage() {
  return (
    <div className="p-8 space-y-12 max-w-7xl mx-auto">
      
      {/* Clean Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-widest uppercase flex items-center gap-4">
          <Wind className="text-neon-cyan" size={40} />
          Environmental AI
        </h1>
        <p className="text-gray-400 font-mono text-base ml-14">Global Air Quality & Climate Analytics</p>
      </div>

      {/* Primary Metrics - Exactly 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Air Quality Index", value: "42", sub: "Status: Optimal", icon: Wind, color: "neon-cyan" },
          { title: "Carbon Emissions", value: "1.2k", sub: "Tons/Day (-4%)", icon: Activity, color: "neon-green" },
          { title: "Water Purity", value: "98%", sub: "Sector 4 Anomaly", icon: Droplets, color: "neon-blue" }
        ].map((metric, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`glass-panel p-8 border-t-4 border-${metric.color} relative overflow-hidden group hover:bg-white/5 transition-colors`}
          >
            <div className="flex justify-between items-start mb-6">
              <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">{metric.title}</p>
              <metric.icon size={24} className={`text-${metric.color}`} />
            </div>
            <h3 className="text-5xl font-bold font-display text-white mb-2">{metric.value}</h3>
            <p className="text-gray-500 font-mono text-sm uppercase">{metric.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Visualization Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
        
        {/* Massive Clean Chart */}
        <div className="glass-panel p-8 flex flex-col relative overflow-hidden">
          <h3 className="text-2xl font-bold text-white font-display mb-8">AQI 24-Hour Trend</h3>
          <div className="flex-1 w-full relative min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={airQualityData}>
                <defs>
                  <linearGradient id="colorAQI" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00F5D4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00F5D4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.02)" vertical={false} />
                <XAxis dataKey="time" stroke="rgba(255,255,255,0.2)" fontSize={12} tickMargin={15} />
                <YAxis stroke="rgba(255,255,255,0.2)" fontSize={12} tickMargin={15} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(15,23,42,0.9)', border: '1px solid rgba(0,245,212,0.2)', borderRadius: '8px' }}
                  itemStyle={{ color: '#00F5D4' }}
                />
                <Area type="monotone" dataKey="value" stroke="#00F5D4" strokeWidth={3} fillOpacity={1} fill="url(#colorAQI)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Environmental Heatmap - Block Topography */}
        <div className="glass-panel p-8 flex flex-col relative overflow-hidden group">
          <div className="flex justify-between items-start mb-6 z-10 relative">
            <h3 className="text-2xl font-bold text-white font-display flex items-center gap-2">
               <Leaf className="text-neon-green" /> Regional AQI Heatmap
            </h3>
            <span className="text-xs font-mono text-gray-400 bg-black/50 px-3 py-1 rounded border border-white/10">LIVE SENSOR DATA</span>
          </div>
          
          <div className="relative z-10 flex-1 w-full flex flex-col gap-2">
            
            {/* Top Row */}
            <div className="flex w-full gap-2 h-1/3">
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="flex-1 bg-danger-red/20 border border-danger-red/50 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden hover:bg-danger-red/30 transition-colors"
              >
                <div className="absolute right-0 top-0 w-24 h-24 bg-danger-red/20 blur-2xl rounded-full" />
                <div className="relative z-10 text-xs font-mono text-danger-red tracking-widest uppercase mb-1">Sector 7 • Industrial</div>
                <div className="relative z-10 flex items-end justify-between">
                  <span className="text-4xl font-display font-bold text-white">142</span>
                  <span className="text-[10px] text-danger-red font-bold uppercase bg-danger-red/10 px-2 py-1 rounded">Hazardous</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="flex-[0.6] bg-warning-orange/20 border border-warning-orange/50 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden hover:bg-warning-orange/30 transition-colors"
              >
                <div className="absolute right-0 top-0 w-24 h-24 bg-warning-orange/20 blur-2xl rounded-full" />
                <div className="relative z-10 text-xs font-mono text-warning-orange tracking-widest uppercase mb-1">Sector 4 • Commercial</div>
                <div className="relative z-10 flex items-end justify-between">
                  <span className="text-4xl font-display font-bold text-white">85</span>
                  <span className="text-[10px] text-warning-orange font-bold uppercase bg-warning-orange/10 px-2 py-1 rounded">Elevated</span>
                </div>
              </motion.div>
            </div>

            {/* Middle Row */}
            <div className="flex w-full gap-2 h-1/3">
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="flex-[0.4] bg-neon-cyan/10 border border-neon-cyan/30 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden hover:bg-neon-cyan/20 transition-colors"
              >
                <div className="relative z-10 text-xs font-mono text-neon-cyan tracking-widest uppercase mb-1">Sector 1 • Outskirts</div>
                <div className="relative z-10 flex items-end justify-between">
                  <span className="text-4xl font-display font-bold text-white">24</span>
                  <span className="text-[10px] text-neon-cyan font-bold uppercase bg-neon-cyan/10 px-2 py-1 rounded">Optimal</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="flex-1 bg-neon-green/10 border border-neon-green/30 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden hover:bg-neon-green/20 transition-colors"
              >
                <div className="relative z-10 text-xs font-mono text-neon-green tracking-widest uppercase mb-1">Sector 2 • Residential</div>
                <div className="relative z-10 flex items-end justify-between">
                  <span className="text-4xl font-display font-bold text-white">35</span>
                  <span className="text-[10px] text-neon-green font-bold uppercase bg-neon-green/10 px-2 py-1 rounded">Good</span>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row */}
            <div className="flex w-full gap-2 h-1/3">
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="flex-1 bg-warning-orange/20 border border-warning-orange/50 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden hover:bg-warning-orange/30 transition-colors"
              >
                <div className="absolute right-0 top-0 w-24 h-24 bg-warning-orange/20 blur-2xl rounded-full" />
                <div className="relative z-10 text-xs font-mono text-warning-orange tracking-widest uppercase mb-1">Sector 9 • Transit Hub</div>
                <div className="relative z-10 flex items-end justify-between">
                  <span className="text-4xl font-display font-bold text-white">68</span>
                  <span className="text-[10px] text-warning-orange font-bold uppercase bg-warning-orange/10 px-2 py-1 rounded">Moderate</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
