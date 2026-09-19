import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowUpRight, FiClock, FiCalendar } from 'react-icons/fi'
import { articlesData } from '../utils/projectsData'

export default function Articles() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="articles" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
            // 04. Technical Writing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering{' '}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Articles & Logs
            </span>
          </h2>
          <div className="w-10 h-0.5 bg-zinc-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesData.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="tech-glass-card rounded-xl p-6 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-center mb-4 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-white/10 text-zinc-300">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-zinc-400">
                    <FiClock size={12} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-semibold mb-2 text-white group-hover:text-zinc-200 font-mono transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1 text-zinc-400">
                  <FiCalendar size={12} />
                  {article.date}
                </span>
                <span className="flex items-center gap-1 text-zinc-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  Read Article <FiArrowUpRight size={13} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
