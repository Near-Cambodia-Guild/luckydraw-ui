import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Play } from "./components/Play";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Play />}></Route>
          <Route exact path="/play" element={<Play />}></Route>
          <Route exact path="*" element={<Play />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
