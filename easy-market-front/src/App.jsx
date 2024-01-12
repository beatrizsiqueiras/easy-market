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
import Sales from "./pages/Sales/Sales";
import NewSale from "./pages/NewSale/NewSale";
import Login from "./pages/Login/Login";
import { useAuthentication } from "./hooks/useAuthentication";

function App() {
    const [user, setUser] = useState(null);
    const { auth } = useAuthentication();
    const loadingUser = user === undefined;
    useEffect(() => {
        setUser(true);
    }, [auth]);

    if (loadingUser) {
        return <p>Carregando...</p>;
    }
    return (
        <div className='App' id='container'>
            <div id='content-wrap'>
                <BrowserRouter>
                    <NavbarComponent />
                    <Routes>
                        <Route
                            path='/'
                            element={user ? <Home /> : <Navigate to='/login' />}
                        ></Route>
                        <Route
                            path='/products'
                            element={
                                user ? <Products /> : <Navigate to='/login' />
                            }
                        ></Route>
                        <Route
                            path='/product/new'
                            element={
                                user ? <NewProduct /> : <Navigate to='/login' />
                            }
                        ></Route>
                        <Route
                            path='/categories'
                            element={
                                user ? <Categories /> : <Navigate to='/login' />
                            }
                        ></Route>
                        <Route
                            path='/category/new'
                            element={
                                user ? (
                                    <NewCategory />
                                ) : (
                                    <Navigate to='/login' />
                                )
                            }
                        ></Route>
                        <Route
                            path='/sales'
                            element={
                                user ? <Sales /> : <Navigate to='/login' />
                            }
                        ></Route>
                        <Route
                            path='/sale/new'
                            element={
                                user ? <NewSale /> : <Navigate to='/login' />
                            }
                        ></Route>

                        <Route
                            path='/login'
                            element={!user ? <Login /> : <Navigate to='/' />}
                        ></Route>
                    </Routes>

                    <Footer />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
