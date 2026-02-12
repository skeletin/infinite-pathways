import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router"
import NotFound from "../index"

const mockNavigate = vi.fn()

vi.mock("react-router", async () => {
    const actual = await vi.importActual("react-router")
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    }
})

beforeEach(() => {
    mockNavigate.mockReset()
})

describe("NotFound", () => {
    const renderNotFound = () =>
        render(
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>
        )

    it("renders the 404 characters", () => {
        renderNotFound()
        const chars = screen.getAllByText(/[04]/)
        expect(chars.length).toBeGreaterThanOrEqual(3)
    })

    it("renders the headline", () => {
        renderNotFound()
        expect(screen.getByRole("heading", { name: /this path doesn't exist yet/i })).toBeInTheDocument()
    })

    it("renders the subline", () => {
        renderNotFound()
        expect(screen.getByText(/every journey has unexpected turns/i)).toBeInTheDocument()
    })

    it("renders the Return Home button", () => {
        renderNotFound()
        expect(screen.getByRole("button", { name: /return home/i })).toBeInTheDocument()
    })

    it("navigates to home when Return Home is clicked", async () => {
        const user = userEvent.setup()
        renderNotFound()

        await user.click(screen.getByRole("button", { name: /return home/i }))
        expect(mockNavigate).toHaveBeenCalledWith("/")
    })
})
