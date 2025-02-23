import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/about" element={<About />}/>
      </Routes>

    </HashRouter>
  )
}

export default App