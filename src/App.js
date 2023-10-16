import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mediaads from "./components/Mediaads";
import TextMedia from "./components/TextMedia";
import Media from "./components/Media";
import Createads from "./components/Createads";
import DashBoard from "./components/DashBoard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/Createads" element={<Createads />} />
        <Route path="/mediaads" element={<Mediaads />} />
        <Route path="/textmedia" element={<TextMedia />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </Router>
  );
}

export default App;
