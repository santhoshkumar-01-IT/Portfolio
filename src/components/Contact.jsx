import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiTerminal, FiCheckCircle, FiAlertCircle, FiLoader, FiExternalLink, FiShield } from 'react-icons/fi'
import { sendEmail } from '../utils/emailService'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', honeypot: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    const result = await sendEmail(formData)
    setLoading(false)

    if (result.success) {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' })
      setTimeout(() => setSubmitted(false), 6000)
    } else {
      setErrorMsg(result.error || 'Failed to dispatch email.')
    }
  }

  const fallbackMailto = `mailto:santhoshkumaroffc@gmail.com?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`

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
                  Available for full-time opportunities, collaborations, and engineering discussions.
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

              {/* Direct Mail Client CTA */}
              <div className="pt-2 border-t border-white/[0.08]">
                <a
                  href="mailto:santhoshkumaroffc@gmail.com"
                  className="btn-neon-white w-full py-2.5 px-3 rounded-md bg-zinc-900/90 border border-white/15 text-zinc-300 hover:text-white font-mono text-xs flex items-center justify-center gap-2"
                >
                  <FiMail size={14} />
                  <span>Open Mail App Directly</span>
                  <FiExternalLink size={12} className="text-zinc-500" />
                </a>
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
                  <span className="ml-2 text-zinc-400">POST /api/v1/contact</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono">
                  <FiShield className="text-emerald-400 w-3 h-3" />
                  <span>HSTS • TLS Encrypted</span>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4" noValidate={false}>
                {/* Honeypot field - invisible to real humans, catches spam bots */}
                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                  <label htmlFor="hp_field">Do not fill this field</label>
                  <input
                    type="text"
                    id="hp_field"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

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
                      maxLength={100}
                      autoComplete="name"
                      required
                      disabled={loading}
                      className="w-full px-3.5 py-2.5 rounded-md bg-zinc-900/90 border border-white/10 text-white text-sm font-sans placeholder-zinc-500 focus:outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all disabled:opacity-50"
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
                      maxLength={120}
                      autoComplete="email"
                      required
                      disabled={loading}
                      className="w-full px-3.5 py-2.5 rounded-md bg-zinc-900/90 border border-white/10 text-white text-sm font-sans placeholder-zinc-500 focus:outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all disabled:opacity-50"
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
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    maxLength={150}
                    required
                    disabled={loading}
                    className="w-full px-3.5 py-2.5 rounded-md bg-zinc-900/90 border border-white/10 text-white text-sm font-sans placeholder-zinc-500 focus:outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all disabled:opacity-50"
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
                    maxLength={2000}
                    required
                    disabled={loading}
                    rows="4"
                    className="w-full px-3.5 py-2.5 rounded-md bg-zinc-900/90 border border-white/10 text-white text-sm font-sans placeholder-zinc-500 focus:outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all resize-none disabled:opacity-50"
                  />
                </div>

                {/* Error Banner with 1-click fallback */}
                {errorMsg && (
                  <div className="p-3 rounded-md bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <FiAlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                    <a
                      href={fallbackMailto}
                      className="underline text-white hover:text-red-200 flex-shrink-0"
                    >
                      Send via Mail App
                    </a>
                  </div>
                )}

                {/* Success Banner */}
                {submitted && (
                  <div className="p-3 rounded-md bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Message dispatched successfully to santhoshkumaroffc@gmail.com!</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="btn-neon-solid w-full py-3 rounded-md font-mono font-semibold text-xs flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <FiLoader className="text-black text-sm animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <FiCheckCircle className="text-black text-sm" />
                      <span>Message Dispatched!</span>
                    </>
                  ) : (
                    <>
                      <FiSend size={13} />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
