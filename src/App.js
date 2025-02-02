// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import JuiceDiet from "./pages/JuiceDiet";
import IntermittentFasting from "./pages/IntermittentFasting";
import KetoDiet from "./pages/KetoDiet";
import LowCarpDiet from "./pages/LowCarpDiet";
import Navbar from "./components/Navbar";
import CalorieCalculator from "./pages/CalorieCalculator";
import InBodyUploader from "./pages/InBodyUploader";
import FeatureGrid from "./components/FeatureGrid";
import DietTypes from "./pages/DietTypes";
function App() {
  return (
    <Router>
      <div className="font-cairo bg-emerald-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/juice-diet" element={<JuiceDiet />} />
          <Route
            path="/intermittent-fasting"
            element={<IntermittentFasting />}
          />
          <Route path="/keto-diet" element={<KetoDiet />} />
          <Route path="/low-carp-diet" element={<LowCarpDiet />} />
          <Route path="/calorie-calculator" element={<CalorieCalculator />} />
          <Route path="/body-info" element={<InBodyUploader />} />
          <Route path="/feature-grid" element={<FeatureGrid />} />
          <Route path="/diet-types" element={<DietTypes />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
