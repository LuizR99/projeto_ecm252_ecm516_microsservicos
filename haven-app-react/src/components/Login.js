import React, { Component } from "react";

export default class Login extends Component {
    state = {

    }

    entrar = () => {
        console.log("entrar");
        return null;
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
                                <label htmlFor="nickName">E-mail</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nickName"
                                    placeholder="exemplo@gmail.com" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="*******" />
                            </div>
                            <div className="d-flex justify-content-around">
                                <button type="submit" className="btn btn-primary" onClick={this.entrar}>Entrar</button>
                                <button type="submit" className="btn btn-link" onClick={this.irCadastrar}>Cadastrar-se</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}