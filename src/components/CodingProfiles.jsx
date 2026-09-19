import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'

const profiles = [
  {
    name: 'GitHub',
    handle: '@santhoshkumar-01-IT',
    icon: <FiGithub size={26} />,
    stats: 'Repositories & OSS Contributions',
    tag: 'Version Control',
    url: 'https://github.com/santhoshkumar-01-IT',
  },
  {
    name: 'LeetCode',
    handle: 'Algorithm Practice',
    icon: <SiLeetcode size={26} />,
    stats: 'DSA & Competitive Problem Solving',
    tag: 'Data Structures',
    url: 'https://leetcode.com',
  },
  {
    name: 'HackerRank',
    handle: 'Certified Problem Solver',
    icon: <SiHackerrank size={26} />,
    stats: 'Language Badges & Skill Assessments',
    tag: 'Problem Solving',
    url: 'https://hackerrank.com',
  },
]

export default function CodingProfiles() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="profiles" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
            // 05. Developer Metrics
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Coding{' '}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Platforms & Activity
            </span>
          </h2>
          <div className="w-10 h-0.5 bg-zinc-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, idx) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group tech-glass-card rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-900 border border-white/10 text-white group-hover:border-white/30 group-hover:bg-zinc-850 transition-all">
                    {profile.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-zinc-900 border border-white/[0.08] text-zinc-400">
                    {profile.tag}
                  </span>
                </div>

                <h3 className="text-lg font-semibold font-mono text-white mb-1 transition-colors">
                  {profile.name}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mb-2.5">
                  {profile.handle}
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm font-normal">
                  {profile.stats}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                <span>Access Profile</span>
                <FiExternalLink className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
