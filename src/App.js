import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Company from "./components/Company";
import Person from "./components/Person";
import Country from "./components/Country";
import CustomEntity from "./components/CustomEntity";
import Price from "./components/Price";
import AboutMe from "./components/AboutMe";

export default () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/person" element={<Person />} />
        <Route path="/country" element={<Country />} />
        <Route path="/custom-entity" element={<CustomEntity />} />
        <Route path="/price" element={<Price />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </Layout>
  </Router>
);
