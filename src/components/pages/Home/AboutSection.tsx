import { motion } from "motion/react"
import type { MotionValue } from "motion/react"
import type { RefObject } from "react"
import { PiHandHeart, PiLeaf, PiSunHorizon } from "react-icons/pi"
import {
    Reveal,
    MaskedReveal,
    AnimatedIcon,
    SectionLabel,
    SectionHeading,
    InfinityDivider,
} from "./shared"

/* ─── Props ──────────────────────────────────────────────────────────── */

export interface AboutSectionProps {
    aboutRef: RefObject<HTMLElement | null>
    aboutParallax: MotionValue<number>
}

/* ─── Data ───────────────────────────────────────────────────────────── */

interface CoreValue {
    icon: React.ReactNode
    title: string
    body: string
}

const coreValues: CoreValue[] = [
    {
        icon: <PiHandHeart size={26} />,
        title: "Understand & Accept",
        body: "Know yourself, embrace yourself. Self-awareness is the first step toward lasting change.",
    },
    {
        icon: <PiLeaf size={26} />,
        title: "Grow",
        body: "Progress, transform, thrive. Every step forward — no matter how small — is a step worth taking.",
    },
    {
        icon: <PiSunHorizon size={26} />,
        title: "Empower Yourself",
        body: "Build confidence. Take control. You already have what you need to shape your path.",
    },
]

/* ─── Component ──────────────────────────────────────────────────────── */

const AboutSection = ({ aboutRef, aboutParallax }: AboutSectionProps) => (
    <section ref={aboutRef} id="about" aria-labelledby="about-heading" className="bg-cream dark:bg-dark-bg py-24 md:py-32 px-6 transition-colors duration-300">
        <motion.div className="max-w-3xl mx-auto text-center" style={{ y: aboutParallax }}>
            <Reveal>
                <SectionLabel>About the Practice</SectionLabel>
            </Reveal>
            <MaskedReveal delay={0.1}>
                <SectionHeading id="about-heading">Infinite Pathways</SectionHeading>
            </MaskedReveal>
            <InfinityDivider delay={0.15} />
            <Reveal delay={0.2}>
                <p className="text-brand-deep/75 dark:text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
                    We help you find your path in life, healing, and growth. Every journey is unique,
                    and we guide you with clarity, insight, and strategies to step forward with confidence.
                </p>
            </Reveal>
        </motion.div>

        {/* Core Values */}
        <div className="max-w-4xl mx-auto mt-20 grid md:grid-cols-3 gap-14 text-center">
            {coreValues.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.12}>
                    <motion.div
                        className="flex flex-col items-center"
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                    >
                        <AnimatedIcon delay={i * 0.12 + 0.2} className="mb-5">
                            <div className="relative">
                                <div className="w-14 h-14 rounded-full border border-brand-accent/25 flex items-center justify-center text-brand-accent">
                                    {v.icon}
                                </div>
                                <motion.div
                                    className="absolute -inset-1.5 rounded-full border border-brand-accent/10"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.12 + 0.4, duration: 0.5 }}
                                />
                            </div>
                        </AnimatedIcon>
                        <MaskedReveal delay={i * 0.12 + 0.25}>
                            <h3 className="text-xl font-pt-serif text-brand-deep dark:text-cream mb-3 tracking-wide">{v.title}</h3>
                        </MaskedReveal>
                        <p className="text-brand-deep/60 dark:text-cream/50 leading-relaxed text-sm">{v.body}</p>
                    </motion.div>
                </Reveal>
            ))}
        </div>
    </section>
)

export default AboutSection
