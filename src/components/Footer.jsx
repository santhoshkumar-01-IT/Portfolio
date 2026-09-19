import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <FaGithub size={18} />, url: 'https://github.com/santhoshkumar-01-IT', label: 'GitHub' },
    { icon: <FaLinkedin size={18} />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <SiLeetcode size={18} />, url: 'https://leetcode.com', label: 'LeetCode' },
    { icon: <FaTwitter size={18} />, url: 'https://twitter.com', label: 'Twitter' },
  ]

  return (
    <footer className="bg-tech-bg border-t border-tech-border/80 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left: Branding & Status */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-base font-bold text-white">
              <span className="text-tech-crimson">&lt;</span>
              <span>santhosh</span>
              <span className="text-tech-rose">.dev</span>
              <span className="text-tech-crimson"> /&gt;</span>
            </div>
            <p className="text-slate-400 text-xs font-mono">
              Software Engineer • Architecting Scalable & Performant Web Applications
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-tech-card border border-tech-border hover:border-tech-crimson/50 flex items-center justify-center text-slate-300 hover:text-tech-crimson transition-all"
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Right: Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-tech-card border border-tech-border hover:border-tech-crimson/50 text-slate-300 hover:text-tech-crimson text-xs font-mono transition-all"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <FiArrowUp />
          </motion.button>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-6 border-t border-tech-border/40 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-xs font-mono gap-3">
          <p>© 2026 Santhosh Kumar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-tech-emerald inline-block" />
            <span>Built with React 19, Tailwind CSS & Vite</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
