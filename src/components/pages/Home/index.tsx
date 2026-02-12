import { useScroll, useTransform } from "motion/react"
import { useRef } from "react"

import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import FounderSection from "./FounderSection"
import PullQuoteSection from "./PullQuoteSection"
import ClinicalServicesSection from "./ClinicalServicesSection"
import ProfessionalServicesSection from "./ProfessionalServicesSection"
import CtaBannerSection from "./CtaBannerSection"
import ContactSection from "./ContactSection"
import FooterSection from "./FooterSection"

/* ─── Home Page ──────────────────────────────────────────────────────── */

const Home = () => {
    /* Hero scroll-linked values */
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
    const heroOverlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.85])
    const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 60])
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

    /* About parallax */
    const aboutRef = useRef(null)
    const { scrollYProgress: aboutProgress } = useScroll({ target: aboutRef, offset: ["start end", "end start"] })
    const aboutParallax = useTransform(aboutProgress, [0, 1], [30, -30])

    /* Callbacks */
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault()
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="flex flex-col">
            <HeroSection
                heroRef={heroRef}
                heroScale={heroScale}
                heroOverlayOpacity={heroOverlayOpacity}
                heroTextY={heroTextY}
                onScrollToContact={scrollToContact}
            />
            <AboutSection
                aboutRef={aboutRef}
                aboutParallax={aboutParallax}
            />
            <FounderSection />
            <PullQuoteSection />
            <ClinicalServicesSection />
            <ProfessionalServicesSection />
            <CtaBannerSection onScrollToContact={scrollToContact} />
            <ContactSection />
            <FooterSection onScrollToTop={scrollToTop} />
        </div>
    )
}

export default Home
