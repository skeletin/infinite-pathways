import { render, screen } from "@testing-library/react"
import App from "../App"

/* Mock Home and NotFound to isolate routing logic */
vi.mock("../components/pages/Home", () => ({
    default: () => <div data-testid="home-page">Home</div>,
}))
vi.mock("../components/pages/NotFound", () => ({
    default: () => <div data-testid="not-found-page">NotFound</div>,
}))

describe("App", () => {
    it("renders without crashing", () => {
        render(<App />)
        expect(screen.getByTestId("home-page")).toBeInTheDocument()
    })
})
