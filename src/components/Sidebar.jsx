import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiHome, 
  FiUser, 
  FiCpu, 
  FiFolder, 
  FiBriefcase, 
  FiMail, 
  FiSun, 
  FiMoon,
  FiMenu,
  FiX
} from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'

export default function Sidebar({ activeSection = 'home', onSelectSection, onOpenContactModal }) {
  const [active, setActive] = useState(activeSection)
  const [isDark, setIsDark] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setActive(activeSection)
  }, [activeSection])

  const navItems = [
    { id: 'home', label: 'Home', icon: <FiHome className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <FiUser className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <FiCpu className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FiFolder className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <FiBriefcase className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <FiMail className="w-4 h-4" /> },
  ]

  const socialLinks = [
    { icon: <FaGithub size={15} />, url: 'https://github.com/santhoshkumar-01-IT', label: 'GitHub' },
    { icon: <FaLinkedin size={15} />, url: 'https://www.linkedin.com/in/santhoshkumar2007', label: 'LinkedIn' },
    { icon: <FaYoutube size={15} />, url: 'https://youtube.com', label: 'YouTube' },
    { icon: <FaTwitter size={15} />, url: 'https://twitter.com', label: 'Twitter' },
  ]

  const handleNavClick = (id) => {
    setActive(id)
    setMobileOpen(false)
    if (onSelectSection) {
      onSelectSection(id)
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Mobile Top Bar with Hamburger */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#09090d]/90 backdrop-blur-md border-b border-white/[0.08] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-extrabold text-base shadow-[0_0_15px_rgba(255,107,0,0.5)]">
            S
          </div>
          <div>
            <h1 className="text-white font-bold text-sm tracking-tight leading-none">Sxnth</h1>
            <p className="text-[10px] text-orange-400 font-medium">Developer</p>
          </div>
        </div>

        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-xl pt-20 px-6 pb-8 flex flex-col justify-between"
          >
            <div className="space-y-2">
              {navItems.map((item) => {
                const isActive = active === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_20px_rgba(255,107,0,0.5)]'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/[0.08]">
              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-orange-500/50"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <p className="font-handwriting text-center text-xl text-orange-400">
                Dream Build Innovate
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Fixed Left Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-44 xl:w-48 z-40 bg-[#09090d]/85 backdrop-blur-2xl border-r border-white/[0.07] flex-col justify-between p-5 select-none">
        
        {/* Top: Logo & Title */}
        <div>
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-extrabold text-lg shadow-[0_0_20px_rgba(255,107,0,0.6)] group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,107,0,0.8)] transition-all">
                S
              </div>
              <div className="absolute -inset-1 rounded-xl bg-orange-500/20 blur-sm -z-10 group-hover:bg-orange-500/40 transition-all" />
            </div>

            <div className="leading-tight">
              <h1 className="text-white font-bold text-base tracking-tight group-hover:text-orange-100 transition-colors">
                Sxnth
              </h1>
              <p className="text-[11px] text-zinc-400 font-medium tracking-wide">
                Developer
              </p>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="mt-8 space-y-1.5">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-xs tracking-wide transition-all relative ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] text-white font-semibold shadow-[0_0_22px_rgba(255,107,0,0.55)]'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-zinc-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activePillGlow"
                      className="absolute inset-0 rounded-xl -z-10 bg-orange-500/20 blur-sm"
                    />
                  )}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Bottom Area: Socials, Theme Toggle & Signature Quote */}
        <div className="space-y-5 pt-4 border-t border-white/[0.08]">
          {/* Social Icons Row */}
          <div className="flex items-center justify-between px-1">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-7 h-7 rounded-lg bg-zinc-900/80 border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:border-orange-500/50 hover:shadow-[0_0_12px_rgba(255,107,0,0.3)] transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Dark / Light Pill Switch */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsDark(!isDark)}
              className="relative flex items-center justify-between w-14 h-7 p-1 rounded-full bg-zinc-900 border border-white/10 cursor-pointer"
              aria-label="Toggle theme"
            >
              <FiSun className="w-3 h-3 text-zinc-400 ml-1" />
              <FiMoon className="w-3 h-3 text-zinc-400 mr-1" />
              <motion.div
                animate={{ x: isDark ? 26 : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 left-0 w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-[0_0_10px_rgba(255,107,0,0.6)]"
              />
            </button>
          </div>

          {/* Cursive Handwriting Signature */}
          <div className="pt-2 text-center">
            <p className="font-handwriting text-2xl text-orange-400 tracking-wide rotate-[-3deg] select-none leading-none drop-shadow-[0_0_8px_rgba(255,107,0,0.3)]">
              Dream<br />
              <span className="text-orange-300">Build</span><br />
              Innovate
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent mx-auto mt-2 rounded-full" />
          </div>
        </div>
      </aside>
    </>
  )
}
