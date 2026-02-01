import { motion } from "motion/react"
import { FaSpa } from "react-icons/fa"

const logo = "/images/infifnite-pathways-logo.svg"

const SplashScreen = () => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #faf8f3 0%, #f0efe8 30%, #e8f0dc 60%, #f5f7f0 100%)",
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {/* Static gradient overlay for subtle depth */}
            <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 80% 80% at 30% 40%, rgba(168, 184, 124, 0.15) 0%, transparent 50%)' }}
            />

            {/* Simple decorative orbs - no complex animations */}
            <div
                className="absolute w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full blur-3xl -top-20 -left-20"
                style={{ background: "radial-gradient(circle, rgba(168, 184, 124, 0.2) 0%, transparent 60%)" }}
            />
            <div
                className="absolute w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full blur-3xl -bottom-10 -right-10"
                style={{ background: "radial-gradient(circle, rgba(212, 228, 184, 0.25) 0%, transparent 60%)" }}
            />

            {/* Center glow - subtle pulse only on desktop */}
            <motion.div
                className="absolute w-60 md:w-80 h-60 md:h-80 rounded-full hidden md:block"
                style={{ background: "radial-gradient(circle, rgba(104, 123, 10, 0.08) 0%, transparent 60%)" }}
                animate={{ opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Logo container - simplified animations */}
            <motion.div
                className="relative flex flex-col items-center gap-6 md:gap-8 px-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Main logo */}
                <motion.img
                    alt="Infinite Pathways Logo"
                    src={logo}
                    className="w-64 md:w-80 drop-shadow-md"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                />

                {/* Tagline - simple fade in */}
                <motion.p
                    className="text-base md:text-lg font-semibold tracking-[0.2em] md:tracking-[0.25em] text-center"
                    style={{
                        background: "linear-gradient(135deg, #3d4a28 0%, #687b0a 50%, #3d4a28 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                >
                    HEALING WITHOUT LIMITS
                </motion.p>

                {/* Decorative line */}
                <motion.div
                    className="h-1 rounded-full"
                    style={{ background: "linear-gradient(90deg, #687b0a, #a8b87c, #d4e4b8)" }}
                    initial={{ width: 0 }}
                    animate={{ width: 120 }}
                    transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                />

                {/* Small decorative icon - no looping animation */}
                <motion.div
                    className="mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                >
                    <FaSpa className="w-5 h-5 text-[#a8b87c]" />
                </motion.div>
            </motion.div>

            {/* Simple corner accents - static, no animation */}
            <div
                className="absolute top-0 left-0 w-40 md:w-64 h-40 md:h-64"
                style={{
                    background: "linear-gradient(135deg, rgba(168, 184, 124, 0.12) 0%, transparent 70%)",
                }}
            />
            <div
                className="absolute bottom-0 right-0 w-40 md:w-64 h-40 md:h-64"
                style={{
                    background: "linear-gradient(315deg, rgba(104, 123, 10, 0.1) 0%, transparent 70%)",
                }}
            />

            {/* Bottom gradient line */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1"
                style={{
                    background: "linear-gradient(90deg, transparent 0%, #a8b87c 20%, #687b0a 50%, #a8b87c 80%, transparent 100%)",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            />
        </motion.div>
    )
}

export default SplashScreen