import React, {useEffect, useState} from 'react';
import HavenService from "../services/haven.service";
import Card from './card.component';
import NavBar from "./nav-bar.component";
import HavenEdit from "./haven-edit.component";


export default function HavenMenu() {
    const [edit, setEdit] = useState();
    const [havens, setHavens] = useState([]);
    const [state, setState] = useState(false);

    useEffect(() => {
        HavenService.getUser().then(
            resp =>{
                console.log(resp)
                setHavens(resp.data);
                console.log(havens)
            },
            error => {
                alert(error.response.data.error)
            });
    }, [state]);

    const removerHaven = (id) => {
        console.log("id"+id)
        HavenService.delete(id).then(() => {
            setState(!state);
        },
        error => {
            alert(error.response.data.error)
        });
    }

    return (
        <>
        {edit ? 
        (<HavenEdit haven={edit} returnMenu={() => {setEdit(null); setState(!state);}}/>):(
            <>
                <NavBar/>        
                <div style={{display:'flex',  flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
                <br></br>
                <h1>Menu</h1>
                    {havens.map(x => 
                        <Card key={x.id} havens = {x} editable = {true} edit={() => {setEdit(x)}} remove = {(id) => removerHaven(id)}/>
                    )}
                </div>
            </>
        )}
        </>
    );
}
