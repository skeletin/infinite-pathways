import type { ReactNode } from "react"
import NavigationBar from "../shared/NavigationBar"

interface AppLayoutProps {
    children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <NavigationBar />
            <main className="relative">{children}</main>
        </div>
    )
}

export default AppLayout
