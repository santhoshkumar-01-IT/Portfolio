import { useEffect, useRef } from 'react'

export default function GlowingTopographicBackground() {
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

    // Generate mist clouds
    const mists = Array.from({ length: 6 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 220 + 160,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.04 + 0.025,
    }))

    // Generate glistening luminous embers on curves
    const embers = Array.from({ length: 35 }, () => ({
      curveIndex: Math.floor(Math.random() * 5),
      t: Math.random(),
      speed: Math.random() * 0.0015 + 0.0008,
      size: Math.random() * 2 + 1.2,
      pulseSpeed: Math.random() * 0.04 + 0.02,
      pulsePhase: Math.random() * Math.PI * 2,
    }))

    // Base control points for organic topographic rivers
    const createCurvedPaths = (w, h, t, scrollProgress) => {
      const scrollOffset = scrollProgress * 0.0003
      return [
        // Main primary river 1 (sweeping from top-left across center to bottom-right)
        [
          { x: w * 0.08, y: -50 },
          { x: w * 0.22 + Math.sin(t * 0.4 + scrollOffset) * 45, y: h * 0.22 },
          { x: w * 0.15 + Math.cos(t * 0.3) * 35, y: h * 0.42 },
          { x: w * 0.48 + Math.sin(t * 0.5) * 55, y: h * 0.56 },
          { x: w * 0.78 + Math.cos(t * 0.4) * 40, y: h * 0.74 },
          { x: w * 0.62 + Math.sin(t * 0.35) * 45, y: h * 0.88 },
          { x: w * 0.88, y: h + 50 },
        ],
        // River 2 (top center-right weaving downward)
        [
          { x: w * 0.65, y: -50 },
          { x: w * 0.52 + Math.cos(t * 0.35) * 40, y: h * 0.18 },
          { x: w * 0.74 + Math.sin(t * 0.45) * 50, y: h * 0.36 },
          { x: w * 0.42 + Math.cos(t * 0.5) * 45, y: h * 0.62 },
          { x: w * 0.28 + Math.sin(t * 0.3) * 35, y: h * 0.82 },
          { x: w * 0.18, y: h + 50 },
        ],
        // Branch 3 (left edge contour)
        [
          { x: -30, y: h * 0.25 },
          { x: w * 0.12 + Math.sin(t * 0.4) * 30, y: h * 0.35 },
          { x: w * 0.06 + Math.cos(t * 0.3) * 25, y: h * 0.58 },
          { x: w * 0.16 + Math.sin(t * 0.45) * 35, y: h * 0.78 },
          { x: w * 0.05, y: h + 40 },
        ],
        // Branch 4 (right edge contour)
        [
          { x: w * 0.88, y: -40 },
          { x: w * 0.82 + Math.sin(t * 0.35) * 35, y: h * 0.28 },
          { x: w * 0.94 + Math.cos(t * 0.4) * 30, y: h * 0.52 },
          { x: w * 0.85 + Math.sin(t * 0.3) * 40, y: h * 0.80 },
          { x: w + 40, y: h * 0.95 },
        ],
      ]
    }

    // Helper: evaluate smooth Catmull-Rom or cubic spline along path
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

      // Catmull-Rom interpolation
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
      // Smooth scroll interpolation
      currentScrollRef.current += (scrollYRef.current - currentScrollRef.current) * 0.08
      const scrollSpeedBoost = Math.abs(scrollYRef.current - currentScrollRef.current) * 0.002
      time += 0.008 + scrollSpeedBoost

      ctx.clearRect(0, 0, width, height)

      // 1. Draw Ethereal White Mist Lights
      mists.forEach((m) => {
        m.x += m.vx
        m.y += m.vy
        if (m.x < -100) m.x = width + 100
        if (m.x > width + 100) m.x = -100
        if (m.y < -100) m.y = height + 100
        if (m.y > height + 100) m.y = -100

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

      // 2. Draw Echo Topographic Contour Lines (Subtle background ridges)
      paths.forEach((mainPath, pIdx) => {
        const offsets = [-48, -28, -12, 12, 28, 48, 72]
        offsets.forEach((offsetDist, oIdx) => {
          const shiftedPath = mainPath.map((pt, i) => {
            const angle = Math.sin(time * 0.5 + i + pIdx) * 0.3
            return {
              x: pt.x + offsetDist * Math.cos(angle) + Math.sin(time + i) * 6,
              y: pt.y + offsetDist * Math.sin(angle) + Math.cos(time + i) * 6,
            }
          })

          ctx.save()
          drawSmoothPath(shiftedPath)
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.035 + (oIdx % 2 === 0 ? 0.025 : 0.015)})`
          ctx.lineWidth = 0.8
          ctx.stroke()
          ctx.restore()
        })
      })

      // 3. Draw Liquid Neon Glowing Water Streams (Primary Rivers)
      paths.forEach((mainPath, idx) => {
        ctx.save()

        // Outer soft glow bloom
        drawSmoothPath(mainPath)
        ctx.shadowColor = 'rgba(255, 255, 255, 0.9)'
        ctx.shadowBlur = idx === 0 ? 28 : 18
        ctx.strokeStyle = idx === 0 ? 'rgba(255, 255, 255, 0.45)' : 'rgba(255, 255, 255, 0.3)'
        ctx.lineWidth = idx === 0 ? 7 : 4
        ctx.stroke()

        // Intense core stream (White liquid river)
        drawSmoothPath(mainPath)
        ctx.shadowBlur = 10
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = idx === 0 ? 2.5 : 1.6
        ctx.stroke()

        // Running liquid water pulse effect along the river
        ctx.setLineDash([25, 45, 15, 60])
        ctx.lineDashOffset = -(time * (idx === 0 ? 65 : 45) + currentScrollRef.current * 0.4)
        drawSmoothPath(mainPath)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)'
        ctx.lineWidth = idx === 0 ? 4.5 : 2.8
        ctx.shadowBlur = 16
        ctx.stroke()

        ctx.restore()
      })

      // 4. Draw Glistening White Embers / Glow Lights along Rivers
      embers.forEach((ember) => {
        ember.t = (ember.t + ember.speed + scrollSpeedBoost * 0.1) % 1
        const targetPath = paths[ember.curveIndex % paths.length]
        const pos = getPointOnPath(targetPath, ember.t)

        const pulse = Math.sin(time * 3 + ember.pulsePhase) * 0.35 + 0.65
        const size = ember.size * pulse

        ctx.save()
        // Outer halo
        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, size * 5)
        grad.addColorStop(0, `rgba(255, 255, 255, ${0.9 * pulse})`)
        grad.addColorStop(0.35, `rgba(255, 255, 255, ${0.35 * pulse})`)
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, size * 5, 0, Math.PI * 2)
        ctx.fill()

        // Spark center
        ctx.fillStyle = '#ffffff'
        ctx.shadowColor = '#ffffff'
        ctx.shadowBlur = 12
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      })

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
      {/* Dynamic Topographic Neon Glowing Liquid Water Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Subtle vignette for high text contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.4)_65%,rgba(5,5,5,0.85)_100%)] pointer-events-none" />
    </div>
  )
}
