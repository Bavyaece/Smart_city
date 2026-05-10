"use client";

import { motion } from "framer-motion";
import {
  Users,
  CarFront,
  ShieldAlert,
  Wind,
  Zap,
  Ambulance,
  Target,
  Radio
} from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import dynamic from "next/dynamic";

const CityMap = dynamic(() => import("@/components/ui/MapComponent"), { ssr: false });

// Dummy Data for charts and KPIs
const kpiData = [
  { id: 1, title: "System Health", value: "99.8%", trend: "+0.1%", icon: Zap, color: "neon-cyan" },
  { id: 2, title: "Active AI Nodes", value: "12,402", trend: "+42", icon: Radio, color: "neon-blue" },
  { id: 3, title: "Threat Level", value: "Zero", trend: "Stable", icon: ShieldAlert, color: "neon-green" }
];

const trafficData = [
  { time: "00:00", value: 30 }, { time: "04:00", value: 20 },
  { time: "08:00", value: 85 }, { time: "12:00", value: 70 },
  { time: "16:00", value: 90 }, { time: "20:00", value: 60 },
  { time: "23:59", value: 40 }
];

export default function Dashboard() {
  return (
    <div className="p-6 pb-24 space-y-8">
      
      {/* Hero Command Center */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-bg-card to-bg-secondary p-8 lg:p-12 shadow-[0_0_50px_rgba(0,245,212,0.1)]"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-r from-bg-primary via-transparent to-bg-primary/50 pointer-events-none" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />

        <div className="relative z-10 max-w-3xl">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-sm font-mono tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_8px_#00F5D4]" />
            SYSTEM OPERATIONAL
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-display tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-neon-cyan to-neon-blue mb-6 drop-shadow-[0_0_15px_rgba(0,245,212,0.5)]">
            NEUROGRID
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-8">
            The Brain of the Smart City
          </p>
          
          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-xl bg-neon-cyan/20 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-bg-primary font-bold tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(0,245,212,0.4)]">
              INITIALIZE SCAN
            </button>
            <button className="px-8 py-3 rounded-xl bg-white/5 border border-white/20 text-white hover:bg-white/10 font-bold tracking-widest transition-all duration-300">
              VIEW REPORTS
            </button>
          </div>
        </div>
      </motion.section>

      {/* KPI Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
        {kpiData.map((kpi, idx) => (
          <motion.div
            key={kpi.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            className="glass-panel p-6 glass-panel-hover group relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className={`absolute -right-6 -top-6 w-24 h-24 bg-${kpi.color}/20 blur-2xl rounded-full group-hover:bg-${kpi.color}/40 transition-colors duration-500`} />
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400 text-sm font-mono tracking-wider mb-1">{kpi.title}</p>
                <h3 className="text-3xl font-bold font-display text-white">{kpi.value}</h3>
              </div>
              <div className={`p-3 rounded-lg bg-${kpi.color}/10 border border-${kpi.color}/20 text-${kpi.color} shadow-[0_0_10px_rgba(var(--color-${kpi.color}),0.2)]`}>
                <kpi.icon size={24} />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className={`text-sm font-bold ${kpi.trend.startsWith('+') ? 'text-neon-green' : kpi.trend.startsWith('-') ? 'text-neon-cyan' : 'text-gray-400'}`}>
                {kpi.trend}
              </span>
              <span className="text-xs text-gray-500 font-mono uppercase">vs last 24h</span>
            </div>
            
            {/* Scanline effect on hover */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent h-[2px] w-full -translate-y-full group-hover:translate-y-[200px] transition-transform duration-1000 ease-in-out" />
          </motion.div>
        ))}
      </section>

      {/* Main Analytics Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[500px]">
        
        {/* City Traffic Flow Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-panel p-6 col-span-1 lg:col-span-2 flex flex-col"
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-white font-display">Live Traffic Flow</h3>
              <p className="text-sm text-gray-400 font-mono mt-1">AI Predicted vs Actual Routing</p>
            </div>
            <div className="px-3 py-1 rounded border border-white/10 bg-white/5 text-xs text-gray-300 font-mono">
              24H Overview
            </div>
          </div>
          
          <div className="flex-1 w-full relative min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00E5FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="time" stroke="rgba(255,255,255,0.2)" fontSize={12} tickMargin={10} />
                <YAxis stroke="rgba(255,255,255,0.2)" fontSize={12} tickFormatter={(val) => `${val}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(15,23,42,0.9)', border: '1px solid rgba(0,229,255,0.2)', borderRadius: '8px' }}
                  itemStyle={{ color: '#00E5FF' }}
                />
                <Area type="monotone" dataKey="value" stroke="#00E5FF" strokeWidth={3} fillOpacity={1} fill="url(#colorTraffic)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* AI Threat Detection Mini Map */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-panel p-6 col-span-1 flex flex-col relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-50">
            <CityMap 
              zoom={13}
              markers={[
                { lat: 40.7128, lng: -74.0060, color: '#FF4D6D', label: 'Anomaly: Sector 7' },
                { lat: 40.7200, lng: -74.0100, color: '#FF4D6D', label: 'Anomaly: Sector 8' },
                { lat: 40.7000, lng: -73.9900, color: '#FF4D6D', label: 'Anomaly: Sector 9' }
              ]}
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-bg-card to-transparent pointer-events-none z-0" />
          
          <div className="relative z-10 flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-danger-red font-display drop-shadow-[0_0_8px_rgba(255,77,109,0.8)]">Sector Alerts</h3>
            <span className="w-3 h-3 rounded-full bg-danger-red animate-ping" />
          </div>

          <div className="relative z-10 flex-1 flex flex-col gap-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-danger-red/10 border border-danger-red/20 rounded-xl p-4 flex gap-4 items-center group hover:bg-danger-red/20 transition-colors">
                <div className="w-2 h-full rounded-full bg-danger-red shadow-[0_0_8px_#FF4D6D]" />
                <div>
                  <h4 className="text-white font-mono text-sm">Anomaly Detected</h4>
                  <p className="text-danger-red/80 text-xs mt-1">Sector {7 + i} - Unauthorized Access</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
      </section>

    </div>
  );
}
