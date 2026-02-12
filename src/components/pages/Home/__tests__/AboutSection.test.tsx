import { render, screen } from "@testing-library/react"
import { motionValue } from "motion"
import { createRef } from "react"
import AboutSection from "../AboutSection"

const defaultProps = () => ({
    aboutRef: createRef<HTMLElement>(),
    aboutParallax: motionValue(0),
})

describe("AboutSection", () => {
    it("renders the section heading", () => {
        render(<AboutSection {...defaultProps()} />)
        expect(screen.getByRole("heading", { name: /infinite pathways/i })).toBeInTheDocument()
    })

    it("renders the section label", () => {
        render(<AboutSection {...defaultProps()} />)
        expect(screen.getByText("About the Practice")).toBeInTheDocument()
    })

    it("renders the practice description", () => {
        render(<AboutSection {...defaultProps()} />)
        expect(screen.getByText(/we help you find your path/i)).toBeInTheDocument()
    })

    it("renders all three core values", () => {
        render(<AboutSection {...defaultProps()} />)
        expect(screen.getByText("Understand & Accept")).toBeInTheDocument()
        expect(screen.getByText("Grow")).toBeInTheDocument()
        expect(screen.getByText("Empower Yourself")).toBeInTheDocument()
    })

    it("renders core value descriptions", () => {
        render(<AboutSection {...defaultProps()} />)
        expect(screen.getByText(/know yourself, embrace yourself/i)).toBeInTheDocument()
        expect(screen.getByText(/progress, transform, thrive/i)).toBeInTheDocument()
        expect(screen.getByText(/build confidence\. take control/i)).toBeInTheDocument()
    })
})
