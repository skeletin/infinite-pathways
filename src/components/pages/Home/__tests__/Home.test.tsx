import { render, screen } from "@testing-library/react"
import { motionValue } from "motion"
import Home from "../index"

/* Mock motion scroll hooks so useScroll doesn't need hydrated refs */
vi.mock("motion/react", async () => {
    const actual = await vi.importActual("motion/react")
    return {
        ...actual,
        useScroll: () => ({ scrollYProgress: motionValue(0) }),
        useTransform: () => motionValue(0),
    }
})

/* Mock all section components to keep the integration test fast and isolated */
vi.mock("../HeroSection", () => ({
    default: () => <div data-testid="hero-section">HeroSection</div>,
}))
vi.mock("../AboutSection", () => ({
    default: () => <div data-testid="about-section">AboutSection</div>,
}))
vi.mock("../FounderSection", () => ({
    default: () => <div data-testid="founder-section">FounderSection</div>,
}))
vi.mock("../PullQuoteSection", () => ({
    default: () => <div data-testid="pullquote-section">PullQuoteSection</div>,
}))
vi.mock("../ClinicalServicesSection", () => ({
    default: () => <div data-testid="clinical-section">ClinicalServicesSection</div>,
}))
vi.mock("../ProfessionalServicesSection", () => ({
    default: () => <div data-testid="professional-section">ProfessionalServicesSection</div>,
}))
vi.mock("../CtaBannerSection", () => ({
    default: () => <div data-testid="cta-section">CtaBannerSection</div>,
}))
vi.mock("../ContactSection", () => ({
    default: () => <div data-testid="contact-section">ContactSection</div>,
}))
vi.mock("../FooterSection", () => ({
    default: () => <div data-testid="footer-section">FooterSection</div>,
}))

describe("Home", () => {
    it("renders all sections in order", () => {
        render(<Home />)

        expect(screen.getByTestId("hero-section")).toBeInTheDocument()
        expect(screen.getByTestId("about-section")).toBeInTheDocument()
        expect(screen.getByTestId("founder-section")).toBeInTheDocument()
        expect(screen.getByTestId("pullquote-section")).toBeInTheDocument()
        expect(screen.getByTestId("clinical-section")).toBeInTheDocument()
        expect(screen.getByTestId("professional-section")).toBeInTheDocument()
        expect(screen.getByTestId("cta-section")).toBeInTheDocument()
        expect(screen.getByTestId("contact-section")).toBeInTheDocument()
        expect(screen.getByTestId("footer-section")).toBeInTheDocument()
    })

    it("renders sections in the correct order", () => {
        const { container } = render(<Home />)
        const sections = container.querySelectorAll("[data-testid]")
        const order = Array.from(sections).map((el) => el.getAttribute("data-testid"))

        expect(order).toEqual([
            "hero-section",
            "about-section",
            "founder-section",
            "pullquote-section",
            "clinical-section",
            "professional-section",
            "cta-section",
            "contact-section",
            "footer-section",
        ])
    })
})
