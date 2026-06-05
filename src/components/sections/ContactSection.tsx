import { useState, type FormEvent } from "react"
import { FadeIn } from "../ui/FadeIn"
import { LegalModal } from "../ui/LegalModal"

const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tanmay-kumar-8ba11a301' },
  { name: 'Twitter', url: 'https://x.com/Play_with_Stark' },
  { name: 'GitHub', url: 'https://github.com/TanmayK-23' },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")
  const [statusType, setStatusType] = useState<"success" | "error" | "">("")
  const [modalConfig, setModalConfig] = useState<{isOpen: boolean, title: string, content: React.ReactNode}>({
    isOpen: false,
    title: "",
    content: null
  })

  const openPrivacy = (e: React.MouseEvent) => {
    e.preventDefault()
    setModalConfig({
      isOpen: true,
      title: "Privacy Policy",
      content: (
        <>
          <p>We respect your privacy and are committed to protecting it. We only collect your <strong>name</strong> and <strong>email address</strong> when you submit the contact form.</p>
          <p>This information is used strictly to reply to your inquiry. We do not sell, rent, or share your personal data with any third parties under any circumstances.</p>
        </>
      )
    })
  }

  const openTerms = (e: React.MouseEvent) => {
    e.preventDefault()
    setModalConfig({
      isOpen: true,
      title: "Terms of Service",
      content: (
        <>
          <p>By using this website and submitting the contact form, you agree to provide accurate and truthful information.</p>
          <p>This portfolio is provided for informational and professional networking purposes. We reserve the right to ignore inquiries that are spam, inappropriate, or malicious.</p>
        </>
      )
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage("")
    setStatusType("")

    const formData = new FormData(e.currentTarget)

    // Add Web3Forms access key
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY
    if (!accessKey) {
      setStatusType("error")
      setStatusMessage("Web3Forms Access Key is missing in .env")
      setIsSubmitting(false)
      return
    }

    formData.append("access_key", accessKey)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setStatusType("success")
        setStatusMessage("Message sent successfully! I'll get back to you soon.")
          ; (e.target as HTMLFormElement).reset()
      } else {
        setStatusType("error")
        setStatusMessage(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatusType("error")
      setStatusMessage("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative w-full z-30">
      {/* Background to blend with ServicesSection (which is white) */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-white" />

      <section
        id="contact"
        className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-10 pt-20 sm:pt-24 md:pt-32 flex flex-col w-full min-h-screen justify-between"
      >
        <div
          className="flex flex-col items-center justify-center w-full max-w-[1600px] mx-auto flex-1"
          style={{ paddingLeft: "clamp(2rem, 8vw, 8rem)", paddingRight: "clamp(2rem, 8vw, 8rem)" }}
        >
          <FadeIn
            delay={0}
            y={40}
            className="w-full"
            style={{ marginBottom: "clamp(3rem, 6vw, 6rem)" }}
          >
            <h2
              className="text-[#D7E2EA] font-black uppercase text-center leading-none"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Contact
            </h2>
          </FadeIn>

          <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 justify-between items-start">
            {/* Left Side: Contact Info */}
            <FadeIn delay={0.1} y={40} className="flex-1 flex flex-col items-start gap-8 md:gap-12 w-full lg:w-auto">
              <p className="text-[#D7E2EA] font-light text-left text-[clamp(1.2rem,2.5vw,1.8rem)] opacity-80 leading-relaxed">
                Have an idea in mind? Let's build something amazing together.
              </p>

              <a
                href="mailto:kumartanmay39@gmail.com"
                className="group flex items-center gap-3 md:gap-4 text-[#D7E2EA] font-medium text-[clamp(1.2rem,3vw,2.5rem)] hover:opacity-80 transition-all duration-300 border-b-2 border-[#D7E2EA]/30 hover:border-[#D7E2EA] pb-2 w-fit"
              >
                Send me an email
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
              </a>

              <div className="flex flex-wrap justify-start gap-6 sm:gap-10 mt-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D7E2EA] font-bold uppercase tracking-widest text-sm sm:text-base opacity-50 hover:opacity-100 transition-opacity duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </FadeIn>

            {/* Right Side: Contact Form */}
            <FadeIn delay={0.2} y={40} className="flex-1 w-full lg:w-auto">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="bg-transparent border-b border-[#D7E2EA]/30 text-[#D7E2EA] px-0 py-3 focus:outline-none focus:border-[#D7E2EA] transition-colors duration-300 w-full placeholder-[#D7E2EA]/20"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-transparent border-b border-[#D7E2EA]/30 text-[#D7E2EA] px-0 py-3 focus:outline-none focus:border-[#D7E2EA] transition-colors duration-300 w-full placeholder-[#D7E2EA]/20"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="bg-transparent border-b border-[#D7E2EA]/30 text-[#D7E2EA] px-0 py-3 focus:outline-none focus:border-[#D7E2EA] transition-colors duration-300 w-full resize-none placeholder-[#D7E2EA]/20"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status Message */}
                {statusMessage && (
                  <div className={`text-sm font-medium ${statusType === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {statusMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 border border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-300 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 w-fit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </FadeIn>
          </div>
        </div>

        {/* Professional Footer */}
        <div
          className="w-full max-w-[1600px] mx-auto border-t border-[#D7E2EA]/10 mt-32 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[#D7E2EA]/50 text-sm md:text-base"
          style={{ paddingLeft: "clamp(2rem, 8vw, 8rem)", paddingRight: "clamp(2rem, 8vw, 8rem)" }}
        >
          <p>© {new Date().getFullYear()} Tanmay. All rights reserved.</p>

          <div className="flex gap-6 sm:gap-10">
            <a href="#" onClick={openPrivacy} className="hover:text-[#D7E2EA] transition-colors duration-300">Privacy Policy</a>
            <a href="#" onClick={openTerms} className="hover:text-[#D7E2EA] transition-colors duration-300">Terms of Service</a>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-[#D7E2EA] transition-colors duration-300 font-medium uppercase tracking-widest"
          >
            Back to Top ↑
          </button>
        </div>
      </section>

      <LegalModal 
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig(prev => ({ ...prev, isOpen: false }))}
        title={modalConfig.title}
        content={modalConfig.content}
      />
    </div>
  )
}
