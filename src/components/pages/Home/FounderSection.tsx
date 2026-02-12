import { motion } from "motion/react"
import { PiInfinity } from "react-icons/pi"
import { Reveal, MaskedReveal, AnimatedIcon, SectionLabel, SectionHeading } from "./shared"

/* ─── Data ───────────────────────────────────────────────────────────── */

const PROFILE_PHOTO = "/images/me.jpg"

const credentials: string[] = [
    "Licensed Clinical Social Worker in Illinois and Indiana",
    "Master's Degree in Social Work",
    "Certificate in Veterinary Social Work and Trauma-Informed Care",
]

/* ─── Component ──────────────────────────────────────────────────────── */

const FounderSection = () => (
    <section id="founder" className="bg-cream-dark dark:bg-dark-surface py-24 md:py-32 px-6 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-10 md:gap-20 items-start">
                {/* Portrait */}
                <Reveal className="md:col-span-2 flex justify-center">
                    <div className="relative w-36 h-36 md:w-72 md:h-72 shrink-0">
                        <div className="w-full h-full rounded-full overflow-hidden bg-brand-primary/10 dark:bg-brand-primary/20 relative z-10">
                            <motion.img
                                src={PROFILE_PHOTO}
                                alt="Founder portrait"
                                className="w-full h-full object-cover"
                                whileInView={{ scale: [1.15, 1] }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.8, ease: [0.25, 0.4, 0.25, 1] }}
                            />
                        </div>
                        <motion.div
                            className="absolute -inset-2 md:-inset-3 rounded-full border border-brand-accent/15"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                        <motion.div
                            className="absolute -inset-4 md:-inset-6 rounded-full border border-brand-accent/8"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        />
                        <motion.div
                            className="absolute -bottom-1 -right-1 md:bottom-2 md:right-2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-brand-accent/20 z-20 flex items-center justify-center"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, type: "spring" }}
                        >
                            <PiInfinity className="text-brand-accent" size={10} />
                        </motion.div>
                    </div>
                </Reveal>

                {/* Story */}
                <div className="md:col-span-3 space-y-6 text-center md:text-left">
                    <Reveal>
                        <SectionLabel>Meet the Founder</SectionLabel>
                    </Reveal>
                    <MaskedReveal delay={0.1}>
                        <SectionHeading>My Story</SectionHeading>
                    </MaskedReveal>
                    <Reveal delay={0.15}>
                        <div className="flex items-center gap-3 my-6 justify-center md:justify-start">
                            <div className="w-10 h-px bg-linear-to-r from-brand-accent/40 to-transparent" />
                            <AnimatedIcon delay={0.2}>
                                <PiInfinity className="text-brand-accent/50" size={14} />
                            </AnimatedIcon>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-brand-deep/75 dark:text-cream/70 leading-loose">
                            I didn't come to this work by accident. Like many helpers, my path
                            was shaped by my own experiences — the moments that challenged me,
                            the relationships that taught me, and the healing that transformed me.
                        </p>
                    </Reveal>
                    <Reveal delay={0.25}>
                        <p className="text-brand-deep/75 dark:text-cream/70 leading-loose">
                            As a Licensed Clinical Social Worker, I've walked alongside people through
                            some of their most vulnerable moments. What I've learned is that healing
                            rarely looks the way we expect it to — and that's exactly what makes it beautiful.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="pt-8 flex flex-col gap-3 text-sm text-brand-deep/50 dark:text-cream/40">
                            {credentials.map((cred, i) => (
                                <motion.div
                                    key={cred}
                                    className="flex items-center gap-3 justify-center md:justify-start"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                                >
                                    <motion.div
                                        className="w-1.5 h-1.5 rounded-full bg-brand-accent/40 shrink-0"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.45 + i * 0.1, type: "spring" }}
                                    />
                                    <p>{cred}</p>
                                </motion.div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    </section>
)

export default FounderSection
