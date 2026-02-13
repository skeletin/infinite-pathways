import { motion } from "motion/react"
import { GiPathDistance } from "react-icons/gi"
import { PiHandHeart } from "react-icons/pi"
import {
    Reveal,
    MaskedReveal,
    AnimatedIcon,
    SectionLabel,
    SectionHeading,
    InfinityDivider,
} from "./shared"

/* ─── Data ───────────────────────────────────────────────────────────── */

interface ProfessionalService {
    icon: React.ReactNode
    num: string
    title: string
    desc: string
}

const services: ProfessionalService[] = [
    {
        icon: <GiPathDistance size={22} />,
        num: "01",
        title: "Workshops & Trainings",
        desc: "Interactive sessions designed to foster growth, resilience, and effective communication for teams and organizations. Tailored to meet your goals and needs.",
    },
    {
        icon: <PiHandHeart size={22} />,
        num: "02",
        title: "Consultations",
        desc: "Strategic guidance for individuals or organizations seeking clarity, problem-solving, or growth strategies. Practical solutions with care and insight.",
    },
]

/* ─── Component ──────────────────────────────────────────────────────── */

const ProfessionalServicesSection = () => (
    <section id="professional" aria-labelledby="professional-services-heading" className="bg-cream dark:bg-dark-bg py-24 md:py-32 px-6 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
                <Reveal><SectionLabel>Professional Services</SectionLabel></Reveal>
                <MaskedReveal delay={0.1}>
                    <SectionHeading id="professional-services-heading" className="mb-4">Beyond the Therapy Room</SectionHeading>
                </MaskedReveal>
                <InfinityDivider delay={0.15} />
                <Reveal delay={0.2}>
                    <p className="text-brand-deep/60 dark:text-cream/50 max-w-lg mx-auto">
                        Expertise and guidance for professionals, organizations,
                        and those seeking structured growth.
                    </p>
                </Reveal>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                {services.map((s, i) => (
                    <Reveal key={s.title} delay={i * 0.12}>
                        <motion.article
                            className="relative"
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.span
                                className="text-[10px] tracking-[0.2em] text-brand-accent/50 mb-4 block"
                                initial={{ opacity: 0, y: 5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 + 0.1, duration: 0.4 }}
                            >
                                {s.num}
                            </motion.span>
                            <motion.div
                                className="w-full h-px bg-linear-to-r from-brand-accent/40 via-brand-accent/20 to-transparent mb-6"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.12 + 0.2 }}
                            />
                            <AnimatedIcon delay={i * 0.12 + 0.15} className="mb-4 text-brand-accent">
                                {s.icon}
                            </AnimatedIcon>
                            <MaskedReveal delay={i * 0.12 + 0.2}>
                                <h3 className="text-lg font-pt-serif text-brand-deep dark:text-cream tracking-wide mb-4">{s.title}</h3>
                            </MaskedReveal>
                            <p className="text-brand-deep/65 dark:text-cream/55 leading-relaxed text-sm">{s.desc}</p>
                        </motion.article>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
)

export default ProfessionalServicesSection
