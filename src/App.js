import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Weather from "./Weather";
import SignIn from "./SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
