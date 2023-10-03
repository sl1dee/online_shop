import React from "react";
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";

function App() {

    return (
    <BrowserRouter>
        <Navbar/>
        <AppRouter/>
        {/*<Footer/>*/}
    </BrowserRouter>
  );
}

export default App;
