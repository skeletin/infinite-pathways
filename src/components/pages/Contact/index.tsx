import { useState } from "react"
import { motion } from "motion/react"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredContact: "email",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Form submission logic would go here
        console.log("Form submitted:", formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-[#faf8f3] via-[#f5f2eb] to-[#ebe7db]">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <p className="text-[#687b0a] text-sm tracking-[0.2em] uppercase mb-4">
                            Contact
                        </p>
                        <h1 className="text-4xl md:text-5xl font-light text-[#3d4a28] leading-tight mb-6">
                            Let's start a conversation
                        </h1>
                        <p className="text-lg text-[#545454] max-w-2xl mx-auto">
                            Whether you're ready to schedule your first session or just have
                            questions, I'm here to help. Reaching out takes courage—I'm glad you're here.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-light text-[#3d4a28] mb-8">
                                Send a message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm text-[#545454] mb-2">
                                        Your name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-[#e8e4d9] bg-[#faf8f3] text-[#3d4a28] focus:outline-none focus:border-[#687b0a] transition-colors"
                                        placeholder="Jane Smith"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm text-[#545454] mb-2">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-[#e8e4d9] bg-[#faf8f3] text-[#3d4a28] focus:outline-none focus:border-[#687b0a] transition-colors"
                                        placeholder="jane@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm text-[#545454] mb-2">
                                        Phone number <span className="text-[#8b7755]">(optional)</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-[#e8e4d9] bg-[#faf8f3] text-[#3d4a28] focus:outline-none focus:border-[#687b0a] transition-colors"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="preferredContact" className="block text-sm text-[#545454] mb-2">
                                        Preferred contact method
                                    </label>
                                    <select
                                        id="preferredContact"
                                        name="preferredContact"
                                        value={formData.preferredContact}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-[#e8e4d9] bg-[#faf8f3] text-[#3d4a28] focus:outline-none focus:border-[#687b0a] transition-colors"
                                    >
                                        <option value="email">Email</option>
                                        <option value="phone">Phone</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm text-[#545454] mb-2">
                                        How can I help?
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-[#e8e4d9] bg-[#faf8f3] text-[#3d4a28] focus:outline-none focus:border-[#687b0a] transition-colors resize-none"
                                        placeholder="Share a bit about what brings you here, or any questions you have..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-[#687b0a] text-white rounded-full hover:bg-[#566608] transition-colors duration-200"
                                >
                                    Send Message
                                </button>

                                <p className="text-sm text-[#8b7755] text-center">
                                    Your information is confidential and secure.
                                </p>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-2xl font-light text-[#3d4a28] mb-8">
                                    Other ways to connect
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#687b0a]/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-[#687b0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-[#3d4a28] mb-1">Email</h4>
                                            <p className="text-[#545454]">hello@infinitepathways.com</p>
                                            <p className="text-sm text-[#8b7755] mt-1">I typically respond within 24-48 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#687b0a]/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-[#687b0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-[#3d4a28] mb-1">Virtual Sessions</h4>
                                            <p className="text-[#545454]">Secure video therapy available</p>
                                            <p className="text-sm text-[#8b7755] mt-1">Connect from wherever you're comfortable</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#687b0a]/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-[#687b0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-[#3d4a28] mb-1">Availability</h4>
                                            <p className="text-[#545454]">Weekdays & select evenings</p>
                                            <p className="text-sm text-[#8b7755] mt-1">Flexible scheduling to fit your life</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* What to Expect */}
                            <div className="bg-[#f5f2eb] p-8 rounded-2xl">
                                <h3 className="text-xl font-medium text-[#3d4a28] mb-4">
                                    What happens next?
                                </h3>
                                <ol className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#687b0a] text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                                        <p className="text-[#545454]">I'll respond to your message within 1-2 business days</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#687b0a] text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                                        <p className="text-[#545454]">We'll schedule a brief phone consultation (free, no obligation)</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#687b0a] text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                                        <p className="text-[#545454]">If we're a good fit, we'll schedule your first session</p>
                                    </li>
                                </ol>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Reassurance Section */}
            <section className="py-16 bg-[#f5f2eb]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-[#545454] text-lg italic">
                            "Taking the first step is often the hardest part. Whatever brought you here today,
                            I want you to know that reaching out is an act of courage—and you don't have to
                            have it all figured out."
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Contact
