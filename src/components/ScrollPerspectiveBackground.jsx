import { useEffect, useState, useRef } from 'react'

export default function ScrollPerspectiveBackground() {
  const [scrollY, setScrollY] = useState(0)
  const animFrameRef = useRef(null)
  const currentPosRef = useRef(0)
  const targetPosRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      targetPosRef.current = window.scrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Smooth continuous animation loop with lerp (no glitch, butter-smooth 60/120fps)
    const updateMotion = () => {
      // Smooth interpolation
      currentPosRef.current += (targetPosRef.current - currentPosRef.current) * 0.08
      
      // Auto idle movement + scroll driven translation
      setScrollY(currentPosRef.current)
      animFrameRef.current = requestAnimationFrame(updateMotion)
    }

    animFrameRef.current = requestAnimationFrame(updateMotion)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }
  }, [])

  // Calculate seamless continuous tile offset
  const gridOffset = (scrollY * 0.45) % 120

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
      {/* 
        Layer 1: Seamless Aesthetic Topographic Map (Image 2)
        Covering full viewport with fixed attachment to eliminate any tile seams
      */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.14] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url('/images/topographic_bg.jpg')`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Layer 2: Subtle vignette gradient uniting the top and bottom seamlessly */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.6)_60%,rgba(5,5,5,0.98)_100%)] pointer-events-none" />

      {/* 
        Layer 3: 3D Perspective Checkerboard Floor (Image 1)
        Hardware-accelerated CSS 3D plane with infinite seamless tiling & zero glitch
      */}
      <div 
        className="absolute bottom-0 left-0 right-0 w-full h-[58vh] overflow-hidden pointer-events-none"
        style={{
          perspective: '420px',
          perspectiveOrigin: '50% 0%',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0) 92%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0) 92%)',
        }}
      >
        <div 
          className="w-[240vw] h-[200vh] -ml-[70vw] origin-top"
          style={{
            transform: 'rotateX(76deg) translateZ(0)',
            transformStyle: 'preserve-3d',
            backgroundImage: `
              linear-gradient(45deg, #f4f4f5 25%, transparent 25%), 
              linear-gradient(-45deg, #f4f4f5 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #f4f4f5 75%), 
              linear-gradient(-45deg, transparent 75%, #f4f4f5 75%)
            `,
            backgroundSize: '120px 120px',
            backgroundColor: '#0a0a0c',
            backgroundPosition: `0px ${gridOffset}px, 60px ${gridOffset}px, 60px ${gridOffset - 60}px, 0px ${gridOffset + 60}px`,
            opacity: 0.88,
          }}
        />
      </div>

      {/* Horizon softening fog to blend floor and background into one single aesthetic plane */}
      <div 
        className="absolute bottom-[48vh] left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-transparent via-[#050505]/80 to-[#050505]"
      />
    </div>
  )
}
