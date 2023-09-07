import { Routes, Route } from "react-router-dom"
import axios from "axios";
import About from "./views/AboutPage/About"
import Home from "./views/Home/Home";
import Landing from "./views/LandingPage/Landing";
axios.defaults.baseURL = "http://localhost:3001/";
function App() {

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/welcome" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
