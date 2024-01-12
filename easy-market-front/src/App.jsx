import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useState, useEffect } from "react";

import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Products from "./pages/Products/Products";
import NewProduct from "./pages/NewProduct/NewProduct";
import Categories from "./pages/Categories/Categories";
import NewCategory from "./pages/NewCategory/NewCategory";
import Order from "./pages/Order/Order";
import NewOrder from "./pages/NewOrder/NewOrder";
import Login from "./pages/Login/Login";
import { useAuthentication } from "./hooks/useAuthentication";

function App() {
    const [user, setUser] = useState("dd");
    const { auth } = useAuthentication();
    const loadingUser = user === false;

    // useEffect(() => {
    //     setUser(auth);
    //     console.log(user);
    // }, [auth]);

    if (loadingUser) {
        return <p>Carregando...</p>;
    }
    return (
        <div className='App' id='container'>
            <div id='content-wrap'>
                <AuthProvider value={{ user }}>
                    <BrowserRouter>
                        <NavbarComponent />
                        <Routes>
                            <Route
                                path='/'
                                element={
                                    user ? <Home /> : <Navigate to='/login' />
                                }
                            ></Route>
                            <Route
                                path='/products'
                                element={
                                    user ? (
                                        <Products />
                                    ) : (
                                        <Navigate to='/login' />
                                    )
                                }
                            ></Route>
                            <Route
                                path='/product/new'
                                element={
                                    user ? (
                                        <NewProduct />
                                    ) : (
                                        <Navigate to='/login' />
                                    )
                                }
                            ></Route>
                            <Route
                                path='/categories'
                                element={
                                    user ? (
                                        <Categories />
                                    ) : (
                                        <Navigate to='/login' />
                                    )
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
                                path='/order'
                                element={
                                    user ? <Order /> : <Navigate to='/login' />
                                }
                            ></Route>
                            <Route
                                path='/order/new'
                                element={
                                    user ? (
                                        <NewOrder />
                                    ) : (
                                        <Navigate to='/login' />
                                    )
                                }
                            ></Route>

                            <Route
                                path='/login'
                                element={
                                    !user ? <Login /> : <Navigate to='/' />
                                }
                            ></Route>
                        </Routes>

                        <Footer />
                    </BrowserRouter>
                </AuthProvider>
            </div>
        </div>
    );
}

export default App;
