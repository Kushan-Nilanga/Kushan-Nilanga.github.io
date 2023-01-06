import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./components/navigation/navbar";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default App;
