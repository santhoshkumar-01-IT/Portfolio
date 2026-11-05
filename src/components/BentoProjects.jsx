import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiExternalLink, FiGithub, FiX } from 'react-icons/fi'

export default function BentoProjects() {
  const [modalOpen, setModalOpen] = useState(false)

  const projects = [
    {
      id: 'digitalhouse',
      title: 'DigitalHouse',
      tagline: 'Modern web agency website',
      description: 'High-performance digital agency web platform featuring sleek dark aesthetic, responsive bento grid sections, and fluid animations.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer'],
      image: '/images/project_digitalhouse.jpg',
      liveUrl: 'https://portfolio-sigma-five-nj4551y519.vercel.app',
      githubUrl: 'https://github.com/santhoshkumar-01-IT/portfolio',
    },
    {
      id: 'ml-recommender',
      title: 'ML-Career Recommender',
      tagline: 'Machine Learning Skill Gap Platform',
      description: 'End-to-end Machine Learning web application evaluating 15 technical skills, 5 soft skills, and 9 domain interests to predict top IT career paths (99.69% accuracy) and generate personalized 4-phase learning roadmaps.',
      technologies: ['Python', 'Streamlit', 'Random Forest'],
      image: '/images/project_iot.jpg',
      liveUrl: 'https://ml-career-recommender.streamlit.app',
      githubUrl: 'https://github.com/santhoshkumar-01-IT/ML-Career-Recommender',
    },
    {
      id: 'sales-prediction',
      title: 'Smart Sales Prediction',
      tagline: 'Enterprise Demand Forecasting',
      description: 'Enterprise ML demand forecasting platform with NoSQL MongoDB architecture, 29-dimensional automated feature engineering, XGBoost benchmarking (R²=0.9653), and dynamic safety stock inventory radar.',
      technologies: ['XGBoost', 'MongoDB', 'Streamlit'],
      image: '/images/project_portfolio.jpg',
      liveUrl: 'https://smart-sales-predictiongit.streamlit.app/',
      githubUrl: 'https://github.com/divyamahalingam-dev/Smart-Sales-Prediction',
    },
  ]

  return (
    <>
      <div id="projects" className="bento-card p-6 sm:p-7 flex flex-col justify-between h-full">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-bold text-lg">/</span>
              <h2 className="text-white font-bold text-base sm:text-lg tracking-tight">My Projects</h2>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-semibold text-zinc-400 hover:text-orange-400 flex items-center gap-1 transition-colors"
            >
              <span>View All</span>
              <FiArrowRight size={13} />
            </button>
          </div>

          {/* 3 Project Cards Grid */}
          <div className="grid sm:grid-cols-3 gap-3.5">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="group/card rounded-xl p-3 bg-zinc-900/60 border border-white/[0.08] hover:border-orange-500/40 hover:bg-zinc-850 hover:shadow-[0_0_20px_rgba(255,107,0,0.18)] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative rounded-lg overflow-hidden mb-3 aspect-[16/10] bg-black/50 border border-white/5">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-white font-bold text-xs sm:text-sm group-hover/card:text-orange-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1 font-normal">
                    {proj.tagline}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {proj.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/60 border border-white/10 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Action Button */}
                <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-zinc-400 hover:text-white flex items-center gap-1 font-mono"
                  >
                    <FiGithub size={11} /> Code
                  </a>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md bg-zinc-800 text-zinc-300 hover:text-white hover:bg-orange-500 hover:shadow-[0_0_10px_rgba(255,107,0,0.6)] transition-all"
                    title="Launch Live App"
                  >
                    <FiExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Expanded Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bento-card max-w-2xl w-full p-6 sm:p-8 bg-[#0c0c11] border-orange-500/30 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-5 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-orange-500 font-bold text-lg">/</span>
                  <h3 className="text-lg font-bold text-white">All Featured Software Projects</h3>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.08] flex flex-col sm:flex-row gap-4 items-start">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full sm:w-36 aspect-[16/10] object-cover rounded-lg border border-white/10 flex-shrink-0"
                    />
                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <h4 className="text-white font-bold text-sm">{proj.title}</h4>
                        <div className="flex items-center gap-2">
                          <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded bg-zinc-800 text-zinc-300 hover:text-white">
                            <FiGithub size={13} />
                          </a>
                          <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded bg-orange-500 text-white shadow-[0_0_10px_rgba(255,107,0,0.5)]">
                            <FiExternalLink size={13} />
                          </a>
                        </div>
                      </div>
                      <p className="text-xs text-orange-400 font-mono">{proj.tagline}</p>
                      <p className="text-xs text-zinc-300 leading-relaxed font-normal">{proj.description}</p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {proj.technologies.map((t) => (
                          <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-white/10 text-zinc-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
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
