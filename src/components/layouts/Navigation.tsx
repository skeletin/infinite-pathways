import { useState } from "react"
import { Link, useLocation } from "react-router"
import { motion, AnimatePresence } from "motion/react"

const logo = "/images/infifnite-pathways-logo.svg"

const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ]

    const isActive = (path: string) => location.pathname === path

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-[#faf8f3]/90 backdrop-blur-md border-b border-[#e8e4d9]">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="Infinite Pathways" className="h-8" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative text-sm tracking-wide transition-colors duration-200 ${isActive(link.path)
                                    ? "text-[#687b0a] font-medium"
                                    : "text-[#545454] hover:text-[#687b0a]"
                                    }`}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#687b0a] rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 6 : 0 }}
                            className="w-6 h-0.5 bg-[#545454] block"
                        />
                        <motion.span
                            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                            className="w-6 h-0.5 bg-[#545454] block"
                        />
                        <motion.span
                            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -6 : 0 }}
                            className="w-6 h-0.5 bg-[#545454] block"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#faf8f3] border-t border-[#e8e4d9] overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-base py-2 transition-colors ${isActive(link.path)
                                        ? "text-[#687b0a] font-medium"
                                        : "text-[#545454]"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navigation
