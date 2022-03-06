import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import './App.css';
import "./index.css";

const App = () => {

    return (
        <div className="App">
            <Router>
                <Navbar/>
                <br/>
                <br/>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}
export default App;
