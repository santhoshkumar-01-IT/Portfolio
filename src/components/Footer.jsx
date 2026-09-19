import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <FaGithub size={16} />, url: 'https://github.com/santhoshkumar-01-IT', label: 'GitHub' },
    { icon: <FaLinkedin size={16} />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <SiLeetcode size={16} />, url: 'https://leetcode.com', label: 'LeetCode' },
    { icon: <FaTwitter size={16} />, url: 'https://twitter.com', label: 'Twitter' },
  ]

  return (
    <footer className="bg-tech-bg border-t border-white/[0.08] relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left: Branding & Status */}
          <div className="text-center md:text-left space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-sm font-semibold text-white">
              <span className="text-zinc-500">&lt;</span>
              <span>santhosh</span>
              <span className="text-zinc-400">.dev</span>
              <span className="text-zinc-500"> /&gt;</span>
            </div>
            <p className="text-zinc-400 text-xs font-mono">
              Software Engineer • Architecting Scalable & Performant Web Applications
            </p>
          </div>

          {/* Center: Social Links with White Neon Glow */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon-white w-9 h-9 rounded-md bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white"
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Right: Scroll to top with White Neon Glow */}
          <button
            onClick={scrollToTop}
            className="btn-neon-white flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white text-xs font-mono"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <FiArrowUp size={13} />
          </button>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-zinc-400 text-xs font-mono gap-3">
          <p>© 2026 Santhosh Kumar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            <span>Built with React 19, Tailwind CSS & Vite</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
