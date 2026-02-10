import { motion, type Variants } from "motion/react";
import type { Dispatch, SetStateAction } from "react";
import { FaArrowRight } from "react-icons/fa";

interface GateProps {
    className?: string
    setGate: Dispatch<SetStateAction<boolean>>
}

export const containerVariants: Variants = {
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
}

export const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: "blur(10px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1],
        },
    },
}

const lineVariants: Variants = {
    hidden: {
        scaleX: 0,
        opacity: 0,
    },
    show: {
        scaleX: 1,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.25, 0.4, 0.25, 1],
            delay: 1.2,
        },
    },
}

const glowVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.5,
            ease: "easeOut",
        },
    },
}

const Gate = ({ className, setGate }: GateProps) => {
    const words = ["SUPPORT", "YOUR", "PATH", "FORWARD"]

    return (
        <motion.div
            exit="hidden"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className={`fixed inset-0 z-1 flex flex-col justify-center items-center  overflow-hidden bg-brand-darkest/30 ${className}`}
        >
            {/* Ambient glow - center */}
            <motion.div
                variants={glowVariants}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(168,131,88,0.15) 0%, transparent 60%)",
                }}
            />

            {/* Ambient glow - top */}
            <motion.div
                variants={glowVariants}
                className="absolute -top-32 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(168,131,88,0.1) 0%, transparent 60%)",
                }}
            />

            {/* Top decorative line */}
            <motion.div
                variants={lineVariants}
                className="absolute top-1/3 left-1/2 -translate-x-1/2 h-px w-32 origin-center"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(168,131,88,0.6), transparent)",
                }}
            />

            {/* Text container */}
            <div className="relative flex flex-col items-center gap-4">
                {words.map((word, index) => (
                    <motion.p
                        key={word}
                        variants={itemVariants}
                        className="text-4xl md:text-5xl tracking-[0.4em] font-light font-pt-serif"
                        style={{
                            color: index === words.length - 1 ? "#d4a574" : "#e8d5c4",
                            textShadow: index === words.length - 1
                                ? "0 0 40px rgba(168,131,88,0.3)"
                                : "none",
                        }}
                    >
                        {word}
                    </motion.p>
                ))}
            </div>



            {/* Bottom decorative line */}
            <motion.div
                variants={lineVariants}
                className="absolute bottom-1/3 left-1/2 -translate-x-1/2 h-px w-32 origin-center"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(168,131,88,0.6), transparent)",
                }}
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 2.5
                }}
                className="absolute flex items-center gap-2 bottom-1/4 text-white"
            >
                <button onClick={() => setGate(false)} className="cursor-pointer">
                    <p className="font-thin">Click anywhere to start </p>
                </button>
                <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}>
                    <FaArrowRight />
                </motion.div>
            </motion.div>

            {/* Subtle corner accents */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute top-8 left-8 w-16 h-16 border-l border-t border-[#A88358]/30"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="absolute top-8 right-8 w-16 h-16 border-r border-t border-[#A88358]/30"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1.5, delay: 0.7 }}
                className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-[#A88358]/30"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#A88358]/30"
            />
        </motion.div>
    )
}

export default Gate