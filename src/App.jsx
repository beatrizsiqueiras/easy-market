import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useState, useEffect } from "react";

import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Products from "./pages/Products/Products";
import NewProduct from "./pages/NewProduct/NewProduct";
import Categories from "./pages/Categories/Categories";
import NewCategory from "./pages/NewCategory/NewCategory";

function App() {
    return (
        <div className='App' id='container'>
            <div id='content-wrap'>
                <BrowserRouter>
                    <NavbarComponent />
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/products' element={<Products />}></Route>
                        <Route
                            path='/product/new'
                            element={<NewProduct />}
                        ></Route>
                        <Route
                            path='/categories'
                            element={<Categories />}
                        ></Route>
                        <Route
                            path='/category/new'
                            element={<NewCategory />}
                        ></Route>
                    </Routes>

                    <Footer />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
