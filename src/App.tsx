import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./components/pages/Home"
import AppLayout from "./components/layouts/AppLayout"

function App() {
  return (

    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>

  )
}

export default App
