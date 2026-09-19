import { useEffect, useRef } from 'react'

export default function UnifiedAestheticBackground() {
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

    let time = 0

    // 1. Ambient White Mist Clouds (Top Half)
    const mists = Array.from({ length: 5 }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.55),
      radius: Math.random() * 200 + 140,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.15,
      alpha: Math.random() * 0.035 + 0.02,
    }))

    // 2. Glistening White Light Embers along rivers (Top Half)
    const embers = Array.from({ length: 24 }, () => ({
      curveIndex: Math.floor(Math.random() * 3),
      t: Math.random(),
      speed: Math.random() * 0.0018 + 0.0008,
      size: Math.random() * 2 + 1.2,
      pulseSpeed: Math.random() * 0.04 + 0.02,
      pulsePhase: Math.random() * Math.PI * 2,
    }))

    // Topographic Liquid River Paths (Focusing in upper 60% of viewport)
    const createCurvedPaths = (w, h, t, scrollProgress) => {
      const horizon = h * 0.52
      const scrollOffset = scrollProgress * 0.0003
      return [
        // Primary River 1 (Sweeping from top-left into center horizon)
        [
          { x: w * 0.12, y: -40 },
          { x: w * 0.28 + Math.sin(t * 0.4 + scrollOffset) * 40, y: horizon * 0.3 },
          { x: w * 0.18 + Math.cos(t * 0.3) * 30, y: horizon * 0.55 },
          { x: w * 0.46 + Math.sin(t * 0.5) * 45, y: horizon * 0.78 },
          { x: w * 0.50 + Math.cos(t * 0.4) * 20, y: horizon + 10 },
        ],
        // River 2 (From top-right weaving into horizon)
        [
          { x: w * 0.75, y: -40 },
          { x: w * 0.60 + Math.cos(t * 0.35) * 35, y: horizon * 0.25 },
          { x: w * 0.82 + Math.sin(t * 0.45) * 40, y: horizon * 0.52 },
          { x: w * 0.58 + Math.cos(t * 0.4) * 30, y: horizon * 0.82 },
          { x: w * 0.52, y: horizon + 10 },
        ],
        // Branch 3 (Left wing contour)
        [
          { x: -20, y: horizon * 0.35 },
          { x: w * 0.16 + Math.sin(t * 0.4) * 25, y: horizon * 0.5 },
          { x: w * 0.08 + Math.cos(t * 0.3) * 20, y: horizon * 0.75 },
          { x: w * 0.22, y: horizon + 15 },
        ],
      ]
    }

    const getPointOnPath = (points, t) => {
      const n = points.length - 1
      const p = t * n
      const i = Math.floor(p)
      const u = p - i

      if (i >= n) return points[n]
      if (i < 0) return points[0]

      const p0 = points[Math.max(0, i - 1)]
      const p1 = points[i]
      const p2 = points[Math.min(n, i + 1)]
      const p3 = points[Math.min(n, i + 2)]

      const u2 = u * u
      const u3 = u2 * u

      const x = 0.5 * (
        (2 * p1.x) +
        (-p0.x + p2.x) * u +
        (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * u2 +
        (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * u3
      )

      const y = 0.5 * (
        (2 * p1.y) +
        (-p0.y + p2.y) * u +
        (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * u2 +
        (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * u3
      )

      return { x, y }
    }

    const drawSmoothPath = (pts, tension = 1) => {
      if (pts.length < 2) return
      ctx.beginPath()
      ctx.moveTo(pts[0].x, pts[0].y)
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = i > 0 ? pts[i - 1] : pts[0]
        const p1 = pts[i]
        const p2 = pts[i + 1]
        const p3 = i != pts.length - 2 ? pts[i + 2] : p2

        const cp1x = p1.x + ((p2.x - p0.x) / 6) * tension
        const cp1y = p1.y + ((p2.y - p0.y) / 6) * tension
        const cp2x = p2.x - ((p3.x - p1.x) / 6) * tension
        const cp2y = p2.y - ((p3.y - p1.y) / 6) * tension

        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y)
      }
    }

    const render = () => {
      // Smooth lerp scroll
      currentScrollRef.current += (scrollYRef.current - currentScrollRef.current) * 0.08
      const scrollSpeedBoost = Math.abs(scrollYRef.current - currentScrollRef.current) * 0.002
      time += 0.008 + scrollSpeedBoost

      ctx.clearRect(0, 0, width, height)

      const horizonY = height * 0.52 // The horizon separating top rivers and bottom chessboard

      // ==========================================
      // SECTION 1: TOP HALF - WHITE NEON LIQUID WATER & MIST
      // ==========================================

      // A. Ambient Mist Clouds
      mists.forEach((m) => {
        m.x += m.vx
        m.y += m.vy
        if (m.x < -100) m.x = width + 100
        if (m.x > width + 100) m.x = -100
        if (m.y < -100) m.y = horizonY
        if (m.y > horizonY + 50) m.y = -50

        const grad = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.radius)
        grad.addColorStop(0, `rgba(255, 255, 255, ${m.alpha * 1.8})`)
        grad.addColorStop(0.5, `rgba(255, 255, 255, ${m.alpha})`)
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      const paths = createCurvedPaths(width, height, time, currentScrollRef.current)

      // B. Topographic Echo Lines
      paths.forEach((mainPath, pIdx) => {
        const offsets = [-36, -20, -10, 10, 20, 36, 52]
        offsets.forEach((offsetDist, oIdx) => {
          const shiftedPath = mainPath.map((pt, i) => {
            const angle = Math.sin(time * 0.5 + i + pIdx) * 0.3
            return {
              x: pt.x + offsetDist * Math.cos(angle) + Math.sin(time + i) * 4,
              y: pt.y + offsetDist * Math.sin(angle) + Math.cos(time + i) * 4,
            }
          })

          ctx.save()
          drawSmoothPath(shiftedPath)
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.035 + (oIdx % 2 === 0 ? 0.02 : 0.01)})`
          ctx.lineWidth = 0.8
          ctx.stroke()
          ctx.restore()
        })
      })

      // C. Primary Liquid Water Streams
      paths.forEach((mainPath, idx) => {
        ctx.save()

        // Outer glow bloom
        drawSmoothPath(mainPath)
        ctx.shadowColor = 'rgba(255, 255, 255, 0.95)'
        ctx.shadowBlur = idx === 0 ? 26 : 16
        ctx.strokeStyle = idx === 0 ? 'rgba(255, 255, 255, 0.45)' : 'rgba(255, 255, 255, 0.3)'
        ctx.lineWidth = idx === 0 ? 6 : 3.5
        ctx.stroke()

        // Intense core river
        drawSmoothPath(mainPath)
        ctx.shadowBlur = 8
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = idx === 0 ? 2.2 : 1.5
        ctx.stroke()

        // Running liquid water pulse
        ctx.setLineDash([20, 40, 12, 50])
        ctx.lineDashOffset = -(time * (idx === 0 ? 60 : 40) + currentScrollRef.current * 0.35)
        drawSmoothPath(mainPath)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)'
        ctx.lineWidth = idx === 0 ? 4 : 2.5
        ctx.shadowBlur = 14
        ctx.stroke()

        ctx.restore()
      })

      // D. Glistening Embers on Upper Streams
      embers.forEach((ember) => {
        ember.t = (ember.t + ember.speed + scrollSpeedBoost * 0.1) % 1
        const targetPath = paths[ember.curveIndex % paths.length]
        const pos = getPointOnPath(targetPath, ember.t)

        const pulse = Math.sin(time * 3 + ember.pulsePhase) * 0.35 + 0.65
        const size = ember.size * pulse

        ctx.save()
        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, size * 4)
        grad.addColorStop(0, `rgba(255, 255, 255, ${0.9 * pulse})`)
        grad.addColorStop(0.35, `rgba(255, 255, 255, ${0.35 * pulse})`)
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, size * 4, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = '#ffffff'
        ctx.shadowColor = '#ffffff'
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      })

      // ==========================================
      // SECTION 2: BOTTOM HALF - 3D PERSPECTIVE CHESSBOARD FLOOR
      // ==========================================

      const floorHeight = height - horizonY + 30
      const tileWidthAtBottom = width / 9.5

      const totalProgress = (currentScrollRef.current * 0.008) + (time * 0.8)
      const offset = totalProgress % 1
      const baseRow = Math.floor(totalProgress)

      const numRows = 34
      const numCols = 16

      ctx.save()

      // Render chessboard from horizon down to bottom of viewport
      for (let r = numRows; r >= 1; r--) {
        const zNear = (r - offset) * 0.35 + 0.65
        const zFar = (r + 1 - offset) * 0.35 + 0.65

        const yNear = horizonY + floorHeight / Math.pow(zNear, 1.4)
        const yFar = horizonY + floorHeight / Math.pow(zFar, 1.4)

        const fade = Math.min(1, Math.max(0, 1 - (r / numRows)))
        const alpha = Math.pow(fade, 1.1)

        if (alpha <= 0.01) continue

        for (let c = -numCols; c < numCols; c++) {
          const xNearLeft = width / 2 + (c * tileWidthAtBottom) / zNear
          const xNearRight = width / 2 + ((c + 1) * tileWidthAtBottom) / zNear

          const xFarLeft = width / 2 + (c * tileWidthAtBottom) / zFar
          const xFarRight = width / 2 + ((c + 1) * tileWidthAtBottom) / zFar

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

          ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * alpha})`
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      }

      // ==========================================
      // SECTION 3: SEAMLESS HORIZON MIST TRANSITION
      // ==========================================
      const horizonFog = ctx.createLinearGradient(0, horizonY - 45, 0, horizonY + 75)
      horizonFog.addColorStop(0, 'rgba(5, 5, 5, 0.95)')
      horizonFog.addColorStop(0.35, 'rgba(5, 5, 5, 0.85)')
      horizonFog.addColorStop(0.7, 'rgba(5, 5, 5, 0.35)')
      horizonFog.addColorStop(1, 'rgba(5, 5, 5, 0)')

      ctx.fillStyle = horizonFog
      ctx.fillRect(0, horizonY - 45, width, 120)

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
      {/* Background Topographic Texture Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url('/images/topographic_bg.jpg')`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Unified Canvas: Top Neon Glowing Liquid Water + Bottom 3D Scrolling Chessboard */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Subtle radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.3)_70%,rgba(5,5,5,0.8)_100%)] pointer-events-none" />
    </div>
  )
}
