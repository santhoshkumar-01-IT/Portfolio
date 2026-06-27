import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: Implement email service integration
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                <FiMail className="text-accent-blue" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Email</h3>
                <a href="mailto:santhoshkumaroffc@gmail.com" className="text-gray-400 hover:text-accent-blue transition-colors">
                  santhoshkumaroffc@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent-purple/20 flex items-center justify-center flex-shrink-0">
                <FiPhone className="text-accent-purple" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Phone</h3>
                <a href="tel:+91 9384767962" className="text-gray-400 hover:text-accent-purple transition-colors">
                  +91 9384767962
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent-pink/20 flex items-center justify-center flex-shrink-0">
                <FiMapPin className="text-accent-pink" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1"><Location></Location></h3>
                <p className="text-gray-400"><Coimbatore></Coimbatore>, <India></India></p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-bg/50 border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-bg/50 border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-colors"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-bg/50 border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-dark-bg/50 border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-colors resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold hover:shadow-lg hover:shadow-accent-blue/50 transition-all"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
