# NeuroGrid - AI Smart City Operating System

<div align="center">
  <p><strong>A futuristic, highly minimal, and cinematic AI-powered Smart City Operating System dashboard.</strong></p>
</div>

---

## 🌐 Project Overview

NeuroGrid is an enterprise-grade AI operating system designed for futuristic governments and smart city infrastructures. It monitors, analyzes, and visualizes an entire smart city using predictive analytics and real-time data streams.

The interface is built to feel like a real cinematic AI operating system—drawing inspiration from the Jarvis AI Interface, Tesla Smart Systems, NASA Mission Control, and Cyberpunk 2077 UI. 

**Design Principle:** *"Minimal UI with Maximum Visual Impact."*

---

## 🚀 Core Modules

The system is strictly divided into exactly **three** highly focused modules:

1. **AI Command Dashboard** (`/`)
   - The central intelligence hub. Provides high-level overview and critical alerts for the entire city infrastructure.
2. **AI Traffic Intelligence** (`/traffic`)
   - Real-time monitoring of city traffic flow, predictive congestion analysis, and autonomous routing optimizations.
3. **Environmental AI** (`/environment`)
   - Continuous tracking of air quality, energy consumption, and ecological metrics across the urban grid.

---

## 🎨 Aesthetics & UI Alignment

The dashboard is engineered to look cinematic, premium, and production-ready with strict adherence to design protocols:

- **Perfect Alignment:** Equal spacing, consistent card sizes, and a highly balanced grid layout.
- **Minimalist Data Presentation:** Large premium cards with minimal content per card, ensuring clear visual hierarchy and zero clutter.
- **Glassmorphism & Neon Accents:** Utilizing `rgba(15,23,42,0.7)` card backgrounds with subtle `rgba(255,255,255,0.05)` glass effects, highlighted by vibrant neon accents (Blue, Cyan, Purple, Green, Orange, Red).
- **Premium Typography:** Utilizing modern, futuristic fonts like **Space Grotesk**, **Orbitron**, and **Inter**.

---

## 🛠️ Technology Stack

### Frontend (`/frontend`)
- **Framework:** Next.js (App Router) & React.js
- **Styling:** Tailwind CSS v4 & Framer Motion (for smooth micro-animations)
- **Data Visualization:** Recharts
- **Mapping:** React Leaflet (for Interactive AI Maps)
- **Icons:** Lucide React

### Backend (`/backend`)
- **Language:** Python
- **Framework:** FastAPI

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (for the frontend)
- Python 3.10+ (for the backend)

### Installation

**1. Clone the repository:**
```bash
git clone https://github.com/your-username/neurogrid.git
cd neurogrid
```

**2. Start the Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

**3. Start the Frontend:**
```bash
cd frontend
npm install
npm run dev
```

---

<div align="center">
  <p><em>Built for the future. Running the cities of tomorrow.</em></p>
</div>
