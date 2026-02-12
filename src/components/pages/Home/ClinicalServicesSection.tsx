import { motion } from "motion/react"
import { GiMeditation } from "react-icons/gi"
import { PiHeartbeat, PiButterflyLight } from "react-icons/pi"
import {
    Reveal,
    MaskedReveal,
    AnimatedIcon,
    SectionLabel,
    SectionHeading,
    InfinityDivider,
    CornerBrackets,
} from "./shared"

/* ─── Data ───────────────────────────────────────────────────────────── */

interface ClinicalService {
    icon: React.ReactNode
    title: string
    desc: string
    detail: string
}

const services: ClinicalService[] = [
    {
        icon: <GiMeditation size={24} />,
        title: "Individual Therapy",
        desc: "Personalized one-on-one sessions to help you navigate anxiety, self-doubt, and life's challenges. Build clarity, resilience, and confidence on your unique journey.",
        detail: "Personalized · One-on-one",
    },
    {
        icon: <PiHeartbeat size={24} />,
        title: "Grief & Loss Support",
        desc: "Compassionate guidance through the pain of losing a loved one or pet. Honor your experience while finding ways to heal and move forward.",
        detail: "Compassionate · Healing-focused",
    },
    {
        icon: <PiButterflyLight size={24} />,
        title: "Life Transitions",
        desc: "Support through change, uncertainty, and new beginnings. Gain tools and insight to navigate transitions with confidence and clarity.",
        detail: "Change · Growth · Clarity",
    },
]

/* ─── Component ──────────────────────────────────────────────────────── */

const ClinicalServicesSection = () => (
    <section id="services" className="bg-cream-dark dark:bg-dark-surface py-24 md:py-32 px-6 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
                <Reveal><SectionLabel>Clinical Services</SectionLabel></Reveal>
                <MaskedReveal delay={0.1}>
                    <SectionHeading className="mb-4">Therapeutic Services</SectionHeading>
                </MaskedReveal>
                <InfinityDivider delay={0.15} />
                <Reveal delay={0.2}>
                    <p className="text-brand-deep/60 dark:text-cream/50 max-w-lg mx-auto">
                        Every service is rooted in compassion and the belief that
                        you already have what you need to heal.
                    </p>
                </Reveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((s, i) => (
                    <Reveal key={s.title} delay={i * 0.1}>
                        <motion.div
                            className="relative p-8 bg-warm-white dark:bg-dark-card rounded-sm border border-sage/50 dark:border-brand-accent/10 group overflow-hidden transition-colors duration-300"
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        >
                            <motion.div
                                className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-brand-accent/60 via-brand-secondary/40 to-transparent origin-left"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                            />
                            <CornerBrackets />
                            <div className="relative z-2">
                                <AnimatedIcon delay={i * 0.1 + 0.15} className="text-brand-accent mb-5">
                                    <div className="w-10 h-10 rounded-full border border-brand-accent/20 flex items-center justify-center">
                                        {s.icon}
                                    </div>
                                </AnimatedIcon>
                                <h3 className="text-xl font-pt-serif text-brand-deep dark:text-cream tracking-wide mb-3">{s.title}</h3>
                                <p className="text-brand-deep/65 dark:text-cream/55 leading-relaxed mb-4 text-sm">{s.desc}</p>
                                <motion.p
                                    className="text-xs text-brand-accent/80 tracking-wide flex items-center gap-2"
                                    initial={{ opacity: 0, x: -8 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.4, duration: 0.4 }}
                                >
                                    <motion.span
                                        className="block w-3 h-px bg-brand-accent/40"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: 12 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 + 0.5, duration: 0.3 }}
                                    />
                                    {s.detail}
                                </motion.p>
                            </div>
                        </motion.div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
)

export default ClinicalServicesSection
