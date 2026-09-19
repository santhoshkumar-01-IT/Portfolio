import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiCode, FiTerminal } from 'react-icons/fi'
import { SiJavascript, SiReact, SiNodedotjs, SiDocker, SiPostgresql, SiTailwindcss } from 'react-icons/si'

export default function Hero() {
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
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const techBadges = [
    { name: 'React', icon: <SiReact className="text-zinc-300" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-zinc-300" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-zinc-300" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-zinc-300" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-zinc-300" /> },
    { name: 'Docker', icon: <SiDocker className="text-zinc-300" /> },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-white/[0.03] rounded-full blur-[120px]" />
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
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 font-mono text-xs shadow-sm">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>~/santhosh-kumar &gt; whoami</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-zinc-400 font-mono text-sm sm:text-base">
                Hello World, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Santhosh{' '}
                <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                  Kumar
                </span>
              </h1>
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-300">
                  Software Engineer & Full Stack Builder
                </span>
              </div>
            </motion.div>

            {/* Bio summary */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-normal"
            >
              Passionate about architecting robust, scalable web systems and building high-performance digital products with modern engineering practices, clean code, and intuitive user experiences.
            </motion.p>

            {/* Quick Tech Stack Chips */}
            <motion.div variants={itemVariants} className="space-y-2 pt-2">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                // Core Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((tech) => (
                  <div
                    key={tech.name}
                    className="btn-neon-white flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900/80 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all shadow-sm cursor-default"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons with White Neon Glow */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3.5 pt-3"
            >
              <a
                href="#projects"
                className="btn-neon-solid px-6 py-3 rounded-md font-mono text-xs font-semibold flex items-center gap-2"
              >
                <FiCode className="w-4 h-4" />
                <span>Explore Projects</span>
              </a>
              
              <a
                href="#contact"
                className="btn-neon-white px-6 py-3 rounded-md bg-zinc-900 border border-white/15 text-zinc-200 hover:text-white font-mono text-xs font-medium flex items-center gap-2"
              >
                <FiTerminal className="w-4 h-4" />
                <span>Contact Engineer</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Monochrome Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="rounded-xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl shadow-black hover:border-white/20 transition-all">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
                
                {/* File Tab */}
                <div className="flex items-center gap-2 px-3 py-0.5 rounded bg-zinc-800 text-xs font-mono text-zinc-200 border border-white/10">
                  <FiCode className="text-zinc-400" />
                  <span>santhosh.ts</span>
                </div>

                <div className="text-[10px] font-mono text-zinc-400">TypeScript</div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-zinc-300 bg-[#080808]">
                <p className="text-zinc-400 italic mb-2">
                  // Software Engineer Profile Specification
                </p>
                
                <p>
                  <span className="text-zinc-400">const</span>{' '}
                  <span className="text-white">engineer</span>:{' '}
                  <span className="text-zinc-300">Developer</span> = {'{'}
                </p>
                
                <div className="pl-4 space-y-1 my-1">
                  <p>
                    <span className="text-zinc-400">name:</span>{' '}
                    <span className="text-zinc-200">'Santhosh Kumar'</span>,
                  </p>
                  <p>
                    <span className="text-zinc-400">role:</span>{' '}
                    <span className="text-zinc-200">'Software Engineer'</span>,
                  </p>
                  <p>
                    <span className="text-zinc-400">status:</span>{' '}
                    <span className="text-emerald-400">'Available for Roles'</span>,
                  </p>
                  <p>
                    <span className="text-zinc-400">traits:</span> [
                    <span className="text-zinc-300">'Clean Code'</span>,{' '}
                    <span className="text-zinc-300">'Scalable Systems'</span>,{' '}
                    <span className="text-zinc-300">'Problem Solver'</span>],
                  </p>
                  <p>
                    <span className="text-zinc-400">passions:</span> [
                    <span className="text-zinc-300">'Full Stack Dev'</span>,{' '}
                    <span className="text-zinc-300">'Algorithms'</span>,{' '}
                    <span className="text-zinc-300">'Cloud APIs'</span>],
                  </p>
                </div>
                
                <p className="text-zinc-300 mb-3">{'}'};</p>

                <div className="border-t border-white/[0.08] pt-3 mt-3">
                  <p className="text-zinc-400">function <span className="text-white">buildSystem</span>() {'{'}</p>
                  <p className="pl-4 text-zinc-400">
                    <span className="text-zinc-400">return</span> engineer.passions
                  </p>
                  <p className="pl-8 text-zinc-400">
                    .<span className="text-zinc-200">map</span>(p =&gt; <span className="text-white">`🚀 Crafting ${'{'}p{'}'}`</span>);
                  </p>
                  <p className="text-zinc-300">{'}'}</p>
                </div>
              </div>

              {/* Terminal Footer Info Bar */}
              <div className="px-4 py-2 bg-zinc-900/80 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
                  <span>Ready • utf-8</span>
                </div>
                <div className="text-zinc-400">LF • Spaces: 2</div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 text-center"
        >
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors">
            <span>// scroll down</span>
            <FiArrowDown className="text-sm text-zinc-400" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
