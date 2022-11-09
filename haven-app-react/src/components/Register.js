import React from "react";

const Register = (props) => {
    return (
        <div className="container d-flex justify-content-center">
            <div className="card mt-5 w-50">
                <div className="card-body">
                    <div className="d-flex justify-content-center"><h1>Cadastro</h1></div>
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="nickName">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nickName"
                                placeholder="Juninho" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="nickName">E-mail</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nickName"
                                placeholder="exemplo@gmail.com" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="nickName">Telefone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nickName"
                                placeholder="11400028922" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="nickName">Senha</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nickName"
                                placeholder="*******" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="nickName">Confirmar senha</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nickName"
                                placeholder="*******" />
                        </div>
                        <div className="d-flex justify-content-around">
                            <button type="submit" className="btn btn-primary" onClick={props.cadastrar}>Cadastrar</button>
                            <button type="submit" className="btn btn-link" onClick={props.irEntrar}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register