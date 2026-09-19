import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiServer, FiDatabase, FiCloud } from 'react-icons/fi'

const skillCategories = [
  {
    category: 'Frontend Engineering',
    icon: <FiCode className="text-zinc-200" />,
    description: 'Interactive, responsive & performant client interfaces',
    skills: [
      { name: 'React.js / Next.js', level: 90 },
      { name: 'JavaScript (ES6+) / TypeScript', level: 88 },
      { name: 'Tailwind CSS / UI Libraries', level: 92 },
      { name: 'State Management (Redux / Context)', level: 85 },
      { name: 'HTML5 & Modern CSS3', level: 95 },
    ],
  },
  {
    category: 'Backend & Systems',
    icon: <FiServer className="text-zinc-300" />,
    description: 'RESTful microservices, business logic & auth',
    skills: [
      { name: 'Node.js & Express.js', level: 88 },
      { name: 'REST API Design & Security', level: 90 },
      { name: 'JWT & OAuth Authentication', level: 85 },
      { name: 'Python / Scripting', level: 80 },
      { name: 'Server-Side Architecture', level: 82 },
    ],
  },
  {
    category: 'Databases & Storage',
    icon: <FiDatabase className="text-zinc-300" />,
    description: 'Data modeling, optimization & transactions',
    skills: [
      { name: 'MongoDB / Mongoose', level: 88 },
      { name: 'PostgreSQL / SQL', level: 82 },
      { name: 'Redis / In-Memory Caching', level: 75 },
      { name: 'Schema Design & Indexing', level: 80 },
    ],
  },
  {
    category: 'DevOps & Tooling',
    icon: <FiCloud className="text-zinc-400" />,
    description: 'Version control, deployment & environments',
    skills: [
      { name: 'Git & GitHub Workflow', level: 92 },
      { name: 'Docker & Containerization', level: 75 },
      { name: 'Vercel / AWS Cloud Services', level: 80 },
      { name: 'Linux / Bash Scripting', level: 82 },
    ],
  },
]

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
            // 02. Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills &{' '}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Proficiencies
            </span>
          </h2>
          <div className="w-10 h-0.5 bg-zinc-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="tech-glass-card rounded-xl p-6 sm:p-7 relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/10">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold font-mono text-white">
                    {category.category}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4 mt-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5 text-xs font-mono">
                      <span className="text-zinc-300 font-medium">{skill.name}</span>
                      <span className="text-zinc-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.25 + idx * 0.1, duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-white via-zinc-300 to-zinc-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
