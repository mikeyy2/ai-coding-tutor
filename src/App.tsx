import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Level from "./Pages/Level";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level/:levelId" element={<Level />} />
      </Routes>
    </Router>
  );
};

export default App;
