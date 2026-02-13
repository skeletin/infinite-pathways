import { motion } from "motion/react"
import InfinityIcon from "../../shared/InfinityIcon"
import { Reveal, MaskedReveal } from "./shared"

/* ─── Props ──────────────────────────────────────────────────────────── */

export interface CtaBannerSectionProps {
    onScrollToContact: (e: React.MouseEvent) => void
}

/* ─── Component ──────────────────────────────────────────────────────── */

const CtaBannerSection = ({ onScrollToContact }: CtaBannerSectionProps) => (
    <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/infinite-pathways-bg.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-brand-darkest/70" />

        <Reveal className="relative z-10 text-center px-6">
            <motion.div
                className="flex justify-center mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <InfinityIcon className="text-brand-accent/60" size={32} />
                </motion.div>
            </motion.div>

            <MaskedReveal delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-pt-serif text-white tracking-wider leading-tight mb-4 max-w-2xl mx-auto">
                    Step Into Your Journey
                </h2>
            </MaskedReveal>

            <motion.p
                className="text-white/40 text-sm mb-10 max-w-md mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                Every path is unique. Start yours today with support and guidance.
            </motion.p>

            <a href="#contact" onClick={onScrollToContact}>
                <motion.button
                    className="relative px-10 py-3.5 bg-cream/90 text-brand-deep text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-white transition-colors duration-300 overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative">Contact Me</span>
                </motion.button>
            </a>
        </Reveal>
    </section>
)

export default CtaBannerSection
