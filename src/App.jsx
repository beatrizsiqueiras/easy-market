import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar/>
                    <Routes>
                        <Route path='/' element=''></Route>
                    </Routes>
                

                
                {/* <Footer /> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
