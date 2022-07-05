import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LocationPage from "./pages/LocationPage";
import ContactPage from "./pages/ContactPage";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraphicDesign";

const Container = styled.main`
  max-width: 144rem;

  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/appdesign" element={<AppDesign />} />
        <Route path="/graphicdesign" element={<GraphicDesign />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
