import { Outlet } from "react-router"
import NavigationBar from "../shared/NavigationBar"

const AppLayout = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <NavigationBar />
            <main className="relative">
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout
