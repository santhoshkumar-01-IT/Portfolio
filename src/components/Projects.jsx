import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce platform with payment integration',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '🛍️',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    image: '✅',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'Content management system for bloggers',
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    image: '📝',
    liveUrl: '#',
    githubUrl: '#',
  },
]

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-dark-card/50 border border-dark-border rounded-xl overflow-hidden backdrop-blur hover:border-accent-blue/50 transition-all"
            >
              {/* Image */}
              <div className="h-40 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-dark-border text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30 transition-colors"
                  >
                    <FiExternalLink size={16} /> Live
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded bg-accent-purple/20 text-accent-purple hover:bg-accent-purple/30 transition-colors"
                  >
                    <FiGithub size={16} /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
