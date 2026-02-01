import { motion } from "motion/react"
import { Link } from "react-router"

const Services = () => {
    const services = [
        {
            title: "Individual Therapy",
            description: "One-on-one sessions tailored to your unique needs. Whether you're navigating anxiety, depression, life transitions, or simply seeking personal growth, we'll work together at your pace.",
            details: [
                "50-minute sessions",
                "Virtual or in-person options",
                "Flexible scheduling",
            ],
        },
        {
            title: "Anxiety & Stress Support",
            description: "Learn to understand your anxiety rather than fight it. Together, we'll develop practical tools and deeper awareness to help you feel more grounded in daily life.",
            details: [
                "Evidence-based approaches",
                "Mindfulness integration",
                "Coping skill development",
            ],
        },
        {
            title: "Life Transitions",
            description: "Change—even positive change—can feel overwhelming. Whether it's a new relationship, career shift, loss, or identity exploration, I'm here to support you through it.",
            details: [
                "Relationship changes",
                "Career transitions",
                "Identity exploration",
            ],
        },
        {
            title: "Trauma-Informed Care",
            description: "Healing from trauma requires safety, patience, and understanding. We'll move at your pace, honoring your experience while building resilience and reclaiming your sense of self.",
            details: [
                "Safe, gradual approach",
                "Building resilience",
                "Processing at your pace",
            ],
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
                            Services
                        </p>
                        <h1 className="text-4xl md:text-5xl font-light text-[#3d4a28] leading-tight mb-6">
                            Support that meets you where you are
                        </h1>
                        <p className="text-lg text-[#545454] max-w-2xl mx-auto">
                            Every service is rooted in compassion, flexibility, and the belief
                            that you already have what you need to heal—sometimes you just need
                            someone to help you find it.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#f5f2eb] p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                            >
                                <h3 className="text-2xl font-light text-[#3d4a28] mb-4">{service.title}</h3>
                                <p className="text-[#545454] leading-relaxed mb-6">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.details.map((detail) => (
                                        <li key={detail} className="flex items-center gap-3 text-sm text-[#545454]">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#687b0a]" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-20 bg-[#f5f2eb]">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-light text-[#3d4a28] mb-4">
                            How we'll work together
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {approach.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#687b0a] text-white flex items-center justify-center mx-auto mb-6 text-lg">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-medium text-[#3d4a28] mb-3">{step.title}</h3>
                                <p className="text-[#545454] leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-light text-[#3d4a28] mb-4">
                            Common questions
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "How do I know if therapy is right for me?",
                                a: "If you're asking this question, that curiosity is a good sign. Therapy can benefit anyone seeking support, clarity, or personal growth—you don't need to be in crisis to reach out.",
                            },
                            {
                                q: "What can I expect in our first session?",
                                a: "Our first session is about connection and understanding. We'll talk about what brought you here, what you're hoping for, and whether we feel like a good fit. There's no pressure—just conversation.",
                            },
                            {
                                q: "How long does therapy take?",
                                a: "There's no one-size-fits-all answer. Some people find what they need in a few months; others benefit from longer-term support. We'll check in regularly about what's working for you.",
                            },
                            {
                                q: "Do you offer virtual sessions?",
                                a: "Yes! I offer secure video sessions that allow you to receive support from the comfort of your own space. Many clients find virtual therapy just as meaningful as in-person work.",
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-[#f5f2eb] p-6 rounded-xl"
                            >
                                <h4 className="font-medium text-[#3d4a28] mb-2">{faq.q}</h4>
                                <p className="text-[#545454] leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#3d4a28]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-light text-white mb-6">
                            Ready to start?
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                            Taking the first step is often the hardest part. Reach out whenever
                            you're ready—I'm here to answer questions and explore how we might
                            work together.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#3d4a28] rounded-full hover:bg-[#f5f2eb] transition-colors duration-200"
                        >
                            Schedule a Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Services
