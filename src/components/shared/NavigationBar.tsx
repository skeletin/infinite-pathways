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
        <header>
            {/* Scroll progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-brand-accent/70 origin-left z-50"
                style={{ scaleX: scrollYProgress }}
                aria-hidden="true"
            />


            {/* Nav — transparent over hero, sticky with blur after scrolling */}
            <motion.nav
                aria-label="Main navigation"
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
                <div className="flex items-center justify-center w-full mb-3 relative">
                    <div className="w-6 shrink-0" aria-hidden="true" />
                    <img
                        src="/images/infinite-pathways_brand-logo.svg"
                        alt="Infinite Pathways"
                        className="invert mx-auto h-5 md:h-[18px]"
                    />
                    <div className="shrink-0">
                        <DarkModeToggle />
                    </div>
                </div>

                <motion.div
                    className="h-px bg-linear-to-r from-transparent via-brand-accent/60 to-transparent mx-auto mb-6"
                    initial={{ width: 0 }}
                    animate={{ width: 180 }}
                    transition={{ duration: 1, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
                />

                {/* Nav links with animated underlines */}
                <div className="flex gap-5" >
                    {links.map(({ href, label }) => (
                        <a
                            key={label}
                            href={href}
                            onClick={(e) => handleScroll(e, href)}
                            className="nav-link text-[0.55rem] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300 md:text-sm"
                        >
                            {label}
                        </a>
                    ))}
                </div>

            </motion.nav>
        </header>
    )
}

export default NavigationBar
