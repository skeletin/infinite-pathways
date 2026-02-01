import { motion } from "motion/react"
import { Link } from "react-router"
import { FaHeart, FaLeaf, FaFeatherAlt, FaSpa, FaRegCommentDots, FaHandshake, FaClock, FaLaptop } from "react-icons/fa"
import type { ReactNode } from "react"

const Services = () => {
    const services: Array<{
        title: string
        description: string
        details: string[]
        icon: ReactNode
        gradient: string
    }> = [
            {
                title: "Individual Therapy",
                description: "One-on-one sessions tailored to your unique needs. Whether you're navigating anxiety, depression, life transitions, or simply seeking personal growth, we'll work together at your pace.",
                details: [
                    "50-minute sessions",
                    "Virtual or in-person options",
                    "Flexible scheduling",
                ],
                icon: <FaHeart className="w-6 h-6" />,
                gradient: "from-[#687b0a] to-[#a8b87c]",
            },
            {
                title: "Anxiety & Stress Support",
                description: "Learn to understand your anxiety rather than fight it. Together, we'll develop practical tools and deeper awareness to help you feel more grounded in daily life.",
                details: [
                    "Evidence-based approaches",
                    "Mindfulness integration",
                    "Coping skill development",
                ],
                icon: <FaLeaf className="w-6 h-6" />,
                gradient: "from-[#7a8f1a] to-[#b4c48a]",
            },
            {
                title: "Life Transitions",
                description: "Change—even positive change—can feel overwhelming. Whether it's a new relationship, career shift, loss, or identity exploration, I'm here to support you through it.",
                details: [
                    "Relationship changes",
                    "Career transitions",
                    "Identity exploration",
                ],
                icon: <FaFeatherAlt className="w-6 h-6" />,
                gradient: "from-[#5a6c08] to-[#98a86c]",
            },
            {
                title: "Trauma-Informed Care",
                description: "Healing from trauma requires safety, patience, and understanding. We'll move at your pace, honoring your experience while building resilience and reclaiming your sense of self.",
                details: [
                    "Safe, gradual approach",
                    "Building resilience",
                    "Processing at your pace",
                ],
                icon: <FaSpa className="w-6 h-6" />,
                gradient: "from-[#4a5c14] to-[#8a9a5c]",
            },
        ]

    const approach = [
        {
            title: "We start where you are",
            description: "No two people are alike, so no two therapy journeys should be either. We begin by understanding your unique story, needs, and goals.",
        },
        {
            title: "We build together",
            description: "Therapy is collaborative. I bring clinical expertise; you bring knowledge of yourself. Together, we create a path forward that feels authentic to you.",
        },
        {
            title: "We honor the process",
            description: "Growth isn't always comfortable, but it's always worth it. I'll be with you through the challenges, celebrating progress and holding space for struggle.",
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 relative overflow-hidden">
                {/* Animated gradient background */}
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
                            }}>Services</span>
                            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#a8b87c]" />
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <span className="text-[#3d4a28]">Support that meets you </span>
                            <span className="bg-clip-text text-transparent" style={{
                                backgroundImage: 'linear-gradient(135deg, #687b0a 0%, #a8b87c 50%, #3d4a28 100%)',
                            }}>where you are</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-[#545454] max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Every service is rooted in compassion, flexibility, and the belief
                            that you already have what you need to heal—sometimes you just need
                            someone to help you find it.
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

            {/* Services Grid */}
            <section className="py-20 bg-white relative">
                {/* Decorative background */}
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
                    <motion.div
                        className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-[#d4e4b8]/40"
                        animate={{ y: [0, -25, 0], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
                    />
                </div>

                <div className="max-w-6xl mx-auto px-6 relative">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative bg-[#f5f2eb] p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                            >
                                {/* Gradient top border */}
                                <motion.div
                                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                                />

                                {/* Background glow on hover */}
                                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />

                                {/* Icon */}
                                <motion.div
                                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {service.icon}
                                </motion.div>

                                <h3 className="text-2xl font-light text-[#3d4a28] mb-4 group-hover:text-[#687b0a] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-[#545454] leading-relaxed mb-6">{service.description}</p>

                                <ul className="space-y-3">
                                    {service.details.map((detail, i) => (
                                        <motion.li
                                            key={detail}
                                            className="flex items-center gap-3 text-sm text-[#545454]"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                        >
                                            <motion.div
                                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}
                                                whileHover={{ scale: 1.5 }}
                                            />
                                            {detail}
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Animated bottom line */}
                                <motion.div
                                    className={`h-0.5 w-0 group-hover:w-16 bg-gradient-to-r ${service.gradient} rounded-full mt-6 transition-all duration-500`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-20 bg-[#f5f2eb] relative overflow-hidden">
                {/* Decorative orbs */}
                <motion.div
                    className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl bg-[#d4e4b8]/30"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-3xl bg-[#a8b87c]/20"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />

                <div className="max-w-6xl mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.div className="inline-flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-[#a8b87c]" />
                            <span className="text-sm uppercase tracking-[0.2em] text-[#687b0a]">The Process</span>
                            <span className="h-px w-8 bg-[#a8b87c]" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-light text-[#3d4a28] mb-4">
                            How we'll work together
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting line */}
                        <div className="hidden md:block absolute top-14 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-[#a8b87c] to-transparent" />

                        {approach.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center relative group"
                            >
                                {/* Animated number circle */}
                                <motion.div
                                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#687b0a] to-[#a8b87c] text-white flex items-center justify-center mx-auto mb-6 text-xl font-medium shadow-lg relative z-10"
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {index + 1}
                                </motion.div>

                                {/* Pulsing ring */}
                                <motion.div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-2 border-[#a8b87c]/30"
                                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                />

                                <h3 className="text-xl font-medium text-[#3d4a28] mb-3 group-hover:text-[#687b0a] transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-[#545454] leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white relative">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.div className="inline-flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-[#a8b87c]" />
                            <span className="text-sm uppercase tracking-[0.2em] text-[#687b0a]">FAQ</span>
                            <span className="h-px w-8 bg-[#a8b87c]" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-light text-[#3d4a28] mb-4">
                            Common questions
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "How do I know if therapy is right for me?",
                                a: "If you're asking this question, that curiosity is a good sign. Therapy can benefit anyone seeking support, clarity, or personal growth—you don't need to be in crisis to reach out.",
                                icon: <FaRegCommentDots className="w-5 h-5" />,
                            },
                            {
                                q: "What can I expect in our first session?",
                                a: "Our first session is about connection and understanding. We'll talk about what brought you here, what you're hoping for, and whether we feel like a good fit. There's no pressure—just conversation.",
                                icon: <FaHandshake className="w-5 h-5" />,
                            },
                            {
                                q: "How long does therapy take?",
                                a: "There's no one-size-fits-all answer. Some people find what they need in a few months; others benefit from longer-term support. We'll check in regularly about what's working for you.",
                                icon: <FaClock className="w-5 h-5" />,
                            },
                            {
                                q: "Do you offer virtual sessions?",
                                a: "Yes! I offer secure video sessions that allow you to receive support from the comfort of your own space. Many clients find virtual therapy just as meaningful as in-person work.",
                                icon: <FaLaptop className="w-5 h-5" />,
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                className="group bg-[#f5f2eb] p-6 rounded-2xl relative overflow-hidden hover:shadow-lg transition-all duration-300"
                            >
                                {/* Left gradient accent */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#687b0a] via-[#a8b87c] to-[#d4e4b8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="flex gap-4">
                                    <motion.div
                                        className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#687b0a] to-[#a8b87c] flex items-center justify-center text-white shrink-0"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        {faq.icon}
                                    </motion.div>
                                    <div>
                                        <h4 className="font-medium text-[#3d4a28] mb-2 text-lg group-hover:text-[#687b0a] transition-colors">
                                            {faq.q}
                                        </h4>
                                        <p className="text-[#545454] leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                {/* Gradient background */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, #3d4a28 0%, #4a5832 30%, #536340 60%, #3d4a28 100%)',
                    }}
                />

                {/* Animated orbs */}
                <motion.div
                    className="absolute w-96 h-96 rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(168, 184, 124, 0.15) 0%, transparent 60%)' }}
                    animate={{ x: ['10%', '15%', '10%'], y: ['20%', '25%', '20%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute w-80 h-80 rounded-full blur-3xl right-0 bottom-0"
                    style={{ background: 'radial-gradient(circle, rgba(212, 228, 184, 0.2) 0%, transparent 60%)' }}
                    animate={{ x: ['-10%', '-15%', '-10%'], y: ['-20%', '-25%', '-20%'] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Decorative dots */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />

                <div className="max-w-4xl mx-auto px-6 text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="w-16 h-1 bg-gradient-to-r from-[#a8b87c] to-[#d4e4b8] mx-auto mb-8 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            viewport={{ once: true }}
                        />
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
                            Ready to{' '}
                            <span className="bg-clip-text text-transparent" style={{
                                backgroundImage: 'linear-gradient(135deg, #d4e4b8 0%, #a8b87c 100%)',
                            }}>start</span>?
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                            Taking the first step is often the hardest part. Reach out whenever
                            you're ready—I'm here to answer questions and explore how we might
                            work together.
                        </p>
                        <Link to="/contact">
                            <motion.div
                                className="group inline-flex items-center justify-center px-10 py-5 bg-white text-[#3d4a28] rounded-full font-medium relative overflow-hidden"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-[#f5f2eb] to-white"
                                    initial={{ x: '100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative flex items-center gap-2">
                                    Schedule a Consultation
                                    <motion.svg
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </motion.svg>
                                </span>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Services
