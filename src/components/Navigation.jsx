import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiTerminal } from 'react-icons/fi'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { num: '01', name: 'About', href: '#about' },
    { num: '02', name: 'Skills', href: '#skills' },
    { num: '03', name: 'Projects', href: '#projects' },
    { num: '04', name: 'Articles', href: '#articles' },
    { num: '05', name: 'Profiles', href: '#profiles' },
    { num: '06', name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-tech-bg/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Minimalist Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            className="group flex items-center gap-2.5 font-mono text-base font-semibold text-white tracking-tight"
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-md bg-zinc-900 border border-white/10 text-white group-hover:border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all">
              <FiTerminal className="w-3.5 h-3.5" />
            </div>
            <span className="tracking-tight">
              <span className="text-zinc-500">&lt;</span>
              <span className="text-white font-medium group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all">santhosh</span>
              <span className="text-zinc-400">.dev</span>
              <span className="text-zinc-500"> /&gt;</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group px-3 py-1.5 rounded-md text-xs font-mono text-zinc-400 hover:text-white hover:bg-zinc-900/80 hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-200"
              >
                <span className="text-zinc-500 group-hover:text-zinc-300 mr-1.5 font-normal">{item.num}.</span>
                <span className="font-sans text-sm font-medium">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Status & CTA Badge with White Neon Glow */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-[11px] font-mono text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-zinc-300">Available for hire</span>
            </div>
            
            <a
              href="#contact"
              className="btn-neon-solid px-4 py-1.5 rounded-md font-mono text-xs font-semibold"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn-neon-white p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-white/10 bg-zinc-950/95 backdrop-blur-xl px-4 py-4 rounded-b-xl shadow-2xl space-y-2 font-mono text-sm"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-zinc-500 font-bold">{item.num}.</span>
                  <span className="font-sans font-medium">{item.name}</span>
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> Available
                </span>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-neon-solid px-3.5 py-1.5 rounded text-xs font-mono font-semibold"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
