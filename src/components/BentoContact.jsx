import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function BentoContact({ onOpenContactModal }) {
  return (
    <div id="contact" className="bento-card p-6 sm:p-7 flex flex-col justify-between h-full relative overflow-hidden group">
      {/* Background paper airplane artwork */}
      <div className="absolute -bottom-4 right-2 sm:right-6 w-32 sm:w-40 pointer-events-none opacity-85 group-hover:scale-105 transition-transform duration-500">
        <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Dotted Trail */}
          <path
            d="M10 95 C 40 105, 70 70, 95 85 C 115 95, 125 70, 140 45"
            stroke="#ff6b00"
            strokeWidth="1.75"
            strokeDasharray="4 4"
            strokeLinecap="round"
            opacity="0.8"
          />
          {/* Paper Airplane Body */}
          <g transform="translate(115, 20) rotate(15)">
            <polygon
              points="0,35 45,0 12,22"
              fill="#ff6b00"
              filter="drop-shadow(0 0 12px rgba(255,107,0,0.8))"
            />
            <polygon
              points="12,22 45,0 26,38"
              fill="#ff8800"
            />
            <polygon
              points="12,22 26,38 18,30"
              fill="#d04800"
            />
          </g>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-orange-500 font-bold text-lg">/</span>
          <h2 className="text-white font-bold text-base sm:text-lg tracking-tight">Get In Touch</h2>
        </div>

        <p className="text-zinc-300 text-xs sm:text-sm font-normal mb-5">
          Have a project in mind? Let's discuss!
        </p>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={onOpenContactModal}
            className="btn-orange-glow px-4 py-2 text-xs font-semibold flex items-center gap-2"
          >
            <FiMail className="w-3.5 h-3.5" />
            <span>Email Me</span>
          </button>

          <a
            href="https://www.linkedin.com/in/santhoshkumar2007"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass-pill px-3.5 py-2 text-xs font-medium flex items-center gap-1.5"
          >
            <FaLinkedin className="w-3.5 h-3.5 text-zinc-300" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/santhoshkumar-01-IT"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass-pill px-3.5 py-2 text-xs font-medium flex items-center gap-1.5"
          >
            <FaGithub className="w-3.5 h-3.5 text-zinc-300" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="pt-4 mt-6 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400 relative z-10 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>Available for internships & full-stack software roles</span>
      </div>
    </div>
  )
}
