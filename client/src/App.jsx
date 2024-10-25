import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Hospital from "./pages/Hospital"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/hospital" element={<Hospital/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
