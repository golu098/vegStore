import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
