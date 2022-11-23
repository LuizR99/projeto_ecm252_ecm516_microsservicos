import React from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";

import UserService from "../services/user.service";

export default function Register() {
    let navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        UserService.register(data)
        .then((data)=>{
            alert("User registered successfully");
            navigate('/login');
        },
        error =>{
            alert(error.response.data.error);
        });
    };

    return (
        <div style={{ width: '100vw', height: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <form style={{ width: '50vw', height: '50vh' }} onSubmit={handleSubmit(onSubmit)} >
                <div className='p-1'>
                    <h1 className="h3 mb-3 fw-normal text-center">Register</h1>
                </div>
                <div className='p-1'>
                    <div className="form-floating">
                        <input id="floatingInput" className="form-control" placeholder="Name" type="text"  {...register("Name",{required:true})} />
                        <label id="floatingInput">Name</label>
                    </div>
                </div>
                <div className='p-1'>
                    <div className="form-floating">
                        <input id="floatingInput" className="form-control" placeholder="Email" type="text"  {...register("email",{required:true})} />
                        <label id="floatingInput">Email</label>
                    </div>
                </div>
                <div className='p-1'>
                    <div className="form-floating">
                        <input id="floatingInput" className="form-control" placeholder="PhoneNumber" type="tel"  {...register("phoneNumber",{required:true})} />
                        <label id="floatingInput">PhoneNumber</label>
                    </div>
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
                    <button id="login-button" className="btn btn-lg btn-primary" type="submit">CADASTRA</button>
                    <Link to="/" className='m-3'>Cancelar</Link>
                </div>
            </form>
        </div>
    );
}