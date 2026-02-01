import { motion } from "motion/react"
import { Link } from "react-router"
import profilePhoto from "../../../../public/images/me.avif"

const About = () => {
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
                            About
                        </p>
                        <h1 className="text-4xl md:text-5xl font-light text-[#3d4a28] leading-tight mb-6">
                            The heart behind the practice
                        </h1>
                        <p className="text-lg text-[#545454] max-w-2xl mx-auto">
                            I believe that everyone deserves a space where they can be fully themselves—
                            messy, uncertain, and beautifully human.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Avatar and heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center mb-12"
                    >
                        <div className="relative mb-6">
                            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg ring-4 ring-[#687b0a]/10">
                                <img
                                    src={profilePhoto}
                                    alt="Therapist profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative ring */}
                            <div className="absolute -inset-2 rounded-full border-2 border-dashed border-[#687b0a]/20 -z-10" />
                        </div>
                        <h2 className="text-3xl font-light text-[#3d4a28]">
                            My Story
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4 text-[#545454] leading-relaxed text-center max-w-2xl mx-auto"
                    >
                        <p>
                            I didn't come to this work by accident. Like many helpers, my path
                            was shaped by my own experiences of navigating life's complexities—
                            the moments that challenged me, the relationships that taught me,
                            and the healing that transformed me.
                        </p>
                        <p>
                            As a Licensed Clinical Social Worker, I've had the privilege of
                            walking alongside people through some of their most vulnerable moments.
                            What I've learned is that healing rarely looks the way we expect it to.
                            It's not always linear, and it certainly doesn't follow a script.
                        </p>
                        <p>
                            That's exactly why I do this work. I believe in meeting people where
                            they are—not where they "should" be. I believe in the power of genuine
                            connection, in creating space for all the parts of yourself you've
                            been taught to hide.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-[#f5f2eb]">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-light text-[#3d4a28] mb-4">
                            Values that shape my work
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Authenticity Over Perfection",
                                description: "I show up as my genuine self and invite you to do the same. There's no need for performance here—just real, honest connection.",
                            },
                            {
                                title: "Curiosity, Not Judgment",
                                description: "Every thought, feeling, and behavior makes sense in context. Together, we'll explore with curiosity rather than criticism.",
                            },
                            {
                                title: "Your Wisdom Matters",
                                description: "You are the expert on your own life. My role is to help you access the wisdom you already carry within you.",
                            },
                            {
                                title: "Growth at Your Pace",
                                description: "Healing can't be rushed. I honor your timeline and trust that meaningful change unfolds when you're ready.",
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl"
                            >
                                <h3 className="text-xl font-medium text-[#3d4a28] mb-3">{value.title}</h3>
                                <p className="text-[#545454] leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Credentials Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-light text-[#3d4a28] mb-4">
                            Education & Training
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#f5f2eb] p-8 md:p-12 rounded-2xl"
                    >
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#687b0a] mt-2 flex-shrink-0" />
                                <div>
                                    <h4 className="font-medium text-[#3d4a28]">Licensed Clinical Social Worker (LCSW)</h4>
                                    <p className="text-[#545454] text-sm">State Licensed</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#687b0a] mt-2 flex-shrink-0" />
                                <div>
                                    <h4 className="font-medium text-[#3d4a28]">Master of Social Work (MSW)</h4>
                                    <p className="text-[#545454] text-sm">Clinical Concentration</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#687b0a] mt-2 flex-shrink-0" />
                                <div>
                                    <h4 className="font-medium text-[#3d4a28]">Specialized Training</h4>
                                    <p className="text-[#545454] text-sm">Trauma-Informed Care, Mindfulness-Based Approaches</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
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
                            I'd love to hear from you
                        </h2>
                        <p className="text-white/80 text-lg mb-10">
                            Whether you're ready to schedule or just have questions,
                            I'm here to help.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#3d4a28] rounded-full hover:bg-[#f5f2eb] transition-colors duration-200"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default About
