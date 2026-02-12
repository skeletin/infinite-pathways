import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CtaBannerSection from "../CtaBannerSection"

describe("CtaBannerSection", () => {
    it("renders the heading", () => {
        render(<CtaBannerSection onScrollToContact={vi.fn()} />)
        expect(screen.getByRole("heading", { name: /step into your journey/i })).toBeInTheDocument()
    })

    it("renders the subline", () => {
        render(<CtaBannerSection onScrollToContact={vi.fn()} />)
        expect(screen.getByText(/every path is unique/i)).toBeInTheDocument()
    })

    it("renders the CTA button", () => {
        render(<CtaBannerSection onScrollToContact={vi.fn()} />)
        expect(screen.getByRole("button", { name: /contact me/i })).toBeInTheDocument()
    })

    it("calls onScrollToContact when CTA is clicked", async () => {
        const user = userEvent.setup()
        const onScrollToContact = vi.fn()
        render(<CtaBannerSection onScrollToContact={onScrollToContact} />)

        await user.click(screen.getByRole("button", { name: /contact me/i }))
        expect(onScrollToContact).toHaveBeenCalled()
    })
})
