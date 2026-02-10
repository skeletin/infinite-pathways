import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./components/pages/Home"
import AppLayout from "./components/layouts/AppLayout"
import AppInitializer from "./components/providers/AppInitializer"

function App() {
  return (
    <AppInitializer>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </AppInitializer>
  )
}

export default App
