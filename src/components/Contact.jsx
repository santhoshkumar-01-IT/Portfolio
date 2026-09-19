import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiTerminal, FiCheckCircle } from 'react-icons/fi'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
            // 06. Communication Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Initiate{' '}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <div className="w-10 h-0.5 bg-zinc-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-6"
          >
            <div className="tech-glass-card rounded-xl p-6 sm:p-7 space-y-6">
              <div className="border-b border-white/[0.08] pb-4">
                <h3 className="text-base font-semibold font-mono text-white flex items-center gap-2">
                  <FiTerminal className="text-zinc-300" />
                  <span>Direct Channels</span>
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-normal">
                  Available for software roles, collaborations, and architectural discussions.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-md bg-zinc-900 border border-white/10 text-white flex-shrink-0">
                  <FiMail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Email Address</h4>
                  <a
                    href="mailto:santhoshkumaroffc@gmail.com"
                    className="text-sm font-mono text-zinc-200 hover:text-white transition-colors break-all"
                  >
                    santhoshkumaroffc@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-md bg-zinc-900 border border-white/10 text-white flex-shrink-0">
                  <FiPhone size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Phone / WhatsApp</h4>
                  <a
                    href="tel:+919384767962"
                    className="text-sm font-mono text-zinc-200 hover:text-white transition-colors"
                  >
                    +91 9384767962
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-md bg-zinc-900 border border-white/10 text-white flex-shrink-0">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Location / Timezone</h4>
                  <p className="text-sm font-mono text-zinc-200">
                    Coimbatore, India (IST / UTC+5:30)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <div className="tech-glass-card rounded-xl overflow-hidden border border-white/10">
              {/* Terminal Form Header */}
              <div className="px-5 py-3 bg-zinc-900/80 border-b border-white/[0.08] flex items-center justify-between font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="ml-2 text-zinc-300">POST /api/v1/contact</span>
                </div>
                <span className="text-zinc-400">SSL Encrypted</span>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      // sender.name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-md bg-zinc-900/90 border border-white/10 text-white text-sm font-sans placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      // sender.email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-md bg-zinc-900/90 border border-white/10 text-white text-sm font-sans placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    // message.subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Full Stack Role"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-md bg-zinc-900/90 border border-white/10 text-white text-sm font-sans placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    // message.body *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write your message or project details here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3.5 py-2.5 rounded-md bg-zinc-900/90 border border-white/10 text-white text-sm font-sans placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full py-2.5 rounded-md bg-white text-black font-mono font-semibold text-xs hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  {submitted ? (
                    <>
                      <FiCheckCircle className="text-black text-sm" />
                      <span>Message Dispatched Successfully!</span>
                    </>
                  ) : (
                    <>
                      <FiSend size={13} />
                      <span>Transmit Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
