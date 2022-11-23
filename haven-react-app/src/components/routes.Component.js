import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "./login.component";


export default function RoutesComponent () {
    return(
       <BrowserRouter>
           <Routes>
                <Route element= { <Login/> }  path="/" />
                <Route element= { <Login/> }  path="/" />
           </Routes>
       </BrowserRouter>
    );
}
