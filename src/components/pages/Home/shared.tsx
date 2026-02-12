import { motion, useInView } from "motion/react"
import { useRef, type ReactNode } from "react"
import { PiInfinity } from "react-icons/pi"

/* ─── Prop Types ────────────────────────────────────────────────────────── */

export interface RevealProps {
    children: ReactNode
    className?: string
    delay?: number
}

export interface MaskedRevealProps {
    children: ReactNode
    className?: string
    delay?: number
}

export interface AnimatedIconProps {
    children: ReactNode
    delay?: number
    className?: string
    pulse?: boolean
}

export interface SectionLabelProps {
    children: ReactNode
}

export interface SectionHeadingProps {
    children: ReactNode
    className?: string
}

export interface InfinityDividerProps {
    delay?: number
}

export interface CurveDividerProps {
    className?: string
}

export interface CornerBracketsProps {
    className?: string
}

export interface HeroWordProps {
    word: string
    delay: number
}

/* ─── Reusable scroll-reveal (transform + opacity only) ──────────────── */
export const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <motion.div
            ref={ref}
            className={`will-animate ${className}`}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay }}
        >
            {children}
        </motion.div>
    )
}

/* ─── Masked text reveal ─────────────────────────────────────────────── */
export const MaskedReveal = ({ children, className = "", delay = 0 }: MaskedRevealProps) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-60px" })

    return (
        <div ref={ref} className={`text-reveal-mask ${className}`}>
            <motion.div
                className="will-animate"
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay }}
            >
                {children}
            </motion.div>
        </div>
    )
}

/* ─── Animated icon wrapper ──────────────────────────────────────────── */
export const AnimatedIcon = ({ children, delay = 0, className = "", pulse = false }: AnimatedIconProps) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-60px" })

    return (
        <motion.div
            ref={ref}
            className={`will-animate inline-flex ${className}`}
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay }}
        >
            {pulse ? (
                <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    {children}
                </motion.div>
            ) : children}
        </motion.div>
    )
}

/* ─── Section patterns ───────────────────────────────────────────────── */
export const SectionLabel = ({ children }: SectionLabelProps) => (
    <p className="text-xs uppercase tracking-[0.25em] text-brand-accent mb-3">
        {children}
    </p>
)

export const SectionHeading = ({ children, className = "" }: SectionHeadingProps) => (
    <h2 className={`text-3xl md:text-4xl font-pt-serif text-brand-deep dark:text-cream tracking-wide ${className}`}>
        {children}
    </h2>
)

/* ─── Infinity divider ───────────────────────────────────────────────── */
export const InfinityDivider = ({ delay = 0 }: InfinityDividerProps) => (
    <div className="flex items-center justify-center gap-4 my-8">
        <motion.div
            className="w-16 h-px bg-linear-to-r from-transparent to-brand-accent/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        />
        <AnimatedIcon delay={delay + 0.1} pulse>
            <PiInfinity className="text-brand-accent/50 text-lg" />
        </AnimatedIcon>
        <motion.div
            className="w-16 h-px bg-linear-to-l from-transparent to-brand-accent/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        />
    </div>
)

/* ─── Curved divider SVG ─────────────────────────────────────────────── */
export const CurveDivider = ({ className = "text-cream dark:text-dark-bg" }: CurveDividerProps) => (
    <div className={`w-full leading-0 ${className}`}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 block">
            <path d="M0,120 C480,0 960,0 1440,120 L1440,120 L0,120 Z" fill="currentColor" />
        </svg>
    </div>
)

/* ─── Decorative corner bracket ──────────────────────────────────────── */
export const CornerBrackets = ({ className = "" }: CornerBracketsProps) => (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
        <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-brand-accent/20" />
        <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-brand-accent/20" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-brand-accent/20" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-brand-accent/20" />
    </div>
)

/* ─── Staggered word reveal for hero headline ────────────────────────── */
export const HeroWord = ({ word, delay }: HeroWordProps) => (
    <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
        {word}
    </motion.span>
)
