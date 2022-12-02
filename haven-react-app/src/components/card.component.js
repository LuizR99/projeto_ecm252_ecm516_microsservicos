import React, {useState} from 'react';
import UserService from "../services/haven.service";
import userService from '../services/user.service';


export default function Card(props){
    const [showContact, setShowContact] = useState(false);
    const [contact, setContact] = useState(null);

    const getContact = (id) =>{

        if(showContact)
        {
            setShowContact(false);
            return;
        }

        if(contact !== null){
            setShowContact(true);
            return
        }

        userService.getUserById(id).then(
        resp =>{
            setContact(resp.data[0]);
            console.log(resp.data);
            setShowContact(true);
        }) ;
    }

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
                <hr></hr>
                <div>
                    <button onClick = {() => getContact(props.havens.idUser)} className="btn btn-outline-info m-1">Contato</button>
                    {props.editable ? 
                        (
                            <>
                            <button onClick= {()=> props.edit()} className="btn btn-outline-primary m-1">Editar</button>
                            <button onClick={()=>props.remove(props.havens.id)} className="btn btn-outline-danger m-1">Remover</button>
                            </>
                        ) : (<></>)
                    }
                </div>
                { showContact ? 
                    (
                        <>                
                        <div>
                            <ul>
                                <li>Nome:  {contact.name} </li>
                                <li>Telefone:  {contact.phoneNumber} </li>
                                <li>Email: {contact.email}</li> 
                            </ul>         
                        </div>
                        </>
                    ): (<></>)
                }
            </div>
        </div>
    );
}