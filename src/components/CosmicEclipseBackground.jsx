import { motion } from 'framer-motion'

export default function CosmicEclipseBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070709]">
      {/* Top-Right Solar Flare / Eclipse Ambient Glow */}
      <div 
        className="absolute -top-20 -right-20 w-[650px] h-[650px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,0,0.85) 0%, rgba(255,140,0,0.4) 40%, transparent 70%)',
        }}
      />

      {/* Center Subtle Cosmic Mist */}
      <div 
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(255,115,0,0.6) 0%, transparent 70%)',
        }}
      />

      {/* Bottom-Right Planetary Horizon Glow */}
      <div 
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blur-[150px] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(255,90,0,0.9) 0%, rgba(200,60,0,0.3) 50%, transparent 75%)',
        }}
      />

      {/* Star Dust Canvas / Tiny Dots */}
      <div 
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0.75px, transparent 0.75px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Vignette / Edge Shading */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/40" />
    </div>
  )
}
