import React from "react";
import NavbarComp from "./NavbarComp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComp from "./HomeComp";
import FeaturesComp from "./FeaturesComp";
import AboutComp from "./AboutComp";
import ContactComp from "./ContactComp";

function Webpage() {
  return (
    <div>
      <Router>
        <NavbarComp />
        <Routes>
          <Route exact path="/home" element={<HomeComp />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/features/:id" element={<FeaturesComp />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/about" element={<AboutComp />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<ContactComp />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/"></Route>
        </Routes>
      </Router>
      ;
    </div>
  );
}

export default Webpage;
