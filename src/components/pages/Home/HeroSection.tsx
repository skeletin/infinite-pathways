import { motion } from "motion/react"
import type { MotionValue } from "motion/react"
import type { RefObject } from "react"
import { PiArrowDown } from "react-icons/pi"
import { HeroWord, CurveDivider } from "./shared"

/* ─── Props ──────────────────────────────────────────────────────────── */

export interface HeroSectionProps {
    heroRef: RefObject<HTMLElement | null>
    heroScale: MotionValue<number>
    heroOverlayOpacity: MotionValue<number>
    heroTextY: MotionValue<number>
    onScrollToContact: (e: React.MouseEvent) => void
}

/* ─── Component ──────────────────────────────────────────────────────── */

const HeroSection = ({
    heroRef,
    heroScale,
    heroOverlayOpacity,
    heroTextY,
    onScrollToContact,
}: HeroSectionProps) => (
    <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
        <motion.div
            className="absolute inset-0 bg-[url('/images/infinite-pathways-bg.png')] bg-cover bg-center"
            style={{ scale: heroScale }}
        />
        <motion.div className="absolute inset-0 bg-brand-darkest" style={{ opacity: heroOverlayOpacity }} />

        <motion.div
            className="relative z-10 text-center px-6 will-animate"
            style={{ y: heroTextY }}
        >
            {/* Pulsing infinity */}
            <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >

            </motion.div>

            {/* Staggered headline */}
            <h1
                className="text-4xl md:text-6xl lg:text-7xl text-white tracking-wide leading-tight mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
                <HeroWord word="Healing" delay={0.3} />{" "}
                <HeroWord word="Without" delay={0.45} />{" "}
                <HeroWord word="Limits" delay={0.6} />
            </h1>
            <motion.p
                className="text-2xl md:text-3xl lg:text-4xl text-brand-accent/90 mb-4 italic"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
                Your Journey. Your Path.
            </motion.p>


            <motion.p
                className="text-sm md:text-base tracking-widest text-white/60 max-w-lg mx-auto mb-10"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
            >
                Support for life's challenges — personal growth, healing, or finding clarity in life and work.
            </motion.p>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
            >
                <a href="#contact" onClick={onScrollToContact}>
                    <motion.button
                        className="relative px-10 py-3.5 bg-cream/90 text-brand-deep text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-white transition-colors duration-300 overflow-hidden group cursor-pointer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative">Schedule a Session</span>
                    </motion.button>
                </a>
            </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
            className="absolute bottom-28 md:bottom-32 z-10 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
        >
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
            <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <PiArrowDown className="text-white/30" size={14} />
            </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
            <CurveDivider className="text-cream dark:text-dark-bg" />
        </div>
    </section>
)

export default HeroSection
