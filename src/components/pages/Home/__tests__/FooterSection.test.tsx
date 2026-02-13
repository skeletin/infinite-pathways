import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import FooterSection from "../FooterSection"

describe("FooterSection", () => {
    it("renders the brand logo", () => {
        render(<FooterSection onScrollToTop={vi.fn()} />)
        expect(screen.getByAltText("Infinite Pathways")).toBeInTheDocument()
    })

    it("renders all navigation links", () => {
        render(<FooterSection onScrollToTop={vi.fn()} />)
        expect(screen.getByText("Home")).toBeInTheDocument()
        expect(screen.getByText("About")).toBeInTheDocument()
        expect(screen.getByText("Services")).toBeInTheDocument()
        expect(screen.getByText("Contact")).toBeInTheDocument()
    })

    it("renders social media links", () => {
        render(<FooterSection onScrollToTop={vi.fn()} />)
        expect(screen.getByLabelText("Instagram")).toHaveAttribute(
            "href",
            "https://www.instagram.com/myinfinitepathways"
        )
        expect(screen.getByLabelText("Facebook")).toHaveAttribute(
            "href",
            "https://www.facebook.com/share/16ypXiy4cL/"
        )
    })

    it("renders contact info", () => {
        render(<FooterSection onScrollToTop={vi.fn()} />)
        expect(screen.getByText(/Dscaife@myinfinitepathways\.com/)).toBeInTheDocument()
        expect(screen.getByText(/\(847\) 859-9258/)).toBeInTheDocument()
    })

    it("renders license info", () => {
        render(<FooterSection onScrollToTop={vi.fn()} />)
        expect(screen.getByText(/Licensed Clinical Social Worker/)).toBeInTheDocument()
    })

    it("renders the current year in copyright", () => {
        render(<FooterSection onScrollToTop={vi.fn()} />)
        const year = new Date().getFullYear().toString()
        expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
    })

    it("calls onScrollToTop when back-to-top button is clicked", async () => {
        const user = userEvent.setup()
        const onScrollToTop = vi.fn()
        render(<FooterSection onScrollToTop={onScrollToTop} />)

        // The back-to-top button is the last button in the footer
        const buttons = screen.getAllByRole("button")
        const backToTop = buttons[buttons.length - 1]
        await user.click(backToTop)

        expect(onScrollToTop).toHaveBeenCalledTimes(1)
    })

    it("renders nav links with correct hrefs", () => {
        render(<FooterSection onScrollToTop={vi.fn()} />)

        const aboutLink = screen.getByText("About")
        expect(aboutLink.closest("a")).toHaveAttribute("href", "#about")

        const servicesLink = screen.getByText("Services")
        expect(servicesLink.closest("a")).toHaveAttribute("href", "#services")
    })
})
