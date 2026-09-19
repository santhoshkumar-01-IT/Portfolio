import { useEffect, useRef } from 'react'

export default function ScrollPerspectiveBackground() {
  const canvasRef = useRef(null)
  const scrollYRef = useRef(0)
  const currentScrollRef = useRef(0)

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

    let continuousTime = 0

    const render = () => {
      // Smooth lerp scroll position
      currentScrollRef.current += (scrollYRef.current - currentScrollRef.current) * 0.08
      continuousTime += 0.006 // subtle forward idle drift

      ctx.clearRect(0, 0, width, height)

      // Perspective horizon parameters
      const horizonY = height * 0.52 // Horizon starts at ~52% of viewport
      const floorHeight = height - horizonY + 40 // Cover entire bottom half
      const tileWidthAtBottom = width / 9.5 // ~9-10 clean chessboard columns across screen

      // Total forward progress
      const totalProgress = (currentScrollRef.current * 0.008) + continuousTime
      const offset = totalProgress % 1
      const baseRow = Math.floor(totalProgress)

      const numRows = 36 // Depth rows receding towards horizon
      const numCols = 16 // Columns left and right from center

      ctx.save()

      // Render from back (horizon) to front (bottom of viewport)
      for (let r = numRows; r >= 1; r--) {
        const zNear = (r - offset) * 0.35 + 0.65
        const zFar = (r + 1 - offset) * 0.35 + 0.65

        // Quadratic perspective mapping for natural foreshortened squares
        const yNear = horizonY + floorHeight / Math.pow(zNear, 1.4)
        const yFar = horizonY + floorHeight / Math.pow(zFar, 1.4)

        // Depth alpha fade towards horizon
        const fade = Math.min(1, Math.max(0, 1 - (r / numRows)))
        const alpha = Math.pow(fade, 1.1)

        for (let c = -numCols; c < numCols; c++) {
          const xNearLeft = width / 2 + (c * tileWidthAtBottom) / zNear
          const xNearRight = width / 2 + ((c + 1) * tileWidthAtBottom) / zNear

          const xFarLeft = width / 2 + (c * tileWidthAtBottom) / zFar
          const xFarRight = width / 2 + ((c + 1) * tileWidthAtBottom) / zFar

          // Perfect alternating chessboard parity
          const isWhite = Math.abs((c + r + baseRow) % 2) === 0

          ctx.beginPath()
          ctx.moveTo(xNearLeft, yNear)
          ctx.lineTo(xNearRight, yNear)
          ctx.lineTo(xFarRight, yFar)
          ctx.lineTo(xFarLeft, yFar)
          ctx.closePath()

          if (isWhite) {
            ctx.fillStyle = `rgba(245, 245, 248, ${0.92 * alpha})`
          } else {
            ctx.fillStyle = `rgba(8, 8, 10, ${0.98 * alpha})`
          }
          ctx.fill()

          // Subtle tile grid border
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * alpha})`
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      }

      // Smooth Horizon Fog Fade into pure black top half
      const fogGradient = ctx.createLinearGradient(0, horizonY - 40, 0, horizonY + 90)
      fogGradient.addColorStop(0, 'rgba(5, 5, 5, 1)')
      fogGradient.addColorStop(0.4, 'rgba(5, 5, 5, 0.95)')
      fogGradient.addColorStop(0.75, 'rgba(5, 5, 5, 0.4)')
      fogGradient.addColorStop(1, 'rgba(5, 5, 5, 0)')

      ctx.fillStyle = fogGradient
      ctx.fillRect(0, horizonY - 40, width, 140)

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
      {/* Layer 1: Topographic Contours Texture (Image 2) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.14] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url('/images/topographic_bg.jpg')`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Layer 2: Subtle radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.6)_60%,rgba(5,5,5,0.98)_100%)] pointer-events-none" />

      {/* Layer 3: True 3D Chessboard Perspective Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  )
}
