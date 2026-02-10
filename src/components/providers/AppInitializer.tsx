import { motion } from "motion/react"
import { type ReactNode } from "react"


interface AppInitializerProps {
    children: ReactNode
}

const AppInitializer = ({ children }: AppInitializerProps) => {
    return (
        <>
            <motion.div className="h-full w-full">
                {children}
            </motion.div>
        </>
    )
}

export default AppInitializer