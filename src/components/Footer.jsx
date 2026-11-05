import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="mt-16 pt-8 pb-12 border-t border-white/[0.08] relative z-10 text-xs font-mono text-zinc-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <p className="text-zinc-400 text-center sm:text-left">
          © 2026 <span className="text-zinc-200 font-semibold">Santhosh Kumar S</span>. All rights reserved.
        </p>

        {/* Center: Inspirational prompt */}
        <p className="text-orange-400/90 text-center hidden md:block font-medium">
          Let's build something amazing together.
        </p>

        {/* Right: Made with orange heart & Top Button */}
        <div className="flex items-center gap-4">
          <p className="text-zinc-400">
            Made with <span className="text-orange-500 animate-pulse inline-block">🧡</span> for the web
          </p>

          <button
            onClick={scrollToTop}
            className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-orange-500/50 hover:shadow-[0_0_10px_rgba(255,107,0,0.5)] transition-all cursor-pointer"
            title="Scroll to Top"
            aria-label="Back to Top"
          >
            <FiArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  )
}
