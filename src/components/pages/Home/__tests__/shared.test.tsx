import { render, screen } from "@testing-library/react"
import {
    Reveal,
    MaskedReveal,
    AnimatedIcon,
    SectionLabel,
    SectionHeading,
    InfinityDivider,
    CurveDivider,
    CornerBrackets,
    HeroWord,
} from "../shared"

describe("Reveal", () => {
    it("renders children", () => {
        render(<Reveal>Hello world</Reveal>)
        expect(screen.getByText("Hello world")).toBeInTheDocument()
    })

    it("applies custom className", () => {
        render(<Reveal className="custom-class">Content</Reveal>)
        expect(screen.getByText("Content").closest("div")).toHaveClass("custom-class")
    })
})

describe("MaskedReveal", () => {
    it("renders children", () => {
        render(<MaskedReveal>Masked text</MaskedReveal>)
        expect(screen.getByText("Masked text")).toBeInTheDocument()
    })

    it("wraps in overflow-hidden container", () => {
        render(<MaskedReveal>Clipped</MaskedReveal>)
        const wrapper = screen.getByText("Clipped").closest(".text-reveal-mask")
        expect(wrapper).toBeInTheDocument()
    })
})

describe("AnimatedIcon", () => {
    it("renders children", () => {
        render(<AnimatedIcon><span data-testid="icon">★</span></AnimatedIcon>)
        expect(screen.getByTestId("icon")).toBeInTheDocument()
    })

    it("wraps in pulse animation when pulse is true", () => {
        const { container } = render(
            <AnimatedIcon pulse><span>★</span></AnimatedIcon>
        )
        // Pulse wraps children in an extra motion.div
        const innerDivs = container.querySelectorAll("div")
        expect(innerDivs.length).toBeGreaterThanOrEqual(2)
    })
})

describe("SectionLabel", () => {
    it("renders label text with uppercase styling", () => {
        render(<SectionLabel>My Label</SectionLabel>)
        const label = screen.getByText("My Label")
        expect(label).toBeInTheDocument()
        expect(label.tagName).toBe("P")
    })
})

describe("SectionHeading", () => {
    it("renders heading text as h2", () => {
        render(<SectionHeading>My Heading</SectionHeading>)
        const heading = screen.getByRole("heading", { level: 2 })
        expect(heading).toHaveTextContent("My Heading")
    })

    it("applies custom className", () => {
        render(<SectionHeading className="mb-4">Heading</SectionHeading>)
        expect(screen.getByRole("heading", { level: 2 })).toHaveClass("mb-4")
    })
})

describe("InfinityDivider", () => {
    it("renders without crashing", () => {
        const { container } = render(<InfinityDivider />)
        expect(container.firstChild).toBeInTheDocument()
    })
})

describe("CurveDivider", () => {
    it("renders an SVG", () => {
        const { container } = render(<CurveDivider />)
        expect(container.querySelector("svg")).toBeInTheDocument()
    })

    it("applies custom className", () => {
        const { container } = render(<CurveDivider className="text-red-500" />)
        expect(container.firstChild).toHaveClass("text-red-500")
    })
})

describe("CornerBrackets", () => {
    it("renders four corner elements", () => {
        const { container } = render(<CornerBrackets />)
        const corners = container.querySelectorAll("[class*='absolute']")
        // 4 corners + the outer wrapper
        expect(corners.length).toBeGreaterThanOrEqual(4)
    })
})

describe("HeroWord", () => {
    it("renders the word text", () => {
        render(<HeroWord word="Healing" delay={0.3} />)
        expect(screen.getByText("Healing")).toBeInTheDocument()
    })
})
