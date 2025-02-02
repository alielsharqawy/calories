// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import JuiceDiet from "./pages/diet_type/JuiceDiet";
import IntermittentFasting from "./pages/diet_type/IntermittentFasting";
import KetoDiet from "./pages/diet_type/KetoDiet";
import LowCarpDiet from "./pages/diet_type/LowCarpDiet";
import Navbar from "./components/Navbar";
import CalorieCalculator from "./pages/CalorieCalculator";
import InBodyUploader from "./pages/InBodyUploader";
import FeatureGrid from "./components/FeatureGrid";
import DietTypes from "./pages/DietTypes";
import WeightGainDiet from "./pages/diet_type/WeightGainDiet";
function App() {
  return (
    <Router>
      <div className="font-cairo">
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
          <Route path="/gain-diet" element={<WeightGainDiet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
