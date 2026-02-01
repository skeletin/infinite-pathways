import { Link } from "react-router"
import { motion } from "motion/react"

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#faf8f3] via-[#f5f2eb] to-[#ebe7db] overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
                        style={{ background: "radial-gradient(circle, rgba(104, 123, 10, 0.3) 0%, transparent 70%)" }}
                        initial={{ x: "-20%", y: "-10%" }}
                        animate={{ x: ["-20%", "-15%", "-20%"], y: ["-10%", "-15%", "-10%"] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
                        style={{ background: "radial-gradient(circle, rgba(180, 150, 100, 0.4) 0%, transparent 70%)" }}
                        initial={{ x: "60%", y: "50%" }}
                        animate={{ x: ["60%", "65%", "60%"], y: ["50%", "55%", "50%"] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <p className="text-[#687b0a] text-sm tracking-[0.2em] uppercase mb-6">
                            Healing Without Limits
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3d4a28] leading-tight mb-8">
                            Your path to healing{" "}
                            <span className="italic font-normal">doesn't have to look</span>{" "}
                            like anyone else's
                        </h1>
                        <p className="text-lg md:text-xl text-[#545454] max-w-2xl mx-auto leading-relaxed mb-10">
                            Therapy that meets you where you are. Together, we'll navigate
                            life's challenges with compassion, understanding, and the belief
                            that growth happens in its own time.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#687b0a] text-white rounded-full hover:bg-[#566608] transition-colors duration-200"
                            >
                                Begin Your Journey
                            </Link>
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center px-8 py-4 border border-[#687b0a] text-[#687b0a] rounded-full hover:bg-[#687b0a]/10 transition-colors duration-200"
                            >
                                Learn More
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-6 h-10 rounded-full border-2 border-[#687b0a]/30 flex justify-center pt-2">
                        <div className="w-1 h-2 bg-[#687b0a]/50 rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-light text-[#3d4a28] mb-6">
                                Healing isn't linear
                            </h2>
                            <p className="text-[#545454] leading-relaxed mb-4">
                                No two paths look the same—and that's exactly how it should be.
                                I believe in creating a space where you feel truly seen and heard,
                                without judgment or expectation.
                            </p>
                            <p className="text-[#545454] leading-relaxed mb-6">
                                As a Licensed Clinical Social Worker, I bring both professional
                                expertise and genuine warmth to our work together. Whether you're
                                facing anxiety, navigating life transitions, or simply seeking
                                a place to process, you don't have to do it alone.
                            </p>
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 text-[#687b0a] hover:gap-3 transition-all duration-200"
                            >
                                More about my approach
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Placeholder for image - decorative element */}
                            <div className="aspect-[4/5] bg-gradient-to-br from-[#e8ecd8] to-[#d4c9b5] rounded-2xl overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full bg-[#687b0a]/10 flex items-center justify-center">
                                        <svg className="w-16 h-16 text-[#687b0a]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#687b0a]/10 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-[#f5f2eb]">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-light text-[#3d4a28] mb-4">
                            What guides this work
                        </h2>
                        <p className="text-[#545454] max-w-2xl mx-auto">
                            Every session is grounded in these core beliefs
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Compassion First",
                                description: "You deserve kindness—from others and from yourself. Here, there's no rush and no pressure to be anywhere other than where you are.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                ),
                            },
                            {
                                title: "Your Pace, Your Path",
                                description: "Healing doesn't follow a timeline. We move at a rhythm that feels right for you, honoring your unique journey and lived experience.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                ),
                            },
                            {
                                title: "Genuine Connection",
                                description: "Therapy works best when you feel safe. I strive to create a warm, authentic relationship where you can show up exactly as you are.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                ),
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#687b0a]/10 flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-[#687b0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {value.icon}
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-[#3d4a28] mb-3">{value.title}</h3>
                                <p className="text-[#545454] leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#3d4a28]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                            Ready to take the first step?
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                            Reaching out can feel vulnerable—and that's okay. I'm here when you're ready,
                            with no pressure and no judgment. Let's start a conversation.
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

export default Home
