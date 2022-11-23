import React, {useEffect, useState} from 'react';
import HavenService from "../services/haven.service";
import Card from './card.component';
import NavBar from "./nav-bar.component";


export default function Home() {

    const [havens, setHavens] = useState([]);

    useEffect(() => {
        HavenService.get().then(
            resp =>{
                console.log(resp)
                setHavens(resp.data.data);
                console.log(havens)
            },
            error => {
                alert(error.response.data.error)
            });
    }, []);

    return (
        <>
        <NavBar/>
        <div style={{display:'flex',  flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
            {havens.map(x => 
                <Card key={x.id} havens = {x} editable = {false}/>
            )}
        </div>
        </>
    );
}
