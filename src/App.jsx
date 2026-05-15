import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Kontakt from "./pages/Kontakt";
import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <div style={{ marginTop: "120px", padding: "20px" }}>
        <h1>Bienvenida a ProyectoVelasReact 🕯️</h1>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
