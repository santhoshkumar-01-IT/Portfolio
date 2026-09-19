import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCpu, FiLayers, FiTerminal, FiServer, FiGitBranch, FiCheckSquare } from 'react-icons/fi'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const highlights = [
    {
      icon: <FiLayers className="text-zinc-200 w-5 h-5" />,
      title: 'Scalable Architecture',
      desc: 'Building modular, testable, and maintainable software systems designed for high availability and growth.',
    },
    {
      icon: <FiServer className="text-zinc-300 w-5 h-5" />,
      title: 'Full Stack Engineering',
      desc: 'Seamless integration between responsive client-side SPAs and resilient REST/GraphQL backend microservices.',
    },
    {
      icon: <FiCpu className="text-zinc-400 w-5 h-5" />,
      title: 'Performance & Optimization',
      desc: 'Focused on sub-second render times, database query tuning, clean algorithmic complexity, and caching.',
    },
    {
      icon: <FiGitBranch className="text-emerald-400 w-5 h-5" />,
      title: 'Modern DevOps & CI/CD',
      desc: 'Adopting automated containerized workflows, git hygiene, and continuous deployment best practices.',
    },
  ]

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
            // 01. Engineering Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About{' '}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              The Developer
            </span>
          </h2>
          <div className="w-10 h-0.5 bg-zinc-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Engineering philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="tech-glass-card rounded-xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                <FiTerminal />
                <span>~/system/overview.md</span>
              </div>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
                I am a passionate <strong className="text-white font-semibold">Software Engineer</strong> specializing in designing, developing, and deploying high-impact full-stack web applications.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
                With a deep interest in software design patterns and distributed systems, I enjoy breaking down complex real-world requirements into clean, scalable code. Whether crafting interactive UIs or optimizing backend data pipelines, I bring engineering rigor to every commit.
              </p>
              
              {/* Quick Tech Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.08] text-xs sm:text-sm font-mono text-zinc-300">
                <div className="flex items-center gap-2">
                  <FiCheckSquare className="text-zinc-200 flex-shrink-0" />
                  <span>TypeScript & Modern JavaScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckSquare className="text-zinc-200 flex-shrink-0" />
                  <span>React & Next.js Ecosystem</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckSquare className="text-zinc-200 flex-shrink-0" />
                  <span>Node.js & Express REST APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckSquare className="text-zinc-200 flex-shrink-0" />
                  <span>SQL, NoSQL & Schema Design</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Engineering Pillars Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="tech-glass-card rounded-xl p-5 hover:border-white/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/10 group-hover:border-white/20 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-100 font-mono group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-normal font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
