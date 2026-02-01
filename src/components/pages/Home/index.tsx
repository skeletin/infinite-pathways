import { Link } from "react-router"
import { motion } from "motion/react"
import HealingSection from "../../3d/HealingSection"

// Floating particle component
const FloatingParticle = ({ delay, size, left, top, duration }: { delay: number; size: number; left: string; top: string; duration: number }) => (
    <motion.div
        className="absolute rounded-full bg-gradient-to-br from-[#a8b87c]/40 to-[#687b0a]/20"
        style={{ width: size, height: size, left, top }}
        animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
        }}
        transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
)

const Home = () => {
    // Text animation variants
    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.03,
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        }),
    }

    const tagline = "Healing Without Limits"

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(135deg, #faf8f3 0%, #f0efe8 25%, #e8f0dc 50%, #f5f7f0 75%, #faf8f3 100%)',
                        }}
                    />
                    {/* Animated mesh overlay */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            background: [
                                'radial-gradient(ellipse 100% 100% at 20% 30%, rgba(168, 184, 124, 0.2) 0%, transparent 50%)',
                                'radial-gradient(ellipse 100% 100% at 30% 40%, rgba(168, 184, 124, 0.25) 0%, transparent 50%)',
                                'radial-gradient(ellipse 100% 100% at 20% 30%, rgba(168, 184, 124, 0.2) 0%, transparent 50%)',
                            ],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                {/* Decorative orbs */}
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
                    style={{ background: "radial-gradient(circle, rgba(104, 123, 10, 0.15) 0%, transparent 60%)" }}
                    initial={{ x: "-30%", y: "-20%" }}
                    animate={{
                        x: ["-30%", "-25%", "-30%"],
                        y: ["-20%", "-25%", "-20%"],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
                    style={{ background: "radial-gradient(circle, rgba(212, 228, 184, 0.3) 0%, transparent 60%)" }}
                    initial={{ x: "50%", y: "40%" }}
                    animate={{
                        x: ["50%", "55%", "50%"],
                        y: ["40%", "45%", "40%"],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
                    style={{ background: "radial-gradient(circle, rgba(180, 150, 100, 0.15) 0%, transparent 60%)" }}
                    initial={{ x: "70%", y: "-10%" }}
                    animate={{
                        x: ["70%", "75%", "70%"],
                        y: ["-10%", "-5%", "-10%"],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                    <FloatingParticle delay={0} size={8} left="10%" top="20%" duration={6} />
                    <FloatingParticle delay={1} size={6} left="25%" top="60%" duration={8} />
                    <FloatingParticle delay={2} size={10} left="80%" top="30%" duration={7} />
                    <FloatingParticle delay={1.5} size={5} left="70%" top="70%" duration={9} />
                    <FloatingParticle delay={3} size={7} left="90%" top="50%" duration={6} />
                    <FloatingParticle delay={0.5} size={4} left="15%" top="80%" duration={8} />
                </div>

                {/* Decorative lines */}
                <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-40"
                    style={{ background: 'linear-gradient(to bottom, transparent, #a8b87c, transparent)' }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 160 }}
                    transition={{ duration: 1.5, delay: 1 }}
                />
                <motion.div
                    className="absolute right-0 top-1/3 w-px h-32"
                    style={{ background: 'linear-gradient(to bottom, transparent, #687b0a, transparent)' }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 128 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    {/* Animated tagline */}
                    <motion.div
                        className="flex justify-center gap-1 mb-8"
                        initial="hidden"
                        animate="visible"
                    >
                        {tagline.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                className="text-sm tracking-[0.2em] uppercase"
                                style={{
                                    background: 'linear-gradient(135deg, #687b0a 0%, #a8b87c 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                                custom={i}
                                variants={letterVariants}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Main headline with staggered animation */}
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8"
                        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] as const }}
                    >
                        <span className="text-[#3d4a28]">Your path to healing </span>
                        <span className="italic font-normal bg-clip-text text-transparent" style={{
                            backgroundImage: 'linear-gradient(135deg, #3d4a28 0%, #687b0a 50%, #a8b87c 100%)',
                        }}>doesn't have to look</span>
                        <span className="text-[#3d4a28]"> like anyone else's</span>
                    </motion.h1>

                    {/* Animated underline */}
                    <motion.div
                        className="w-32 h-1 mx-auto mb-8 rounded-full overflow-hidden"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 128, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <motion.div
                            className="h-full w-full"
                            style={{
                                background: 'linear-gradient(90deg, #687b0a, #a8b87c, #d4e4b8, #a8b87c, #687b0a)',
                                backgroundSize: '200% 100%',
                            }}
                            animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        />
                    </motion.div>

                    <motion.p
                        className="text-lg md:text-xl text-[#545454] max-w-2xl mx-auto leading-relaxed mb-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Therapy that meets you where you are. Together, we'll navigate
                        life's challenges with compassion, understanding, and the belief
                        that growth happens in its own time.
                    </motion.p>

                    {/* Animated buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <Link to="/contact">
                            <motion.div
                                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full overflow-hidden"
                                style={{ background: 'linear-gradient(135deg, #687b0a 0%, #7a8f1a 100%)' }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }}
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                                />
                                <span className="relative text-white font-medium">Begin Your Journey</span>
                            </motion.div>
                        </Link>
                        <Link to="/about">
                            <motion.div
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#687b0a] text-[#687b0a] rounded-full relative overflow-hidden group"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-[#687b0a] origin-left"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative group-hover:text-white transition-colors duration-300 font-medium">Learn More</span>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-6 h-10 rounded-full border-2 border-[#687b0a]/30 flex justify-center pt-2">
                            <motion.div
                                className="w-1 h-2 bg-[#687b0a] rounded-full"
                                animate={{ height: [8, 14, 8], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Intro Section - 3D Canvas with integrated HTML */}
            <section className="bg-white">
                <HealingSection className="w-full h-[600px]" />
            </section>

            {/* Values Section */}
            <section className="py-24 bg-[#f5f2eb] relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl bg-[#d4e4b8]/30"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full blur-3xl bg-[#a8b87c]/20"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />
                </div>

                <div className="max-w-6xl mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            className="inline-flex items-center gap-3 mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="h-px w-8 bg-[#a8b87c]" />
                            <span className="text-sm uppercase tracking-[0.2em] text-[#687b0a]">Core Values</span>
                            <span className="h-px w-8 bg-[#a8b87c]" />
                        </motion.div>
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
                                gradient: 'from-[#687b0a] to-[#a8b87c]',
                            },
                            {
                                title: "Your Pace, Your Path",
                                description: "Healing doesn't follow a timeline. We move at a rhythm that feels right for you, honoring your unique journey and lived experience.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                ),
                                gradient: 'from-[#7a8f1a] to-[#b4c48a]',
                            },
                            {
                                title: "Genuine Connection",
                                description: "Therapy works best when you feel safe. I strive to create a warm, authentic relationship where you can show up exactly as you are.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                ),
                                gradient: 'from-[#5a6c08] to-[#98a86c]',
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                {/* Gradient border on hover */}
                                <motion.div
                                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    style={{ padding: '2px' }}
                                >
                                    <div className="absolute inset-[2px] bg-white rounded-2xl" />
                                </motion.div>

                                <div className="relative">
                                    {/* Animated icon container */}
                                    <motion.div
                                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {value.icon}
                                        </svg>
                                    </motion.div>
                                    <h3 className="text-xl font-medium text-[#3d4a28] mb-3">{value.title}</h3>
                                    <p className="text-[#545454] leading-relaxed">{value.description}</p>

                                    {/* Animated line */}
                                    <motion.div
                                        className={`h-1 w-0 group-hover:w-12 bg-gradient-to-r ${value.gradient} rounded-full mt-4 transition-all duration-300`}
                                    />
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
                    animate={{
                        x: ['10%', '15%', '10%'],
                        y: ['20%', '25%', '20%'],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute w-80 h-80 rounded-full blur-3xl right-0 bottom-0"
                    style={{ background: 'radial-gradient(circle, rgba(104, 123, 10, 0.2) 0%, transparent 60%)' }}
                    animate={{
                        x: ['-10%', '-15%', '-10%'],
                        y: ['-20%', '-25%', '-20%'],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Decorative pattern overlay */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
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
                            transition={{ duration: 0.8 }}
                        />
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
                            Ready to take the{' '}
                            <span className="bg-clip-text text-transparent" style={{
                                backgroundImage: 'linear-gradient(135deg, #d4e4b8 0%, #a8b87c 100%)',
                            }}>
                                first step
                            </span>?
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                            Reaching out can feel vulnerable—and that's okay. I'm here when you're ready,
                            with no pressure and no judgment. Let's start a conversation.
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

export default Home
