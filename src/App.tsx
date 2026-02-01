import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Services from "./components/pages/Services"
import Contact from "./components/pages/Contact"
import AppLayout from "./components/layouts/AppLayout"
import AppInitializer from "./components/providers/AppInitializer"

function App() {
  return (
    <AppInitializer>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </AppInitializer>
  )
}

export default App
