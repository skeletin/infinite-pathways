import { motion } from "motion/react"
import { FaSpa } from "react-icons/fa"

const logo = "/images/infifnite-pathways-logo.svg"

const SplashScreen = () => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
            style={{
                // Consistent with site: cream to sage gradient
                background: "linear-gradient(135deg, #faf8f3 0%, #f0efe8 30%, #e8f0dc 60%, #f5f7f0 100%)",
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {/* Animated mesh gradient overlay - matches hero sections */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: [
                        'radial-gradient(ellipse 100% 100% at 30% 40%, rgba(168, 184, 124, 0.2) 0%, transparent 50%)',
                        'radial-gradient(ellipse 100% 100% at 40% 50%, rgba(168, 184, 124, 0.25) 0%, transparent 50%)',
                        'radial-gradient(ellipse 100% 100% at 30% 40%, rgba(168, 184, 124, 0.2) 0%, transparent 50%)',
                    ],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating gradient orbs - consistent with site style */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(168, 184, 124, 0.25) 0%, transparent 60%)" }}
                initial={{ x: "-30%", y: "-20%" }}
                animate={{
                    x: ["-30%", "-25%", "-30%"],
                    y: ["-20%", "-25%", "-20%"],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(212, 228, 184, 0.3) 0%, transparent 60%)" }}
                initial={{ x: "50%", y: "40%" }}
                animate={{
                    x: ["50%", "55%", "50%"],
                    y: ["40%", "45%", "40%"],
                    scale: [1, 1.15, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Center pulsing glow */}
            <motion.div
                className="absolute w-80 h-80 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(104, 123, 10, 0.1) 0%, transparent 60%)" }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Logo container with staggered animations */}
            <motion.div
                className="relative flex flex-col items-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                {/* Main logo with scale and fade animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    <motion.img
                        alt="Infinite Pathways Logo"
                        width={320}
                        src={logo}
                        className="drop-shadow-lg"
                        animate={{
                            filter: [
                                "drop-shadow(0 4px 12px rgba(104, 123, 10, 0.15))",
                                "drop-shadow(0 8px 20px rgba(104, 123, 10, 0.25))",
                                "drop-shadow(0 4px 12px rgba(104, 123, 10, 0.15))",
                            ],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>

                {/* Tagline with letter-by-letter animation */}
                <motion.div
                    className="flex items-center justify-center gap-1 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                >
                    <motion.div className="flex">
                        {"HEALING WITHOUT LIMITS".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                className="text-lg font-semibold tracking-[0.25em]"
                                style={{
                                    background: "linear-gradient(135deg, #3d4a28 0%, #687b0a 50%, #3d4a28 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    display: char === " " ? "inline" : "inline-block",
                                    width: char === " " ? "0.5em" : "auto",
                                }}
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                    filter: "blur(8px)",
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)",
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.8 + i * 0.04,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Animated decorative line under tagline */}
                <motion.div
                    className="h-1 rounded-full"
                    style={{ background: "linear-gradient(90deg, #687b0a, #a8b87c, #d4e4b8, #a8b87c, #687b0a)" }}
                    initial={{ width: 0 }}
                    animate={{ width: 160 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />

                {/* Small decorative icon */}
                <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.5, type: "spring" }}
                >
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <FaSpa className="w-6 h-6 text-[#a8b87c]" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Decorative corner accents - consistent olive green */}
            <motion.div
                className="absolute top-0 left-0 w-64 h-64"
                style={{
                    background: "linear-gradient(135deg, rgba(168, 184, 124, 0.15) 0%, rgba(104, 123, 10, 0.08) 40%, transparent 70%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.div
                className="absolute top-0 right-0 w-48 h-48"
                style={{
                    background: "linear-gradient(225deg, rgba(212, 228, 184, 0.2) 0%, transparent 60%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-48 h-48"
                style={{
                    background: "linear-gradient(45deg, rgba(168, 184, 124, 0.15) 0%, transparent 60%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-64 h-64"
                style={{
                    background: "linear-gradient(315deg, rgba(104, 123, 10, 0.12) 0%, rgba(168, 184, 124, 0.08) 40%, transparent 70%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            />

            {/* Bottom gradient line - matches site accent colors */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{
                    background: "linear-gradient(90deg, transparent 0%, #a8b87c 20%, #687b0a 50%, #a8b87c 80%, transparent 100%)",
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            />

            {/* Floating particles */}
            {[
                { left: "15%", top: "25%", delay: 0, size: 6 },
                { left: "85%", top: "30%", delay: 1, size: 4 },
                { left: "20%", top: "70%", delay: 0.5, size: 5 },
                { left: "75%", top: "65%", delay: 1.5, size: 4 },
            ].map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-[#a8b87c]"
                    style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.2, 0.5, 0.2], y: [0, -20, 0] }}
                    transition={{ duration: 4, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
        </motion.div>
    )
}

export default SplashScreen