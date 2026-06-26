import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <FaGithub />, url: '#', label: 'GitHub' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-dark-bg border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Santhosh Kumar
            </h3>
            <p className="text-gray-500 text-sm mt-1">Full Stack Developer & Creative Problem Solver</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-6 md:mb-0">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-dark-card hover:bg-dark-border flex items-center justify-center text-accent-blue hover:text-accent-purple transition-colors"
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg bg-dark-card hover:bg-dark-border flex items-center justify-center text-accent-purple"
          >
            <FiArrowUp />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-dark-border text-center text-gray-600 text-sm">
          <p>© 2024 Santhosh Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
