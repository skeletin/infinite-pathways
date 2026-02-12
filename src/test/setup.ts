import "@testing-library/jest-dom/vitest"

/* ─── Mock IntersectionObserver (used by motion's useInView / whileInView) */
class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | Document | null = null
    readonly rootMargin: string = ""
    readonly thresholds: ReadonlyArray<number> = []

    constructor(_callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {}

    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
    takeRecords = vi.fn().mockReturnValue([])
}

window.IntersectionObserver = MockIntersectionObserver

/* ─── Mock ResizeObserver ────────────────────────────────────────────── */
class MockResizeObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
}

window.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver

/* ─── Mock localStorage (jsdom's impl can be incomplete) ─────────────── */
const localStorageMock = (() => {
    let store: Record<string, string> = {}
    return {
        getItem: vi.fn((key: string) => store[key] ?? null),
        setItem: vi.fn((key: string, value: string) => { store[key] = value }),
        removeItem: vi.fn((key: string) => { delete store[key] }),
        clear: vi.fn(() => { store = {} }),
        get length() { return Object.keys(store).length },
        key: vi.fn((i: number) => Object.keys(store)[i] ?? null),
    }
})()
Object.defineProperty(window, "localStorage", { value: localStorageMock })

/* ─── Mock scroll methods ────────────────────────────────────────────── */
window.scrollTo = vi.fn() as unknown as typeof window.scrollTo
Element.prototype.scrollIntoView = vi.fn()

/* ─── Mock matchMedia ────────────────────────────────────────────────── */
Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
})
