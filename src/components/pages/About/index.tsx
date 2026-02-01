import { motion } from "motion/react"
import { Link } from "react-router"
import { FaStar, FaSearch, FaLightbulb, FaSeedling, FaGraduationCap, FaScroll, FaCertificate } from "react-icons/fa"

const profilePhoto = "/images/me.avif"

const About = () => {
    const staggerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

                {/* Animated orbs */}
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(168, 184, 124, 0.2) 0%, transparent 60%)' }}
                    initial={{ x: '-20%', y: '-30%' }}
                    animate={{ x: ['-20%', '-15%', '-20%'], y: ['-30%', '-25%', '-30%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full blur-3xl right-0"
                    style={{ background: 'radial-gradient(circle, rgba(212, 228, 184, 0.25) 0%, transparent 60%)' }}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="max-w-4xl mx-auto px-6 relative">
                    <motion.div
                        className="text-center"
                        variants={staggerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#a8b87c]" />
                            <span className="text-sm tracking-[0.2em] uppercase bg-clip-text text-transparent" style={{
                                backgroundImage: 'linear-gradient(135deg, #687b0a 0%, #a8b87c 100%)',
                            }}>About</span>
                            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#a8b87c]" />
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3d4a28] leading-tight mb-6"
                        >
                            The heart behind{' '}
                            <span className="bg-clip-text text-transparent" style={{
                                backgroundImage: 'linear-gradient(135deg, #687b0a 0%, #a8b87c 50%, #3d4a28 100%)',
                            }}>the practice</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-[#545454] max-w-2xl mx-auto leading-relaxed"
                        >
                            I believe that everyone deserves a space where they can be fully themselves—
                            messy, uncertain, and beautifully human.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="mt-8"
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

            {/* Story Section */}
            <section className="py-20 bg-white relative">
                {/* Decorative background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        className="absolute top-20 left-10 w-2 h-2 rounded-full bg-[#a8b87c]/40"
                        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute top-40 right-20 w-3 h-3 rounded-full bg-[#687b0a]/20"
                        animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    />
                    <motion.div
                        className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-[#d4e4b8]/50"
                        animate={{ y: [0, -25, 0], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                    />
                </div>

                <div className="max-w-4xl mx-auto px-6 relative">
                    {/* Avatar and heading */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center mb-12"
                    >
                        <div className="relative mb-8">
                            {/* Animated rings */}
                            <motion.div
                                className="absolute -inset-4 rounded-full border-2 border-[#a8b87c]/20"
                                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -inset-8 rounded-full border border-[#687b0a]/10"
                                animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                            />

                            {/* Photo container */}
                            <motion.div
                                className="w-44 h-44 rounded-full overflow-hidden shadow-2xl ring-4 ring-white relative"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#3d4a28]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10" />
                                <img
                                    src={profilePhoto}
                                    alt="Therapist profile"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Decorative accent */}
                            <motion.div
                                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#687b0a] to-[#a8b87c] flex items-center justify-center shadow-lg"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, type: 'spring' }}
                            >
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </motion.div>
                        </div>

                        <motion.h2
                            className="text-3xl md:text-4xl font-light text-[#3d4a28]"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            My Story
                        </motion.h2>
                        <motion.div
                            className="w-12 h-1 mt-4 rounded-full bg-gradient-to-r from-[#687b0a] to-[#a8b87c]"
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6 text-[#545454] leading-relaxed text-center max-w-2xl mx-auto"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg"
                        >
                            I didn't come to this work by accident. Like many helpers, my path
                            was shaped by my own experiences of navigating life's complexities—
                            the moments that <span className="text-[#3d4a28] font-medium">challenged me</span>,
                            the relationships that <span className="text-[#3d4a28] font-medium">taught me</span>,
                            and the healing that <span className="text-[#687b0a] font-medium">transformed me</span>.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-lg"
                        >
                            As a Licensed Clinical Social Worker, I've had the privilege of
                            walking alongside people through some of their most vulnerable moments.
                            What I've learned is that healing rarely looks the way we expect it to.
                            It's not always linear, and it certainly doesn't follow a script.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-lg"
                        >
                            That's exactly why I do this work. I believe in meeting people where
                            they are—not where they "should" be. I believe in the power of{' '}
                            <span className="italic text-[#687b0a]">genuine connection</span>,
                            in creating space for all the parts of yourself you've been taught to hide.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-[#f5f2eb] relative overflow-hidden">
                {/* Decorative elements */}
                <motion.div
                    className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl bg-[#d4e4b8]/30"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full blur-3xl bg-[#a8b87c]/20"
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
                            <span className="text-sm uppercase tracking-[0.2em] text-[#687b0a]">Guiding Principles</span>
                            <span className="h-px w-8 bg-[#a8b87c]" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-light text-[#3d4a28] mb-4">
                            Values that shape my work
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Authenticity Over Perfection",
                                description: "I show up as my genuine self and invite you to do the same. There's no need for performance here—just real, honest connection.",
                                icon: <FaStar className="w-5 h-5" />,
                            },
                            {
                                title: "Curiosity, Not Judgment",
                                description: "Every thought, feeling, and behavior makes sense in context. Together, we'll explore with curiosity rather than criticism.",
                                icon: <FaSearch className="w-5 h-5" />,
                            },
                            {
                                title: "Your Wisdom Matters",
                                description: "You are the expert on your own life. My role is to help you access the wisdom you already carry within you.",
                                icon: <FaLightbulb className="w-5 h-5" />,
                            },
                            {
                                title: "Growth at Your Pace",
                                description: "Healing can't be rushed. I honor your timeline and trust that meaningful change unfolds when you're ready.",
                                icon: <FaSeedling className="w-5 h-5" />,
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Gradient accent on hover */}
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#687b0a] via-[#a8b87c] to-[#d4e4b8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                                />

                                {/* Icon */}
                                <motion.div
                                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#687b0a] to-[#a8b87c] flex items-center justify-center text-white mb-4 shadow-md"
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {value.icon}
                                </motion.div>

                                <h3 className="text-xl font-medium text-[#3d4a28] mb-3 group-hover:text-[#687b0a] transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-[#545454] leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Credentials Section */}
            <section className="py-20 bg-white relative">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.div className="inline-flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-[#a8b87c]" />
                            <span className="text-sm uppercase tracking-[0.2em] text-[#687b0a]">Credentials</span>
                            <span className="h-px w-8 bg-[#a8b87c]" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-light text-[#3d4a28] mb-4">
                            Education & Training
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Background card with gradient border */}
                        <div
                            className="absolute inset-0 rounded-3xl p-[2px]"
                            style={{
                                background: 'linear-gradient(135deg, #687b0a 0%, #a8b87c 50%, #d4e4b8 100%)',
                            }}
                        >
                            <div className="w-full h-full bg-[#f5f2eb] rounded-3xl" />
                        </div>

                        <div className="relative p-8 md:p-12">
                            <div className="space-y-8">
                                {[
                                    {
                                        title: "Licensed Clinical Social Worker (LCSW)",
                                        subtitle: "State Licensed",
                                        icon: <FaGraduationCap className="w-5 h-5" />,
                                    },
                                    {
                                        title: "Master of Social Work (MSW)",
                                        subtitle: "Clinical Concentration",
                                        icon: <FaScroll className="w-5 h-5" />,
                                    },
                                    {
                                        title: "Specialized Training",
                                        subtitle: "Trauma-Informed Care, Mindfulness-Based Approaches",
                                        icon: <FaCertificate className="w-5 h-5" />,
                                    },
                                ].map((cred, index) => (
                                    <motion.div
                                        key={cred.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <motion.div
                                            className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#687b0a] to-[#a8b87c] flex items-center justify-center text-white shadow-md"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            {cred.icon}
                                        </motion.div>
                                        <div>
                                            <h4 className="font-medium text-[#3d4a28] text-lg group-hover:text-[#687b0a] transition-colors">
                                                {cred.title}
                                            </h4>
                                            <p className="text-[#545454]">{cred.subtitle}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
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

                {/* Animated elements */}
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
                            I'd love to{' '}
                            <span className="bg-clip-text text-transparent" style={{
                                backgroundImage: 'linear-gradient(135deg, #d4e4b8 0%, #a8b87c 100%)',
                            }}>hear from you</span>
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                            Whether you're ready to schedule or just have questions,
                            I'm here to help.
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
                                    Get in Touch
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

export default About
