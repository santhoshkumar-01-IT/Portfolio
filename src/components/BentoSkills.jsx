import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPython, 
  SiJavascript, 
  SiMongodb, 
  SiFigma, 
  SiTailwindcss, 
  SiGit 
} from 'react-icons/si'

export default function BentoSkills() {
  const skills = [
    { name: 'React', icon: <SiReact className="w-4 h-4 text-cyan-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="w-4 h-4 text-emerald-400" /> },
    { name: 'Python', icon: <SiPython className="w-4 h-4 text-amber-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-4 h-4 text-yellow-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-4 h-4 text-green-500" /> },
    { name: 'UI/UX', icon: <SiFigma className="w-4 h-4 text-pink-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4 text-sky-400" /> },
    { name: 'Git & GitHub', icon: <SiGit className="w-4 h-4 text-orange-500" /> },
  ]

  return (
    <div id="skills" className="bento-card p-6 sm:p-7 flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center gap-2 mb-5">
          <span className="text-orange-500 font-bold text-lg">/</span>
          <h2 className="text-white font-bold text-base sm:text-lg tracking-tight">My Skills</h2>
        </div>

        {/* 3x3 Grid of skill pills matching the mock */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-white/[0.08] hover:border-orange-500/40 hover:bg-zinc-850 hover:shadow-[0_0_15px_rgba(255,107,0,0.15)] transition-all cursor-default group"
            >
              <div className="p-1 rounded-md bg-black/40 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <span className="text-xs font-medium text-zinc-200 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span>Frameworks & Cloud</span>
        <span className="text-orange-400">MERN + AI Stack</span>
      </div>
    </div>
  )
}
