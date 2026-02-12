import { render, screen } from "@testing-library/react"
import ClinicalServicesSection from "../ClinicalServicesSection"

describe("ClinicalServicesSection", () => {
    it("renders the section label", () => {
        render(<ClinicalServicesSection />)
        expect(screen.getByText("Clinical Services")).toBeInTheDocument()
    })

    it("renders the section heading", () => {
        render(<ClinicalServicesSection />)
        expect(screen.getByRole("heading", { name: /therapeutic services/i })).toBeInTheDocument()
    })

    it("renders all three clinical services", () => {
        render(<ClinicalServicesSection />)
        expect(screen.getByText("Individual Therapy")).toBeInTheDocument()
        expect(screen.getByText("Grief & Loss Support")).toBeInTheDocument()
        expect(screen.getByText("Life Transitions")).toBeInTheDocument()
    })

    it("renders service descriptions", () => {
        render(<ClinicalServicesSection />)
        expect(screen.getByText(/personalized one-on-one sessions/i)).toBeInTheDocument()
        expect(screen.getByText(/compassionate guidance through the pain/i)).toBeInTheDocument()
        expect(screen.getByText(/support through change, uncertainty/i)).toBeInTheDocument()
    })

    it("renders service detail tags", () => {
        render(<ClinicalServicesSection />)
        expect(screen.getByText(/personalized · one-on-one/i)).toBeInTheDocument()
        expect(screen.getByText(/compassionate · healing-focused/i)).toBeInTheDocument()
        expect(screen.getByText(/change · growth · clarity/i)).toBeInTheDocument()
    })
})
