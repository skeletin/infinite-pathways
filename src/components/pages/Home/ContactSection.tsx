import { motion } from "motion/react"
import { PiInstagramLogo, PiFacebookLogo, PiPhone } from "react-icons/pi"
import { HiOutlineMail, HiOutlineClock } from "react-icons/hi"
import {
    Reveal,
    MaskedReveal,
    SectionLabel,
    SectionHeading,
    InfinityDivider,
} from "./shared"
import ContactForm from "./ContactForm"

/* ─── Data ───────────────────────────────────────────────────────────── */

interface ContactDetail {
    icon: React.ReactNode
    title: string
    main: string
    sub: string
}

const contactDetails: ContactDetail[] = [
    { icon: <HiOutlineMail size={18} />, title: "Email", main: "Dscaife@myinfinitepathways.com", sub: "I typically respond within 24–48 hours" },
    { icon: <PiPhone size={18} />, title: "Phone", main: "(847) 859-9258", sub: "Call or text — I'm happy to connect" },
    { icon: <HiOutlineClock size={18} />, title: "Availability", main: "Weekdays & select evenings", sub: "Flexible scheduling to fit your life" },
]

interface SocialLink {
    href: string
    icon: React.ReactNode
    label: string
}

const socialLinks: SocialLink[] = [
    {
        href: "https://www.instagram.com/myinfinitepathways",
        icon: <PiInstagramLogo size={18} />,
        label: "Instagram",
    },
    {
        href: "https://www.facebook.com/share/16ypXiy4cL/",
        icon: <PiFacebookLogo size={18} />,
        label: "Facebook",
    },
]

const nextSteps: string[] = [
    "I'll respond within 1–2 business days",
]

/* ─── Component ──────────────────────────────────────────────────────── */

const ContactSection = () => (
    <section id="contact" aria-labelledby="contact-heading" className="bg-cream dark:bg-dark-bg py-24 md:py-32 px-6 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <Reveal><SectionLabel>Get Started</SectionLabel></Reveal>
                <MaskedReveal delay={0.1}>
                    <SectionHeading id="contact-heading" className="mb-4">Step Into Your Journey</SectionHeading>
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
                    <ContactForm />
                </Reveal>

                {/* Info */}
                <Reveal delay={0.15}>
                    <div className="space-y-8">
                        {/* Contact details */}
                        <address className="not-italic space-y-8">
                            {contactDetails.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    className="flex gap-4 items-start group"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                >
                                    <div className="mt-0.5 text-brand-accent shrink-0 w-8 h-8 rounded-full border border-brand-accent/20 flex items-center justify-center group-hover:bg-brand-accent/5 transition-colors duration-300" aria-hidden="true">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-pt-serif text-brand-deep dark:text-cream tracking-wide mb-1">{item.title}</h3>
                                        <p className="text-brand-deep/70 dark:text-cream/65">{item.main}</p>
                                        <p className="text-xs text-brand-deep/40 dark:text-cream/35 mt-1">{item.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </address>

                        {/* What happens next */}
                        <div className="pt-6 border-t border-sage dark:border-brand-accent/15">
                            <h3 className="text-sm font-pt-serif text-brand-deep dark:text-cream tracking-wide mb-6">What happens next?</h3>
                            <div className="space-y-0">
                                {nextSteps.map((step, i) => (
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
                            <ul className="flex gap-3 list-none p-0 m-0">
                                {socialLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent hover:bg-brand-accent/10 transition-colors duration-300"
                                            aria-label={link.label}
                                        >
                                            {link.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
)

export default ContactSection
