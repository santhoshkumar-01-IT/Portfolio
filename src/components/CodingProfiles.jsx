import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiLinkedin, SiStreamlit, SiVercel } from 'react-icons/si'

const platforms = [
  {
    name: 'GitHub',
    handle: '@santhoshkumar-01-IT',
    icon: <FiGithub size={24} />,
    stats: 'Open-source repositories, MERN applications, and ML system architectures.',
    tag: 'Version Control',
    url: 'https://github.com/santhoshkumar-01-IT',
    actionText: 'Explore Codebases',
  },
  {
    name: 'LinkedIn',
    handle: '@santhoshkumar2007',
    icon: <SiLinkedin size={22} />,
    stats: 'Professional network, career milestones, engineering updates, and tech discussions.',
    tag: 'Professional Network',
    url: 'https://www.linkedin.com/in/santhoshkumar2007',
    actionText: 'Connect on LinkedIn',
  },
  {
    name: 'Streamlit Cloud',
    handle: 'Live ML Applications',
    icon: <SiStreamlit size={24} />,
    stats: 'Interactive Machine Learning deployments: Career Recommender & Sales Forecasting.',
    tag: 'AI & Data Demos',
    url: 'https://ml-career-recommender.streamlit.app',
    actionText: 'Launch ML Apps',
  },
  {
    name: 'Vercel',
    handle: 'Production Web Apps',
    icon: <SiVercel size={22} />,
    stats: 'High-speed edge deployments, React client-side SPAs, and responsive web platforms.',
    tag: 'Cloud Hosting',
    url: 'https://portfolio-sigma-five-nj4551y519.vercel.app',
    actionText: 'Visit Live Site',
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
            // 05. Ecosystem & Cloud Presence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Platforms &{' '}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Live Deployments
            </span>
          </h2>
          <div className="w-10 h-0.5 bg-zinc-600 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((platform, idx) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group tech-glass-card rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-zinc-900 border border-white/10 text-white group-hover:border-white/40 group-hover:bg-zinc-850 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] transition-all">
                    {platform.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.08] text-zinc-400">
                    {platform.tag}
                  </span>
                </div>

                <h3 className="text-base font-semibold font-mono text-white mb-1 transition-colors">
                  {platform.name}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mb-2.5">
                  {platform.handle}
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed font-normal">
                  {platform.stats}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                <span>{platform.actionText}</span>
                <FiExternalLink className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
