import { motion, useInView, useScroll, useTransform } from "motion/react"
import { useRef, type ReactNode } from "react"
import { GiMeditation, GiPathDistance } from "react-icons/gi"
import { PiInfinity, PiHandHeart, PiLeaf, PiSunHorizon, PiHeartbeat, PiButterflyLight, PiQuotes, PiArrowDown, PiArrowUp, PiInstagramLogo, PiFacebookLogo, PiPhone } from "react-icons/pi"
import { HiOutlineMail, HiOutlineClock } from "react-icons/hi"

/* ─── Reusable scroll-reveal (transform + opacity only) ──────────────────── */
const Reveal = ({
    children,
    className = "",
    delay = 0,
}: {
    children: ReactNode
    className?: string
    delay?: number
}) => {
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

/* ─── Masked text reveal ─────────────────────────────────────────────────── */
const MaskedReveal = ({
    children,
    className = "",
    delay = 0,
}: {
    children: ReactNode
    className?: string
    delay?: number
}) => {
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

/* ─── Animated icon wrapper ──────────────────────────────────────────────── */
const AnimatedIcon = ({
    children,
    delay = 0,
    className = "",
    pulse = false,
}: {
    children: ReactNode
    delay?: number
    className?: string
    pulse?: boolean
}) => {
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

/* ─── Section patterns ───────────────────────────────────────────────────── */
const SectionLabel = ({ children }: { children: ReactNode }) => (
    <p className="text-xs uppercase tracking-[0.25em] text-brand-accent mb-3">
        {children}
    </p>
)

const SectionHeading = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
    <h2 className={`text-3xl md:text-4xl font-pt-serif text-brand-deep dark:text-cream tracking-wide ${className}`}>
        {children}
    </h2>
)

/* ─── Infinity divider ───────────────────────────────────────────────────── */
const InfinityDivider = ({ delay = 0 }: { delay?: number }) => (
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

/* ─── Curved divider SVG ─────────────────────────────────────────────────── */
const CurveDivider = ({ className = "text-cream dark:text-dark-bg" }: { className?: string }) => (
    <div className={`w-full leading-0 ${className}`}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 block">
            <path d="M0,120 C480,0 960,0 1440,120 L1440,120 L0,120 Z" fill="currentColor" />
        </svg>
    </div>
)

/* ─── Decorative corner bracket ──────────────────────────────────────────── */
const CornerBrackets = ({ className = "" }: { className?: string }) => (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
        <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-brand-accent/20" />
        <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-brand-accent/20" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-brand-accent/20" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-brand-accent/20" />
    </div>
)

/* ─── Staggered word reveal for hero headline ────────────────────────────── */
const HeroWord = ({ word, delay }: { word: string; delay: number }) => (
    <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
        {word}
    </motion.span>
)

const profilePhoto = "/images/me.avif"

/* ─────────────────────────────────────────────────────────────────────────── */

const Home = () => {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
    const heroOverlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.85])
    const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 60])
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

    const aboutRef = useRef(null)
    const { scrollYProgress: aboutProgress } = useScroll({ target: aboutRef, offset: ["start end", "end start"] })
    const aboutParallax = useTransform(aboutProgress, [0, 1], [30, -30])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault()
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="flex flex-col">
            {/* ════════════════════════════════════════════════════════════════
                1. HERO
            ════════════════════════════════════════════════════════════════ */}
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
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <PiInfinity className="text-brand-accent/70" size={36} />
                        </motion.div>
                    </motion.div>

                    {/* Staggered headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl text-white tracking-wide leading-tight mb-2"
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

                    {/* Animated underline */}
                    <motion.div
                        className="h-px bg-linear-to-r from-transparent via-brand-accent/60 to-transparent mx-auto mb-6"
                        initial={{ width: 0 }}
                        animate={{ width: 180 }}
                        transition={{ duration: 1, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
                    />

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
                        <a href="#contact" onClick={scrollToContact}>
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

            {/* ════════════════════════════════════════════════════════════════
                2. ABOUT THE PRACTICE
            ════════════════════════════════════════════════════════════════ */}
            <section ref={aboutRef} id="about" className="bg-cream dark:bg-dark-bg py-24 md:py-32 px-6 transition-colors duration-300">
                <motion.div className="max-w-3xl mx-auto text-center" style={{ y: aboutParallax }}>
                    <Reveal>
                        <SectionLabel>About the Practice</SectionLabel>
                    </Reveal>
                    <MaskedReveal delay={0.1}>
                        <SectionHeading>Infinite Pathways</SectionHeading>
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
                    {[
                        { icon: <PiHandHeart size={26} />, title: "Understand & Accept", body: "Know yourself, embrace yourself. Self-awareness is the first step toward lasting change." },
                        { icon: <PiLeaf size={26} />, title: "Grow", body: "Progress, transform, thrive. Every step forward — no matter how small — is a step worth taking." },
                        { icon: <PiSunHorizon size={26} />, title: "Empower Yourself", body: "Build confidence. Take control. You already have what you need to shape your path." },
                    ].map((v, i) => (
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

            {/* ════════════════════════════════════════════════════════════════
                3. ABOUT THE FOUNDER
            ════════════════════════════════════════════════════════════════ */}
            <section className="bg-cream-dark dark:bg-dark-surface py-24 md:py-32 px-6 transition-colors duration-300">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-10 md:gap-20 items-start">
                        {/* Portrait */}
                        <Reveal className="md:col-span-2 flex justify-center">
                            <div className="relative w-36 h-36 md:w-72 md:h-72 shrink-0">
                                <div className="w-full h-full rounded-full overflow-hidden bg-brand-primary/10 dark:bg-brand-primary/20 relative z-10">
                                    <motion.img
                                        src={profilePhoto}
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
                                    {[
                                        "Licensed Clinical Social Worker in Illinois and Indiana",
                                        "Master's Degree in Social Work",
                                        "Certificate in Veterinary Social Work and Trauma-Informed Care",
                                    ].map((cred, i) => (
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

            {/* ════════════════════════════════════════════════════════════════
                PULL QUOTE
            ════════════════════════════════════════════════════════════════ */}
            <section className="bg-cream dark:bg-dark-bg py-20 px-6 transition-colors duration-300">
                <div className="max-w-2xl mx-auto text-center">
                    <Reveal>
                        <PiQuotes className="text-brand-accent/25 mx-auto mb-4" size={32} />
                    </Reveal>
                    <blockquote className="text-2xl md:text-3xl font-pt-serif text-brand-deep/80 dark:text-cream/75 leading-snug italic">
                        {"Healing isn't linear, and your path doesn't have to look like anyone else's.".split(" ").map((word, i) => (
                            <MaskedReveal key={i} className="inline-block mr-[0.3em]" delay={i * 0.05}>
                                <span>{word}</span>
                            </MaskedReveal>
                        ))}
                    </blockquote>
                    <Reveal delay={0.5}>
                        <div className="flex items-center justify-center gap-3 mt-6">
                            <motion.div
                                className="h-px bg-brand-accent/30"
                                initial={{ width: 0 }}
                                whileInView={{ width: 24 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            />
                            <PiInfinity className="text-brand-accent/40" size={12} />
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

            {/* ════════════════════════════════════════════════════════════════
                4. CLINICAL SERVICES (3 services)
            ════════════════════════════════════════════════════════════════ */}
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
                        {[
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
                        ].map((s, i) => (
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

            {/* ════════════════════════════════════════════════════════════════
                5. PROFESSIONAL SERVICES (2 services)
            ════════════════════════════════════════════════════════════════ */}
            <section id="professional" className="bg-cream dark:bg-dark-bg py-24 md:py-32 px-6 transition-colors duration-300">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <Reveal><SectionLabel>Professional Services</SectionLabel></Reveal>
                        <MaskedReveal delay={0.1}>
                            <SectionHeading className="mb-4">Beyond the Therapy Room</SectionHeading>
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
                        {[
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
                        ].map((s, i) => (
                            <Reveal key={s.title} delay={i * 0.12}>
                                <motion.div
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
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════
                6. CTA BANNER
            ════════════════════════════════════════════════════════════════ */}
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
                            <PiInfinity className="text-brand-accent/60" size={32} />
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

                    <a href="#contact" onClick={scrollToContact}>
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

            {/* ════════════════════════════════════════════════════════════════
                7. CONTACT
            ════════════════════════════════════════════════════════════════ */}
            <section id="contact" className="bg-cream dark:bg-dark-bg py-24 md:py-32 px-6 transition-colors duration-300">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <Reveal><SectionLabel>Get Started</SectionLabel></Reveal>
                        <MaskedReveal delay={0.1}>
                            <SectionHeading className="mb-4">Step Into Your Journey</SectionHeading>
                        </MaskedReveal>
                        <InfinityDivider delay={0.15} />
                        <Reveal delay={0.2}>
                            <p className="text-brand-deep/60 dark:text-cream/50 max-w-md mx-auto">
                                Every path is unique. Start yours today with support and guidance.
                            </p>
                        </Reveal>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Form */}
                        <Reveal>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                {[
                                    { label: "Your name", type: "text", placeholder: "Jane Smith" },
                                    { label: "Email address", type: "email", placeholder: "jane@example.com" },
                                ].map((field, fi) => (
                                    <motion.div
                                        key={field.label}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + fi * 0.1, duration: 0.5 }}
                                    >
                                        <label className="block text-sm text-brand-deep/55 dark:text-cream/50 mb-2 tracking-wide">{field.label}</label>
                                        <input
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            className="w-full px-4 py-3 bg-warm-white dark:bg-dark-card border border-sage/80 dark:border-brand-accent/15 rounded-sm text-brand-deep dark:text-cream placeholder:text-brand-deep/25 dark:placeholder:text-cream/25 focus:outline-none focus:border-brand-accent/50 focus:shadow-[0_0_0_3px_rgba(168,131,88,0.08)] transition-all duration-300"
                                        />
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <label className="block text-sm text-brand-deep/55 dark:text-cream/50 mb-2 tracking-wide">How can I help?</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Share a bit about what brings you here..."
                                        className="w-full px-4 py-3 bg-warm-white dark:bg-dark-card border border-sage/80 dark:border-brand-accent/15 rounded-sm text-brand-deep dark:text-cream placeholder:text-brand-deep/25 dark:placeholder:text-cream/25 focus:outline-none focus:border-brand-accent/50 focus:shadow-[0_0_0_3px_rgba(168,131,88,0.08)] transition-all duration-300 resize-none"
                                    />
                                </motion.div>
                                <motion.button
                                    type="submit"
                                    className="relative w-full py-3.5 bg-brand-accent text-white text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-brand-secondary transition-colors duration-300 flex items-center justify-center gap-2 overflow-hidden group"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <PiInfinity size={14} className="relative" />
                                    <span className="relative">Send Message</span>
                                </motion.button>
                                <p className="text-xs text-brand-deep/35 dark:text-cream/30 text-center">
                                    Your information is confidential and secure.
                                </p>
                            </form>
                        </Reveal>

                        {/* Info */}
                        <Reveal delay={0.15}>
                            <div className="space-y-8">
                                {/* Contact details */}
                                {[
                                    { icon: <HiOutlineMail size={18} />, title: "Email", main: "Dscaife@myinfinitepathways.com", sub: "I typically respond within 24–48 hours" },
                                    { icon: <PiPhone size={18} />, title: "Phone", main: "(847) 859-9258", sub: "Call or text — I'm happy to connect" },
                                    { icon: <HiOutlineClock size={18} />, title: "Availability", main: "Weekdays & select evenings", sub: "Flexible scheduling to fit your life" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        className="flex gap-4 items-start group"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                    >
                                        <div className="mt-0.5 text-brand-accent shrink-0 w-8 h-8 rounded-full border border-brand-accent/20 flex items-center justify-center group-hover:bg-brand-accent/5 transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-pt-serif text-brand-deep dark:text-cream tracking-wide mb-1">{item.title}</h3>
                                            <p className="text-brand-deep/70 dark:text-cream/65">{item.main}</p>
                                            <p className="text-xs text-brand-deep/40 dark:text-cream/35 mt-1">{item.sub}</p>
                                        </div>
                                    </motion.div>
                                ))}



                                {/* What happens next */}
                                <div className="pt-6 border-t border-sage dark:border-brand-accent/15">
                                    <h3 className="text-sm font-pt-serif text-brand-deep dark:text-cream tracking-wide mb-6">What happens next?</h3>
                                    <div className="space-y-0">
                                        {[
                                            "I'll respond within 1–2 business days",
                                        ].map((step, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex gap-4 items-start"
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                                            >
                                                <p className="text-sm text-brand-deep/60 dark:text-cream/50 pt-1 pb-4">{step}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                {/* Social media */}
                                <motion.div
                                    className="pt-6 border-t border-sage dark:border-brand-accent/15"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    <h3 className="text-sm font-pt-serif text-brand-deep dark:text-cream tracking-wide mb-4">Connect with me</h3>
                                    <div className="flex gap-3">
                                        <a
                                            href="https://www.instagram.com/myinfinitepathways"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent hover:bg-brand-accent/10 transition-colors duration-300"
                                            aria-label="Instagram"
                                        >
                                            <PiInstagramLogo size={18} />
                                        </a>
                                        <a
                                            href="https://www.facebook.com/share/16ypXiy4cL/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent hover:bg-brand-accent/10 transition-colors duration-300"
                                            aria-label="Facebook"
                                        >
                                            <PiFacebookLogo size={18} />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════
                8. FOOTER
            ════════════════════════════════════════════════════════════════ */}
            <footer className="bg-brand-darkest py-16 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <div className="text-center">
                            <motion.div
                                className="flex justify-center mb-4"
                                animate={{ scale: [1, 1.06, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <PiInfinity className="text-brand-accent/50" size={20} />
                            </motion.div>
                            <p className="text-sm uppercase tracking-[0.3em] text-brand-accent/80 font-pt-serif mb-6">
                                Infinite Pathways
                            </p>

                            <div className="flex justify-center gap-6 mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                                {[
                                    { label: "Home", href: "#hero" },
                                    { label: "About", href: "#about" },
                                    { label: "Services", href: "#services" },
                                    { label: "Contact", href: "#contact" },
                                ].map(({ label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
                                        }}
                                        className="nav-link text-xs text-white/35 hover:text-white/60 transition-colors duration-300 tracking-wide"
                                    >
                                        {label}
                                    </a>
                                ))}
                            </div>

                            {/* Social icons */}
                            <div className="flex justify-center gap-3 mb-6">
                                <a
                                    href="https://www.instagram.com/myinfinitepathways"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-brand-accent hover:border-brand-accent/30 transition-colors duration-300"
                                    aria-label="Instagram"
                                >
                                    <PiInstagramLogo size={14} />
                                </a>
                                <a
                                    href="https://www.facebook.com/share/16ypXiy4cL/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-brand-accent hover:border-brand-accent/30 transition-colors duration-300"
                                    aria-label="Facebook"
                                >
                                    <PiFacebookLogo size={14} />
                                </a>
                            </div>

                            <motion.div
                                className="h-px bg-brand-accent/20 mx-auto mb-6"
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            />

                            <p className="text-xs text-white/30 mb-1">
                                Dscaife@myinfinitepathways.com &middot; (847) 859-9258
                            </p>
                            <p className="text-xs text-white/30 mb-4">
                                Licensed Clinical Social Worker &middot; Illinois &amp; Indiana
                            </p>
                            <p className="text-xs text-white/20">
                                &copy; {new Date().getFullYear()} Infinite Pathways. All rights reserved.
                            </p>
                        </div>
                    </Reveal>
                </div>

                {/* Back to top */}
                <motion.button
                    onClick={scrollToTop}
                    className="absolute right-6 bottom-6 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/30 hover:text-white/60 hover:border-white/30 transition-colors duration-300 cursor-pointer"
                    whileHover={{ y: -3 }}
                >
                    <PiArrowUp size={14} />
                </motion.button>
            </footer>
        </div>
    )
}

export default Home
