import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiCode, FiMapPin } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'

export default function Hero({ onOpenContactModal }) {
  const roles = [
    'Full-Stack Developer',
    'MERN Stack Engineer',
    'AI/ML Explorer',
    'Software Engineer'
  ]
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Smooth typewriter effect for the role title
  useEffect(() => {
    const currentFull = roles[roleIndex]
    const speed = isDeleting ? 40 : 80

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFull.substring(0, displayText.length + 1))
        if (displayText.length + 1 === currentFull.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setDisplayText(currentFull.substring(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  const stats = [
    { icon: <FiCode className="text-orange-400 w-3.5 h-3.5" />, label: '2+ Projects', sub: 'Completed' },
    { icon: <FaGraduationCap className="text-orange-400 w-3.5 h-3.5" />, label: 'BSc IT', sub: 'Education' },
    { icon: <FiMapPin className="text-orange-400 w-3.5 h-3.5" />, label: 'Pollachi,', sub: 'India' },
  ]

  return (
    <section id="home" className="relative pt-6 pb-12 w-full">
      {/* Top Bar with Let's Talk Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={onOpenContactModal}
          className="btn-glass-pill px-4 py-1.5 text-xs font-semibold flex items-center gap-2 group hover:border-orange-500/60"
        >
          <span>Let's Talk</span>
          <FiArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Bio & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Greeting Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 shadow-sm">
            <span className="text-sm">👋</span>
            <span className="text-xs font-medium text-zinc-300">Hello, I'm</span>
          </div>

          {/* Large Name & Typing Role */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Santhosh{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-300">
                Kumar S
              </span>
            </h1>

            <div className="flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white min-h-[44px]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-amber-400">
                {displayText}
              </span>
              <span className="text-orange-500 font-normal animate-blink">|</span>
            </div>
          </div>

          {/* Summary */}
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            I build modern, scalable and innovative web applications with a passion for technology.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#projects"
              className="btn-orange-glow px-6 py-3 text-xs sm:text-sm font-semibold flex items-center gap-2"
            >
              <span>View My Projects</span>
              <FiArrowRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:santhoshkumaroffc@gmail.com?subject=Resume%20Request%20-%20Santhosh%20Kumar"
              className="btn-glass-pill px-5 py-3 text-xs sm:text-sm font-medium flex items-center gap-2"
            >
              <span>Download Resume</span>
              <FiDownload className="w-4 h-4 text-zinc-400" />
            </a>
          </div>

          {/* Quick Stats Badges Row */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-900/70 border border-white/[0.08] backdrop-blur-md text-xs font-mono"
              >
                <div className="p-1 rounded-md bg-zinc-800/80">
                  {s.icon}
                </div>
                <div>
                  <span className="text-white font-semibold">{s.label}</span>{' '}
                  <span className="text-zinc-400 text-[11px]">{s.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Cosmic Solar Eclipse Artwork with Silhouette & Handwriting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-md lg:max-w-none">
            {/* Ambient Behind Glow */}
            <div className="absolute -inset-4 bg-orange-500/20 rounded-3xl blur-2xl -z-10" />

            {/* Artwork Container */}
            <div className="relative rounded-2xl overflow-hidden border border-orange-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_35px_rgba(255,107,0,0.25)] group">
              <img
                src="/images/hero_eclipse_hd.jpg"
                alt="Santhosh Kumar - Cosmic Eclipse"
                className="w-full aspect-[16/10] sm:aspect-[16/11] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />

              {/* Gradient Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/80 via-transparent to-black/30 pointer-events-none" />

              {/* Hand-drawn Cursive Slogan Floating beside the figure */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none text-right">
                <p className="font-handwriting text-3xl sm:text-4xl text-white/95 leading-tight select-none rotate-[-6deg] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                  Code<br />
                  <span className="text-orange-400 drop-shadow-[0_0_12px_rgba(255,107,0,0.8)]">Create</span><br />
                  <span className="text-amber-200">Inspire</span>
                </p>
                <div className="w-16 h-0.5 bg-gradient-to-l from-orange-400 to-transparent ml-auto mt-1 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
