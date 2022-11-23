import React from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";

import AuthService from "../services/auth.service";

export default function EditPassword() {
    let navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        AuthService.updatePassword(data)
        .then((data)=>{
            alert("Password update successfully");
            navigate('/');
        },
        error =>{
            alert(error.response.data.error);
        });
    };

    return (
        <div style={{ width: '100vw', height: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <form style={{ width: '50vw', height: '50vh' }} onSubmit={handleSubmit(onSubmit)} >
                <div className='p-1'>
                    <h1 className="h3 mb-3 fw-normal text-center">Alterar Senha</h1>
                </div>
                <div className='p-1'>
                    <div className="form-floating">
                        <input className="form-control" id="floatingInput" placeholder="Password" type="password"{...register("password",{required:true})} />
                        <label id="floatingInput">Password</label>
                    </div>
                </div>
                <div className='p-1'>
                    <div className="form-floating">
                        <input className="form-control" id="floatingInput" placeholder="ConfirmPassword" type="password" {...register("confirmPassword",{required:true})} />
                        <label id="floatingInput">ConfirmPassword</label>
                    </div>
                </div>
                <div className='p-3' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <button id="login-button" className="btn btn-lg btn-primary" type="submit">Alterar</button>
                    <Link to="/" className='m-3'>Cancelar</Link>
                </div>
            </form>
        </div>
    );
}