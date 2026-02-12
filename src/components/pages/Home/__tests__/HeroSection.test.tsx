import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { motionValue } from "motion"
import { createRef } from "react"
import HeroSection from "../HeroSection"

const defaultProps = () => ({
    heroRef: createRef<HTMLElement>(),
    heroScale: motionValue(1),
    heroOverlayOpacity: motionValue(0.6),
    heroTextY: motionValue(0),
    onScrollToContact: vi.fn(),
})

describe("HeroSection", () => {
    it("renders the headline words", () => {
        render(<HeroSection {...defaultProps()} />)
        expect(screen.getByText("Healing")).toBeInTheDocument()
        expect(screen.getByText("Without")).toBeInTheDocument()
        expect(screen.getByText("Limits")).toBeInTheDocument()
    })

    it("renders the subheadline", () => {
        render(<HeroSection {...defaultProps()} />)
        expect(screen.getByText("Your Journey. Your Path.")).toBeInTheDocument()
    })

    it("renders the CTA button", () => {
        render(<HeroSection {...defaultProps()} />)
        expect(screen.getByRole("button", { name: /schedule a session/i })).toBeInTheDocument()
    })

    it("calls onScrollToContact when CTA is clicked", async () => {
        const user = userEvent.setup()
        const props = defaultProps()
        render(<HeroSection {...props} />)

        await user.click(screen.getByRole("button", { name: /schedule a session/i }))
        expect(props.onScrollToContact).toHaveBeenCalled()
    })

    it("renders the scroll indicator", () => {
        render(<HeroSection {...defaultProps()} />)
        expect(screen.getByText("Scroll")).toBeInTheDocument()
    })

    it("renders the support subline", () => {
        render(<HeroSection {...defaultProps()} />)
        expect(screen.getByText(/support for life's challenges/i)).toBeInTheDocument()
    })
})
