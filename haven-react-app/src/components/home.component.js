import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import AuthService from "../services/auth.service";
import HavenService from "../services/haven.service";
import Card from './card.component';


export default function Home() {

    const [auth, setAuth] = useState(false);
    const [havens, setHavens] = useState([]);

    useEffect(()=>{
        const token= AuthService.getToken();
        if(token){
            setAuth(true);
        }        
    },[]);

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

    const logout = () => {
        AuthService.logout();
        setAuth(false);
    }

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </a>
    ));

    return (
        <>
        <nav className="border-bottom p-3" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="/" className="d-flex fs-3 text-dark text-decoration-none" style={{ height: "5vh" }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>
                &nbsp;HOME
            </a>
            { auth ? 
            (
                <Dropdown className="dropdown-toggle">
                <Dropdown.Toggle as={CustomToggle}>
                    <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg" alt="mdo" width="42" height="42" className="rounded-circle" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu text-small" >
                    <Dropdown.Item className="dropdown-item text-dark" href="/login">Editar Perfil</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item text-dark" href="#/action-2">Add Haven</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item text-dark" href="#/action-2">Editar Haven</Dropdown.Item>
                    <Dropdown.Item className="dropdown-item text-dark" href="#/action-2">Alterar senha</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="dropdown-item text-dark" onClick={() => logout()}>Logout</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            ):(
                <Link to="/login" className="btn btn-outline-primary">Login</Link>
            )}
        </nav>
        <div style={{display:'flex',  flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
            {havens.map(x => 
                <Card havens = {x} editable = {false}/>
            )}
        </div>
        </>
    );
}
