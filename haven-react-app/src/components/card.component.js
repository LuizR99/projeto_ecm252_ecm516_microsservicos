import React, {useEffect, useState} from 'react';


export default function Card(props){
    return (
        <div className="card m-4" style={{width: "50rem"}}>
            <img className="card-img-top" src="http://plantasdecasas.com/wp-content/uploads/2016/11/309-plantas-de-casas-fachadas-front.jpg" alt="casa"/>
            <div className="card-body">
                <h6 className="card-text">Tipo de residencia: {props.havens.typeHouse}</h6>
                <h6 className="card-text">Localização: {props.havens.location}</h6>
                <h6 className="card-text">Acolhemos: {props.havens.typePeople}</h6>
                <h6 className="card-text">Quantidade de pessoas: {props.havens.quantityPeople}</h6>
                <hr></hr>
                <h5 className="card-title">Descrição:</h5>
                <p className="card-text">{props.havens.description}</p>
                <div>
                    <a href="#" className="btn btn-outline-info m-1">Contato</a>
                    {props.editable ? 
                        (
                            <>
                            <a href="#" className="btn btn-outline-primary m-1">Editar</a>
                            <a href="#" className="btn btn-outline-danger m-1">Remover</a>
                            </>
                        ) : (<></>)
                    }
                </div>
            </div>
        </div>
    );
}