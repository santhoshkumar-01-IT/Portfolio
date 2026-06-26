import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiLeetcode, SiStackoverflow } from 'react-icons/si'

const profiles = [
  {
    name: 'GitHub',
    icon: <FiGithub size={32} />,
    stats: '150+ Repositories',
    color: 'from-gray-600 to-gray-400',
    url: '#',
  },
  {
    name: 'LeetCode',
    icon: <SiLeetcode size={32} />,
    stats: '300+ Problems Solved',
    color: 'from-yellow-600 to-yellow-400',
    url: '#',
  },
  {
    name: 'Stack Overflow',
    icon: <SiStackoverflow size={32} />,
    stats: '2.5K+ Reputation',
    color: 'from-orange-600 to-orange-400',
    url: '#',
  },
]

export default function CodingProfiles() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="profiles" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
            Coding Profiles
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, idx) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-gradient-to-br from-dark-card/50 to-dark-bg/50 border border-dark-border rounded-xl p-8 text-center backdrop-blur hover:border-accent-blue/50 transition-all"
            >
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br ${profile.color} text-white group-hover:scale-110 transition-transform`}>
                {profile.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{profile.name}</h3>
              <p className="text-accent-blue font-semibold mb-4">{profile.stats}</p>
              <div className="flex items-center justify-center gap-2 text-accent-blue group-hover:gap-3 transition-all">
                View Profile <FiExternalLink />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
