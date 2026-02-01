import { motion } from "motion/react"

const logo = "/images/infifnite-pathways-logo.svg"

const SplashScreen = () => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{
                // Rich earthy gradient: warm sand, terracotta hints, olive undertones
                background: "linear-gradient(145deg, #f5f0e6 0%, #e8dfd0 20%, #d4c9b5 40%, #c9c4a8 60%, #bfbc9a 80%, #a8a67a 100%)",
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {/* Earthy radial overlays for depth */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `
                        radial-gradient(ellipse at 20% 10%, rgba(104, 123, 10, 0.15) 0%, transparent 40%),
                        radial-gradient(ellipse at 80% 20%, rgba(139, 119, 85, 0.12) 0%, transparent 45%),
                        radial-gradient(ellipse at 60% 90%, rgba(160, 140, 100, 0.1) 0%, transparent 50%),
                        radial-gradient(ellipse at 10% 70%, rgba(104, 123, 10, 0.08) 0%, transparent 40%)
                    `,
                }}
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Animated warm glow */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(104, 123, 10, 0.08) 0%, transparent 60%)",
                }}
                animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
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
                        ease: [0.16, 1, 0.3, 1], // custom spring-like easing
                    }}
                >
                    <motion.img
                        alt="Infinite Pathways Logo"
                        width={320}
                        src={logo}
                        className="drop-shadow-lg"
                        animate={{
                            filter: [
                                "drop-shadow(0 4px 8px rgba(139, 119, 85, 0.2))",
                                "drop-shadow(0 8px 16px rgba(104, 123, 10, 0.25))",
                                "drop-shadow(0 4px 8px rgba(139, 119, 85, 0.2))",
                            ],
                        }}
                        transition={{
                            duration: 2,
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
                                className="text-lg font-medium tracking-[0.25em]"
                                style={{
                                    color: "#545454",
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
                                    delay: 0.8 + i * 0.04, // staggered letter reveal
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Decorative line under tagline */}
                <motion.div
                    className="h-[2px] w-0 rounded-full"
                    style={{
                        background: "linear-gradient(90deg, #687b0a, #8b7755, #687b0a)",
                    }}
                    animate={{ width: 180 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />

            </motion.div>

            {/* Decorative animated line with earthy gradient */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1.5"
                style={{
                    background: "linear-gradient(90deg, transparent 0%, #8b7755 20%, #687b0a 50%, #8b7755 80%, transparent 100%)",
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            />

            {/* Earthy corner accents */}
            <motion.div
                className="absolute top-0 left-0 w-48 h-48"
                style={{
                    background: "linear-gradient(135deg, rgba(104, 123, 10, 0.2) 0%, rgba(139, 119, 85, 0.1) 40%, transparent 70%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.div
                className="absolute top-0 right-0 w-40 h-40"
                style={{
                    background: "linear-gradient(225deg, rgba(160, 140, 100, 0.15) 0%, transparent 60%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-40 h-40"
                style={{
                    background: "linear-gradient(45deg, rgba(139, 119, 85, 0.15) 0%, transparent 60%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-48 h-48"
                style={{
                    background: "linear-gradient(315deg, rgba(104, 123, 10, 0.2) 0%, rgba(160, 140, 100, 0.1) 40%, transparent 70%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            />
        </motion.div>
    )
}

export default SplashScreen