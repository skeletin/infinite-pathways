import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Lotus } from './Lotus'

interface HealingSectionProps {
    className?: string
}

// Floating orb component with animation
const FloatingOrb = ({
    className,
    delay = 0,
    duration = 8,
}: {
    className: string
    delay?: number
    duration?: number
}) => (
    <motion.div
        className={`absolute rounded-full blur-3xl ${className}`}
        animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    />
)

// Animated particle
const Particle = ({ delay, left, top }: { delay: number; left: string; top: string }) => (
    <motion.div
        className="absolute w-1 h-1 rounded-full bg-[#a8b87c]"
        style={{ left, top }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            y: [0, -60, -120],
        }}
        transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeOut",
        }}
    />
)

const HealingSection = ({ className }: HealingSectionProps) => {
    // Animation variants for staggered text reveal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        },
    }

    const titleVariants = {
        hidden: { opacity: 0, x: -50, filter: 'blur(15px)' },
        visible: {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 1,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        },
    }

    return (
        <div className={`${className} relative overflow-hidden`}>
            {/* Animated gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
                        linear-gradient(135deg, #faf8f3 0%, #f0efe8 30%, #e8f0dc 60%, #f5f7f0 100%)
                    `,
                }}
            />

            {/* Animated mesh gradient overlay */}
            <motion.div
                className="absolute inset-0 opacity-40"
                animate={{
                    background: [
                        'radial-gradient(ellipse 80% 50% at 20% 40%, rgba(168, 184, 124, 0.3) 0%, transparent 60%)',
                        'radial-gradient(ellipse 80% 50% at 30% 50%, rgba(168, 184, 124, 0.4) 0%, transparent 60%)',
                        'radial-gradient(ellipse 80% 50% at 20% 40%, rgba(168, 184, 124, 0.3) 0%, transparent 60%)',
                    ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating gradient orbs */}
            <FloatingOrb
                className="w-96 h-96 -top-20 -left-20 bg-gradient-to-br from-[#d4e4b8]/40 to-[#a8b87c]/20"
                delay={0}
                duration={10}
            />
            <FloatingOrb
                className="w-80 h-80 top-1/2 -left-10 bg-gradient-to-tr from-[#e8dcc8]/50 to-[#c9d4a8]/30"
                delay={2}
                duration={12}
            />
            <FloatingOrb
                className="w-64 h-64 bottom-10 left-1/4 bg-gradient-to-r from-[#f0e6d4]/40 to-[#d8e4c0]/30"
                delay={1}
                duration={9}
            />

            {/* Subtle animated particles */}
            <div className="absolute inset-0 pointer-events-none">
                <Particle delay={0} left="15%" top="60%" />
                <Particle delay={1.5} left="25%" top="70%" />
                <Particle delay={3} left="10%" top="50%" />
                <Particle delay={2} left="35%" top="65%" />
                <Particle delay={4} left="20%" top="75%" />
            </div>

            {/* Decorative gradient line */}
            <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 rounded-full"
                style={{
                    background: 'linear-gradient(180deg, transparent, #a8b87c, #687b0a, #a8b87c, transparent)',
                }}
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: 128, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
            />

            {/* 3D Canvas */}
            <Canvas
                camera={{ position: [2, 0.5, 6], fov: 45 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[5, 8, 5]} intensity={0.7} color="#ffffff" />
                    <directionalLight position={[-3, 5, -5]} intensity={0.4} color="#e8f0d8" />
                    <spotLight position={[0, 10, 0]} intensity={0.3} color="#d4e4b8" angle={0.6} />
                    <Environment preset="apartment" />
                    <Lotus position={[0, -0.3, 0]} scale={2} />
                    <ContactShadows position={[0, -1.8, 0]} opacity={0.15} scale={8} blur={3} far={3} />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={false}
                        autoRotate
                        autoRotateSpeed={0.3}
                    />
                </Suspense>
            </Canvas>

            {/* Glow effect behind lotus area */}
            <motion.div
                className="absolute right-[10%] top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 184, 124, 0.25) 0%, rgba(168, 184, 124, 0.1) 40%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 0.9, 0.6],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* HTML Content with animations */}
            <motion.div
                className="relative z-10 h-full flex items-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
                    <div className="max-w-xl">
                        {/* Animated accent */}
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            variants={itemVariants}
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
                            className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-[1.1]"
                            variants={titleVariants}
                        >
                            <span className="block text-[#3d4a28]">Healing isn't</span>
                            <span
                                className="block bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: 'linear-gradient(135deg, #687b0a 0%, #a8b87c 50%, #4a5c14 100%)',
                                }}
                            >
                                linear
                            </span>
                        </motion.h2>

                        {/* Animated decorative element */}
                        <motion.div
                            className="w-24 h-1 mb-8 rounded-full overflow-hidden"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="h-full w-full"
                                style={{
                                    background: 'linear-gradient(90deg, #687b0a, #a8b87c, #d4e4b8)',
                                }}
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.div>

                        <motion.p
                            className="text-lg text-[#545454] leading-relaxed mb-5"
                            variants={itemVariants}
                        >
                            No two paths look the same—and that's exactly how it should be.
                            I believe in creating a space where you feel{' '}
                            <span className="text-[#3d4a28] font-medium">truly seen</span> and{' '}
                            <span className="text-[#3d4a28] font-medium">heard</span>,
                            without judgment or expectation.
                        </motion.p>

                        <motion.p
                            className="text-lg text-[#545454] leading-relaxed mb-8"
                            variants={itemVariants}
                        >
                            As a Licensed Clinical Social Worker, I bring both professional
                            expertise and genuine warmth to our work together. Whether you're
                            facing anxiety, navigating life transitions, or simply seeking
                            a place to process—<span className="italic text-[#687b0a]">you don't have to do it alone.</span>
                        </motion.p>

                        {/* Animated CTA button */}
                        <motion.div variants={itemVariants}>
                            <Link to="/about">
                                <motion.div
                                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-full relative overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, #687b0a 0%, #7a8f1a 100%)',
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                        style={{
                                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                        }}
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
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </motion.svg>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{
                    background: 'linear-gradient(to top, rgba(250, 248, 243, 0.8), transparent)',
                }}
            />
        </div>
    )
}

export default HealingSection
