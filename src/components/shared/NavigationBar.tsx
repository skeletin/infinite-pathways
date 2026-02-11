import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import DarkModeToggle from "./DarkModeToggle"
import links from "../data/links"

const NavigationBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const { scrollYProgress, scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > window.innerHeight * 0.7)
    })


    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <>
            {/* Scroll progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-brand-accent/70 origin-left z-50"
                style={{ scaleX: scrollYProgress }}
            />


            {/* Nav — transparent over hero, sticky with blur after scrolling */}
            <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`
                    ${scrolled ? "fixed" : "absolute"}
                    top-0 left-0 right-0 z-40 flex flex-col items-center py-5 px-8
                    transition-all duration-500 ease-out
                    ${scrolled
                        ? "bg-brand-darkest/80 dark:bg-dark-bg/90 backdrop-blur-md shadow-[0_1px_0_rgba(168,131,88,0.1)]"
                        : ""
                    }
                `}
            >

                {/* Logo + dark mode toggle */}
                <div className="flex items-center gap-3 mb-3">
                    <motion.div
                        className="lora tracking-[0.3em] text-white"
                        animate={{ height: scrolled ? 18 : 24 }}
                        transition={{ duration: 0.3 }}
                    >
                        INFINITE PATHWAYS
                    </motion.div>
                </div>

                {/* Nav links with animated underlines */}
                <div className="flex gap-5" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {links.map(({ href, label }) => (
                        <a
                            key={label}
                            href={href}
                            onClick={(e) => handleScroll(e, href)}
                            className="nav-link text-[0.6rem] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300 md:text-sm"
                        >
                            {label}
                        </a>
                    ))}
                </div>

                <div className="absolute right-5 top-5"><DarkModeToggle /></div>
            </motion.nav>
        </>
    )
}

export default NavigationBar
