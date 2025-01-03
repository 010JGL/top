import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Realisations from "./Realisations"; // Correct import for Realisations
import Navbar from "./Navbar"; // Correct import for Navbar
import "./App.css";
import SingleFamilyHome from "./SingleFamilyHome";
import MultiUnits from "./MultiUnits";
import Renovation from "./Renovation";
import Roofing from "./Roofing";
import RentPage from "./RentPage";
import Contact from "./Contact";
import Services from "./Services";
import ScrollUp from "./hooks/ScrollUp"; // Import ScrollToTop
import RoofingJobs from "./RoofingJobs";

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Include Navbar here */}
        <ScrollUp />{" "}
        {/* This will handle scrolling to the top on every route change */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/SingleFamilyHome" element={<SingleFamilyHome />} />
          <Route path="/MultiUnits" element={<MultiUnits />} />
          <Route path="/Renovation" element={<Renovation />} />
          <Route path="/Roofing" element={<Roofing />} />
          <Route path="/RentPage" element={<RentPage />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/RoofingJobs" element={<RoofingJobs />} />
        </Routes>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
