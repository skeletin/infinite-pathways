import { Link } from "react-router"

const logo = "/images/infifnite-pathways-logo.svg"

const Footer = () => {
    return (
        <footer className="bg-[#3d4a28] text-white/90">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <img
                            src={logo}
                            alt="Infinite Pathways"
                            className="h-8 brightness-0 invert opacity-90"
                        />
                        <p className="text-white/70 text-sm leading-relaxed">
                            Healing without limits. Your journey is unique,
                            and so is the support you deserve.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-medium mb-4 text-[#c9d4a0]">Navigate</h4>
                        <div className="flex flex-col gap-2">
                            <Link to="/" className="text-white/70 hover:text-white transition-colors text-sm">
                                Home
                            </Link>
                            <Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                                About
                            </Link>
                            <Link to="/services" className="text-white/70 hover:text-white transition-colors text-sm">
                                Services
                            </Link>
                            <Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-medium mb-4 text-[#c9d4a0]">Get in Touch</h4>
                        <div className="space-y-2 text-sm text-white/70">
                            <p>Available for virtual sessions</p>
                            <p className="text-white/90">hello@infinitepathways.com</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
                    <p>&copy; {new Date().getFullYear()} Infinite Pathways Therapy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
