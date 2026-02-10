import type { ReactNode } from "react"
import NavigationBar from "../shared/NavigationBar"

interface AppLayoutProps {
    children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="relative min-h-screen w-full">
            {/* Fixed background image — hero and CTA sections overlay on top */}
            <div className="fixed inset-0 bg-[url('/images/infinite-pathways-bg.png')] bg-cover bg-center -z-10" />
            <NavigationBar />
            <main className="relative">{children}</main>
        </div>
    )
}

export default AppLayout
