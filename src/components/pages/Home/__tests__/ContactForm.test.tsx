import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ContactForm from "../ContactForm"

/* ─── Mock EmailJS ───────────────────────────────────────────────────── */
const mockSendForm = vi.fn()

vi.mock("@emailjs/browser", () => ({
    default: {
        sendForm: (...args: unknown[]) => mockSendForm(...args),
    },
}))

beforeEach(() => {
    mockSendForm.mockReset()
})

describe("ContactForm", () => {
    it("renders all form fields", () => {
        render(<ContactForm />)
        expect(screen.getByPlaceholderText("Jane Smith")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("jane@example.com")).toBeInTheDocument()
        expect(screen.getByText("Select a service...")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Share a bit about what brings you here...")).toBeInTheDocument()
    })

    it("renders the submit button", () => {
        render(<ContactForm />)
        expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument()
    })

    it("shows validation errors when submitting an empty form", async () => {
        const user = userEvent.setup()
        render(<ContactForm />)

        await user.click(screen.getByRole("button", { name: /send message/i }))

        expect(screen.getByText("Please enter your name.")).toBeInTheDocument()
        expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument()
        expect(screen.getByText("Please select a service type.")).toBeInTheDocument()
        expect(screen.getByText("Please share a brief message.")).toBeInTheDocument()
    })

    it("shows email validation error for invalid email", async () => {
        const user = userEvent.setup()
        render(<ContactForm />)

        await user.type(screen.getByPlaceholderText("jane@example.com"), "not-an-email")
        await user.click(screen.getByRole("button", { name: /send message/i }))

        expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument()
    })

    it("clears name error when user types", async () => {
        const user = userEvent.setup()
        render(<ContactForm />)

        // Trigger errors
        await user.click(screen.getByRole("button", { name: /send message/i }))
        expect(screen.getByText("Please enter your name.")).toBeInTheDocument()

        // Type in the name field to clear error
        await user.type(screen.getByPlaceholderText("Jane Smith"), "John")
        expect(screen.queryByText("Please enter your name.")).not.toBeInTheDocument()
    })

    it("clears email error when user types", async () => {
        const user = userEvent.setup()
        render(<ContactForm />)

        await user.click(screen.getByRole("button", { name: /send message/i }))
        expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument()

        await user.type(screen.getByPlaceholderText("jane@example.com"), "a")
        expect(screen.queryByText("Please enter a valid email address.")).not.toBeInTheDocument()
    })

    it("clears service type error when user selects an option", async () => {
        const user = userEvent.setup()
        render(<ContactForm />)

        await user.click(screen.getByRole("button", { name: /send message/i }))
        expect(screen.getByText("Please select a service type.")).toBeInTheDocument()

        await user.selectOptions(screen.getByRole("combobox"), "Clinical Services")
        expect(screen.queryByText("Please select a service type.")).not.toBeInTheDocument()
    })

    it("shows success message on successful submission", async () => {
        mockSendForm.mockResolvedValue({ status: 200, text: "OK" })
        const user = userEvent.setup()
        render(<ContactForm />)

        // Fill all fields
        await user.type(screen.getByPlaceholderText("Jane Smith"), "John Doe")
        await user.type(screen.getByPlaceholderText("jane@example.com"), "john@test.com")
        await user.selectOptions(screen.getByRole("combobox"), "Clinical Services")
        await user.type(screen.getByPlaceholderText("Share a bit about what brings you here..."), "Hello there")

        await user.click(screen.getByRole("button", { name: /send message/i }))

        await waitFor(() => {
            expect(screen.getByText("Thank you for reaching out!")).toBeInTheDocument()
        })
        expect(mockSendForm).toHaveBeenCalledTimes(1)
    })

    it("shows error message on failed submission", async () => {
        mockSendForm.mockRejectedValue(new Error("Network error"))
        const user = userEvent.setup()
        render(<ContactForm />)

        // Fill all fields
        await user.type(screen.getByPlaceholderText("Jane Smith"), "John Doe")
        await user.type(screen.getByPlaceholderText("jane@example.com"), "john@test.com")
        await user.selectOptions(screen.getByRole("combobox"), "Professional Services")
        await user.type(screen.getByPlaceholderText("Share a bit about what brings you here..."), "Need help")

        await user.click(screen.getByRole("button", { name: /send message/i }))

        await waitFor(() => {
            expect(screen.getByText("Something went wrong.")).toBeInTheDocument()
        })
    })

    it("does not call emailjs when validation fails", async () => {
        const user = userEvent.setup()
        render(<ContactForm />)

        await user.click(screen.getByRole("button", { name: /send message/i }))

        expect(mockSendForm).not.toHaveBeenCalled()
    })

    it("renders the confidentiality notice", () => {
        render(<ContactForm />)
        expect(screen.getByText("Your information is confidential and secure.")).toBeInTheDocument()
    })

    it("renders service type options", () => {
        render(<ContactForm />)
        expect(screen.getByText("Clinical Services")).toBeInTheDocument()
        expect(screen.getByText("Professional Services")).toBeInTheDocument()
    })
})
