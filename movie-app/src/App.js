import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';

import SearchPage from './components/Pages/SearchPage';
import CartPage from './components/Pages/CartPage';
import CheckoutPage from './components/Pages/CheckoutPage';
import Navbar from './components/home/Navbar';
import Home from './components/Pages/Home';
import {NumOfItemsProvider} from "./components/context/NumOfItemsContext";


function App() {
    return (
        <NumOfItemsProvider>
        <Router>
            <div className="container px-0 bg-dark">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-11">
                        <div className="row">
                            <div className="row">
                                <div className="col-lg-7 col-xs-12"></div>
                                <div className="col-2">
                                    <h1 id="logo">
                                        <NavLink to="/">Movie Shop</NavLink>
                                    </h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-11">
                                    <Navbar />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-11">
                                <Routes>
                                    <Route path="/search/*" element={<SearchPage />} />
                                    <Route path="/cart" element={<CartPage />} />
                                    <Route path="/checkout" element={<CheckoutPage />} />
                                    <Route path="/" element={<Home />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
        </NumOfItemsProvider>
    );
}

export default App;
