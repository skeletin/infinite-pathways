import { useState } from "react"
import { motion } from "motion/react"
import { FaEnvelope, FaVideo, FaClock, FaLeaf, FaSpa, FaSeedling } from "react-icons/fa"
import { HiSparkles } from "react-icons/hi"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredContact: "email",
    })
    const [focusedField, setFocusedField] = useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Form submission logic would go here
        console.log("Form submitted:", formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 relative overflow-hidden">
                {/* Gradient background */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, #faf8f3 0%, #f0efe8 30%, #e8f0dc 60%, #f5f7f0 100%)',
                    }}
                />

                {/* Floating orbs */}
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(168, 184, 124, 0.2) 0%, transparent 60%)' }}
                    initial={{ x: '-20%', y: '-30%' }}
                    animate={{ x: ['-20%', '-15%', '-20%'], y: ['-30%', '-25%', '-30%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full blur-3xl right-0 bottom-0"
                    style={{ background: 'radial-gradient(circle, rgba(212, 228, 184, 0.25) 0%, transparent 60%)' }}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="max-w-4xl mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <motion.div
                            className="inline-flex items-center gap-3 mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#a8b87c]" />
                            <span className="text-sm tracking-[0.2em] uppercase bg-clip-text text-transparent" style={{
                                backgroundImage: 'linear-gradient(135deg, #687b0a 0%, #a8b87c 100%)',
                            }}>Contact</span>
                            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#a8b87c]" />
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <span className="text-[#3d4a28]">Let's start a </span>
                            <span className="bg-clip-text text-transparent" style={{
                                backgroundImage: 'linear-gradient(135deg, #687b0a 0%, #a8b87c 50%, #3d4a28 100%)',
                            }}>conversation</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-[#545454] max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Whether you're ready to schedule your first session or just have
                            questions, I'm here to help. Reaching out takes courage—I'm glad you're here.
                        </motion.p>

                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <div className="w-24 h-1 mx-auto rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full w-full"
                                    style={{ background: 'linear-gradient(90deg, #687b0a, #a8b87c, #d4e4b8)' }}
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-white relative">
                {/* Decorative background elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        className="absolute top-20 left-10 w-3 h-3 rounded-full bg-[#a8b87c]/30"
                        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute top-60 right-20 w-2 h-2 rounded-full bg-[#687b0a]/20"
                        animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                    />
                </div>

                <div className="max-w-6xl mx-auto px-6 relative">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <motion.div
                                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#687b0a] to-[#a8b87c] flex items-center justify-center text-white shadow-lg"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <FaEnvelope className="w-5 h-5" />
                                </motion.div>
                                <h2 className="text-2xl font-light text-[#3d4a28]">
                                    Send a message
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name field */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="relative"
                                >
                                    <label htmlFor="name" className="block text-sm text-[#545454] mb-2 font-medium">
                                        Your name
                                    </label>
                                    <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'name' ? 'ring-2 ring-[#687b0a]/20' : ''}`}>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="w-full px-4 py-4 rounded-xl border-2 border-[#e8e4d9] bg-[#faf8f3] text-[#3d4a28] focus:outline-none focus:border-[#687b0a] transition-all duration-300"
                                            placeholder="Jane Smith"
                                        />
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#687b0a] to-[#a8b87c] rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: focusedField === 'name' ? '100%' : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Email field */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15 }}
                                    className="relative"
                                >
                                    <label htmlFor="email" className="block text-sm text-[#545454] mb-2 font-medium">
                                        Email address
                                    </label>
                                    <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'email' ? 'ring-2 ring-[#687b0a]/20' : ''}`}>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="w-full px-4 py-4 rounded-xl border-2 border-[#e8e4d9] bg-[#faf8f3] text-[#3d4a28] focus:outline-none focus:border-[#687b0a] transition-all duration-300"
                                            placeholder="jane@example.com"
                                        />
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#687b0a] to-[#a8b87c] rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: focusedField === 'email' ? '100%' : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Phone field */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="relative"
                                >
                                    <label htmlFor="phone" className="block text-sm text-[#545454] mb-2 font-medium">
                                        Phone number <span className="text-[#a8b87c]">(optional)</span>
                                    </label>
                                    <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'phone' ? 'ring-2 ring-[#687b0a]/20' : ''}`}>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('phone')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full px-4 py-4 rounded-xl border-2 border-[#e8e4d9] bg-[#faf8f3] text-[#3d4a28] focus:outline-none focus:border-[#687b0a] transition-all duration-300"
                                            placeholder="(555) 123-4567"
                                        />
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#687b0a] to-[#a8b87c] rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: focusedField === 'phone' ? '100%' : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Preferred contact */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.25 }}
                                >
                                    <label htmlFor="preferredContact" className="block text-sm text-[#545454] mb-2 font-medium">
                                        Preferred contact method
                                    </label>
                                    <select
                                        id="preferredContact"
                                        name="preferredContact"
                                        value={formData.preferredContact}
                                        onChange={handleChange}
                                        className="w-full px-4 py-4 rounded-xl border-2 border-[#e8e4d9] bg-[#faf8f3] text-[#3d4a28] focus:outline-none focus:border-[#687b0a] transition-all duration-300 cursor-pointer"
                                    >
                                        <option value="email">Email</option>
                                        <option value="phone">Phone</option>
                                    </select>
                                </motion.div>

                                {/* Message field */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="relative"
                                >
                                    <label htmlFor="message" className="block text-sm text-[#545454] mb-2 font-medium">
                                        How can I help?
                                    </label>
                                    <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'message' ? 'ring-2 ring-[#687b0a]/20' : ''}`}>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            rows={5}
                                            className="w-full px-4 py-4 rounded-xl border-2 border-[#e8e4d9] bg-[#faf8f3] text-[#3d4a28] focus:outline-none focus:border-[#687b0a] transition-all duration-300 resize-none"
                                            placeholder="Share a bit about what brings you here, or any questions you have..."
                                        />
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#687b0a] to-[#a8b87c] rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: focusedField === 'message' ? '100%' : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Submit button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.35 }}
                                >
                                    <motion.button
                                        type="submit"
                                        className="group w-full py-4 rounded-full font-medium relative overflow-hidden"
                                        style={{ background: 'linear-gradient(135deg, #687b0a 0%, #7a8f1a 100%)' }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }}
                                            animate={{ x: ['-100%', '200%'] }}
                                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                                        />
                                        <span className="relative text-white flex items-center justify-center gap-2">
                                            Send Message
                                            <motion.svg
                                                className="w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                animate={{ x: [0, 4, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </motion.svg>
                                        </span>
                                    </motion.button>
                                </motion.div>

                                <motion.p
                                    className="text-sm text-[#8b7755] text-center flex items-center justify-center gap-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    Your information is confidential and secure.
                                </motion.p>
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
                                <div className="flex items-center gap-3 mb-8">
                                    <motion.div
                                        className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#a8b87c] to-[#687b0a] flex items-center justify-center text-white shadow-lg"
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                    >
                                        <FaLeaf className="w-5 h-5" />
                                    </motion.div>
                                    <h2 className="text-2xl font-light text-[#3d4a28]">
                                        Other ways to connect
                                    </h2>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        {
                                            icon: <FaEnvelope className="w-5 h-5" />,
                                            title: "Email",
                                            value: "hello@infinitepathways.com",
                                            note: "I typically respond within 24-48 hours",
                                        },
                                        {
                                            icon: <FaVideo className="w-5 h-5" />,
                                            title: "Virtual Sessions",
                                            value: "Secure video therapy available",
                                            note: "Connect from wherever you're comfortable",
                                        },
                                        {
                                            icon: <FaClock className="w-5 h-5" />,
                                            title: "Availability",
                                            value: "Weekdays & select evenings",
                                            note: "Flexible scheduling to fit your life",
                                        },
                                    ].map((item, index) => (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start gap-4 group"
                                        >
                                            <motion.div
                                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#687b0a] to-[#a8b87c] flex items-center justify-center flex-shrink-0 text-xl shadow-md"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ type: 'spring', stiffness: 300 }}
                                            >
                                                {item.icon}
                                            </motion.div>
                                            <div>
                                                <h4 className="font-medium text-[#3d4a28] mb-1 group-hover:text-[#687b0a] transition-colors">
                                                    {item.title}
                                                </h4>
                                                <p className="text-[#545454]">{item.value}</p>
                                                <p className="text-sm text-[#a8b87c] mt-1">{item.note}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* What to Expect */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Gradient border */}
                                <div
                                    className="absolute inset-0 rounded-2xl p-[2px]"
                                    style={{
                                        background: 'linear-gradient(135deg, #687b0a 0%, #a8b87c 50%, #d4e4b8 100%)',
                                    }}
                                >
                                    <div className="w-full h-full bg-[#f5f2eb] rounded-2xl" />
                                </div>

                                <div className="relative p-8">
                                    <h3 className="text-xl font-medium text-[#3d4a28] mb-6 flex items-center gap-2">
                                        <HiSparkles className="w-5 h-5 text-[#687b0a]" /> What happens next?
                                    </h3>
                                    <ol className="space-y-5">
                                        {[
                                            "I'll respond to your message within 1-2 business days",
                                            "We'll schedule a brief phone consultation (free, no obligation)",
                                            "If we're a good fit, we'll schedule your first session",
                                        ].map((step, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.2 + index * 0.1 }}
                                                className="flex items-start gap-4 group"
                                            >
                                                <motion.span
                                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#687b0a] to-[#a8b87c] text-white text-sm flex items-center justify-center flex-shrink-0 shadow-md"
                                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    {index + 1}
                                                </motion.span>
                                                <p className="text-[#545454] pt-1 group-hover:text-[#3d4a28] transition-colors">{step}</p>
                                            </motion.li>
                                        ))}
                                    </ol>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Reassurance Section */}
            <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f5f2eb 0%, #e8f0dc 50%, #f5f2eb 100%)' }}>
                {/* Decorative elements */}
                <motion.div
                    className="absolute top-10 left-10 text-[#687b0a] opacity-20"
                    animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <FaSeedling className="w-10 h-10" />
                </motion.div>
                <motion.div
                    className="absolute bottom-10 right-10 text-[#a8b87c] opacity-20"
                    animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                >
                    <FaSpa className="w-10 h-10" />
                </motion.div>

                <div className="max-w-4xl mx-auto px-6 text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Quote marks */}
                        <motion.span
                            className="text-6xl text-[#a8b87c]/30 font-serif leading-none block mb-4"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            "
                        </motion.span>
                        <p className="text-xl md:text-2xl text-[#3d4a28] italic leading-relaxed font-light">
                            Taking the first step is often the hardest part. Whatever brought you here today,
                            I want you to know that reaching out is an{' '}
                            <span className="bg-clip-text text-transparent not-italic font-medium" style={{
                                backgroundImage: 'linear-gradient(135deg, #687b0a 0%, #a8b87c 100%)',
                            }}>act of courage</span>
                            —and you don't have to have it all figured out.
                        </p>
                        <motion.div
                            className="w-16 h-1 mx-auto mt-8 rounded-full bg-gradient-to-r from-[#687b0a] to-[#a8b87c]"
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Contact
