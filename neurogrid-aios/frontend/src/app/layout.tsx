import type { Metadata } from "next";
import { Inter, Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import TopNavbar from "@/components/layout/TopNavbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeuroGrid AIOS | The Brain of the Smart City",
  description: "Futuristic AI-powered Smart City Operating System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${orbitron.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex text-foreground bg-background overflow-hidden">
        {/* Main Application Container */}
        <div className="flex h-screen w-full relative">
          <Sidebar />
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col h-screen overflow-hidden relative z-10">
            <TopNavbar />
            
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-transparent relative custom-scrollbar">
              {children}
            </main>
          </div>

          {/* Global Ambient Background Effects (Optimized for performance) */}
          <div 
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 10% 10%, rgba(0, 229, 255, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 90%, rgba(157, 78, 221, 0.03) 0%, transparent 40%)'
            }}
          />
        </div>
      </body>
    </html>
  );
}
