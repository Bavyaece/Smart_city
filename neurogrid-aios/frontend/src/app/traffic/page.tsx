"use client";

import { motion } from "framer-motion";
import { CarFront, Map, Navigation, AlertTriangle, Route } from "lucide-react";
import dynamic from "next/dynamic";

const CityMap = dynamic(() => import("@/components/ui/MapComponent"), { ssr: false });

export default function TrafficPage() {
  const routes = [
    { id: "A-12", start: "Sector 1", end: "Sector 4", status: "Optimal", time: "12m", color: "neon-green" },
    { id: "B-09", start: "Sector 2", end: "Central Hub", status: "Congested", time: "34m", color: "warning-orange" },
    { id: "C-44", start: "Sector 7", end: "Industrial Zone", status: "Rerouting", time: "45m", color: "neon-blue" },
    { id: "D-01", start: "Downtown", end: "Airport", status: "Accident", time: "1h 10m", color: "danger-red" },
    { id: "E-99", start: "Sector 5", end: "Medical Center", status: "Optimal", time: "8m", color: "neon-green" }
  ];

  return (
    <div className="p-6 space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-neon-blue/20 rounded-xl border border-neon-blue/30 text-neon-blue shadow-[0_0_15px_rgba(0,229,255,0.3)]">
            <CarFront size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-white tracking-widest uppercase">Smart Traffic AI</h1>
            <p className="text-gray-400 font-mono text-sm mt-1">Real-time Congestion & Rerouting Protocols</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Map Area Placeholder */}
        <div className="lg:col-span-2 glass-panel p-6 min-h-[500px] flex flex-col relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-screen" />
          <div className="absolute inset-0 bg-linear-to-t from-bg-card to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.05)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />
          
          <div className="relative z-10 flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-neon-cyan font-display drop-shadow-[0_0_8px_rgba(0,245,212,0.8)] flex items-center gap-2">
              <Map size={20} /> City Grid Mapping
            </h3>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="text-xs text-white font-mono tracking-widest">LIVE TRACKING</span>
            </div>
          </div>

          <div className="relative z-10 flex-1 w-full rounded-2xl overflow-hidden border border-white/10 mt-2">
            <CityMap 
              zoom={13}
              center={[40.7128, -74.0060]}
              markers={[
                { lat: 40.7128, lng: -74.0060, color: '#00FFB3', label: 'Optimal: Sector 1' },
                { lat: 40.7200, lng: -74.0100, color: '#FF9F43', label: 'Congested: Sector 2' },
                { lat: 40.7000, lng: -73.9900, color: '#FF4D6D', label: 'Accident: Downtown' }
              ]}
            />
          </div>
        </div>

        {/* Active Routes Panel */}
        <div className="glass-panel p-6 flex flex-col gap-4">
          <h3 className="text-white font-display font-bold tracking-widest flex items-center gap-2 border-b border-white/10 pb-4">
            <Route className="text-neon-blue" size={20} /> ACTIVE ROUTES
          </h3>
          
          <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-1">
            {routes.map((route, i) => (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={route.id} 
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors cursor-pointer group relative overflow-hidden"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${route.color} shadow-[0_0_10px_rgba(var(--color-${route.color}),0.8)]`} />
                
                <div className="flex justify-between items-start mb-2 pl-3">
                  <div>
                    <span className="text-xs text-gray-400 font-mono tracking-wider block">ROUTE ID</span>
                    <span className="text-white font-bold">{route.id}</span>
                  </div>
                  <div className={`px-2 py-0.5 rounded bg-${route.color}/10 border border-${route.color}/30 text-${route.color} text-[10px] font-mono tracking-widest uppercase`}>
                    {route.status}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm pl-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="truncate max-w-[80px]">{route.start}</span>
                    <Navigation size={12} className={`text-${route.color}`} />
                    <span className="truncate max-w-[80px]">{route.end}</span>
                  </div>
                  <span className="font-mono text-neon-blue">{route.time}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="w-full py-3 rounded-xl border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-bg-primary transition-all font-bold tracking-widest text-sm mt-4">
            OPTIMIZE ALL ROUTES
          </button>
        </div>

      </div>
    </div>
  );
}
