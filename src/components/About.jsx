import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCpu, FiLayers, FiTerminal, FiServer, FiGitBranch, FiCheckSquare, FiCamera, FiMapPin } from 'react-icons/fi'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

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

        {/* ─── Photo Showcase + Bio Grid ─── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left: Cinematic Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Main Portrait - Hero Shot */}
              <div className="photo-frame-neon photo-scanline rounded-2xl overflow-hidden relative group">
                <div className="corner-bracket" />
                <img
                  src="/images/santhosh_mono_portrait.jpg"
                  alt="Santhosh Kumar - Portrait"
                  className="w-full aspect-[3/4] object-cover object-top photo-mono"
                  loading="lazy"
                />
                {/* Hover reveal label */}
                <div className="photo-label">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <FiCamera className="w-3 h-3" />
                    <span>santhosh_kumar.mono</span>
                  </div>
                  <p className="text-sm text-white font-semibold mt-1">Software Web Developer & MERN Stack Developer</p>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-0.5">
                    <FiMapPin className="w-3 h-3" />
                    <span>Coimbatore, India</span>
                  </div>
                </div>
              </div>

              {/* Secondary Photo - Offset Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-4 sm:-right-8 w-32 sm:w-40 z-20"
              >
                <div className="photo-frame-neon rounded-xl overflow-hidden shadow-2xl shadow-black/60">
                  <div className="corner-bracket" />
                  <img
                    src="/images/santhosh_mono_standing.jpg"
                    alt="Santhosh Kumar - Standing"
                    className="w-full aspect-[3/4] object-cover object-top photo-mono"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Decorative floating metadata tag */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-3 -left-3 sm:-left-6 z-20"
              >
                <div className="px-3 py-1.5 rounded-md bg-zinc-950/90 border border-white/10 backdrop-blur-md">
                  <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    MONO_GRAPHIC.v1
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Bio + Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="tech-glass-card rounded-xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                <FiTerminal />
                <span>~/system/overview.md</span>
              </div>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
                I am a passionate <strong className="text-white font-semibold">Software Web Developer & MERN Stack Developer</strong> specializing in designing, developing, and deploying high-impact full-stack web applications.
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

            {/* Engineering Pillars - Compact 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="tech-glass-card rounded-xl p-4 hover:border-white/30 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 group-hover:border-white/20 transition-all flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs font-semibold text-zinc-100 font-mono group-hover:text-white transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-normal hidden sm:block">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
