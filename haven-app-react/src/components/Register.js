import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

export default class Register extends Component {
   state = {
      nome: '',
      email: '',
      tel: '',
      pass: '',
      confirmPass: ''
   }

   registrarUsuario(dadosUsuario) {
      axios.post("http://localhost:3000/api/user", dadosUsuario)
      .then(res => {
          console.log(res)
      })

   }

   cadastrar = (event) => {
      this.setState({
         nome: event.target.value,
         email: event.target.value,
         tel: event.target.value,
         pass: event.target.value,
         confirmPass: event.target.value
      })
      this.registrarUsuario(this.state)
   }

   render() {
      return (
         <div className="container d-flex justify-content-center" >
            <div className="card mt-5 w-50">
               <div className="card-body">
                  <div className="d-flex justify-content-center"><h1>Cadastro</h1></div>
                  <form>
                     <div className="form-group mb-3">
                        <label htmlFor="name">Nome</label>
                        <input
                           type="text"
                           className="form-control"
                           id="name"
                           placeholder="Juninho" 
                           value={this.state.name}
                           />
                     </div>
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
                        <label htmlFor="tel">Telefone</label>
                        <input
                           type="text"
                           className="form-control"
                           id="tel"
                           placeholder="11400028922" 
                           value={this.state.tel}
                           />
                     </div>
                     <div className="form-group mb-3">
                        <label htmlFor="pass">Senha</label>
                        <input
                           type="text"
                           className="form-control"
                           id="pass"
                           placeholder="*******" 
                           value={this.state.pass}
                           />
                     </div>
                     <div className="form-group mb-3">
                        <label htmlFor="cPass">Confirmar senha</label>
                        <input
                           type="text"
                           className="form-control"
                           id="cPass"
                           placeholder="*******" 
                           value={this.state.confirmPass}
                           />
                     </div>
                     <div className="d-flex justify-content-around">
                        <button type="submit" className="btn btn-primary" onClick={this.cadastrar}>Cadastrar</button>
                        <Link type="link" className="btn btn-link" to="/entrar">Cancelar</Link>
                     </div>
                  </form>
               </div>
            </div>
         </div>

      )
   }
}
