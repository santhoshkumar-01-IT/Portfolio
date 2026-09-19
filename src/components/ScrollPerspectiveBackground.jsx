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
      continuousTime += 0.008 // subtle continuous forward idle drift

      ctx.clearRect(0, 0, width, height)

      // 3D Camera & Perspective Parameters
      const horizonY = height * 0.50 // Horizon where chessboard meets deep black
      const fovDistance = 450 // Perspective focal length
      const cameraHeight = 160 // Height of camera above the chessboard floor
      const tileSize = 120 // Tile width in world units

      // Total forward progress in tile units
      const totalProgress = (currentScrollRef.current * 0.005) + continuousTime
      const offset = totalProgress % 1
      const baseRow = Math.floor(totalProgress)

      const numRows = 45 // Depth rows receding into distance
      const numCols = 32 // Columns spread across width

      ctx.save()

      // Render from back (horizon) to front (bottom of screen)
      for (let r = numRows; r >= 1; r--) {
        const zNear = r - offset
        const zFar = r + 1 - offset

        if (zNear <= 0.1) continue

        // Perspective Y projection
        const yNear = horizonY + (cameraHeight * fovDistance) / zNear
        const yFar = horizonY + (cameraHeight * fovDistance) / zFar

        // Alpha fade into deep darkness towards horizon
        const depthFactor = Math.min(1, Math.max(0, (numRows - r) / (numRows * 0.75)))
        const rowAlpha = Math.pow(depthFactor, 1.8)

        if (rowAlpha <= 0.01) continue

        for (let c = -numCols; c < numCols; c++) {
          // Perspective X projection
          const xNearLeft = width / 2 + ((c * tileSize) * fovDistance) / zNear
          const xNearRight = width / 2 + (((c + 1) * tileSize) * fovDistance) / zNear

          const xFarLeft = width / 2 + ((c * tileSize) * fovDistance) / zFar
          const xFarRight = width / 2 + (((c + 1) * tileSize) * fovDistance) / zFar

          // Determine alternating chessboard pattern
          // (column index + row index + base row) parity
          const isWhite = Math.abs((c + r + baseRow) % 2) === 1

          ctx.beginPath()
          ctx.moveTo(xNearLeft, yNear)
          ctx.lineTo(xNearRight, yNear)
          ctx.lineTo(xFarRight, yFar)
          ctx.lineTo(xFarLeft, yFar)
          ctx.closePath()

          if (isWhite) {
            ctx.fillStyle = `rgba(245, 245, 248, ${0.9 * rowAlpha})`
          } else {
            ctx.fillStyle = `rgba(8, 8, 10, ${0.98 * rowAlpha})`
          }
          ctx.fill()

          // Crisp tile border grid line
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * rowAlpha})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }

      // Soft fog horizon fade gradient to blend seamlessly into pitch black
      const fogGradient = ctx.createLinearGradient(0, horizonY - 80, 0, horizonY + 120)
      fogGradient.addColorStop(0, 'rgba(5, 5, 5, 1)')
      fogGradient.addColorStop(0.4, 'rgba(5, 5, 5, 0.95)')
      fogGradient.addColorStop(0.8, 'rgba(5, 5, 5, 0.3)')
      fogGradient.addColorStop(1, 'rgba(5, 5, 5, 0)')

      ctx.fillStyle = fogGradient
      ctx.fillRect(0, horizonY - 80, width, 200)

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
      {/* Layer 1: Seamless Topographic Contours Texture (Image 2) */}
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
