import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiCheckCircle, FiX } from 'react-icons/fi'

export default function BentoAbout() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="bento-card p-6 sm:p-7 flex flex-col justify-between h-full group">
        <div>
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-500 font-bold text-lg">/</span>
            <h2 className="text-white font-bold text-base sm:text-lg tracking-tight">About Me</h2>
          </div>

          {/* Description matching the mock */}
          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
            I'm a final-year BSc IT student, passionate about Web Development, AI and creating impactful solutions. I love learning new technologies and turning ideas into reality.
          </p>
        </div>

        {/* Bottom row: Know More button + Laptop 3D Render */}
        <div className="flex items-center justify-between gap-4 mt-auto">
          <button
            onClick={() => setModalOpen(true)}
            className="btn-glass-pill px-4 py-2 text-xs font-semibold flex items-center gap-2 group-hover:border-orange-500/50 hover:bg-orange-500/10 text-white transition-all flex-shrink-0"
          >
            <span>Know More</span>
            <FiArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Sleek laptop visual */}
          <div className="relative w-32 sm:w-44 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 group-hover:border-orange-500/30 transition-all shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
            <img
              src="/images/about_laptop_hd.jpg"
              alt="Developer Laptop Workspace"
              className="w-full aspect-[16/10] object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Expanded Know More Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bento-card max-w-lg w-full p-6 sm:p-8 bg-[#0c0c11] border-orange-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_40px_rgba(255,107,0,0.2)]"
            >
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-orange-500 font-bold text-lg">/</span>
                  <h3 className="text-lg font-bold text-white">Full Bio & Background</h3>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:border border-white/10"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                <p>
                  I am <strong className="text-white">Santhosh Kumar S</strong>, a dedicated Full-Stack Web Developer and BSc Information Technology student from Tamil Nadu, India.
                </p>
                <p>
                  My engineering journey focuses on the modern web stack (React, Next.js, Node.js, Express, MongoDB, Tailwind CSS) combined with Applied Machine Learning (Python, Scikit-learn, XGBoost, Streamlit).
                </p>
                <div className="pt-2 border-t border-white/10 space-y-2 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-orange-400" />
                    <span>Specialization: MERN Stack & Scalable Web Architectures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-orange-400" />
                    <span>AI/ML: Supervised Classification & Demand Forecasting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-orange-400" />
                    <span>Degree: BSc Information Technology (2023 - 2026)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setModalOpen(false)}
                  className="btn-orange-glow px-5 py-2 text-xs font-semibold"
                >
                  Close Bio
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
