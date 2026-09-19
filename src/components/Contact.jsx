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
      className="py-24 px-4 sm:px-6 lg:px-8 relative bg-tech-surface/40"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-mono text-tech-crimson tracking-widest uppercase">
            // 06. Communication Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Initiate{' '}
            <span className="bg-gradient-to-r from-tech-crimson via-tech-rose to-tech-scarlet bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-tech-crimson to-tech-rose mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-6"
          >
            <div className="tech-glass-card rounded-xl p-6 sm:p-7 space-y-6">
              <div className="border-b border-tech-border/80 pb-4">
                <h3 className="text-lg font-bold font-mono text-white flex items-center gap-2">
                  <FiTerminal className="text-tech-crimson" />
                  <span>Direct Channels</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Available for software roles, collaborations, and architectural discussions.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-tech-surface border border-tech-border text-tech-crimson flex-shrink-0">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email Address</h4>
                  <a
                    href="mailto:santhoshkumaroffc@gmail.com"
                    className="text-sm font-mono text-slate-200 hover:text-tech-crimson transition-colors break-all"
                  >
                    santhoshkumaroffc@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-tech-surface border border-tech-border text-tech-rose flex-shrink-0">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Phone / WhatsApp</h4>
                  <a
                    href="tel:+919384767962"
                    className="text-sm font-mono text-slate-200 hover:text-tech-rose transition-colors"
                  >
                    +91 9384767962
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-tech-surface border border-tech-border text-tech-emerald flex-shrink-0">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Location / Timezone</h4>
                  <p className="text-sm font-mono text-slate-200">
                    Coimbatore, India (IST / UTC+5:30)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <div className="tech-glass-card rounded-xl overflow-hidden border border-tech-border">
              {/* Terminal Form Header */}
              <div className="px-5 py-3 bg-tech-surface border-b border-tech-border flex items-center justify-between font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-slate-300">POST /api/v1/contact</span>
                </div>
                <span className="text-tech-crimson">SSL • Encrypted</span>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      // sender.name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-tech-surface border border-tech-border text-white text-sm font-sans placeholder-slate-500 focus:outline-none focus:border-tech-crimson focus:ring-1 focus:ring-tech-crimson transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      // sender.email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-tech-surface border border-tech-border text-white text-sm font-sans placeholder-slate-500 focus:outline-none focus:border-tech-crimson focus:ring-1 focus:ring-tech-crimson transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    // message.subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Full Stack Role"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-tech-surface border border-tech-border text-white text-sm font-sans placeholder-slate-500 focus:outline-none focus:border-tech-crimson focus:ring-1 focus:ring-tech-crimson transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    // message.body *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write your message or project details here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2.5 rounded-lg bg-tech-surface border border-tech-border text-white text-sm font-sans placeholder-slate-500 focus:outline-none focus:border-tech-crimson focus:ring-1 focus:ring-tech-crimson transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-tech-crimson via-tech-ruby to-tech-rose text-white font-mono font-bold text-sm shadow-[0_0_20px_rgba(255,42,95,0.35)] hover:shadow-[0_0_30px_rgba(255,42,95,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <FiCheckCircle className="text-white text-base" />
                      <span>Message Dispatched Successfully!</span>
                    </>
                  ) : (
                    <>
                      <FiSend size={15} />
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
