"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet's default icon path issues in Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapProps {
  markers?: { lat: number; lng: number; color?: string; label: string }[];
  center?: [number, number];
  zoom?: number;
}

export default function MapComponent({ markers = [], center = [40.7128, -74.0060], zoom = 12 }: MapProps) {
  
  // Custom marker icon based on color
  const createCustomIcon = (color: string) => {
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="background-color: ${color}; width: 14px; height: 14px; border-radius: 50%; box-shadow: 0 0 10px ${color}, inset 0 0 5px rgba(255,255,255,0.5); border: 2px solid rgba(255,255,255,0.8);"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });
  };

  return (
    <div className="w-full h-full relative rounded-2xl overflow-hidden border border-white/10 z-0">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%', background: '#050816' }}
        zoomControl={false}
        attributionControl={false}
      >
        {/* CartoDB Dark Matter Base Map for Cyberpunk aesthetic */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        {/* Render markers if passed */}
        {markers.map((m, i) => (
          <Marker key={i} position={[m.lat, m.lng]} icon={m.color ? createCustomIcon(m.color) : icon}>
            <Popup className="cyberpunk-popup">
              <div className="bg-bg-card p-2 text-white font-mono text-xs border border-neon-cyan/50 rounded shadow-[0_0_10px_rgba(0,245,212,0.3)]">
                {m.label}
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Ambient Map Glow */}
        <Circle center={center} radius={5000} pathOptions={{ color: '#00E5FF', fillColor: '#00E5FF', fillOpacity: 0.05, stroke: false }} />
      </MapContainer>
      
      {/* Global styles for Leaflet popups to match aesthetic */}
      <style jsx global>{`
        .leaflet-popup-content-wrapper {
          background: rgba(15, 23, 42, 0.9) !important;
          border: 1px solid rgba(0, 229, 255, 0.3) !important;
          color: white !important;
          border-radius: 8px !important;
          backdrop-filter: blur(10px);
        }
        .leaflet-popup-tip {
          background: rgba(15, 23, 42, 0.9) !important;
          border-top: 1px solid rgba(0, 229, 255, 0.3) !important;
          border-left: 1px solid rgba(0, 229, 255, 0.3) !important;
        }
      `}</style>
    </div>
  );
}
