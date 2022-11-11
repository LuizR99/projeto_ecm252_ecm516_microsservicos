import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home"
import Login from "./Login";
import Register from "./Register";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Login} path="/entrar" />
            <Route component={Register} path="/cadastrar" />
        </BrowserRouter>
    )
}

export default Routes;