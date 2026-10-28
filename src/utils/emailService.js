// Real email dispatch service connected to FormSubmit
// Directs all portfolio contact form inquiries to santhoshkumaroffc@gmail.com

const DESTINATION_EMAIL = 'santhoshkumaroffc@gmail.com'

export const sendEmail = async ({ name, email, subject, message }) => {
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${DESTINATION_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _subject: `[Portfolio Inquiry] ${subject || 'New Contact Request'} - from ${name}`,
        message: message,
        _template: 'table',
        _captcha: 'false',
      }),
    })

    const data = await response.json()

    if (response.ok && (data.success === 'true' || data.success === true)) {
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
