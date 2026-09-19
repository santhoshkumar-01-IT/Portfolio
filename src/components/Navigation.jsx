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
          ? 'bg-tech-bg/90 backdrop-blur-md border-b border-tech-border/80 shadow-lg shadow-black/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo / Terminal Tag */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            className="group flex items-center gap-2 font-mono text-lg font-bold text-white tracking-tight"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-tech-card border border-tech-crimson/30 text-tech-crimson group-hover:border-tech-crimson group-hover:shadow-[0_0_15px_rgba(255,42,95,0.45)] transition-all">
              <FiTerminal className="w-4 h-4" />
            </div>
            <span>
              <span className="text-tech-crimson">&lt;</span>
              <span className="text-slate-100 group-hover:text-tech-crimson transition-colors">santhosh</span>
              <span className="text-tech-ruby">.dev</span>
              <span className="text-tech-crimson"> /&gt;</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group px-3 py-1.5 rounded-md text-xs font-mono text-slate-300 hover:text-tech-crimson hover:bg-tech-card/70 transition-all duration-200"
              >
                <span className="text-tech-crimson/60 group-hover:text-tech-crimson mr-1 font-semibold">{item.num}.</span>
                <span className="font-sans text-sm">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Status & CTA Badge */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-tech-card/80 border border-tech-emerald/30 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-tech-emerald animate-ping" />
              <span className="text-tech-emerald font-semibold">● Ready to Code</span>
            </div>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-1.5 rounded-lg font-mono text-xs font-semibold bg-tech-crimson/10 border border-tech-crimson/40 text-tech-crimson hover:bg-tech-crimson hover:text-white transition-all duration-200 shadow-sm shadow-tech-crimson/20"
            >
              Get In Touch
            </motion.a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-tech-card border border-tech-border text-slate-300 hover:text-tech-crimson focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
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
              className="md:hidden border-t border-tech-border/80 bg-tech-card/95 backdrop-blur-xl px-4 py-4 rounded-b-2xl shadow-xl space-y-2 font-mono text-sm"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:text-tech-crimson hover:bg-tech-surface transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-tech-crimson font-bold">{item.num}.</span>
                  <span className="font-sans font-medium">{item.name}</span>
                </a>
              ))}
              <div className="pt-2 border-t border-tech-border flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-tech-emerald font-mono">
                  <span className="w-2 h-2 rounded-full bg-tech-emerald inline-block" /> Available for Roles
                </span>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1.5 rounded bg-tech-crimson text-white text-xs font-mono font-bold"
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
