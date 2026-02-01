import type { ReactNode } from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"

interface AppLayoutProps {
    children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="relative min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}

export default AppLayout
