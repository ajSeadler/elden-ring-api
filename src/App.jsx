// App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MainContent from "./MainContent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<MainContent />} />
    </Routes>
  );
}

export default App;
