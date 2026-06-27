import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 1, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 1 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. With expertise in modern web technologies, I craft digital experiences that are both beautiful and functional.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to continuously learn. I thrive in collaborative environments and enjoy turning ideas into reality through clean, maintainable code.
            </p>

            {/* Timeline */}
            <div className="mt-8 space-y-4">
              <div className="border-l-2 border-accent-blue pl-4">
                <h3 className="font-bold text-accent-blue">Current Focus</h3>
                <p className="text-gray-400">Full Stack Development & Web Animations</p>
              </div>
              <div className="border-l-2 border-accent-purple pl-4">
                <h3 className="font-bold text-accent-purple">Learning</h3>
                <p className="text-gray-400">Advanced React Patterns & 3D Web Graphics</p>
              </div>
            </div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border border-dark-border flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-gray-400">Your photo here</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
