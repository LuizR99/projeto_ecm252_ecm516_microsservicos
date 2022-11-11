import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/entrar">Entrar</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;