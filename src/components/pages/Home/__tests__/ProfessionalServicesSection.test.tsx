import { render, screen } from "@testing-library/react"
import ProfessionalServicesSection from "../ProfessionalServicesSection"

describe("ProfessionalServicesSection", () => {
    it("renders the section label", () => {
        render(<ProfessionalServicesSection />)
        expect(screen.getByText("Professional Services")).toBeInTheDocument()
    })

    it("renders the section heading", () => {
        render(<ProfessionalServicesSection />)
        expect(screen.getByRole("heading", { name: /beyond the therapy room/i })).toBeInTheDocument()
    })

    it("renders both professional services", () => {
        render(<ProfessionalServicesSection />)
        expect(screen.getByText("Workshops & Trainings")).toBeInTheDocument()
        expect(screen.getByText("Consultations")).toBeInTheDocument()
    })

    it("renders service numbers", () => {
        render(<ProfessionalServicesSection />)
        expect(screen.getByText("01")).toBeInTheDocument()
        expect(screen.getByText("02")).toBeInTheDocument()
    })

    it("renders service descriptions", () => {
        render(<ProfessionalServicesSection />)
        expect(screen.getByText(/interactive sessions designed to foster growth/i)).toBeInTheDocument()
        expect(screen.getByText(/strategic guidance for individuals or organizations/i)).toBeInTheDocument()
    })
})
