import React from 'react';
import {Route, Routes} from "react-router-dom";
import Electronics from "../pages/Electronics";
import Home from "../pages/Home";
import Jewelery from "../pages/Jewelery";
import MensClothing from "../pages/MensClothing";
import WomensClothing from "../pages/WomensClothing";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/electronics" element={<Electronics/>}/>
            <Route path="/jewelery" element={<Jewelery/>}/>
            <Route path="/men's clothing" element={<MensClothing/>}/>
            <Route path="/women's clothing" element={<WomensClothing/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
};

export default AppRouter;