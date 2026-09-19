import { useEffect, useRef } from 'react'

export default function ScrollPerspectiveBackground() {
  const canvasRef = useRef(null)
  const scrollYRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    let currentOffset = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Horizon & Perspective Parameters for 3D Checkerboard (Image 1)
      const horizonY = height * 0.52 // Horizon line where floor starts
      const floorHeight = height - horizonY
      
      // Speed up scrolling forward when user scrolls down
      const targetSpeed = 0.4 + (scrollYRef.current * 0.08)
      currentOffset = (currentOffset + targetSpeed) % 100

      const numZLines = 24
      const numXLines = 28

      // Save context
      ctx.save()

      // Draw Perspective Checkerboard Floor
      for (let i = 0; i < numZLines; i++) {
        // Perspective mapping: depth non-linear factor
        const z1 = (i + (currentOffset / 100)) / numZLines
        const z2 = (i + 1 + (currentOffset / 100)) / numZLines

        // Quadratic perspective mapping for true depth
        const y1 = horizonY + Math.pow(z1, 2.2) * floorHeight
        const y2 = horizonY + Math.pow(z2, 2.2) * floorHeight

        // Alpha fade into darkness towards horizon
        const fadeAlpha = Math.min(Math.pow(z1, 1.4), 1)

        // Draw horizontal checker tiles
        for (let j = -numXLines; j < numXLines; j++) {
          const isWhite = (Math.abs(j) + i + Math.floor(currentOffset / 100)) % 2 === 0

          const spread1 = (width * 1.6) * Math.pow(z1, 1.2)
          const spread2 = (width * 1.6) * Math.pow(z2, 1.2)

          const x1Left = width / 2 + (j / numXLines) * spread1
          const x1Right = width / 2 + ((j + 1) / numXLines) * spread1

          const x2Left = width / 2 + (j / numXLines) * spread2
          const x2Right = width / 2 + ((j + 1) / numXLines) * spread2

          ctx.beginPath()
          ctx.moveTo(x1Left, y1)
          ctx.lineTo(x1Right, y1)
          ctx.lineTo(x2Right, y2)
          ctx.lineTo(x2Left, y2)
          ctx.closePath()

          if (isWhite) {
            ctx.fillStyle = `rgba(240, 240, 245, ${0.85 * fadeAlpha})`
          } else {
            ctx.fillStyle = `rgba(10, 10, 12, ${0.95 * fadeAlpha})`
          }
          ctx.fill()

          // Subtle grid line border
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * fadeAlpha})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }

      // 2. Horizon Gradient Fog Fade to seamless pitch black
      const fogGradient = ctx.createLinearGradient(0, horizonY - 100, 0, horizonY + (floorHeight * 0.45))
      fogGradient.addColorStop(0, 'rgba(5, 5, 5, 1)')
      fogGradient.addColorStop(0.35, 'rgba(5, 5, 5, 0.98)')
      fogGradient.addColorStop(0.7, 'rgba(5, 5, 5, 0.4)')
      fogGradient.addColorStop(1, 'rgba(5, 5, 5, 0)')

      ctx.fillStyle = fogGradient
      ctx.fillRect(0, horizonY - 100, width, floorHeight + 100)

      ctx.restore()

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
      {/* Layer 1: Aesthetic Topographic Contours Texture (Image 2) */}
      <div 
        className="absolute inset-0 bg-repeat opacity-[0.16] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url('/images/topographic_bg.jpg')`,
          backgroundSize: '750px',
        }}
      />

      {/* Layer 2: Subtle radial vignette to soften contours in center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.7)_70%,rgba(5,5,5,0.95)_100%)] pointer-events-none" />

      {/* Layer 3: Interactive 3D Perspective Checkerboard Scrolling Floor Canvas (Image 1) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  )
}
