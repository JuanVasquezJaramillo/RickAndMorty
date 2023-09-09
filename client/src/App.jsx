import { Routes, Route } from "react-router-dom"
import axios from "axios";
import About from "./views/AboutPage/About"
import Home from "./views/Home/Home";
import Landing from "./views/LandingPage/Landing";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCharacters } from "./Redux/actions";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllCharacters());
  // }, [])

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
