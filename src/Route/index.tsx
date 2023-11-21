import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Cart from "../Pages/Cart";
import Erro from "../Pages/Erro";


const Rout = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cart />}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rout;
