import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useState, useEffect } from "react";

import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Products from "./pages/Products/Products";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <NavbarComponent />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/products' element={<Products />}></Route>
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
