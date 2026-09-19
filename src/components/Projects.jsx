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
          <span className="text-xs font-mono text-tech-crimson tracking-widest uppercase">
            // 03. Engineering Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-tech-crimson via-tech-rose to-tech-scarlet bg-clip-text text-transparent">
              Software Projects
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-tech-crimson to-tech-rose mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group tech-glass-card rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Project Card Header */}
                <div className="p-6 border-b border-tech-border/60 bg-tech-surface/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FiFolder className="text-tech-crimson w-5 h-5" />
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <FiGitBranch className="text-tech-rose" />
                      {project.branch || 'main'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs font-mono text-amber-400">
                      <FiStar className="w-3.5 h-3.5" />
                      {project.stars || '12'}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-tech-crimson transition-colors"
                      title="View GitHub Repository"
                    >
                      <FiGithub className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Card Body */}
                <div className="p-6 space-y-3">
                  <div className="text-2xl mb-1">{project.icon || '🚀'}</div>
                  <h3 className="text-lg font-bold text-white group-hover:text-tech-crimson font-mono transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-tech-crimson/80 font-mono">
                    {project.tagline}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-tech-surface border border-tech-border text-slate-300 group-hover:border-tech-crimson/30 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Card Footer CTA */}
              <div className="p-6 pt-0 mt-4 flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-tech-crimson/10 border border-tech-crimson/30 text-tech-crimson text-xs font-mono font-medium hover:bg-tech-crimson hover:text-white transition-all"
                >
                  <FiExternalLink size={14} /> Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-3 py-2 rounded-lg bg-tech-card border border-tech-border text-slate-300 hover:text-white hover:border-tech-crimson/40 transition-all"
                  title="Source Code"
                >
                  <FiGithub size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
