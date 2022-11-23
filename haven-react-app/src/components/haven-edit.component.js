import React, { useEffect, useMemo } from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";

import HavenService from "../services/haven.service";

export default function EditUser(props){

    let navigate = useNavigate();

    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (data) => {
        HavenService.update(data)
        .then(()=>{
            alert("Haven update with successfully");
            props.returnMenu();
        },
        error =>{
            alert(error.response.data.error);
        });
        
    };
    
    useEffect(() => {
        setValue("typeHouse", props.haven.typeHouse);
        setValue("description", props.haven.description);
        setValue("location", props.haven.location);
        setValue("typePeople", props.haven.typePeople);
        setValue("quantityPeople", props.haven.quantityPeople);
        setValue("id", props.haven.id);
    },[])

    return(
        <div style={{ width: '100vw', height: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <form style={{ width: '50vw', height: '50vh' }} onSubmit={handleSubmit(onSubmit)} >
                <div className='p-1'>
                    <h1 className="h3 mb-3 fw-normal text-center">Adicionar Haven</h1>
                </div>
                <div className='p-1'>
                    <div className="form-floating">
                        <input id="floatingInput" className="form-control" placeholder="Tipo da casa" type="text"  {...register("typeHouse",{required:true})} />
                        <label id="floatingInput">Tipo da casa</label>
                    </div>
                </div>
                <div className='p-1'>
                    <div className="form-floating">
                        <input id="floatingInput" className="form-control" placeholder="Localização" type="text"  {...register("location",{required:true})} />
                        <label id="floatingInput">Localização</label>
                    </div>
                </div>
                <div className='p-1'>
                    <div className="form-floating">
                        <input id="floatingInput" className="form-control" placeholder="Acolhe" type="text"  {...register("typePeople",{required:true})} />
                        <label id="floatingInput">Acolhe</label>
                    </div>
                </div>
                <div className='p-1'>
                    <div className="form-floating">
                        <input id="floatingInput" className="form-control" placeholder="Quantidade de pessoas" type="number"  {...register("quantityPeople",{required:true})} />
                        <label id="floatingInput">Quantidade de pessoas</label>
                    </div>
                </div>
                <div className='p-3' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <button id="login-button" className="btn btn-lg btn-primary" type="submit">Cadastrar</button>
                    <a onClick={()=> props.returnMenu()} className='m-3'>Cancelar</a>
                </div>
            </form>
        </div>
    );
}