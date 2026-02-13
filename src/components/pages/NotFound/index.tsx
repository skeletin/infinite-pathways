import { motion } from "motion/react"
import { PiArrowLeft } from "react-icons/pi"
import InfinityIcon from "../../shared/InfinityIcon"
import { useNavigate } from "react-router"

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
            {/* Dark overlay on the bg image from AppLayout */}
            <div className="absolute inset-0 bg-cream dark:bg-dark-bg/90" />

            {/* Animated ambient glow */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(168,131,88,0.08) 0%, transparent 65%)" }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 text-center max-w-lg">
                {/* Animated infinity that slowly rotates */}
                <motion.div
                    className="flex justify-center mb-8"
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <motion.div
                    >
                        <InfinityIcon className="text-brand-accent/40" size={80} />
                    </motion.div>
                </motion.div>

                {/* 404 number — staggered character reveal */}
                <div className="flex justify-center gap-3 mb-6">
                    {"404".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            className="text-7xl md:text-9xl font-pt-serif  dark:text-white/10 leading-none"
                            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                {/* Headline */}
                <motion.h1
                    className="text-2xl md:text-3xl font-pt-serif tracking-wide mb-3 text-brand-accent/90 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    This path doesn't exist yet.
                </motion.h1>

                {/* Decorative line */}
                <motion.div
                    className="h-px bg-linear-to-r from-transparent via-brand-accent/50 to-transparent mx-auto mb-5"
                    initial={{ width: 0 }}
                    animate={{ width: 120 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                />

                {/* Subline */}
                <motion.p
                    className=" text-sm md:text-base leading-relaxed mb-10 text-brand-accent/90 dark:text-white/45"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                >
                    Every journey has unexpected turns — but this isn't where yours ends.
                    Let's get you back on track.
                </motion.p>

                {/* CTA button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                >
                    <motion.button
                        onClick={() => navigate("/")}
                        className="inline-flex items-center gap-2 px-8 py-3 text-brand-deep text-sm tracking-[0.15em] uppercase rounded-sm bg-white transition-colors duration-300 cursor-pointer group"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.span
                            className="inline-block"
                            animate={{ x: [0, -3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        >
                            <PiArrowLeft size={14} />
                        </motion.span>
                        Return Home
                    </motion.button>
                </motion.div>

                {/* Subtle corner accents */}
                <motion.div
                    className="absolute top-8 left-8 w-12 h-12 border-l border-t border-brand-accent/15 hidden md:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div
                    className="absolute top-8 right-8 w-12 h-12 border-r border-t border-brand-accent/15 hidden md:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.div
                    className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-brand-accent/15 hidden md:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                />
                <motion.div
                    className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-brand-accent/15 hidden md:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                />
            </div>
        </section>
    )
}

export default NotFound
