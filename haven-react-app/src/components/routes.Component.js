import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";


import Login from "./login.component";
import Home from "./home.component";
import Register from "./register.component";


export default function RoutesComponent () {
    return(
       <BrowserRouter>
           <Routes>
                <Route element= { <Login/> }  path="/login" />
                <Route element= { <Home/> }  path="/" />
                <Route element= { <Register/> }  path="/register" />
           </Routes>
       </BrowserRouter>
    );
}
