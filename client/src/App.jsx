import { Routes, Route } from "react-router-dom"
import axios from "axios";
import About from "./views/AboutPage/About"
import Home from "./views/Home/Home";
import Landing from "./views/LandingPage/Landing";
import Detail from './components/Detail/Detail';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCharacters } from "./redux/actions";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllCharacters());
  // }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<Landing />} />
        <Route path="/welcome" element={<Landing />} />
        <Route path="/more" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
