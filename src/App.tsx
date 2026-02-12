import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound"
import AppLayout from "./components/layouts/AppLayout"

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter >

  )
}

export default App
