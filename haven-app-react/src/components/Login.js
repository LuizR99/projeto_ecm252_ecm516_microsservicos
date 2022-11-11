import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
    state = {
        email: '',
        pass: '',
    }

    logarUsuario(login) {
        axios.post("http://localhost:5000/api/auth/login", login)
            .then(res => {
                console.log(res)
            })
    }

    entrar = (event) => {
        this.setState({
            email: event.target.value,
            pass: event.target.value
        })
        this.logarUsuario(this.state);
    }

    irCadastrar = () => {
        console.log("irCadastrar");
    }

    render(){
        return (
            <div className = "container d-flex justify-content-center" >
                <div className="card mt-5 w-50">
                    <div className="card-body">
                        <div className="d-flex justify-content-center"><h1>Login</h1></div>
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="exemplo@gmail.com"
                                    value={this.state.email}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="pass">Senha</label>
                                <input
                                    type="pass"
                                    className="form-control"
                                    id="pass"
                                    placeholder="*******" 
                                    value={this.state.pass}
                                    />
                            </div>
                            <div className="d-flex justify-content-around">
                                <button type="submit" className="btn btn-primary" onClick={this.entrar}>Entrar</button>
                                <Link type="link" className="btn btn-link" to="/cadastrar">Cadastrar-se</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}