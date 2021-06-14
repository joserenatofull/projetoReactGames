import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
//substitituir <a href='..'> por Link 

import './MenuPrincipal.css';

import TemaContext from '../contexts/TemaContext';

const MenuPrincipal = () => {

const tema = useContext(TemaContext);
//useContext para consumir TemaContext 


  return (
    <nav style={ {backgroundColor: tema.corFundoTema} }>

            <ul>
            <li>
                {/* componente Link */}
                <Link to='/lista-games'>Games</Link>
            </li>

            <li>
            <Link to='/lista-categorias'>Categorias</Link>
            </li>

            <li>
            <Link to='/novo-game'>Novo Game</Link>
            </li>


            </ul>
        </nav>
    )
}

export default MenuPrincipal;