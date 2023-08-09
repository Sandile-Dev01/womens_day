import React from "react";
import { Route, Routes } from "react-router-dom";

//Importing the landing page and footer components
import Landing from "./pages/Landing";
import Footer from "./components/Footer";

//Importing the male and female components
import Male from "./pages/male/Male";
import Female from "./pages/female/Female";

//App component
const App = () => {
  return (
    <section className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Routes>
        <Route path="/male" element={<Male />} />
      </Routes>
      <Routes>
        <Route path="/female" element={<Female />} />
      </Routes>
      <Footer />
    </section>
  );
};

export default App;
