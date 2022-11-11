import React, { Component} from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Login from "./Login";
import Register from "./Register";


export default class App extends Component{

   render() {
      return (
         <div>
            <Routes>
               <Route index element={<Home />} />
               <Route path="entrar" element={<Login />} />
               <Route path="cadastrar" element={<Register />} />
            </Routes>
         </div>
      )
   }
}