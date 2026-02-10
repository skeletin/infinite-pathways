import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { PiSun, PiMoon } from "react-icons/pi"

const DarkModeToggle = () => {
    const [dark, setDark] = useState(() => {
        if (typeof window !== "undefined") {
            return document.documentElement.classList.contains("dark")
        }
        return false
    })

    useEffect(() => {
        const root = document.documentElement
        if (dark) {
            root.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            root.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [dark])

    return (
        <button
            onClick={() => setDark(!dark)}
            className="w-6 h-6 rounded-full border border-white/15 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <AnimatePresence mode="wait" initial={false}>
                {dark ? (
                    <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.25 }}
                    >
                        <PiSun size={15} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.25 }}
                    >
                        <PiMoon size={15} />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    )
}

export default DarkModeToggle
