import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";


import Login from "./login.component";
import Home from "./home.component";
import Register from "./register.component";
import EditUser from "./edit-user.component";
import Haven from "./haven.component";
import HavenMenu from "./haven-menu.component";
import EditPassword from "./edit-password.component";


export default function RoutesComponent () {
    return(
       <BrowserRouter>
           <Routes>
                <Route element= { <Login/> }  path="/login" />
                <Route element= { <Home/> }  path="/" />
                <Route element= { <Register/> }  path="/register" />
                <Route element= { <EditUser/> }  path="/edit/user" />
                <Route element= { <Haven/> }  path="/haven" />
                <Route element= { <HavenMenu /> }  path="/haven/menu" />
                <Route element= { <EditPassword /> }  path="/edit/password"/>
           </Routes>
       </BrowserRouter>
    );
}
