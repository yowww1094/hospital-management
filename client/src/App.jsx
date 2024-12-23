import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Hospital from "./pages/Hospital"
import Doctors from "./pages/Doctors"
import Patient from "./pages/Patient"
import Settings from "./pages/Settings"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/hospital" element={<Hospital/>} />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/patients" element={<Patient/>} />
          <Route path="/settings" element={<Settings/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
