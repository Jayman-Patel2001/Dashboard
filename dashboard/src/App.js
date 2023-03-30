import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeCard from "./components/HomeCard";
import About from "./components/About";
import Report from "./components/Report";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeCard />} />
          <Route path="/about" element={<About />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
