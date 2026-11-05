import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiCheckCircle, 
  FiAlertCircle, 
  FiLoader, 
  FiX, 
  FiShield,
  FiExternalLink
} from 'react-icons/fi'
import { sendEmail } from '../utils/emailService'

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', honeypot: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  if (!isOpen) return null

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
      setTimeout(() => {
        setSubmitted(false)
        onClose()
      }, 3500)
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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bento-card max-w-xl w-full p-6 sm:p-8 bg-[#0c0c11] border-orange-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(255,107,0,0.25)] relative max-h-[92vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-bold text-lg">/</span>
              <h3 className="text-lg font-bold text-white">Let's Connect</h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 ml-2">
                SSL Secured
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white"
            >
              <FiX size={18} />
            </button>
          </div>

          {/* Quick Direct Info */}
          <div className="grid grid-cols-2 gap-3 mb-5 p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06] text-xs font-mono">
            <div>
              <span className="text-zinc-500 block text-[10px]">EMAIL DIRECT</span>
              <a href="mailto:santhoshkumaroffc@gmail.com" className="text-zinc-200 hover:text-orange-400 truncate block">
                santhoshkumaroffc@gmail.com
              </a>
            </div>
            <div>
              <span className="text-zinc-500 block text-[10px]">PHONE / WHATSAPP</span>
              <a href="tel:+919384767962" className="text-zinc-200 hover:text-orange-400 truncate block">
                +91 9384767962
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field */}
            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">
                  // Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={100}
                  required
                  disabled={loading}
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:shadow-[0_0_15px_rgba(255,107,0,0.3)] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">
                  // Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={120}
                  required
                  disabled={loading}
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:shadow-[0_0_15px_rgba(255,107,0,0.3)] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">
                // Subject *
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
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:shadow-[0_0_15px_rgba(255,107,0,0.3)] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">
                // Message *
              </label>
              <textarea
                name="message"
                placeholder="Write your message or project requirements here..."
                value={formData.message}
                onChange={handleChange}
                maxLength={2000}
                required
                disabled={loading}
                rows="3"
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:shadow-[0_0_15px_rgba(255,107,0,0.3)] transition-all resize-none"
              />
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono flex items-center justify-between">
                <span>{errorMsg}</span>
                <a href={fallbackMailto} className="underline text-white ml-2">Send via Mail App</a>
              </div>
            )}

            {/* Success Message */}
            {submitted && (
              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <FiCheckCircle className="text-emerald-400" />
                <span>Message dispatched to santhoshkumaroffc@gmail.com!</span>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                <FiShield className="text-emerald-400" /> End-to-end encrypted
              </span>

              <button
                type="submit"
                disabled={loading || submitted}
                className="btn-orange-glow px-6 py-2.5 text-xs font-semibold flex items-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <>
                    <FiLoader className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : submitted ? (
                  <>
                    <FiCheckCircle />
                    <span>Dispatched!</span>
                  </>
                ) : (
                  <>
                    <FiSend size={12} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
