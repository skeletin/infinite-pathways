import { render, screen } from "@testing-library/react"
import ContactSection from "../ContactSection"

/* Mock ContactForm to isolate ContactSection tests */
vi.mock("../ContactForm", () => ({
    default: () => <div data-testid="contact-form">Mock ContactForm</div>,
}))

describe("ContactSection", () => {
    it("renders the section label", () => {
        render(<ContactSection />)
        expect(screen.getByText("Get Started")).toBeInTheDocument()
    })

    it("renders the section heading", () => {
        render(<ContactSection />)
        expect(screen.getByRole("heading", { name: /step into your journey/i })).toBeInTheDocument()
    })

    it("renders the contact form", () => {
        render(<ContactSection />)
        expect(screen.getByTestId("contact-form")).toBeInTheDocument()
    })

    it("renders the email contact detail", () => {
        render(<ContactSection />)
        expect(screen.getByText("Dscaife@myinfinitepathways.com")).toBeInTheDocument()
    })

    it("renders the phone contact detail", () => {
        render(<ContactSection />)
        expect(screen.getByText("(847) 859-9258")).toBeInTheDocument()
    })

    it("renders the availability info", () => {
        render(<ContactSection />)
        expect(screen.getByText("Weekdays & select evenings")).toBeInTheDocument()
    })

    it("renders social media links", () => {
        render(<ContactSection />)
        const instagramLink = screen.getByLabelText("Instagram")
        const facebookLink = screen.getByLabelText("Facebook")

        expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com/myinfinitepathways")
        expect(facebookLink).toHaveAttribute("href", "https://www.facebook.com/share/16ypXiy4cL/")
    })

    it("renders 'what happens next' section", () => {
        render(<ContactSection />)
        expect(screen.getByText("What happens next?")).toBeInTheDocument()
        expect(screen.getByText(/I'll respond within 1–2 business days/)).toBeInTheDocument()
    })
})
