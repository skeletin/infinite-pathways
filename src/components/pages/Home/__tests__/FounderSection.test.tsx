import { render, screen } from "@testing-library/react"
import FounderSection from "../FounderSection"

describe("FounderSection", () => {
    it("renders the section label", () => {
        render(<FounderSection />)
        expect(screen.getByText("Meet the Founder")).toBeInTheDocument()
    })

    it("renders the section heading", () => {
        render(<FounderSection />)
        expect(screen.getByRole("heading", { name: /my story/i })).toBeInTheDocument()
    })

    it("renders the founder portrait image", () => {
        render(<FounderSection />)
        const img = screen.getByAltText("Founder portrait")
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute("src", "/images/me.jpg")
    })

    it("renders the founder story paragraphs", () => {
        render(<FounderSection />)
        expect(screen.getByText(/I didn't come to this work by accident/i)).toBeInTheDocument()
        expect(screen.getByText(/Licensed Clinical Social Worker, I've walked alongside/i)).toBeInTheDocument()
    })

    it("renders all credentials", () => {
        render(<FounderSection />)
        expect(screen.getByText("Licensed Clinical Social Worker in Illinois and Indiana")).toBeInTheDocument()
        expect(screen.getByText("Master's Degree in Social Work")).toBeInTheDocument()
        expect(screen.getByText(/Certificate in Veterinary Social Work/i)).toBeInTheDocument()
    })
})
