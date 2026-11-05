import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiBriefcase, FiX } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'

export default function BentoExperience() {
  const [modalOpen, setModalOpen] = useState(false)

  const experiences = [
    {
      title: 'AI/ML Intern',
      organization: 'Data Science & Machine Learning',
      period: '2025 - Present',
      description: 'Developing predictive machine learning models, regression analytics, and interactive dashboard tools with Streamlit, Scikit-learn, and MongoDB.',
      icon: <FiBriefcase className="w-3.5 h-3.5 text-orange-400" />,
    },
    {
      title: 'BSc Information Technology',
      organization: 'Tamil Nadu, India',
      period: '2023 - 2026',
      description: 'Focused on Data Structures, Algorithms, Software Engineering, Database Systems, Web Architectures, and Object-Oriented Programming.',
      icon: <FaGraduationCap className="w-3.5 h-3.5 text-orange-400" />,
    },
  ]

  return (
    <>
      <div id="experience" className="bento-card p-6 sm:p-7 flex flex-col justify-between h-full">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-bold text-lg">/</span>
              <h2 className="text-white font-bold text-base sm:text-lg tracking-tight">Experience</h2>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-semibold text-zinc-400 hover:text-orange-400 flex items-center gap-1 transition-colors"
            >
              <span>View All</span>
              <FiArrowRight size={13} />
            </button>
          </div>

          {/* Timeline */}
          <div className="relative pl-6 space-y-6">
            {/* Vertical connecting line */}
            <div className="absolute left-[7px] top-2 bottom-3 w-[2px] bg-gradient-to-b from-orange-500 via-orange-500/50 to-zinc-800" />

            {experiences.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Glowing Orange Node marker */}
                <div className="absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-orange-500 border-2 border-[#09090d] shadow-[0_0_10px_rgba(255,107,0,0.8)] group-hover:scale-125 transition-transform" />

                <div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm group-hover:text-orange-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs mt-0.5 font-normal">
                    {item.organization}
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-mono text-orange-400/90 font-medium">
                    {item.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 mt-4 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400">
          Actively building production software & ML systems
        </div>
      </div>

      {/* Experience Details Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bento-card max-w-lg w-full p-6 sm:p-8 bg-[#0c0c11] border-orange-500/30"
            >
              <div className="flex items-center justify-between mb-5 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-orange-500 font-bold text-lg">/</span>
                  <h3 className="text-lg font-bold text-white">Career & Education Roadmap</h3>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="space-y-5">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.08] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-orange-400 font-semibold">{exp.period}</span>
                      <div className="p-1 rounded bg-zinc-800">{exp.icon}</div>
                    </div>
                    <h4 className="text-white font-bold text-sm">{exp.title}</h4>
                    <p className="text-zinc-400 text-xs font-medium">{exp.organization}</p>
                    <p className="text-zinc-300 text-xs leading-relaxed pt-1">{exp.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setModalOpen(false)}
                  className="btn-orange-glow px-5 py-2 text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
