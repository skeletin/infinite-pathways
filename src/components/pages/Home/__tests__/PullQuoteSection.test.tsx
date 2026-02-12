import { render, screen } from "@testing-library/react"
import PullQuoteSection from "../PullQuoteSection"

describe("PullQuoteSection", () => {
    it("renders the quote text", () => {
        render(<PullQuoteSection />)
        // Quote is split into individual words with MaskedReveal, so check for key words
        expect(screen.getByText("Healing")).toBeInTheDocument()
        expect(screen.getByText("linear,")).toBeInTheDocument()
        expect(screen.getByText("else's.")).toBeInTheDocument()
    })

    it("renders a blockquote element", () => {
        const { container } = render(<PullQuoteSection />)
        expect(container.querySelector("blockquote")).toBeInTheDocument()
    })
})
