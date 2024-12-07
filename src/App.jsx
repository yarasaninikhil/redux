import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Render from "./components/Render";
import Home from "./components/Home";
import Register from "./components/Registration";
import Login from "./components/Login";
import AdminPage from "./components/AdminPage";
import CartPage from "./components/CartPage";
import Footer from "./components/Footer/Footer";
// import './components./style.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies/:id" element={<Render />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<AdminPage />} />
          <Route path="/cart" element={<CartPage />} /> {/* Corrected this line */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
