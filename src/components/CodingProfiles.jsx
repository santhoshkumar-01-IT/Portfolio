import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'

const profiles = [
  {
    name: 'GitHub',
    handle: '@santhoshkumar-01-IT',
    icon: <FiGithub size={28} />,
    stats: 'Repositories & OSS Contributions',
    tag: 'Version Control',
    accentColor: 'border-tech-crimson/40 hover:border-tech-crimson group-hover:text-tech-crimson',
    iconBg: 'bg-tech-surface text-tech-crimson border-tech-crimson/30',
    url: 'https://github.com/santhoshkumar-01-IT',
  },
  {
    name: 'LeetCode',
    handle: 'Algorithm Practice',
    icon: <SiLeetcode size={28} />,
    stats: 'DSA & Competitive Problem Solving',
    tag: 'Data Structures',
    accentColor: 'border-amber-500/40 hover:border-amber-400 group-hover:text-amber-400',
    iconBg: 'bg-amber-950/40 text-amber-400 border-amber-500/30',
    url: 'https://leetcode.com',
  },
  {
    name: 'HackerRank',
    handle: 'Certified Problem Solver',
    icon: <SiHackerrank size={28} />,
    stats: 'Language Badges & Skill Assessments',
    tag: 'Problem Solving',
    accentColor: 'border-tech-rose/40 hover:border-tech-rose group-hover:text-tech-rose',
    iconBg: 'bg-rose-950/40 text-tech-rose border-tech-rose/30',
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
          <span className="text-xs font-mono text-tech-crimson tracking-widest uppercase">
            // 05. Developer Metrics
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Coding{' '}
            <span className="bg-gradient-to-r from-tech-crimson via-tech-rose to-tech-scarlet bg-clip-text text-transparent">
              Platforms & Activity
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-tech-crimson to-tech-rose mx-auto rounded-full" />
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
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`group tech-glass-card rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all ${profile.accentColor}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl border ${profile.iconBg} group-hover:scale-110 transition-transform`}>
                    {profile.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-tech-surface border border-tech-border text-slate-300">
                    {profile.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-mono text-white mb-1 transition-colors">
                  {profile.name}
                </h3>
                <p className="text-xs text-tech-crimson font-mono mb-3">
                  {profile.handle}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm">
                  {profile.stats}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-tech-border/80 flex items-center justify-between text-xs font-mono text-slate-300 group-hover:text-tech-crimson transition-colors">
                <span>Access Profile</span>
                <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
