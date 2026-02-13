import { motion } from "motion/react"
import { PiQuotes } from "react-icons/pi"
import InfinityIcon from "../../shared/InfinityIcon"
import { Reveal, MaskedReveal } from "./shared"

/* ─── Data ───────────────────────────────────────────────────────────── */

const QUOTE_TEXT = "Healing isn't linear, and your path doesn't have to look like anyone else's."

/* ─── Component ──────────────────────────────────────────────────────── */

const PullQuoteSection = () => (
    <section aria-label="Quote" className="bg-cream dark:bg-dark-bg py-20 px-6 transition-colors duration-300">
        <div className="max-w-2xl mx-auto text-center">
            <Reveal>
                <PiQuotes className="text-brand-accent/25 mx-auto mb-4" size={32} aria-hidden="true" />
            </Reveal>
            <figure>
                <blockquote className="text-2xl md:text-3xl font-pt-serif text-brand-deep/80 dark:text-cream/75 leading-snug italic">
                    {QUOTE_TEXT.split(" ").map((word, i) => (
                        <MaskedReveal key={i} className="inline-block mr-[0.3em]" delay={i * 0.05}>
                            <span>{word}</span>
                        </MaskedReveal>
                    ))}
                </blockquote>
                <figcaption className="sr-only">
                    <cite>De'Ayne Scaife, LCSW</cite>
                </figcaption>
            </figure>
            <Reveal delay={0.5}>
                <div className="flex items-center justify-center gap-3 mt-6">
                    <motion.div
                        className="h-px bg-brand-accent/30"
                        initial={{ width: 0 }}
                        whileInView={{ width: 24 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    />
                    <InfinityIcon className="text-brand-accent/40" size={12} />
                    <motion.div
                        className="h-px bg-brand-accent/30"
                        initial={{ width: 0 }}
                        whileInView={{ width: 24 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    />
                </div>
            </Reveal>
        </div>
    </section>
)

export default PullQuoteSection
