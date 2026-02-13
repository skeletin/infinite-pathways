import { motion, AnimatePresence } from "motion/react"
import { useRef, useState, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import InfinityIcon from "../../shared/InfinityIcon"

/* ─── Styles ─────────────────────────────────────────────────────────── */

const INPUT_CLASS =
    "w-full px-4 py-3 bg-warm-white dark:bg-dark-card border border-sage/80 dark:border-brand-accent/15 rounded-sm text-brand-deep dark:text-cream placeholder:text-brand-deep/25 dark:placeholder:text-cream/25 focus:outline-none focus:border-brand-accent/50 focus:shadow-[0_0_0_3px_rgba(168,131,88,0.08)] transition-all duration-300"

/* ─── Component ──────────────────────────────────────────────────────── */

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const [sending, setSending] = useState(false)
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
    const [errors, setErrors] = useState<Record<string, boolean>>({})

    const validate = () => {
        const form = formRef.current
        if (!form) return false
        const data = new FormData(form)
        const newErrors: Record<string, boolean> = {}

        if (!data.get("from_name")?.toString().trim()) newErrors.from_name = true
        if (!data.get("from_email")?.toString().trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get("from_email")?.toString() ?? "")) newErrors.from_email = true
        if (!data.get("service_type")?.toString()) newErrors.service_type = true
        if (!data.get("message")?.toString().trim()) newErrors.message = true

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!validate() || !formRef.current) return

        setSending(true)
        setStatus("idle")

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )
            setStatus("success")
            formRef.current.reset()
            setErrors({})
        } catch {
            setStatus("error")
        } finally {
            setSending(false)
        }
    }

    return (
        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
            >
                <label htmlFor="from_name" className="block text-sm text-brand-deep/55 dark:text-cream/50 mb-2 tracking-wide">Your name</label>
                <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    placeholder="Jane Smith"
                    autoComplete="name"
                    className={`${INPUT_CLASS} ${errors.from_name ? "border-red-400! dark:border-red-400/60!" : ""}`}
                    onChange={() => errors.from_name && setErrors(prev => ({ ...prev, from_name: false }))}
                />
                {errors.from_name && <p role="alert" className="text-xs text-red-500 dark:text-red-400 mt-1">Please enter your name.</p>}
            </motion.div>

            {/* Email */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <label htmlFor="from_email" className="block text-sm text-brand-deep/55 dark:text-cream/50 mb-2 tracking-wide">Email address</label>
                <input
                    id="from_email"
                    type="email"
                    name="from_email"
                    placeholder="jane@example.com"
                    autoComplete="email"
                    className={`${INPUT_CLASS} ${errors.from_email ? "border-red-400! dark:border-red-400/60!" : ""}`}
                    onChange={() => errors.from_email && setErrors(prev => ({ ...prev, from_email: false }))}
                />
                {errors.from_email && <p role="alert" className="text-xs text-red-500 dark:text-red-400 mt-1">Please enter a valid email address.</p>}
            </motion.div>

            {/* Service type dropdown */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <label htmlFor="service_type" className="block text-sm text-brand-deep/55 dark:text-cream/50 mb-2 tracking-wide">I'm interested in</label>
                <select
                    id="service_type"
                    name="service_type"
                    defaultValue=""
                    className={`${INPUT_CLASS} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23a88358%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-size-[12px] bg-position-[right_16px_center] bg-no-repeat pr-10 ${errors.service_type ? "border-red-400! dark:border-red-400/60!" : ""}`}
                    onChange={() => errors.service_type && setErrors(prev => ({ ...prev, service_type: false }))}
                >
                    <option value="" disabled className="text-brand-deep/30">Select a service...</option>
                    <option value="Clinical Services">Clinical Services</option>
                    <option value="Professional Services">Professional Services</option>
                </select>
                {errors.service_type && <p role="alert" className="text-xs text-red-500 dark:text-red-400 mt-1">Please select a service type.</p>}
            </motion.div>

            {/* Message */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <label htmlFor="message" className="block text-sm text-brand-deep/55 dark:text-cream/50 mb-2 tracking-wide">How can I help?</label>
                <textarea
                    id="message"
                    rows={4}
                    name="message"
                    placeholder="Share a bit about what brings you here..."
                    className={`${INPUT_CLASS} resize-none ${errors.message ? "border-red-400! dark:border-red-400/60!" : ""}`}
                    onChange={() => errors.message && setErrors(prev => ({ ...prev, message: false }))}
                />
                {errors.message && <p role="alert" className="text-xs text-red-500 dark:text-red-400 mt-1">Please share a brief message.</p>}
            </motion.div>

            {/* Submit */}
            <motion.button
                type="submit"
                disabled={sending}
                className="relative w-full py-3.5 bg-brand-accent text-white text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-brand-secondary transition-colors duration-300 flex items-center justify-center gap-2 overflow-hidden group disabled:opacity-60 disabled:pointer-events-none"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
            >
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <InfinityIcon size={14} className="relative" />
                <span className="relative">{sending ? "Sending..." : "Send Message"}</span>
            </motion.button>

            {/* Status messages */}
            <AnimatePresence mode="wait">
                {status === "success" && (
                    <motion.div
                        key="success"
                        role="status"
                        aria-live="polite"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4 }}
                        className="p-4 rounded-sm bg-brand-primary/10 dark:bg-brand-primary/20 border border-brand-primary/20 dark:border-brand-primary/30 text-center"
                    >
                        <p className="text-sm text-brand-deep dark:text-cream font-pt-serif">Thank you for reaching out!</p>
                        <p className="text-xs text-brand-deep/60 dark:text-cream/50 mt-1">I'll get back to you within 1–2 business days.</p>
                    </motion.div>
                )}
                {status === "error" && (
                    <motion.div
                        key="error"
                        role="alert"
                        aria-live="assertive"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4 }}
                        className="p-4 rounded-sm bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 text-center"
                    >
                        <p className="text-sm text-red-700 dark:text-red-300 font-pt-serif">Something went wrong.</p>
                        <p className="text-xs text-red-500 dark:text-red-400/80 mt-1">Please try again, or email me directly.</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <p className="text-xs text-brand-deep/35 dark:text-cream/30 text-center">
                Your information is confidential and secure.
            </p>
        </form>
    )
}

export default ContactForm
