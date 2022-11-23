import React from 'react';
import { useForm } from "react-hook-form"
import AuthService from "../services/auth.service";
import { Link, useNavigate } from "react-router-dom";

export default function Login(){
    let navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        AuthService.login(data)
        .then(data =>{
            navigate("/")
            },
            error =>{
                alert(error.response.data.error)
            }
        )
    };

    return (
        <div style={{width:'100vw', height:'80vh', display:'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
            <form style={{width:'30vw', height:'30vh'}} onSubmit = { handleSubmit(onSubmit) } >
                <h1 className="h3 mb-3 fw-normal text-center">Login</h1>
                <div className="form-floating mb-2">
                    <input  className = "form-control" placeholder="Email" type="text"  {...register("email",{required:true}) } />
                    <label id="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-2">
                    <input className="form-control" id="floatingInput" placeholder="Password"  type="password"{...register("password", {required:true}) } />
                    <label id="floatingInput">Password</label>
                </div>                 
                <Link to="/register" className="text-end mb-2">Criar conta</Link>
                <button id="login-button" className="w-100 btn btn-lg btn-primary" type="submit">LOGIN</button>  
            </form>
        </div>
    );

};