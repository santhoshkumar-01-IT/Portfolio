// Secure email dispatch service connected to FormSubmit
// Directs all portfolio contact form inquiries to santhoshkumaroffc@gmail.com

const DESTINATION_EMAIL = 'santhoshkumaroffc@gmail.com'
const RATE_LIMIT_COOLDOWN_MS = 15000 // 15 seconds cooldown between submissions

// Clean & sanitize text to mitigate injection / XSS payload attacks
const sanitizeInput = (str = '') => {
  if (typeof str !== 'string') return ''
  return str
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove <script> tags
    .slice(0, 2500) // Hard limit max payload length
}

export const sendEmail = async ({ name, email, subject, message, honeypot = '' }) => {
  try {
    // 1. Honeypot check: If invisible field is populated, bot was caught
    if (honeypot && honeypot.trim() !== '') {
      console.warn('Bot submission blocked via honeypot field.')
      return { success: true, message: 'Message dispatched successfully.' }
    }

    // 2. Client-side rate-limiting check
    const lastSent = sessionStorage.getItem('last_contact_ts')
    const now = Date.now()
    if (lastSent && now - Number(lastSent) < RATE_LIMIT_COOLDOWN_MS) {
      const waitSecs = Math.ceil((RATE_LIMIT_COOLDOWN_MS - (now - Number(lastSent))) / 1000)
      return {
        success: false,
        error: `Rate limit: Please wait ${waitSecs}s before transmitting another message.`,
      }
    }

    // 3. Sanitize inputs
    const cleanName = sanitizeInput(name).slice(0, 100)
    const cleanEmail = sanitizeInput(email).slice(0, 120)
    const cleanSubject = sanitizeInput(subject).slice(0, 150)
    const cleanMessage = sanitizeInput(message).slice(0, 2000)

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(cleanEmail)) {
      return { success: false, error: 'Please enter a valid email address.' }
    }

    if (!cleanName || !cleanMessage) {
      return { success: false, error: 'Please fill out all required fields.' }
    }

    // 4. Secure submission to FormSubmit with anti-spam params
    const response = await fetch(`https://formsubmit.co/ajax/${DESTINATION_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: cleanName,
        email: cleanEmail,
        _subject: `[Portfolio Inquiry] ${cleanSubject || 'New Contact Request'} - from ${cleanName}`,
        message: cleanMessage,
        _template: 'table',
        _captcha: 'false',
        _honey: '', // FormSubmit's native honeypot checker
      }),
    })

    const data = await response.json()

    if (response.ok && (data.success === 'true' || data.success === true)) {
      sessionStorage.setItem('last_contact_ts', String(Date.now()))
      return { success: true, message: 'Message delivered to email inbox successfully.' }
    } else {
      return {
        success: false,
        error: data.message || 'Failed to dispatch email. Please reach out directly.',
      }
    }
  } catch (error) {
    console.error('Email dispatch error:', error)
    return {
      success: false,
      error: error.message || 'Network error occurred while sending email.',
    }
  }
}
