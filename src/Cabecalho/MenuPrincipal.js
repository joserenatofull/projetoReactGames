import React, { useContext } from 'react';
import styled from 'styled-components';
import Burger from './Burguer';

//substitituir <a href='..'> por Link 
//Menu principal usa os Links, Pagina Inicial BrowserRouter

import './MenuPrincipal.css';

import TemaContext from '../contexts/TemaContext';
//importo o Contexto do Tema

const MenuPrincipal = () => {

const tema = useContext(TemaContext);
//useContext para consumir TemaContext
//tema é como uma var global, todos os comp enxergam 
 

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }

  }
`
  return (
    // Retorna o Menu com suas rotas
    // menu recebe props capaz de alterar cores de fundo
    //tema é capaz de acessar as chaves dos objetos em coresTemas
   
    <Nav className="menu">
      <div className="menu">
      
      </div>
      <Burger />
    </Nav>

    )

}

export default MenuPrincipal;