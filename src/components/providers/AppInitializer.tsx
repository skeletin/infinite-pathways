import { AnimatePresence, motion } from "motion/react"
import SplashScreen from "../features/SplashScreen"
import { useState, useEffect, type ReactNode } from "react"

interface AppInitializerProps {
    children: ReactNode
}

const AppInitializer = ({ children }: AppInitializerProps) => {
    const [showSplash, setShowSplash] = useState(true)

    useEffect(() => {
        // Hide splash screen after animations complete
        const timer = setTimeout(() => {
            setShowSplash(false)
        }, 3200) // 3.2s to let all animations play including tagline

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <AnimatePresence mode="wait">
                {showSplash && <SplashScreen key="splash" />}
            </AnimatePresence>

            {/* Main content fades in after splash */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showSplash ? 0 : 1 }}
                transition={{ duration: 0.5, delay: showSplash ? 0 : 0.2 }}
                className="h-full w-full"
            >
                {children}
            </motion.div>
        </>
    )
}

export default AppInitializer