import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiGitBranch, FiFolder, FiStar } from 'react-icons/fi'
import { projectsData } from '../utils/projectsData'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
            // 03. Engineering Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Software Projects
            </span>
          </h2>
          <div className="w-10 h-0.5 bg-zinc-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="group tech-glass-card rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Project Card Header */}
                <div className="p-5 border-b border-white/[0.06] bg-zinc-950/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FiFolder className="text-zinc-300 w-4 h-4" />
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <FiGitBranch className="text-zinc-500" />
                      {project.branch || 'main'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs font-mono text-zinc-300">
                      <FiStar className="w-3.5 h-3.5 text-zinc-400" />
                      {project.stars || '12'}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <FiGithub className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Card Body */}
                <div className="p-6 space-y-3">
                  <div className="text-xl mb-1">{project.icon || '🚀'}</div>
                  <h3 className="text-base font-semibold text-white group-hover:text-zinc-200 font-mono transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    {project.tagline}
                  </p>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.08] text-zinc-300 group-hover:border-white/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Card Footer CTA */}
              <div className="p-6 pt-0 mt-4 flex gap-2.5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-white text-black text-xs font-mono font-medium hover:bg-zinc-200 transition-all"
                >
                  <FiExternalLink size={13} /> Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-3 py-2 rounded-md bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 transition-all"
                  title="Source Code"
                >
                  <FiGithub size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
