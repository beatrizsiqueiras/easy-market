import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavbarComponent from './components/Navbar/NavbarComponent';
import { AuthContext } from './context/AuthContext';
import Categories from './pages/Categories/Categories';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import NewCategory from './pages/NewCategory/NewCategory';
import NewOrder from './pages/NewOrder/NewOrder';
import NewProduct from './pages/NewProduct/NewProduct';
import Orders from './pages/Orders/Orders';
import Products from './pages/Products/Products';

function App() {
    const { signed } = useContext(AuthContext);

    return (
        <div className='App' id='container'>
            <div id='content-wrap'>
                <BrowserRouter>
                    <NavbarComponent />
                    <Routes>
                        <Route
                            path='/'
                            element={signed ? <Dashboard /> : <Navigate to='/login' />}
                        ></Route>
                        <Route
                            path='/products'
                            element={signed ? <Products /> : <Navigate to='/login' />}
                        ></Route>
                        <Route
                            path='/product/new'
                            element={signed ? <NewProduct /> : <Navigate to='/login' />}
                        ></Route>
                        <Route
                            path='/categories'
                            element={signed ? <Categories /> : <Navigate to='/login' />}
                        ></Route>
                        <Route
                            path='/category/new'
                            element={signed ? <NewCategory /> : <Navigate to='/login' />}
                        ></Route>
                        <Route
                            path='/orders'
                            element={signed ? <Orders /> : <Navigate to='/login' />}
                        ></Route>
                        <Route
                            path='/order/new'
                            element={signed ? <NewOrder /> : <Navigate to='/login' />}
                        ></Route>

                        <Route
                            path='/login'
                            element={!signed ? <Login /> : <Navigate to='/' />}
                        ></Route>
                    </Routes>

                    <Footer />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
