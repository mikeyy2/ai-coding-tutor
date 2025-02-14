import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LevelPage from "./Pages/LevelPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level/:levelId" element={<LevelPage />} />
      </Routes>
    </Router>
  );
};

export default App;
