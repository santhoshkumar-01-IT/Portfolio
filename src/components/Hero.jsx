import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiCode, FiTerminal, FiExternalLink, FiDownload, FiFolder, FiCheckCircle } from 'react-icons/fi'
import { SiJavascript, SiReact, SiNodedotjs, SiPython, SiDocker, SiPostgresql, SiTailwindcss } from 'react-icons/si'

export default function Hero() {
  const [activeTab, setActiveTab] = useState('santhosh.ts')
  const [copied, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard?.writeText('npx santhosh-kumar')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const techBadges = [
    { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-tech-cyan/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-tech-indigo/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Headline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Terminal command line tag */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-tech-card/90 border border-tech-cyan/30 text-tech-cyan font-mono text-xs font-medium shadow-[0_0_15px_rgba(0,242,254,0.15)]">
                <span className="inline-block w-2 h-2 rounded-full bg-tech-emerald animate-pulse" />
                <span>~/santhosh-kumar &gt; whoami</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-slate-400 font-mono text-base sm:text-lg">
                Hello World, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Santhosh{' '}
                <span className="bg-gradient-to-r from-tech-cyan via-tech-blue to-tech-indigo bg-clip-text text-transparent">
                  Kumar
                </span>
              </h1>
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200">
                  Software Engineer & Full Stack Builder
                </span>
              </div>
            </motion.div>

            {/* Bio summary */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed"
            >
              Passionate about architecting robust, scalable web systems and building high-performance digital products with modern engineering practices, clean code, and intuitive user experiences.
            </motion.p>

            {/* Quick Tech Stack Chips */}
            <motion.div variants={itemVariants} className="space-y-2 pt-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                // Core Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-tech-card border border-tech-border text-xs font-mono text-slate-300 hover:border-tech-cyan/50 hover:text-white transition-all shadow-sm"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-tech-cyan to-tech-blue text-tech-bg font-mono text-sm font-bold shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] transition-all flex items-center gap-2"
              >
                <FiCode className="w-4 h-4" />
                <span>Explore Projects</span>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-lg bg-tech-card/80 border border-tech-border hover:border-tech-cyan/50 text-slate-200 hover:text-tech-cyan font-mono text-sm font-medium transition-all flex items-center gap-2"
              >
                <FiTerminal className="w-4 h-4" />
                <span>Contact Engineer</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Code Editor / Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="rounded-xl overflow-hidden bg-tech-card border border-tech-border shadow-2xl shadow-black/80">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-tech-surface border-b border-tech-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                
                {/* File Tab */}
                <div className="flex items-center gap-2 px-3 py-1 rounded bg-tech-card text-xs font-mono text-tech-cyan border border-tech-cyan/20">
                  <FiCode className="text-tech-cyan" />
                  <span>santhosh.ts</span>
                </div>

                <div className="text-[10px] font-mono text-slate-400">TypeScript</div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300 bg-[#0a0f1d]">
                <p className="text-slate-500 italic mb-2">
                  // Software Engineer Profile Specification
                </p>
                
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">engineer</span>:{' '}
                  <span className="text-emerald-400">Developer</span> = {'{'}
                </p>
                
                <div className="pl-4 space-y-1 my-1">
                  <p>
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-amber-300">'Santhosh Kumar'</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-amber-300">'Software Engineer'</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">status:</span>{' '}
                    <span className="text-emerald-400">'Open for Opportunities'</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">traits:</span> [
                    <span className="text-amber-300">'Clean Code'</span>,{' '}
                    <span className="text-amber-300">'Scalable Systems'</span>,{' '}
                    <span className="text-amber-300">'Problem Solver'</span>],
                  </p>
                  <p>
                    <span className="text-slate-400">passions:</span> [
                    <span className="text-amber-300">'Full Stack Dev'</span>,{' '}
                    <span className="text-amber-300">'Algorithms'</span>,{' '}
                    <span className="text-amber-300">'Cloud APIs'</span>],
                  </p>
                </div>
                
                <p className="text-slate-300 mb-3">{'}'};</p>

                <div className="border-t border-tech-border/80 pt-3 mt-3">
                  <p className="text-purple-400">function <span className="text-blue-400">buildSystem</span>() {'{'}</p>
                  <p className="pl-4 text-slate-400">
                    <span className="text-purple-400">return</span> engineer.passions
                  </p>
                  <p className="pl-8 text-slate-400">
                    .<span className="text-blue-400">map</span>(p =&gt; <span className="text-tech-cyan">`🚀 Crafting ${'{'}p{'}'}`</span>);
                  </p>
                  <p className="text-slate-300">{'}'}</p>
                </div>
              </div>

              {/* Terminal Footer Info Bar */}
              <div className="px-4 py-2 bg-tech-surface border-t border-tech-border flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan animate-pulse" />
                  <span>Ready • utf-8</span>
                </div>
                <div className="text-tech-cyan">LF • Spaces: 2</div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 text-center"
        >
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-tech-cyan transition-colors">
            <span>// scroll down</span>
            <FiArrowDown className="text-lg text-tech-cyan" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
