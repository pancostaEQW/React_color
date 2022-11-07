import React from "react";
import "./App.css";
import Content from "./Content";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./About";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Content />}></Route>
        </Routes>
        <Routes>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
