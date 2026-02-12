import { motion } from "motion/react"
import { PiInfinity, PiArrowUp, PiInstagramLogo, PiFacebookLogo } from "react-icons/pi"
import { Reveal } from "./shared"
import skeletinLogo from "../../../../public/images/skeletin_black_logo.svg"

/* ─── Props ──────────────────────────────────────────────────────────── */

export interface FooterSectionProps {
    onScrollToTop: () => void
}

/* ─── Data ───────────────────────────────────────────────────────────── */

interface FooterNavLink {
    label: string
    href: string
}

const navLinks: FooterNavLink[] = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
]

interface FooterSocialLink {
    href: string
    icon: React.ReactNode
    label: string
}

const socialLinks: FooterSocialLink[] = [
    {
        href: "https://www.instagram.com/myinfinitepathways",
        icon: <PiInstagramLogo size={14} />,
        label: "Instagram",
    },
    {
        href: "https://www.facebook.com/share/16ypXiy4cL/",
        icon: <PiFacebookLogo size={14} />,
        label: "Facebook",
    },
]

/* ─── Component ──────────────────────────────────────────────────────── */

const FooterSection = ({ onScrollToTop }: FooterSectionProps) => (
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
                        {navLinks.map(({ label, href }) => (
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
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-brand-accent hover:border-brand-accent/30 transition-colors duration-300"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
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
                <div className="flex justify-center items-center gap-1 mt-8">
                    <p className="font-thin tracking-widest text-[0.6rem] text-white">POWERED BY</p>
                    <a href="https://skeletin.dev">
                        <img src={skeletinLogo} className="h-3.5 hover:invert hover:drop-shadow hover:drop-shadow-black transition duration-500" alt="Powered by SKELETIN" />
                    </a>
                </div>
            </Reveal>
        </div>

        {/* Back to top */}
        <motion.button
            onClick={onScrollToTop}
            className="absolute right-6 bottom-6 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/30 hover:text-white/60 hover:border-white/30 transition-colors duration-300 cursor-pointer"
            whileHover={{ y: -3 }}
        >
            <PiArrowUp size={14} />
        </motion.button>
    </footer>
)

export default FooterSection
