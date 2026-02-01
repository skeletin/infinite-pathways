import { Link } from "react-router"
import { motion } from "motion/react"
import { FaSpa } from "react-icons/fa"

// Floating particle component - hidden on mobile for performance
const FloatingParticle = ({ delay, size, left, top, duration }: { delay: number; size: number; left: string; top: string; duration: number }) => (
    <motion.div
        className="absolute rounded-full bg-gradient-to-br from-[#a8b87c]/40 to-[#687b0a]/20 hidden md:block"
        style={{ width: size, height: size, left, top, willChange: 'transform, opacity' }}
        animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
)

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[100svh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
                {/* Static gradient background - no animation for better mobile performance */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, #faf8f3 0%, #f0efe8 25%, #e8f0dc 50%, #f5f7f0 75%, #faf8f3 100%)',
                    }}
                />

                {/* Subtle animated overlay - only on desktop */}
                <motion.div
                    className="absolute inset-0 hidden md:block"
                    style={{ willChange: 'opacity' }}
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div
                        className="absolute inset-0"
                        style={{ background: 'radial-gradient(ellipse 80% 80% at 30% 40%, rgba(168, 184, 124, 0.2) 0%, transparent 50%)' }}
                    />
                </motion.div>

                {/* Decorative orbs - simplified animations, hidden smallest on mobile */}
                <motion.div
                    className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-3xl -top-20 -left-20"
                    style={{
                        background: "radial-gradient(circle, rgba(104, 123, 10, 0.12) 0%, transparent 60%)",
                        willChange: 'transform',
                    }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full blur-3xl -bottom-10 -right-10"
                    style={{
                        background: "radial-gradient(circle, rgba(212, 228, 184, 0.2) 0%, transparent 60%)",
                        willChange: 'transform',
                    }}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating particles - desktop only */}
                <div className="absolute inset-0 pointer-events-none hidden md:block">
                    <FloatingParticle delay={0} size={8} left="10%" top="20%" duration={8} />
                    <FloatingParticle delay={2} size={6} left="80%" top="30%" duration={10} />
                    <FloatingParticle delay={1} size={5} left="70%" top="70%" duration={9} />
                </div>

                {/* Decorative lines - desktop only */}
                <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-40 hidden md:block"
                    style={{ background: 'linear-gradient(to bottom, transparent, #a8b87c, transparent)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                />

                <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
                    {/* Tagline - simple fade animation */}
                    <motion.p
                        className="text-sm tracking-[0.2em] uppercase mb-6 md:mb-8 font-semibold"
                        style={{
                            background: 'linear-gradient(135deg, #687b0a 0%, #a8b87c 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Healing Without Limits
                    </motion.p>

                    {/* Main headline */}
                    <motion.h1
                        className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 md:mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <span className="text-[#3d4a28]">Your path to healing </span>
                        <span className="italic font-normal bg-clip-text text-transparent" style={{
                            backgroundImage: 'linear-gradient(135deg, #3d4a28 0%, #687b0a 50%, #a8b87c 100%)',
                        }}>doesn't have to look</span>
                        <span className="text-[#3d4a28]"> like anyone else's</span>
                    </motion.h1>

                    {/* Simple decorative line */}
                    <motion.div
                        className="w-24 md:w-32 h-1 mx-auto mb-6 md:mb-8 rounded-full"
                        style={{ background: 'linear-gradient(90deg, #687b0a, #a8b87c, #d4e4b8)' }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    />

                    <motion.p
                        className="text-base md:text-xl text-[#545454] max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 px-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Therapy that meets you where you are. Together, we'll navigate
                        life's challenges with compassion, understanding, and the belief
                        that growth happens in its own time.
                    </motion.p>

                    {/* Buttons - simplified animations */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Link to="/contact">
                            <div
                                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-medium transition-transform duration-200 hover:scale-105 active:scale-95"
                                style={{ background: 'linear-gradient(135deg, #687b0a 0%, #7a8f1a 100%)' }}
                            >
                                Begin Your Journey
                            </div>
                        </Link>
                        <Link to="/about">
                            <div
                                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-[#687b0a] text-[#687b0a] rounded-full font-medium transition-all duration-200 hover:bg-[#687b0a] hover:text-white active:scale-95"
                            >
                                Learn More
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll indicator - hidden on mobile */}
                <motion.div
                    className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <div className="w-6 h-10 rounded-full border-2 border-[#687b0a]/30 flex justify-center pt-2">
                        <div className="w-1 h-3 bg-[#687b0a]/50 rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Animated accent */}
                            <motion.div
                                className="flex items-center gap-3 mb-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <motion.span
                                    className="h-px w-8 bg-gradient-to-r from-[#a8b87c] to-[#687b0a]"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 32 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                />
                                <span className="text-sm uppercase tracking-[0.2em] text-[#687b0a] font-medium">
                                    My Philosophy
                                </span>
                            </motion.div>

                            {/* Animated title with gradient */}
                            <motion.h2
                                className="text-4xl md:text-5xl font-light mb-8 leading-[1.1]"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <span className="block text-[#3d4a28]">Healing isn't</span>
                                <span
                                    className="block bg-clip-text text-transparent"
                                    style={{ backgroundImage: 'linear-gradient(135deg, #687b0a 0%, #a8b87c 50%, #4a5c14 100%)' }}
                                >
                                    linear
                                </span>
                            </motion.h2>

                            {/* Animated decorative element */}
                            <motion.div
                                className="w-24 h-1 mb-8 rounded-full overflow-hidden"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="h-full w-full"
                                    style={{ background: 'linear-gradient(90deg, #687b0a, #a8b87c, #d4e4b8)' }}
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </motion.div>

                            <motion.p
                                className="text-lg text-[#545454] leading-relaxed mb-5"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                No two paths look the same—and that's exactly how it should be.
                                I believe in creating a space where you feel{' '}
                                <span className="text-[#3d4a28] font-medium">truly seen</span> and{' '}
                                <span className="text-[#3d4a28] font-medium">heard</span>,
                                without judgment or expectation.
                            </motion.p>

                            <motion.p
                                className="text-lg text-[#545454] leading-relaxed mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                As a Licensed Clinical Social Worker, I bring both professional
                                expertise and genuine warmth to our work together. Whether you're
                                facing anxiety, navigating life transitions, or simply seeking
                                a place to process—<span className="italic text-[#687b0a]">you don't have to do it alone.</span>
                            </motion.p>

                            {/* Animated CTA button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link to="/about">
                                    <motion.div
                                        className="group inline-flex items-center gap-3 px-6 py-3 rounded-full relative overflow-hidden"
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
                                        <span className="relative text-white font-medium">
                                            More about my approach
                                        </span>
                                        <motion.svg
                                            className="w-5 h-5 text-white relative"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="17 8l4 4m0 0l-4 4m4-4H3" />
                                        </motion.svg>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Visual element (replacing 3D lotus) */}
                        <motion.div
                            className="relative flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {/* Decorative circles */}
                            <motion.div
                                className="absolute w-72 h-72 rounded-full border-2 border-[#a8b87c]/20"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute w-56 h-56 rounded-full border border-[#687b0a]/15"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute w-40 h-40 rounded-full border border-dashed border-[#d4e4b8]/40"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Pulsing glow */}
                            <motion.div
                                className="absolute w-48 h-48 rounded-full"
                                style={{ background: 'radial-gradient(circle, rgba(168, 184, 124, 0.3) 0%, transparent 70%)' }}
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Center icon */}
                            <motion.div
                                className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#687b0a] to-[#a8b87c] flex items-center justify-center shadow-2xl"
                                whileHover={{ scale: 1.05 }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <FaSpa className="w-16 h-16 text-white" />
                            </motion.div>

                            {/* Floating dots */}
                            <motion.div
                                className="absolute top-10 right-10 w-3 h-3 rounded-full bg-[#a8b87c]"
                                animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div
                                className="absolute bottom-16 left-8 w-2 h-2 rounded-full bg-[#687b0a]"
                                animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            />
                        </motion.div>
                    </div>
                </div>

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
